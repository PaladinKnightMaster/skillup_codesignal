# Creating Lag Features for Time Series Prediction

## Lesson Overview
Hello! Today, we'll explore creating lag features for time series prediction using Tesla ($TSLA) stock data. Let's start by reviewing how to load the dataset and create basic features.

## Reviewing Dataset and Basic Feature Creation
First, let's load the dataset and create new features based on existing columns such as `High-Low` and `Price-Open`.

```Python
import pandas as pd
import datasets

# Loading the dataset (revision)
data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(data['train'])

# Creating basic features (revision)
tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# Displaying the DataFrame structure
print(tesla_df.head())
```
Here, we calculate `High-Low` (the difference between the highest and lowest price of the day) and `Price-Open` (the difference between the closing and opening price) to create new features.

## Introduction to Lag Features
**Lag features** are essential in time series prediction as they help capture temporal patterns in the data by generating new features from past values. Essentially, these features allow us to use past values to predict future ones.

For instance, predicting today's closing price of Tesla stock might depend on the previous day's closing price. Here, the previous day's closing price would be a lagged feature.

## Creating and Implementing Lag Features
Let's see how to create lag features using the `shift()` method in Pandas. We will add a new column, `Close_lag1`, to capture the previous day’s closing price.

```Python
# Creating a lag feature
tesla_df['Close_lag1'] = tesla_df['Close'].shift(1)

# Displaying a sample of the DataFrame with the lag feature
print(tesla_df[['Close', 'Close_lag1']].head())
```
The output of the above code will be:

```
      Close  Close_lag1
0  1.592667         NaN
1  1.588667    1.592667
2  1.464000    1.588667
3  1.280000    1.464000
4  1.074000    1.280000
```
This output shows how the `Close_lag1` column shifts the `Close` column values down by one row, making the first row's `Close_lag1` value NaN because there is no previous row to shift from.

By using `shift(1)`, we shift the closing price values down by one row, effectively capturing the previous day's closing price in a new column.

## Handling NaN Values Resulting from Lag Features
Introducing lag features usually results in NaN values since the first row doesn't have a previous day to refer to. Let's handle these NaN values by dropping them.

```Python
# Dropping NaN values
tesla_df.dropna(inplace=True)

# Verifying the removal of NaN values
print(tesla_df[['Close', 'Close_lag1']].head())
```

The output of the above code will be:

```
      Close  Close_lag1
1  1.588667    1.592667
2  1.464000    1.588667
3  1.280000    1.464000
4  1.074000    1.280000
5  1.053333    1.074000
```
This output verifies the effective removal of NaN values resulting from the creation of lag features, with the dataset now cleaned and ready for further processing. Dropping the NaN values ensures that our dataset is clean and ready for model training.

## Defining Features and Target Variables
Next, we'll define the features and target variables for our model. Our features will include `Close_lag1`, `High-Low`, `Price-Open`, and `Volume`. Our target variable will be the `Close` price.

```Python
# Defining features and the target
features = tesla_df[['Close_lag1', 'High-Low', 'Price-Open', 'Volume']].values
target = tesla_df['Close'].values

# Displaying features and target
print("Features (first 5 rows):\n", features[:5])
print("Target (first 5 rows):\n", target[:5])
```

The output of the above code will be:

```
Features (first 5 rows):
 [[ 1.592667e+00  4.746670e-01 -1.306660e-01  2.578065e+08]
 [ 1.588667e+00  3.766670e-01 -2.026670e-01  1.232820e+08]
 [ 1.464000e+00  2.926670e-01 -2.533330e-01  7.709700e+07]
 [ 1.280000e+00  2.780000e-01 -2.593330e-01  1.030035e+08]
 [ 1.074000e+00  1.100000e-01 -4.000000e-02  1.038255e+08]]
Target (first 5 rows):
 [1.588667 1.464    1.28     1.074    1.053333]
```
This output demonstrates the structured array format of features selected for the machine learning model training, including lag features and the immediate target values for the prediction. By defining these features and targets, we set up our dataset for machine learning models, enabling them to learn from past data to predict future stock prices.

## Lesson Summary
In this lesson, you've learned how to create and implement lag features in the **Tesla** ($TSLA) stock dataset. Lag features are crucial for capturing temporal dependencies in time series data, significantly improving model performance. You reviewed the dataset, created new features, introduced lag features, handled NaN values, and defined features and target variables.

Next, practice creating lag features with different shifting intervals and explore their impact on predictive performance. This will deepen your understanding and enhance your skills in time series forecasting. Happy coding!
