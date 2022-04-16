from __future__ import annotations

import math
from typing import Union

import aenum
import dateutil.relativedelta
import pandas as pd


class Type(aenum.Enum):
    _init_ = 'value', '__doc__'

    year = 'A-DEC', 'Anchored on end of December'
    quarter = 'Q-DEC', 'Anchored on end of March, June, September, & December'
    month = 'M', 'Anchored on end-of-month'
    semimonth = 'SM', 'Twice-monthly periods anchored on mid-month and end-of-month dates'
    week = 'W', 'Anchored on Sundays'
    day = 'D', 'Daily'


def from_value(value: str):
    if value == 'A-DEC':
        return Type.year
    if value == 'Q-DEC':
        return Type.quarter
    if value == 'M':
        return Type.month
    if value == 'SM':
        return Type.semimonth
    if value == 'W':
        return Type.week
    if value == 'D':
        return Type.day


def include_date(
        date: pd.Timestamp,
        duration: Type) -> pd.Period:
    """
    Returns a pd.Period that encompasses the given date
    """

    return pd.Period(year=date.year, month=date.month, day=date.day, freq=duration.value)


def period_index(
        include_start: pd.Timestamp,
        period_type: Type,
        bound: Union[pd.Timestamp, int] = None) -> pd.PeriodIndex:
    """
    Returns a pd.PeriodIndex from a start date with periods of given duration.
    Either an end date, or number of periods must be given to bound the sequence.

    :param include_start: pd.Timestamp start date
    :param period_type: Period frequency
    :param bound: A terminating condition; either a pd.Timestamp end date or a (integer) number of periods
    """
    if isinstance(bound, pd.Timestamp):
        return pd.period_range(start=include_start,
                               end=bound,
                               freq=period_type.value,
                               name='periods')
    elif isinstance(bound, int):
        return pd.period_range(start=include_start,
                               periods=bound,
                               freq=period_type.value,
                               name='periods')


def to_datestamps(
        period_index: pd.PeriodIndex,
        end: bool = True) -> pd.DatetimeIndex:
    """
    Returns a pd.DatetimeIndex from a pd.PeriodIndex with Datetimes being Dates
    :param end:
    :param period_index:
    """
    if end:
        timestamps = period_index.to_timestamp(how='end')
    else:
        timestamps = period_index.to_timestamp(how='start')
    datestamps = timestamps.date
    return pd.DatetimeIndex(datestamps)


def periods_per_year(period_type: Type) -> int:
    return {
        Type.year: 1,
        Type.quarter: 4,
        Type.month: 12,
        Type.semimonth: 24,
        Type.week: 52,
        Type.day: 365
        }.get(period_type, None)


def date_offset(
        date: pd.Timestamp,
        period_type: Type,
        num_periods: int) -> pd.Timestamp:
    """
    Offsets a date by a given number of periods
    :param date:
    :type date:
    :param period_type:
    :type period_type:
    :param num_periods:
    :type num_periods:
    :return:
    :rtype:
    """
    if period_type is Type.year:
        return date + pd.DateOffset(years=num_periods)
    elif period_type is Type.quarter:
        return date + pd.DateOffset(months=3 * num_periods)
    elif period_type is Type.month:
        return date + pd.DateOffset(months=num_periods)
    elif period_type is Type.week:
        return date + pd.DateOffset(weeks=num_periods)
    elif period_type is Type.day:
        return date + pd.DateOffset(days=num_periods)


def duration(start_date: pd.Timestamp,
             end_date: pd.Timestamp,
             period_type: Type,
             inclusive: bool = False) -> int:
    """
    Returns the whole integer (i.e. no remainder)
    number of periods between given dates.
    If inclusive is True, the end_date is included in the calculation.
    """
    calc_end_date = end_date
    if inclusive:
        calc_end_date = date_offset(
            date=end_date,
            period_type=Type.day,
            num_periods=1)

    delta = dateutil.relativedelta.relativedelta(calc_end_date, start_date)

    if period_type is Type.year:
        return delta.years
    if period_type is Type.quarter:
        return (delta.years * 4) + math.floor(delta.months / 3)
    if period_type is Type.month:
        return (delta.years * 12) + delta.months
    if period_type is Type.semimonth:
        return (delta.years * 24) + delta.months * 2
    if period_type is Type.week:
        return math.floor((calc_end_date - start_date).days / 7)
    if period_type is Type.day:
        return (calc_end_date - start_date).days
