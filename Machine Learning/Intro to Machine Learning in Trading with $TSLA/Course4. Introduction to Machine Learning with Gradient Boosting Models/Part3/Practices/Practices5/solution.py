# import pandas as pd
# from sklearn.model_selection import train_test_split, GridSearchCV
# from sklearn.ensemble import GradientBoostingRegressor
# from sklearn.metrics import mean_squared_error
# import matplotlib.pyplot as plt
# from datasets import load_dataset

# # Load dataset
# tesla = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla['train'])

# # TODO: Calculate 20-day Simple Moving Averages (SMA) on the dataset

# # TODO: Drop rows with NaN values after calculating the moving averages

# # TODO: Select relevant features and prepare the target variable
# # The target will be - predicting next day's `Adj Close` price

# # TODO: Split the dataset into training and testing sets

# # TODO: Set up the hyperparameter grid for learning_rate, n_estimators, and max_depth
# # To avoid too long execution, set up the following parameters:
# # 'learning_rate': choose between `0.01` and `0.1`
# # 'n_estimators': choose between `100` and `200`
# # 'max_depth': choose between `3` and `4`

# # TODO: Instantiate the GridSearchCV object with GradientBoostingRegressor

# # TODO: Fit the GridSearchCV object to the training data

# # TODO: Print best parameters found by GridSearchCV

# # TODO: Use the best estimator to predict on the test set

# # TODO: Calculate and print the Mean Squared Error for the predictions

# # TODO: Plot predictions against actual values using matplotlib

import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.metrics import mean_squared_error
import matplotlib.pyplot as plt
from datasets import load_dataset

# Load dataset
tesla = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla['train'])

# Calculate 20-day Simple Moving Averages (SMA) on the dataset
tesla_df['SMA_20'] = tesla_df['Adj Close'].rolling(window=20).mean()

# Drop rows with NaN values after calculating the moving averages
tesla_df.dropna(inplace=True)

# Select relevant features and prepare the target variable
# The target is the next day's 'Adj Close' price
features = tesla_df[['Open', 'High', 'Low', 'Close', 'Volume', 'SMA_20']].values
target = tesla_df['Adj Close'].shift(-1).dropna().values

# Align features with the target by removing the last row from features
features = features[:-1]

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.25, random_state=42)

# Set up the hyperparameter grid for learning_rate, n_estimators, and max_depth
param_grid = {
    'learning_rate': [0.01, 0.1],
    'n_estimators': [100, 200],
    'max_depth': [3, 4]
}

# Instantiate the GridSearchCV object with GradientBoostingRegressor
model = GridSearchCV(GradientBoostingRegressor(random_state=42), param_grid, cv=4)

# Fit the GridSearchCV object to the training data
model.fit(X_train, y_train)

# Print the best parameters found by GridSearchCV
print("Best parameters found:", model.best_params_)

# Use the best estimator to predict on the test set
best_model = model.best_estimator_
predictions = best_model.predict(X_test)

# Calculate and print the Mean Squared Error for the predictions
mse = mean_squared_error(y_test, predictions)
print("Mean Squared Error with best params:", mse)

# Plot predictions against actual values using matplotlib
plt.figure(figsize=(10, 6))
plt.scatter(range(len(y_test)), y_test, label='Actual', alpha=0.7)
plt.scatter(range(len(y_test)), predictions, label='Predicted', alpha=0.7)
plt.title('Actual vs Predicted Values with Tuned Hyperparameters')
plt.xlabel('Sample Index')
plt.ylabel('Value')
plt.legend()
plt.show()
