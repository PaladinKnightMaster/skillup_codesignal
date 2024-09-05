# Evaluating Model with Cross-Validation

## Lesson Overview
Welcome to today's lesson on **Evaluating Model with Cross-Validation**! Our goal is to understand how to reliably assess the performance of our Gradient Boosting model using cross-validation techniques. This lesson will guide you through a quick review of data preparation, introduce the concept and importance of cross-validation, demonstrate implementing cross-validation with the `cross_val_score` function, and visualize model predictions to better understand the model's performance.

## Review of Data Preparation
Before we dive into evaluating our model with cross-validation, let's quickly review the data preparation steps we performed. This will ensure that we're on the same page regarding the dataset and features we're using.

First, we loaded the Tesla (`$TSLA`) historical prices dataset:

```Python
from datasets import load_dataset
import pandas as pd

# Load dataset
tesla = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla['train'])

# Convert Date column to datetime type
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
```

Next, we performed feature engineering to add technical indicators and the target variable:

```Python
# Feature Engineering
tesla_df['Target'] = tesla_df['Adj Close'].shift(-1) - tesla_df['Adj Close']
tesla_df['SMA_5'] = tesla_df['Adj Close'].rolling(window=5).mean()
tesla_df['SMA_10'] = tesla_df['Adj Close'].rolling(window=10).mean()
tesla_df['EMA_5'] = tesla_df['Adj Close'].ewm(span=5, adjust=False).mean()
tesla_df['EMA_10'] = tesla_df['Adj Close'].ewm(span=10, adjust=False).mean()

# Drop NaN values created by moving averages
tesla_df.dropna(inplace=True)
```

Finally, we selected our features and target, and standardized the features:

```Python
from sklearn.preprocessing import StandardScaler

# Select features and target
features = tesla_df[['Open', 'High', 'Low', 'Close', 'Volume', 'SMA_5', 'SMA_10', 'EMA_5', 'EMA_10']].values
target = tesla_df['Target'].values

# Standardizing features
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)
```

This brings us to the prepared data that we'll use for model training and evaluation.

## Introduction to Cross-Validation
**Cross-validation** is a key technique in evaluating the performance of machine learning models. It helps in assessing how well our model generalizes to an independent dataset. By using cross-validation, we minimize the risk of overfitting and ensure our model's robustness.

In K-Fold Cross-Validation, we split our dataset into `k` portions (folds). The model is trained on `k - 1` folds and tested on the remaining fold. This process is repeated `k` times, each time using a different fold as the test set. The scores from each fold are then averaged to get a more reliable performance estimate.

Here's a quick visual explanation of K-Fold Cross-Validation:

1. Split data into `k` folds
2. Train on `k - 1` folds and test on the remaining fold
3. Repeat `k` times, each time with a different fold as the test set
4. Average the results from each fold

We will use the `cross_val_score` function from `sklearn.model_selection` to perform cross-validation efficiently.

## Implementing Cross-Validation
Let's move on to implementing cross-validation with our Gradient Boosting model. We'll set up the model and use 5-fold cross-validation to evaluate its performance.

Start by importing the necessary functions and setting up the model:

```Python
from sklearn.model_selection import cross_val_score
from sklearn.ensemble import GradientBoostingRegressor

# Instantiate model
model = GradientBoostingRegressor(n_estimators=100, learning_rate=0.1, max_depth=3, random_state=42)
```

Next, perform cross-validation and print the mean score:

```Python
# Perform cross-validation
# The scoring parameter defaults to the negative mean absolute error
# for regression models, hence the negative scores.
scores = cross_val_score(model, features_scaled, target, cv=5)
mean_score = scores.mean()
print("Mean cross-validation score: ", mean_score)
# Output:
# Mean cross-validation score:  -0.21139860331328936
```

This negative score indicates that the model's predictions are generally poorer than simply predicting the mean target value. Such an outcome suggests the need for model improvement or reevaluation of the data preprocessing steps and feature selection.

## Implementing Cross-Validation
Let's move on to implementing cross-validation with our Gradient Boosting model. We'll set up the model and use 5-fold cross-validation to evaluate its performance.

Start by importing the necessary functions and setting up the model:

```Python
Copy
Play
from sklearn.model_selection import cross_val_score
from sklearn.ensemble import GradientBoostingRegressor

# Instantiate model
model = GradientBoostingRegressor(n_estimators=100, learning_rate=0.1, max_depth=3, random_state=42)
```

Next, perform cross-validation and print the mean score:

```Python
# Perform cross-validation
# The scoring parameter defaults to the negative mean absolute error
# for regression models, hence the negative scores.
scores = cross_val_score(model, features_scaled, target, cv=5, scoring='neg_mean_absolute_error')

# Convert negative mean absolute error to positive for easier interpretation
mean_score = -scores.mean()
print("Mean cross-validation score (Mean Absolute Error): ", mean_score)
# Output:
# Mean cross-validation score (Mean Absolute Error):  -0.21139860331328936
```

This score indicates the Mean Absolute Error (MAE) of the model, which tells us the average absolute difference between predicted and actual values. A lower MAE indicates better predictive accuracy. In this case, the MAE suggests that on average the model's predictions deviate from the actual values by approximately `0.21139860331328936` units.

## Visualizing Model Predictions
Visualizing the model's predictions against actual values is crucial for understanding how well the model is performing. Let’s fit the model to our entire dataset and visualize its predictions.

Fit the model to the data:

```Python
# Fit model to visualize predictions
model.fit(features_scaled, target)
predictions = model.predict(features_scaled)
```

Now, let's create a scatter plot comparing the actual values to the predicted values:

```Python
import matplotlib.pyplot as plt

# Plotting predictions vs actual values
plt.figure(figsize=(10, 6))
plt.scatter(range(len(target)), target, label='Actual', alpha=0.7)
plt.scatter(range(len(target)), predictions, label='Predicted', alpha=0.7)
plt.title('Actual vs Predicted Values with Cross-Validation')
plt.xlabel('Sample Index')
plt.ylabel('Value')
plt.legend()
plt.show()
```

![](https://github.com/PaladinKnightMaster/skillup_codesignal/blob/main/assets/images/Screenshot_36.png)

This plot will help us visually assess how close our model's predictions are to the actual target values, providing another layer of model evaluation.

## Lesson Summary
In this lesson, we covered the following:

1. Reviewed the data preparation steps.
2. Introduced the concept and importance of cross-validation.
3. Implemented 5-fold cross-validation to evaluate our Gradient Boosting model.
4. Visualized the model’s predictions against actual values.

Cross-validation is a powerful tool to ensure your model's reliability and generalization. Visualizing the results helps in understanding the model’s performance better.

Practice these techniques by applying cross-validation to different models and datasets, and explore changing the number of folds in cross-validation to see how it affects the performance. These exercises will help you better understand the importance of cross-validation and improve your machine learning skills.
