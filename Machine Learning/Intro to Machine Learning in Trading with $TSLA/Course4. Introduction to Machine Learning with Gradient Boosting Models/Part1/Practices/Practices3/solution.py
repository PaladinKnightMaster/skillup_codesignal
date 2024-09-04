# import pandas as pd
# from sklearn.preprocessing import StandardScaler
# from sklearn.model_selection import train_test_split
# from sklearn.ensemble import GradientBoostingRegressor
# from sklearn.metrics import mean_squared_error
# import datasets
# import matplotlib.pyplot as plt

# # Load dataset
# tesla = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla['train'])

# # Convert 'Date' column to datetime format
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# # Calculate SMA and EMA
# tesla_df['SMA_5'] = tesla_df['Adj Close'].rolling(window=5).mean()
# tesla_df['SMA_10'] = tesla_df['Adj Close'].rolling(window=10).mean()
# tesla_df['EMA_5'] = tesla_df['Adj Close'].ewm(span=5, adjust=False).mean()
# tesla_df['EMA_10'] = tesla_df['Adj Close'].ewm(span=10, adjust=False).mean()

# # Drop NaN values created by moving averages
# tesla_df.dropna(inplace=True)

# # Select features and target
# features = tesla_df[['Open', 'High', 'Low', 'Close', 'Volume', 'SMA_5', 'SMA_10', 'EMA_5', 'EMA_10']].values
# target = tesla_df['Adj Close'].values

# # TODO: Standardize features
# scaler = StandardScaler()
# features_scaled = ____

# # Splitting the dataset
# X_train, X_test, y_train, y_test = train_test_split(features_scaled, target, test_size=0.25, random_state=42)

# # Instantiate and fit the model
# model = GradientBoostingRegressor(random_state=42)
# # TODO: fit the model with data
# ____

# # TODO: Predict and evaluate error
# predictions = ____
# mse = mean_squared_error(y_test, predictions)
# print("Mean Squared Error:", mse)

# # Plotting predictions vs actual values
# plt.figure(figsize=(10, 6))
# plt.scatter(range(len(y_test)), y_test, label='Actual', alpha=0.7)
# plt.scatter(range(len(y_test)), predictions, label='Predicted', alpha=0.7)
# plt.title('Actual vs Predicted Values')
# plt.xlabel('Sample Index')
# plt.ylabel('Value')
# plt.legend()
# plt.show()

import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.metrics import mean_squared_error
import datasets
import matplotlib.pyplot as plt

# Load dataset
tesla = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla['train'])

# Convert 'Date' column to datetime format
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# Calculate SMA and EMA
tesla_df['SMA_5'] = tesla_df['Adj Close'].rolling(window=5).mean()
tesla_df['SMA_10'] = tesla_df['Adj Close'].rolling(window=10).mean()
tesla_df['EMA_5'] = tesla_df['Adj Close'].ewm(span=5, adjust=False).mean()
tesla_df['EMA_10'] = tesla_df['Adj Close'].ewm(span=10, adjust=False).mean()

# Drop NaN values created by moving averages
tesla_df.dropna(inplace=True)

# Select features and target
features = tesla_df[['Open', 'High', 'Low', 'Close', 'Volume', 'SMA_5', 'SMA_10', 'EMA_5', 'EMA_10']].values
target = tesla_df['Adj Close'].values

# TODO: Standardize features
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)

# Splitting the dataset
X_train, X_test, y_train, y_test = train_test_split(features_scaled, target, test_size=0.25, random_state=42)

# Instantiate and fit the model
model = GradientBoostingRegressor(random_state=42)
# TODO: fit the model with data
model.fit(X_train, y_train)

# TODO: Predict and evaluate error
predictions = model.predict(X_test)
mse = mean_squared_error(y_test, predictions)
print("Mean Squared Error:", mse)

# Plotting predictions vs actual values
plt.figure(figsize=(10, 6))
plt.scatter(range(len(y_test)), y_test, label='Actual', alpha=0.7)
plt.scatter(range(len(y_test)), predictions, label='Predicted', alpha=0.7)
plt.title('Actual vs Predicted Values')
plt.xlabel('Sample Index')
plt.ylabel('Value')
plt.legend()
plt.show()