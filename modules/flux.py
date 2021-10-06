import itertools
import math

import pandas as pd
import numpy as np
import numpy_financial as npf
import pyxirr
from typing import Dict, Union

import modules.distribution
from modules.units import Units
from modules.periodicity import Periodicity


class Flow(pd.Series):
    """
    A `Flow` is a pd Series of 'movements' of material (funds, energy, mass, etc) that occur at specified dates.
    Note: the flow.movements Series index is a pd.DatetimeIndex, and its values are floats.
    """

    def __init__(self,
                 data=None,
                 name: str = None,
                 *args,
                 units: Units.Type,
                 **kwargs,):
        super().__init__(data, *args, **kwargs)
        if name:
            self.name = name
        else:
            self.name = str(data.name)
        self.units = units

    def display(self):
        print('Name: ' + str(self.name))
        print('Units: ' + self.units.__doc__)
        print('Movements: ')
        print(self.to_markdown())

    @staticmethod
    def from_periods(periods: pd.PeriodIndex,
                     data: [float],
                     units: Units.Type,
                     name: str = None):
        """
        Returns a Flow where movement dates are defined by the end-dates of the specified periods
        """

        if periods.size != len(data):
            raise ValueError("Error: count of periods and data must match")
        dates = [pd.Timestamp(period.to_timestamp(how='end').date()) for period in periods]
        return Flow(data=data,
                    index=pd.Series(data=dates, name='dates'),
                    name=name,
                    dtype=float,
                    units=units)
        # return Flow(data=series, units=units)

    @staticmethod
    def from_dict(data: Dict[pd.Timestamp, float],
                  units: Units.Type,
                  name: str = None):
        dates = data.keys()
        return Flow(data=list(data.values()),
                    index=pd.Series(dates, name='dates'),
                    name=name,
                    dtype=float,
                    units=units)
        # return Flow(movements=series, units=units, name=name)

    @staticmethod
    def from_total(total: Union[float, modules.distribution.Distribution],
                   index: pd.PeriodIndex,
                   distribution: modules.distribution.Distribution,
                   units: Units.Type,
                   name: str = None):
        """
        Generate a Flow from a total amount, distributed over the period index
        according to a specified distribution curve.
        Also accepts a Distribution as a total amount input;
        which will be sampled in order to generate the Flow.

        :param name: The name of the Flow
        :param total: An amount (or Distribution to be sampled)
        :param index: A pd.PeriodIndex of dates
        :param distribution: A Distribution guiding how to distribute the amount over the index
        :param units: The Units of the Flow
        """

        if isinstance(total, float):
            total = total
        elif isinstance(total, modules.distribution.Distribution):
            total = total.sample(size=1)[0]

        if isinstance(distribution, modules.distribution.Uniform):
            movements = [total / index.size for i in range(index.size)]
            return Flow.from_periods(name=name, periods=index, data=movements, units=units)
        elif isinstance(distribution, modules.distribution.PERT):
            parameters = np.linspace(0, 1, num=(index.size + 1))
            movements = [(total * density) for density in distribution.interval_density(parameters)]
            return Flow.from_periods(name=name, periods=index, data=movements, units=units)
        else:
            raise NotImplementedError('Other types of distribution have not yet been implemented.')

    @staticmethod
    def from_initial(initial: Union[float, modules.distribution.Distribution],
                     index: pd.PeriodIndex,
                     distribution: modules.distribution.Distribution,
                     units: Units.Type,
                     name: str = None):
        """
        Generate a Flow from an initial amount, distributed over the period index
        according to the factor of the specified Distribution (where initial factor = 1).
        Also accepts a Distribution as an initial amount input;
        which will be sampled in order to generate the first amount.

        :param name: The name of the Flow
        :param initial: An amount (or Distribution to be sampled)
        :param index: A pd.PeriodIndex of dates
        :param distribution: A Distribution guiding how to distribute the amount over the index
        :param units: The Units of the Flow
        """

        if isinstance(initial, float):
            initial = initial
        elif isinstance(initial, modules.distribution.Distribution):
            total = initial.sample(size=1)[0]

        if isinstance(distribution, modules.distribution.Uniform):
            movements = [initial for i in range(len(index))]
            return Flow.from_periods(name=name, periods=index, data=movements, units=units)
        elif isinstance(distribution, modules.distribution.Exponential):
            movements = [initial * factor for factor in distribution.factor()]
            return Flow.from_periods(name=name, periods=index, data=movements, units=units)

    def invert(self):
        """
        Returns a Flow with movement values inverted (multiplied by -1)
        """
        return Flow(data=self.copy(deep=True).multiply(-1),
                    units=self.units,
                    name=str(self.name))

    def collapse(self):
        """
        Returns a Flow whose movements collapse (are summed) to the last period
        :return:
        """
        return modules.flux.Flow.from_dict(data={self.index[-1]: self.sum()},
                                           units=self.units,
                                           name=str(self.name))

    def pv(self,
           periodicity: Periodicity.Type,
           discount_rate: float,
           name: str = None):
        """
        Returns a Flow with values discounted to the present (i.e. before its first period) by a specified rate
        """
        resampled = self.resample(periodicity)
        frame = resampled.to_frame()
        frame.insert(0, 'index', range(resampled.index.size))
        frame['Discounted Flow'] = frame.apply(
            lambda movement: movement[self.name] / math.pow((1 + discount_rate), movement['index'] + 1), axis=1)
        if name is None:
            name = 'Discounted ' + str(self.name)
        return Flow(data=frame['Discounted Flow'],
                    units=self.units,
                    name=name)

    def xirr(self):
        return pyxirr.xirr(dates=[datetime.date() for datetime in list(self.index.array)],
                           amounts=self.to_list())

    def xnpv(self, rate: float):
        return pyxirr.xnpv(rate=rate,
                           dates=[datetime.date() for datetime in list(self.index.array)],
                           amounts=self.to_list())

    def resample(self, periodicity_type: Periodicity.Type, *args):
        """
        Returns a Flow with movements redistributed across specified frequency
        """

        resampled = super().resample(rule=periodicity_type.value).sum()
        return Flow(data=resampled,
                    units=self.units,
                    name=str(self.name))

    def periodicity(self):
        return self.index.freq

    def to_aggregation(self,
                       periodicity_type: Periodicity.Type,
                       name: str = None):
        return modules.flux.Aggregation(name=name if name is not None else self.name,
                                        aggregands=[self],
                                        periodicity_type=periodicity_type)


class Aggregation:
    """
    A `Aggregation` collects aggregand (constituent) Flows
    and resamples them with a specified periodicity.
    """

    def __init__(self,
                 name: str,
                 aggregands: [Flow],
                 periodicity_type: Periodicity.Type):

        # Name:
        self.name = name

        # Units:
        if all(flow.units == aggregands[0].units for flow in aggregands):
            self.units = aggregands[0].units
        else:
            raise Exception("Input Flows have dissimilar units. Cannot aggregate into Aggregation.")

        # Affluents:
        self._aggregands = aggregands
        """The set of input Flows that are aggregated in this Aggregation"""

        # Periodicity Type:
        self.periodicity_type = periodicity_type

        # Aggregation:
        aggregands_dates = list(
            itertools.chain.from_iterable(list(aggregand.index.array) for aggregand in self._aggregands))
        self.start_date = min(aggregands_dates)
        self.end_date = max(aggregands_dates)
        resampled_aggregands = [aggregand.resample(periodicity_type=self.periodicity_type) for aggregand in
                                self._aggregands]

        self.aggregation = pd.concat([resampled for resampled in resampled_aggregands], axis=1).fillna(0)
        """
        A pd DataFrame of the Aggregation's aggregand Flows resampled into the Aggregation's periodicity
        """

    @staticmethod
    def from_DataFrame(name: str,
                       data: pd.DataFrame,
                       units: Units.Type):
        aggregands = []
        for column in data.columns:
            series = data[column]
            aggregands.append(Flow(movements=series, units=units, name=series.name))
        return Aggregation(name=name,
                           aggregands=aggregands,
                           periodicity_type=Periodicity.from_value(data.index.freqstr))

    def display(self):
        print('Name: ' + self.name)
        print('Units: ' + self.units.__doc__)
        print('Flows: ')
        print(self.aggregation.to_markdown())

    def extract(self, flow_name: str):
        """
        Extract a Aggregation's resampled aggregand as a Flow
        :param flow_name:
        :return:
        """
        return Flow(
            movements=self.aggregation[flow_name],
            units=self.units,
            name=flow_name
            )

    def sum(self, name: str = None):
        """
        Returns a Flow whose movements are the sum of the Aggregation's aggregands by period
        :return: Flow
        """
        return modules.flux.Flow.from_periods(
            name=name if name is not None else self.name,
            periods=self.aggregation.index.to_period(),
            data=self.aggregation.sum(axis=1).to_list(),
            units=self.units)

    def collapse(self):
        """
        Returns a Aggregation with Flows' movements collapsed (summed) to the Aggregation's final period
        :return: Aggregation
        """
        aggregands = [self.extract(flow_name=flow_name) for flow_name in list(self.aggregation.columns)]
        return modules.flux.Aggregation(
            name=self.name,
            aggregands=[aggregand.collapse() for aggregand in aggregands],
            periodicity_type=self.periodicity_type)

    def append(self, aggregands: [Flow]):
        # Check Units:
        if any(flow.units != self.units for flow in aggregands):
            raise Exception("Input Flows have dissimilar units. Cannot aggregate into Aggregation.")

        # Append Affluents:
        self._aggregands.extend(aggregands)

        # Aggregation:
        aggregands_dates = list(
            itertools.chain.from_iterable(list(flow.index.array) for flow in self._aggregands))
        self.start_date = min(aggregands_dates)
        self.end_date = max(aggregands_dates)
        resampled_aggregands = [aggregand.resample(periodicity_type=self.periodicity_type) for aggregand in
                                self._aggregands]

        self.aggregation = pd.concat([resampled for resampled in resampled_aggregands], axis=1).fillna(0)

    def resample(self, periodicity_type: Periodicity.Type):
        return modules.flux.Aggregation(
            name=self.name,
            aggregands=self._aggregands,
            periodicity_type=periodicity_type)

    @classmethod
    def merge(cls,
              aggregations,
              name: str,
              periodicity_type: Periodicity.Type):
        # Check Units:
        if any(aggregation.units != aggregations[0].units for aggregation in aggregations):
            raise Exception("Input Aggregations have dissimilar units. Cannot merge into Aggregation.")

        # Aggregands:
        aggregands = [aggregand for aggregation in aggregations for aggregand in aggregation._aggregands]

        return Aggregation(
            name=name,
            aggregands=aggregands,
            periodicity_type=periodicity_type)
