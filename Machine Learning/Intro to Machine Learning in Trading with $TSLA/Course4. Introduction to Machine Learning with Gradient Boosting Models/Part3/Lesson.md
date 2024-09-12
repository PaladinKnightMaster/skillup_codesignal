# Hyperparameter Tuning Using GridSearchCV

## Lesson Overview
Welcome to today's lesson on **Hyperparameter Tuning Using GridSearchCV!** Our goal is to optimize a Gradient Boosting model to predict Tesla (`$TSLA`) stock prices more accurately. This lesson will guide you through the process of hyperparameter tuning using `GridSearchCV`, focusing on understanding key hyperparameters, setting up a hyperparameter grid, and implementing `GridSearchCV` to find the better model parameters.

## Brief Revision of Loading and Preparing the Dataset
Before diving into hyperparameter tuning, let's quickly revise how we load and prepare our dataset. We start by loading the Tesla dataset, adding technical indicators, and splitting the data into training and testing sets.

Here's a quick overview of the code:

```Python
import pandas as pd
from datasets import load_dataset

# Load dataset
tesla = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla['train'])

# Feature Engineering
tesla_df['SMA_5'] = tesla_df['Adj Close'].rolling(window=5).mean()
tesla_df['SMA_10'] = tesla_df['Adj Close'].rolling(window=10).mean()
tesla_df['EMA_5'] = tesla_df['Adj Close'].ewm(span=5, adjust=False).mean()
tesla_df['EMA_10'] = tesla_df['Adj Close'].ewm(span=10, adjust=False).mean()

# Drop NaN values created by moving averages
tesla_df.dropna(inplace=True)

# Select features and target
features = tesla_df[['Open', 'High', 'Low', 'Close', 'Volume', 'SMA_5', 'SMA_10', 'EMA_5', 'EMA_10']].values
target = tesla_df['Adj Close'].shift(-1).dropna().values  # Predicting next day's close price
features = features[:-1] # Align features and target arrays correctly for time series forecasting

# Splitting the dataset into training and testing sets
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.25, random_state=42)
```
The code above loads the Tesla historic prices dataset, applies feature engineering to add technical indicators like Simple Moving Averages (SMA) and Exponential Moving Averages (EMA), and preprocesses the dataset by removing NaN values. It then selects relevant features and the target variables, preparing the data for training and testing by splitting it into training and testing sets. The line `target = tesla_df['Adj Close'].shift(-1).dropna().values` is used for predicting the next day's closing price. The line `features = features[:-1]` ensures that the features and target arrays are aligned correctly for a time series forecasting task where you want to predict the next day's closing price.

## Introduction to Hyperparameter Tuning
Hyperparameters are configuration settings used to tune how our models learn. Examples include `learning_rate`, `n_estimators`, and `max_depth` in Gradient Boosting. Proper hyperparameter tuning can significantly improve model performance.

Imagine you're trying to make the perfect soup. Hyperparameter tuning is like adjusting the seasoning to get the best flavor. Just like too much salt or too little pepper can ruin the dish, poor hyperparameters can underperform our model.

The downside of this approach however is that it takes much more time, as every combination of hyperparameters is being tested.

## Setting up a Hyperparameter Grid
To find the best hyperparameters, we'll need to test various combinations. This is where the hyperparameter grid comes in. We define a set of values to test for each hyperparameter.

Here are the key hyperparameters we'll tune:

* `learning_rate`: This controls the contribution of each tree to the final prediction. A smaller learning rate means the model learns more slowly but can achieve better performance with proper tuning.
* `n_estimators`: This is the number of boosting stages (trees) to be used in the model. More boosting stages can improve performance but may also lead to overfitting.
* `max_depth`: This determines the maximum depth of the trees. Deeper trees can capture more complex patterns but may also overfit the training data.
Here's how to set up a hyperparameter grid:

```Python
# Setting up the hyperparameter grid
param_grid = {
    'learning_rate': [0.01, 0.1],
    'n_estimators': [100, 200],
    'max_depth': [3, 4]
}
```
In this grid, each combination of `learning_rate`, `n_estimators`, and `max_depth` will be tested. In this `param_grid` dictionary, the keys are hyperparameter names, and mapped lists contain their possible values.

## Implementing GridSearchCV
`GridSearchCV` automates the process of hyperparameter tuning by searching for the best combination of parameters in our grid.

Here's how to implement `GridSearchCV`:

```Python
from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import GradientBoostingRegressor

# Instantiate the GridSearchCV object
model = GridSearchCV(GradientBoostingRegressor(random_state=42), param_grid, cv=3)

# Fit the model to the training data
model.fit(X_train, y_train)
```
In the code above, we first import the necessary libraries. We then instantiate the `GridSearchCV` object with a `GradientBoostingRegressor` and our predefined `param_grid`. The `cv=3` parameter specifies that 3-fold cross-validation should be used, meaning the data will be split into three subsets, and the model will be trained and validated three times, each time using a different subset for validation and the remaining subsets for training. This helps ensure the model's performance is robust and not dependent on a particular train-test split. Finally, we fit the `GridSearchCV` object to the training data, which involves training multiple models using different hyperparameter combinations and selecting the best one based on cross-validation results.

## Evaluating and Interpreting Results
Once `GridSearchCV` has found the best parameters, we need to evaluate and interpret the results.

```Python
# Print the best parameters found
print("Best parameters found:", model.best_params_)
# Output:
# Best parameters found: {'learning_rate': 0.1, 'max_depth': 3, 'n_estimators': 100}
```
Now, using the combination of hyperparameters resulted in the best model performance, let's calculate the error using these parameters:

```Python
# Predict with the best estimator
best_model = model.best_estimator_
predictions = best_model.predict(X_test)

# Calculate and print Mean Squared Error
from sklearn.metrics import mean_squared_error
mse = mean_squared_error(y_test, predictions)
print("Mean Squared Error with best params:", mse)
# Output:
# Mean Squared Error with best params: 22.27547097230719
```
This indicates the model's accuracy using the optimized hyperparameters, with a lower MSE indicating better accuracy.

## Visualizing Predictions
Visualizing predictions helps us understand how well our model is performing and identify any patterns or discrepancies between the actual and predicted values. By plotting the actual values against the predicted values, we can visually assess the model's accuracy and spot areas where the predictions may be off. This is crucial for interpreting the effectiveness of our hyperparameter tuning and understanding the model's behavior.

```Python
# Plotting predictions vs actual values
import matplotlib.pyplot as plt

plt.figure(figsize=(10, 6))
plt.scatter(range(len(y_test)), y_test, label='Actual', alpha=0.7)
plt.scatter(range(len(y_test)), predictions, label='Predicted', alpha=0.7)
plt.title('Actual vs Predicted Values with Tuned Hyperparameters')
plt.xlabel('Sample Index')
plt.ylabel('Value')
plt.legend()
plt.show()
```

![](https://github.com/PaladinKnightMaster/skillup_codesignal/blob/main/assets/images/Screenshot_37.png)

Here, we visualize the comparison between actual values and predictions. The closer these points are together, the better the model's predictive performance.

## Lesson Summary
Great job! You've now learned how to use `GridSearchCV` for hyperparameter tuning to optimize a Gradient Boosting model. This process involves defining a hyperparameter grid, implementing `GridSearchCV`, and evaluating the results. Applying these techniques will significantly enhance your model's performance and ensure more accurate predictions.
