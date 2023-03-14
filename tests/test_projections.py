import pytest
from pytest import approx
import pandas as pd

import rangekeeper as rk


# Pytests file.
# Note: gathers tests according to a naming convention.
# By default any file that is to contain tests must be named starting with 'test_',
# classes that hold tests must be named starting with 'Test',
# and any function in a file that should be treated as a test must also start with 'test_'.

class TestProjection:
    def test_rangeindex(self):
        index = rk.periodicity.period_index(
            include_start=pd.Timestamp(2000, 1, 1),
            period_type=rk.periodicity.Type.MONTH,
            bound=12)
        range_index = rk.periodicity.to_range_index(
            period_index=index,
            start_period=pd.Period(value='1999-01'),
            end_period=pd.Period(value='2010-01'))
        assert range_index.values[0] == 12
        assert range_index.values[-1] == 23

    def test_form(self):
        sequence = pd.RangeIndex(start=0, stop=10, step=1)
        straightline = rk.extrapolation.StraightLine(slope=1)
        straightline_factors = straightline.terms(sequence)
        assert len(straightline_factors) == 10
        assert straightline_factors[0] == 0
        assert straightline_factors[9] == 9

        recurring = rk.extrapolation.Recurring()
        recurring_factors = recurring.terms(sequence)
        assert recurring_factors[0] == 0
        assert recurring_factors[9] == 0

        compounding = rk.extrapolation.Compounding(rate=0.1)
        compounding_factors = compounding.terms(sequence)
        assert compounding_factors[0] == 1
        assert compounding_factors[9] == approx(2.357947691)

    def test_extrapolation(self):
        sequence = rk.periodicity.period_index(
            include_start=pd.Timestamp(2000, 1, 1),
            period_type=rk.periodicity.Type.MONTH,
            bound=12)

        generic = rk.projection.Projection(sequence=sequence)
        assert generic.bounds[0].year == 2000
        assert generic.bounds[1].month == 12

        extrapolation = rk.projection.Extrapolation(
            form=rk.extrapolation.StraightLine(slope=1),
            sequence=sequence)
        assert extrapolation.terms()[0] == 0
        assert extrapolation.terms()[9] == 9

        extrapolation_padding = rk.projection.Extrapolation(
            form=rk.extrapolation.Compounding(rate=0.05),
            sequence=sequence,
            bounds=(pd.Period(value='1999-01'), pd.Period(value='2003-01')),
            padding=(rk.projection.Padding.unitize, rk.projection.Padding.extend))

        factors = extrapolation_padding.terms()

        assert factors[0] == 1
        assert factors[-1] == approx(1.710339358)

    def test_distribution(self):
        sequence = rk.periodicity.period_index(
            include_start=pd.Timestamp(2000, 1, 1),
            period_type=rk.periodicity.Type.MONTH,
            bound=12)
        bounds = (pd.Period(value='1999-01'), pd.Period(value='2003-01'))

        uniform = rk.projection.Distribution(
            form=rk.distribution.PERT(),
            sequence=sequence,
            bounds=bounds)

        assert uniform.interval_density().sum() == 1
