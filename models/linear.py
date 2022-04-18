try:
    import projection
    import periodicity
    from flux import Flow, Aggregation
    from phase import Phase
except:
    import modules.rangekeeper.distribution
    from modules.rangekeeper.flux import Flow, Aggregation
    from modules.rangekeeper.periodicity import periodicity
    from modules.rangekeeper.phase import Phase


# Base Model:
class Model:
    def __init__(
            self,
            params: dict):

        # Phasing:
        self.acquisition_phase = Phase.from_num_periods(
            name='Acquisition',
            start_date=params['start_date'],
            period_type=periodicity.Type.year,
            num_periods=1)

        self.operation_phase = Phase.from_num_periods(
            name='Operation',
            start_date=periodicity.date_offset(
                date=self.acquisition_phase.end_date,
                period_type=periodicity.Type.day,
                num_periods=1),
            period_type=periodicity.Type.year,
            num_periods=params['num_periods'])

        self.disposition_phase = Phase.from_num_periods(
            name='Disposition',
            start_date=periodicity.date_offset(
                date=self.acquisition_phase.start_date,
                period_type=periodicity.Type.year,
                num_periods=params['num_periods']),
            period_type=periodicity.Type.year,
            num_periods=1)

        self.projection_phase = Phase.from_num_periods(
            name='Projection',
            start_date=periodicity.date_offset(
                date=self.operation_phase.end_date,
                period_type=periodicity.Type.day,
                num_periods=1),
            period_type=periodicity.Type.year,
            num_periods=1)

        self.noi_calc_phase = Phase.merge(
            name='NOI Calculation Phase',
            phases=[self.operation_phase, self.projection_phase])

        # Factors:
        self.escalation = projection.Exponential(rate=params['growth_rate'])

        # Cashflows:
        # Potential Gross Income
        self.pgi = Flow.from_projection(
            name='Potential Gross Income',
            value=params['initial_pgi'],
            index=self.noi_calc_phase.to_index(period_type=params['period_type']),
            proj=self.escalation,
            units=params['units'])

        # Vacancy Allowance
        # This should be displayed as a row in a table with xxxx, xxx,....
        self.vacancy = Flow.from_periods(
            name='Vacancy Allowance',
            index=self.noi_calc_phase.to_index(period_type=params['period_type']),
            data=self.pgi.movements * params['vacancy_rate'],
            units=params['units']).invert()

        # Effective Gross Income:
        self.egi = Aggregation(
            name='Effective Gross Income',
            aggregands=[self.pgi, self.vacancy],
            period_type=params['period_type'])

        # Operating Expenses:
        self.opex = Flow.from_periods(
            name='Operating Expenses',
            index=self.noi_calc_phase.to_index(period_type=params['period_type']),
            data=self.pgi.movements * params['opex_pgi_ratio'],
            units=params['units']).invert()

        # Net Operating Income:
        self.noi = Aggregation(
            name='Net Operating Income',
            aggregands=[self.egi.sum('Effective Gross Income'), self.opex],
            period_type=params['period_type'])

        # Capital Expenses:
        self.capex = Flow.from_periods(
            name='Capital Expenditures',
            index=self.noi_calc_phase.to_index(period_type=params['period_type']),
            data=self.pgi.movements * params['capex_pgi_ratio'],
            units=params['units']).invert()

        # Net Cashflows:
        self.ncf = Aggregation(
            name='Net Cashflows',
            aggregands=[self.noi.sum(), self.capex],
            period_type=params['period_type'])

        # Disposition (Reversion):
        sale_value = self.ncf.sum().movements.tail(1).item() / params['cap_rate']
        self.disposition = Flow.from_periods(
            name='Disposition',
            index=self.disposition_phase.to_index(period_type=params['period_type']),
            data=[sale_value],
            units=params['units'])

        # Net Cash Flows with Disposition:
        self.ncf_disposition = self.ncf.duplicate().trim_to_phase(self.operation_phase)
        self.ncf_disposition.append(aggregands=[self.disposition])

        # Calculate the Present Value of the NCFs:
        self.pv_ncf = self.ncf.sum().pv(
            period_type=params['period_type'],
            discount_rate=params['discount_rate'])

        # Calculate the Present Value of Disposition CFs:
        self.pv_disposition = self.disposition.pv(
            period_type=params['period_type'],
            discount_rate=params['discount_rate'])

        self.pv_ncf_agg = Aggregation(
            name='Discounted Net Cashflows',
            aggregands=[self.pv_ncf, self.pv_disposition],
            period_type=params['period_type'])

        self.pv_sums = self.pv_ncf_agg.sum()
        self.pv_sums.movements = self.pv_sums.movements[:-1]

        self.acquisition = Flow.from_periods(
            index=self.acquisition_phase.to_index(periodicity.Type.year),
            data=[-abs(params['acquisition_price'])],
            units=params['units'],
            name='Acquisition Price')

        self.investment_cashflows = Aggregation(
            name='Investment Cashflows',
            aggregands=[self.ncf.sum(), self.disposition, self.acquisition],
            period_type=params['period_type'])

        self.investment_cashflows.aggregation = self.investment_cashflows.aggregation[:-1]

        # IRR is displayed in the right hand panel...
        self.irr = self.investment_cashflows.sum().xirr()
