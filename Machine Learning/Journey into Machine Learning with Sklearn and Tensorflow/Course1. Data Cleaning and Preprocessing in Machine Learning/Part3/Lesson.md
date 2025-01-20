# Outlier Detection and Handling in the Titanic Dataset

## Introduction

Our destination for today's learning journey is **Outlier Detection in Passenger Data**. We'll be delving into the vast pool of machine learning data preparation, with a special emphasis on the Titanic Dataset. So, why are we focusing on outliers?

So, outliers are data points that significantly deviate from the other data points in our dataset. They can drastically influence the outcomes of our data analysis and machine learning models, possibly leading to erroneous results. While exploring the Titanic Dataset, we may encounter outliers in variables such as extreme ages or abnormally high ticket prices.

In this lesson, we aim to introduce you to Python and the Pandas library's power, allowing you to detect and appropriately handle outliers lucidly. Our itinerary includes understanding the concept of outliers, learning various techniques for their detection, and then exploring strategies to handle them effectively.

The three common methods for outlier detection are:

- **Z-score**: Identifying data points with a Z-score greater than 3 as outliers.
- **IQR (Interquartile Range)**: Defining outliers as observations outside the range of \( Q_1 - 1.5 \cdot IQR \) and \( Q_3 + 1.5 \cdot IQR \).
- **Standard Deviation**: Categorizing data points more than three standard deviations from the mean as outliers.

## Outlier Detection Methods
Let's now understand these methods better and see how we can apply Z-score, IQR, and Standard Deviation for outlier detection:

**Z-score**: It describes a data point's relationship to the mean of a group of data points. Z-score is measured in terms of standard deviations from the mean. If a Z-score is `0.0`, it indicates that the data point's score is identical to the mean score. A Z-score of `1.0` represents a value that is one standard deviation from the mean. Z-scores may be positive or negative, with a positive value indicating the score is above the mean and a negative score indicating it is below the mean.

```Python
import numpy as np
data = titanic_df['fare']
mean = np.mean(data) # calculates the mean
std_dev = np.std(data) # calculates the standard deviation
Z_scores = (data - mean) / std_dev # computes the Z-scores
outliers = data[np.abs(Z_scores) > 3] # finds all the data points that are 3 standard deviations away from the mean
```

**IQR**: The interquartile range (**IQR**) is a measure of statistical dispersion or, in simpler terms, the range within which the central half of the data lies. IQR is calculated as \( Q_3 - Q_1 \), where \( Q_3 \) is the third quartile, and \( Q_1 \) is the first quartile.

```Python

Q1 = titanic_df['fare'].quantile(0.25) # calculates the first quartile
Q3 = titanic_df['fare'].quantile(0.75) # calculates the third quartile
IQR = Q3 - Q1 # computes the IQR

# Below, we find all the data points that fall below the lower bound or above the upper bound
outliers = titanic_df['fare'][
    (titanic_df['fare'] < (Q1 - 1.5 * IQR)) |
    (titanic_df['fare'] > (Q3 + 1.5 * IQR))
]
```

Standard Deviation: If a data point is more than three standard deviations away from the mean, it could be considered an outlier.

```Python
mean = np.mean(titanic_df['fare']) # calculates the mean
standard_deviation = np.std(titanic_df['fare']) # calculates the standard deviation
outliers = titanic_df['fare'][np.abs(titanic_df['fare'] - mean) > 3 * standard_deviation] # finds all the data points that are 3 standard deviations away from the mean
```

## Outlier Detection in Titanic Dataset
Having understood the techniques of outlier detection, we shall now apply them to the 'age' and 'fare' variables of the Titanic dataset to identify any potential outliers. These two attributes are continuous numerical variables that can often include potential outliers, primarily due to data entry errors or other outliers.

```Python
import pandas as pd
import numpy as np

# Outlier detection - 'Age'
mean_age = np.mean(titanic_df['age']) # calculates the mean
std_dev_age = np.std(titanic_df['age']) # calculates the standard deviation
Z_scores_age = (titanic_df['age'] - mean_age) / std_dev_age # computes the Z-scores
outliers_age = titanic_df['age'][np.abs(Z_scores_age) > 3] # finds all the data points that are 3 standard deviations away from the mean
print("Outliers in 'Age' using Z-score: \n", outliers_age)

# Outlier detection - 'Fare'
mean_fare = np.mean(titanic_df['fare']) # calculates the mean
std_dev_fare = np.std(titanic_df['fare']) # calculates the standard deviation
Z_scores_fare = (titanic_df['fare'] - mean_fare) / std_dev_fare # computes the Z-scores
outliers_fare = titanic_df['fare'][np.abs(Z_scores_fare) > 3] # finds all the data points that are 3 standard deviations away from the mean
print("\nOutliers in 'Fare' using Z-score: \n", outliers_fare)
```
The output of the above code will be:
```Markdown
Outliers in 'Age' using Z-score:
630    80.0
851    74.0
Name: age, dtype: float64

Outliers in 'Fare' using Z-score:
 27     263.0000
88     263.0000
118    247.5208
258    512.3292
299    247.5208
311    262.3750
341    263.0000
377    211.5000
380    227.5250
438    263.0000
527    221.7792
557    227.5250
679    512.3292
689    211.3375
700    227.5250
716    227.5250
730    211.3375
737    512.3292
742    262.3750
779    211.3375
Name: fare, dtype: float64
```

## Handling Outliers
After identifying outliers, we'll need to decide on the best strategy for handling them, such as:

1. **Dropping**: If the outlier does not add valuable information or is significantly skewing our data, one option to consider is dropping the outlier.
2. **Capping**: We could also consider replacing the outlier value with a certain maximum and/or minimum value.
3. **Transforming**: Techniques such as log transformations are especially effective when dealing with skewed data. This type of transformation can reduce the impact of the outliers.

Let's go ahead and cap the outliers for `'fare'` and `'age'` variables:

```Python
# Drop rows with missing 'age' values
titanic_df = titanic_df.dropna(subset=['age'])

# Calculate the upper bound for 'age'
Q1 = titanic_df['age'].quantile(0.25)
Q3 = titanic_df['age'].quantile(0.75)
IQR = Q3 - Q1
upper_bound = Q3 + 1.5 * IQR

# Cap the outliers for 'age'
titanic_df['age'] = np.where(titanic_df['age'] > upper_bound, upper_bound, titanic_df['age'])

# Calculate the upper bound for 'fare'
Q1 = titanic_df['fare'].quantile(0.25)
Q3 = titanic_df['fare'].quantile(0.75)
IQR = Q3 - Q1
upper_bound = Q3 + 1.5 * IQR

# Cap the outliers for 'fare'
titanic_df['fare'] = np.where(titanic_df['fare'] > upper_bound, upper_bound, titanic_df['fare'])
```

In this code, `np.where` is used to replace values in the `'age'` and `'fare'` columns of the `titanic_df` dataframe with the upper bound if they exceed it, effectively capping outliers at the upper bound.

There we go! Now that we have identified and suitably handled outliers in the Titanic dataset, we are one step closer to building a machine-learning model that predicts survival rates with high accuracy.

## Lesson Summary and Practice
Well done on completing this informative lesson on outlier detection! We've started by understanding what outliers are, why they matter, and how they can influence our Machine Learning model. We learned about three popular outlier detection methods - Z-score, IQR, and Standard Deviation and saw their implementation using the Titanic dataset.

The journey doesn't end here. The next stop on our course is Data Transformation for Passenger Features. Before that, let's take some time to reflect on what we've learned today and hone your skills with a few practice exercises. It's the best way to recapitulate today's learning and progress in our quest for data cleaning and preprocessing. Happy learning!
