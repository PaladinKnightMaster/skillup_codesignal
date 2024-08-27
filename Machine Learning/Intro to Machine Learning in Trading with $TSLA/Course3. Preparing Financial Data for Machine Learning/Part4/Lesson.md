# Addressing Data Leakage in Time Series

## Lesson Overview
Welcome to today's lesson on addressing data leakage in time series data while preparing it for machine learning. In this lesson, you'll learn the importance of maintaining temporal order in your dataset splits to avoid forward-looking bias, which can misleadingly inflate your model's performance. We'll be using the Tesla ($TSLA) stock data as an example. By the end of this lesson, you'll understand how to partition your dataset correctly using `TimeSeriesSplit` from the `sklearn.model_selection` library.

## Introduction to Data Leakage in Time Series
**Data leakage** occurs when information from outside the training dataset inadvertently makes its way into the model. This is particularly problematic in time series data, where the natural temporal ordering is crucial. Data leakage can lead to overestimation of a model's performance because it allows information from the future to be used in making predictions about the past.

When dealing with stock market data, using future prices to predict past prices would artificially inflate a model's accuracy and yield unreliable predictions for actual trading strategies. Hence, it's important to ensure that our training and testing sets are separated in a way that respects the temporal nature of the data.

## Revisiting Feature Engineering and Scaling (Revision)
Let's quickly revise how to engineer features and scale them. These steps are foundational for preparing your data for machine learning models.

```Python
import pandas as pd
import datasets
from sklearn.preprocessing import StandardScaler

# Load the dataset
data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(data['train'])

# Feature Engineering: creating new features
tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# Defining features and target
features = tesla_df[['High-Low', 'Price-Open', 'Volume']].values
target = tesla_df['Close'].values

# Scaling
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)
```
In this snippet, we create two new features, `High-Low` and `Price-Open`, and scale these features using `StandardScaler`.

## Correctly Splitting Time Series Data
To avoid data leakage in time series, we need to split our data so that future data points are not used to predict past data points. `TimeSeriesSplit` from the `sklearn.model_selection` library helps achieve this.

The `TimeSeriesSplit` class helps you create train/test splits that respect the temporal order of your data. One of the key arguments in `TimeSeriesSplit` is `n_splits`, which specifies the number of re-shuffling and splitting iterations. Essentially, this determines how many different train/test splits will be generated from your data.

```Python
from sklearn.model_selection import TimeSeriesSplit

# Initiate TimeSeriesSplit
tscv = TimeSeriesSplit(n_splits=3)

# Splitting with TimeSeriesSplit
for fold, (train_index, test_index) in enumerate(tscv.split(features_scaled)):
    print(f"Fold {fold + 1}")
    print(f"TRAIN indices (first 5): {train_index[:5]}, TEST indices (first 5): {test_index[:5]}")

    # Splitting the features and target
    X_train, X_test = features_scaled[train_index], features_scaled[test_index]
    y_train, y_test = target[train_index], target[test_index]

    # Print a small sample of the data
    print(f"X_train sample:\n {X_train[:2]}")
    print(f"y_train sample:\n {y_train[:2]}")
    print(f"X_test sample:\n {X_test[:2]}")
    print(f"y_test sample:\n {y_test[:2]}")
    print("-" * 10)
```
To elaborate, `TimeSeriesSplit` generates indices for multiple train/test splits, where the training set for each split consists of all data points up to a specific point in time, and the test set includes the subsequent data points in time. This sequential process respects the chronological order of the data. As a result, no future data points are included in the training set of any fold, which effectively prevents data leakage. This method ensures that our model training and evaluation simulate real-world scenarios more accurately, thereby providing reliable performance metrics.

## Analyzing Fold Results
Let's analyze the output from each fold to ensure correct data splitting. The output of the above code will be:

```
Fold 1
TRAIN indices (first 5): [0 1 2 3 4], TEST indices (first 5): [839 840 841 842 843]
X_train sample:
 [[-0.48165383  0.08560547  2.29693712]
 [-0.48579183 -0.02912844  2.00292929]]
y_train sample:
 [1.592667 1.588667]
X_test sample:
 [[-0.4714307  -0.11890593  0.26304787]
 [-0.42092366  0.03234206  1.43036618]]
y_test sample:
 [10.857333 10.964667]
----------
Fold 2
TRAIN indices (first 5): [0 1 2 3 4], TEST indices (first 5): [1675 1676 1677 1678 1679]
X_train sample:
 [[-0.48165383  0.08560547  2.29693712]
 [-0.48579183 -0.02912844  2.00292929]]
y_train sample:
 [1.592667 1.588667]
X_test sample:
 [[-0.46169462 -0.13046308  1.57995793]
 [-0.47447336  0.07639316  0.32446706]]
y_test sample:
 [17.066    17.133333]
----------
Fold 3
TRAIN indices (first 5): [0 1 2 3 4], TEST indices (first 5): [2511 2512 2513 2514 2515]
X_train sample:
 [[-0.48165383  0.08560547  2.29693712]
 [-0.48579183 -0.02912844  2.00292929]]
y_train sample:
 [1.592667 1.588667]
X_test sample:
 [[-0.27268857 -0.19528365  0.41906266]
 [-0.34291165 -0.09059793 -0.01236106]]
y_test sample:
 [66.726669 66.288002]
----------
```
This output confirms the correct operation of `TimeSeriesSplit`, showing how each set of training and testing indices progresses through the data without overlap, respecting the temporal order. This ensures that no future data is used when training the model.

## Best Practices in Time Series Data Splitting
Summarizing the key points:

* **Always maintain temporal order when splitting time series data.**
* **Use `TimeSeriesSplit` to avoid data leakage.**
* **Verify the indices to ensure no future data is used in training.**
Adhering to these practices ensures the reliability of your model's performance metrics and the validity of your predictions for real-world scenarios.

## Lesson Summary
In this lesson, you learned the importance of avoiding data leakage in time series datasets by using `TimeSeriesSplit`. With this method, you can maintain the integrity of your machine learning models and ensure their predictions are trustworthy for real-world financial trading tasks. Practicing these concepts and techniques will solidify your understanding and prepare you for more advanced machine-learning challenges.
