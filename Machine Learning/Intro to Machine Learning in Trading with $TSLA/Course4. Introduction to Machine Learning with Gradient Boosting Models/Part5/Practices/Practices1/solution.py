# import pandas as pd
# from datasets import load_dataset
# from sklearn.preprocessing import StandardScaler
# from sklearn.model_selection import train_test_split
# from sklearn.ensemble import GradientBoostingRegressor
# from sklearn.metrics import mean_squared_error
# import matplotlib.pyplot as plt

# # Load TSLA dataset
# tesla = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla['train'])

# # Convert Date column to datetime type
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# # Feature Engineering
# tesla_df['Prev_Close'] = tesla_df['Adj Close'].shift(1)
# tesla_df['Day_Pct_Change'] = (tesla_df['Adj Close'] - tesla_df['Prev_Close']) / tesla_df['Prev_Close'] * 100
# tesla_df['SMA_5'] = tesla_df['Adj Close'].rolling(window=5).mean()
# tesla_df['SMA_10'] = tesla_df['Adj Close'].rolling(window=10).mean()
# tesla_df['EMA_5'] = tesla_df['Adj Close'].ewm(span=5, adjust=False).mean()
# tesla_df['EMA_10'] = tesla_df['Adj Close'].ewm(span=10, adjust=False).mean()
# tesla_df.dropna(inplace=True)

# # Select features and target
# features = tesla_df[['Open', 'High', 'Low', 'Close', 'Volume', 'SMA_5', 'SMA_10', 'EMA_5', 'EMA_10']].values
# target = tesla_df['Day_Pct_Change'].values

# # Standardizing features
# scaler = StandardScaler()
# features_scaled = scaler.fit_transform(features)

# # Split the dataset into training and testing sets
# X_train, X_test, y_train, y_test = train_test_split(features_scaled, target, test_size=0.25, random_state=42)

# # Instantiate the model with early stopping
# model = GradientBoostingRegressor(n_estimators=100, validation_fraction=0.3,
#                                   n_iter_no_change=2, tol=0.1, random_state=42)

# # Fit the model
# model.fit(X_train, y_train)

# # Predict and evaluate
# predictions = model.predict(X_test)

# # Calculate MSE with early stopping
# mse = mean_squared_error(y_test, predictions)
# print("Mean Squared Error with Early Stopping:", mse)

# # Visualizing predictions with early stopping
# plt.figure(figsize=(10, 6))
# plt.scatter(range(len(y_test)), y_test, label="Actual", alpha=0.7)
# plt.scatter(range(len(y_test)), predictions, label="Predicted", alpha=0.7)
# plt.title("Actual vs Predicted Values with Early Stopping")
# plt.xlabel("Sample Index")
# plt.ylabel("Value")
# plt.legend()
# plt.show()

import pandas as pd
from datasets import load_dataset
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.metrics import mean_squared_error
import matplotlib.pyplot as plt

# Load TSLA dataset
tesla = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla['train'])

# Convert Date column to datetime type
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# Feature Engineering
tesla_df['Prev_Close'] = tesla_df['Adj Close'].shift(1)
tesla_df['Day_Pct_Change'] = (tesla_df['Adj Close'] - tesla_df['Prev_Close']) / tesla_df['Prev_Close'] * 100
tesla_df['SMA_5'] = tesla_df['Adj Close'].rolling(window=5).mean()
tesla_df['SMA_10'] = tesla_df['Adj Close'].rolling(window=10).mean()
tesla_df['EMA_5'] = tesla_df['Adj Close'].ewm(span=5, adjust=False).mean()
tesla_df['EMA_10'] = tesla_df['Adj Close'].ewm(span=10, adjust=False).mean()
tesla_df.dropna(inplace=True)

# Select features and target
features = tesla_df[['Open', 'High', 'Low', 'Close', 'Volume', 'SMA_5', 'SMA_10', 'EMA_5', 'EMA_10']].values
target = tesla_df['Day_Pct_Change'].values

# Standardizing features
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(features_scaled, target, test_size=0.25, random_state=42)

# Instantiate the model with early stopping
model = GradientBoostingRegressor(n_estimators=100, validation_fraction=0.1,
                                  n_iter_no_change=5, tol=0.01, random_state=42)

# Fit the model
model.fit(X_train, y_train)

# Predict and evaluate
predictions = model.predict(X_test)

# Calculate MSE with early stopping
mse = mean_squared_error(y_test, predictions)
print("Mean Squared Error with Early Stopping:", mse)

# Visualizing predictions with early stopping
plt.figure(figsize=(10, 6))
plt.scatter(range(len(y_test)), y_test, label="Actual", alpha=0.7)
plt.scatter(range(len(y_test)), predictions, label="Predicted", alpha=0.7)
plt.title("Actual vs Predicted Values with Early Stopping")
plt.xlabel("Sample Index")
plt.ylabel("Value")
plt.legend()
plt.show()