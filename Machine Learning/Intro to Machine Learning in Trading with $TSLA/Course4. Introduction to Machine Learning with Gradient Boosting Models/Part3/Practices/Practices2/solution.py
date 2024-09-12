# import pandas as pd
# from datasets import load_dataset
# from sklearn.model_selection import train_test_split, GridSearchCV
# from sklearn.ensemble import GradientBoostingRegressor
# from sklearn.metrics import mean_squared_error
# import matplotlib.pyplot as plt

# # Load dataset
# tesla = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla['train'])

# # Feature Engineering
# tesla_df['SMA_5'] = tesla_df['Adj Close'].rolling(window=5).mean()
# tesla_df['SMA_10'] = tesla_df['Adj Close'].rolling(window=10).mean()
# tesla_df['EMA_5'] = tesla_df['Adj Close'].ewm(span=5, adjust=False).mean()
# tesla_df['EMA_10'] = tesla_df['Adj Close'].ewm(span=10, adjust=False).mean()

# # Drop NaN values created by moving averages
# tesla_df.dropna(inplace=True)

# # Select features and target
# features = tesla_df[['Open', 'High', 'Low', 'Close', 'Volume', 'SMA_5', 'SMA_10', 'EMA_5', 'EMA_10']].values
# target = tesla_df['Adj Close'].shift(-1).dropna().values  # Predicting next day's close price

# # Ensure alignment
# features = features[:-1]

# # Splitting the dataset into training and testing sets
# X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.25, random_state=42)

# # Setting up the hyperparameter grid
# param_grid = {
#     'learning_rate': [0.01, 0.1],
#     'n_estimators': [100, 200],
#     'max_depth': [3, 4]
# }

# # Instantiate the model
# model = GradientBoostingRegressor(random_state=42)

# # Fit the model to the training data
# model.fit(X_train, y_train)

# # Print the best parameters found
# print("Best parameters found:", model.best_params_)

# # Predict with the model
# predictions = model.predict(X_test)

# # Calculate and print Mean Squared Error
# mse = mean_squared_error(y_test, predictions)
# print("Mean Squared Error with best params:", mse)

# # Plotting predictions vs actual values
# plt.figure(figsize=(10, 6))
# plt.scatter(range(len(y_test)), y_test, label='Actual', alpha=0.7)
# plt.scatter(range(len(y_test)), predictions, label='Predicted', alpha=0.7)
# plt.title('Actual vs Predicted Values with Tuned Hyperparameters')
# plt.xlabel('Sample Index')
# plt.ylabel('Value')
# plt.legend()
# plt.show()

import pandas as pd
from datasets import load_dataset
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.metrics import mean_squared_error
import matplotlib.pyplot as plt

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

# Ensure alignment
features = features[:-1]

# Splitting the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.25, random_state=42)

# Setting up the hyperparameter grid
param_grid = {
    'learning_rate': [0.01, 0.1],
    'n_estimators': [100, 200],
    'max_depth': [3, 4]
}

# Instantiate the model
model = GridSearchCV(GradientBoostingRegressor(random_state=42), param_grid, cv=2)

# Fit the model to the training data
model.fit(X_train, y_train)

# Print the best parameters found
print("Best parameters found:", model.best_params_)

# Predict with the model
predictions = model.predict(X_test)

# Calculate and print Mean Squared Error
mse = mean_squared_error(y_test, predictions)
print("Mean Squared Error with best params:", mse)

# Plotting predictions vs actual values
plt.figure(figsize=(10, 6))
plt.scatter(range(len(y_test)), y_test, label='Actual', alpha=0.7)
plt.scatter(range(len(y_test)), predictions, label='Predicted', alpha=0.7)
plt.title('Actual vs Predicted Values with Tuned Hyperparameters')
plt.xlabel('Sample Index')
plt.ylabel('Value')
plt.legend()
plt.show()