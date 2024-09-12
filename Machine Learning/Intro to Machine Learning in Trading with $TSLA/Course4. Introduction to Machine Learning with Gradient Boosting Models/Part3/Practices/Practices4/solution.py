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
# tesla_df['Price_Range'] = tesla_df['High'] - tesla_df['Low']
# tesla_df['Daily_Return'] = tesla_df['Adj Close'] / tesla_df['Open'] - 1
# tesla_df['Volatility'] = tesla_df['Price_Range'].rolling(window=5).std()
# tesla_df['Average_Volume'] = tesla_df['Volume'].rolling(window=5).mean()

# # Drop NaN values created by rolling operations
# tesla_df.dropna(inplace=True)

# # Select features and target
# features = tesla_df[['Open', 'High', 'Low', 'Close', 'Volume', 'Price_Range', 'Daily_Return', 'Volatility', 'Average_Volume']].values
# target = tesla_df['Adj Close'].shift(-1).dropna().values  # Predicting next day's close price
# features = features[:-1]

# # Splitting the dataset into training and testing sets
# X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.25, random_state=42)

# # TODO: Set up the hyperparameter grid
# param_grid = ____

# # Instantiate the GridSearchCV object
# model = GridSearchCV(GradientBoostingRegressor(random_state=42), param_grid, cv=3)

# # TODO: Fit the model to the training data

# # TODO: Print the best parameters found

# # TODO: Predict with the best estimator

# # Calculate and print Mean Squared Error
# mse = mean_squared_error(y_test, predictions)
# print("Mean Squared Error with best params:", mse)

# # TODO: Plot predictions vs actual values

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
tesla_df['Price_Range'] = tesla_df['High'] - tesla_df['Low']
tesla_df['Daily_Return'] = tesla_df['Adj Close'] / tesla_df['Open'] - 1
tesla_df['Volatility'] = tesla_df['Price_Range'].rolling(window=5).std()
tesla_df['Average_Volume'] = tesla_df['Volume'].rolling(window=5).mean()

# Drop NaN values created by rolling operations
tesla_df.dropna(inplace=True)

# Select features and target
features = tesla_df[['Open', 'High', 'Low', 'Close', 'Volume', 'Price_Range', 'Daily_Return', 'Volatility', 'Average_Volume']].values
target = tesla_df['Adj Close'].shift(-1).dropna().values  # Predicting next day's close price
features = features[:-1]

# Splitting the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.25, random_state=42)

# TODO: Set up the hyperparameter grid
param_grid = {
    'learning_rate': [0.01, 0.1],
    'n_estimators': [100, 200],
    'max_depth': [3, 4]
}

# Instantiate the GridSearchCV object
model = GridSearchCV(GradientBoostingRegressor(random_state=42), param_grid, cv=3)

# TODO: Fit the model to the training data
model.fit(X_train, y_train)
# TODO: Print the best parameters found
print("Best parameters found:", model.best_params_)
# TODO: Predict with the best estimator
best_model = model.best_estimator_
predictions = best_model.predict(X_test)
# Calculate and print Mean Squared Error
mse = mean_squared_error(y_test, predictions)
print("Mean Squared Error with best params:", mse)

# TODO: Plot predictions vs actual values
plt.figure(figsize=(10, 6))
plt.scatter(range(len(y_test)), y_test, label='Actual', alpha=0.7)
plt.scatter(range(len(y_test)), predictions, label='Predicted', alpha=0.7)
plt.title('Actual vs Predicted Values with Tuned Hyperparameters')
plt.xlabel('Sample Index')
plt.ylabel('Value')
plt.legend()
plt.show()