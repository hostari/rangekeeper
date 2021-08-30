import enum
import scipy.stats as ss
import numpy as np


class DistributionType(enum.Enum):
    uniform = 1
    triangular = 2
    normal = 3
    log_uniform = 4
    beta = 5
    exponential = 6


class Distribution:
    pass


class Uniform(Distribution):
    """
    A continuous, uniform distribution between 0 and 1,
    such the cumulative distribution reaches 1. (For uniform distribution, this means the density is continuously 1).
    """

    def __init__(self):
        self.dist = ss.uniform(loc=0, scale=1)

    def interval_density(self, parameters: [float]):
        """
        Returns the cumulative density (integral of the distribution curve, or effectively probability)
        between n parameter pairs as intervals (i.e. returns n-1 results)

        :param parameters: Any set of floats between 0 and 1
        :return: List of floats representing the cumulative density of that interval.
        If the input parameters span 0 to 1, the sum of the interval densities will reach 1.
        """

        if (all(parameters) >= 0) & (all(parameters) <= 1):
            return [(self.dist.cdf(parameters[i + 1]) - self.dist.cdf(parameters[i]))
                    for i in (range(0, len(parameters) - 1))]
        else:
            raise ValueError("Error: Parameter must be between 0 and 1 inclusive")

    def cumulative_density(self, parameters: [float]):
        """
        Returns the cumulative distribution at parameters between 0 and 1.
        """
        if (all(parameters) >= 0) & (all(parameters) <= 1):
            return [self.dist.cdf(parameter) for parameter in parameters]
        else:
            raise ValueError("Error: Parameter must be between 0 and 1 inclusive")


class Exponential:
    """
    A continuous exponentially growing (or decaying) distribution between 0 and 1.
    To calculate the density at any point, the distribution is scaled such that the cumulative distribution reaches 1.
    To calculate the factor, the distribution is initialized with value 1.

    Requires inputs of rate of change per period and number of periods.
    """

    def __init__(self,
                 rate: float,
                 num_periods: int):
        self.rate = rate
        self.num_periods = num_periods

    def density(self, parameters: [float]):
        """
        Returns the value of the density function at a parameter between 0 and 1.
        The form of the function is k*(1+r)^((n-1)x),
        where k is a scaling constant that constrains the cumulative distribution to 1,
        r is the rate, n is the number of periods, and x the parameter.

        In this case, k = ((n - 1)*(1 + r)*log(1 + r))/((1 + r)^n - (1 + r)); see https://www.wolframalpha.com/input/?i=integrate+%28%28%28n+-+1%29*%281+%2B+r%29*log%281+%2B+r%29%29%2F%28%281+%2B+r%29%5En+-+%281+%2B+r%29%29%29*%281+%2B+r%29%5E%28%28n-1%29*x%29+dx+from+0+to+1
        """
        if (all(parameters) >= 0) & (all(parameters) <= 1):
            def f(parameter):
                k_num = (self.num_periods - 1) * (1 + self.rate) * np.log(1 + self.rate)
                k_denom = np.power((1 + self.rate), self.num_periods) - (1 + self.rate)
                k = np.divide(k_num, k_denom)
                return k * np.power((1 + self.rate), (self.num_periods - 1) * parameter)
                # return ((self.num_periods * math.log(1 + self.rate)) * math.pow((1 + self.rate), self.num_periods * parameter)) \
                #      / (math.pow((1 + self.rate), self.num_periods) - 1)

            return [f(parameter) for parameter in parameters]
        else:
            raise ValueError("Error: Parameter must be between 0 and 1 inclusive")

    def cumulative_density(self, parameters: [float]):  # #TODO: This is giving incorrect answers for low values of num_periods...
        """
        Returns the cumulative distribution at parameters between 0 and 1.

        See https://www.wolframalpha.com/input/?i=integrate+%28%28%28n+-+1%29*%281+%2B+r%29*log%281+%2B+r%29%29%2F%28%281+%2B+r%29%5En+-+%281+%2B+r%29%29%29+*+%28%281+%2B+r%29%5E%28%28n+-+1%29*x%29%29++dx
        """
        if (all(parameters) >= 0) & (all(parameters) <= 1):
            def f(parameter):
                num = np.power((1 + self.rate), (parameter * (self.num_periods - 1)) + 1)
                denom = np.power((1 + self.rate), self.num_periods) - self.rate - 1
                return np.divide(num, denom)

            return [f(parameter) for parameter in parameters]
        else:
            raise ValueError("Error: Parameter must be between 0 and 1 inclusive")

    def factor(self, parameters: [float]):
        """
        Returns the multiplicative factor of the distribution's initial value at the given parameters
        """
        if (all(parameters) >= 0) & (all(parameters) <= 1):
            return [np.power((1 + self.rate), (self.num_periods - 1) * parameter) for parameter in parameters]
        else:
            raise ValueError("Error: Parameter must be between 0 and 1 inclusive")


class PERT:
    """
    A continuous distribution that is controlled by the placement and weighting of the mode (peak) value.
    It produces similar distributions to the Normal (Gaussian) distribution within a specified domain.
    Its cumulative distribution function (CDF) curve is a classic 's-curve'.

    Peak must be between 0 and 1. Weighting must be >= 0. Standard weighting is 4.

    Specifically, it is a Beta Distribution extended to specified domain,
    with the mean (μ) constrained so that μ = (a + Ɣ*b + c) /  (Ɣ + 2),
    where a and c are the limits (0 and 1 in this formulation), b is the mode (peak value),
    and Ɣ is a weighting factor for the mode.

    This function is built from the formulation in Tensorflow:
    https://github.com/tensorflow/probability/blob/master/tensorflow_probability/python/distributions/pert.py
    """

    def __init__(self,
                 peak: float,
                 weighting: float = 4.0):
        self.peak = peak
        self.weighting = weighting
        if (self.weighting >= 0) & (self.peak >= 0) & (self.peak <= 1):
            a = (1. + self.weighting * (self.peak) / 1)
            b = (1. + self.weighting * (1 - self.peak) / 1)
            self.dist = ss.beta(loc=0, scale=1, a=a, b=b)
        else:
            raise ValueError("Error: Weighting must be greater than 0 and Peak must be between 0 and 1 inclusive")

    def interval_density(self, parameters: [float]):
        """
        Returns the cumulative density (integral of the distribution curve, or effectively probability)
        between n parameter pairs as intervals (i.e. returns n-1 results)

        :param parameters: Any set of floats between 0 and 1
        :return: List of floats representing the cumulative density of that interval.
        If the input parameters span 0 to 1, the sum of the interval densities will reach 1.
        """

        if (all(parameters) >= 0) & (all(parameters) <= 1):
            return [(self.dist.cdf(parameters[i + 1]) - self.dist.cdf(parameters[i]))
                    for i in (range(0, len(parameters) - 1))]
        else:
            raise ValueError("Error: Parameter must be between 0 and 1 inclusive")