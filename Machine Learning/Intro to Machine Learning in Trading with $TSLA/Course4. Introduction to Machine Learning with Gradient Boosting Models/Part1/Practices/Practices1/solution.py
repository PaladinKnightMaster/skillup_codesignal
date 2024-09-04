# import pandas as pd
# from sklearn.preprocessing import StandardScaler
# from datasets import load_dataset
# from sklearn.model_selection import train_test_split
# from sklearn.ensemble import GradientBoostingRegressor
# from sklearn.metrics import mean_squared_error
# import matplotlib.pyplot as plt

# # Load dataset
# tesla = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla['train'])

# # Convert 'Date' column to datetime format
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# # Adding technical indicators
# tesla_df['SMA_5'] = tesla_df['Adj Close'].rolling(window=5).mean()
# tesla_df['SMA_10'] = tesla_df['Adj Close'].rolling(window=10).mean()
# tesla_df['EMA_5'] = tesla_df['Adj Close'].ewm(span=5, adjust=False).mean()
# tesla_df['EMA_10'] = tesla_df['Adj Close'].ewm(span=10, adjust=False).mean()

# # Drop NaN values created by moving averages
# tesla_df.dropna(inplace=True)

# # Features and target selection excluding the 'Close' column
# features = tesla_df[['Open', 'High', 'Low', 'Volume', 'SMA_5', 'SMA_10', 'EMA_5', 'EMA_10']].values
# target = tesla_df['Adj Close'].values

# # Standardizing features
# scaler = StandardScaler()
# features_scaled = scaler.fit_transform(features)

# # Splitting the dataset again
# X_train, X_test, y_train, y_test = train_test_split(features_scaled, target, test_size=0.25, random_state=42)

# # Train the model
# model = GradientBoostingRegressor(random_state=42)
# model.fit(X_train, y_train)

# # Predict and evaluate
# predictions = model.predict(X_test)
# mse = mean_squared_error(y_test, predictions)
# print("Mean Squared Error:", mse)

# # Visualizing the predictions
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
from datasets import load_dataset
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.metrics import mean_squared_error
import matplotlib.pyplot as plt

# Load dataset
tesla = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla['train'])

# Convert 'Date' column to datetime format
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# Adding technical indicators
tesla_df['SMA_5'] = tesla_df['Adj Close'].rolling(window=5).mean()
tesla_df['SMA_10'] = tesla_df['Adj Close'].rolling(window=10).mean()
tesla_df['EMA_5'] = tesla_df['Adj Close'].ewm(span=5, adjust=False).mean()
tesla_df['EMA_10'] = tesla_df['Adj Close'].ewm(span=10, adjust=False).mean()

# Drop NaN values created by moving averages
tesla_df.dropna(inplace=True)

# Features and target selection including the 'Close' column
features = tesla_df[['Open', 'High', 'Low', 'Close', 'Volume', 'SMA_5', 'SMA_10', 'EMA_5', 'EMA_10']].values
target = tesla_df['Adj Close'].values

# Standardizing features
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)

# Splitting the dataset
X_train, X_test, y_train, y_test = train_test_split(features_scaled, target, test_size=0.25, random_state=42)

# Train the model
model = GradientBoostingRegressor(random_state=42)
model.fit(X_train, y_train)

# Predict and evaluate
predictions = model.predict(X_test)
mse = mean_squared_error(y_test, predictions)
print("Mean Squared Error with 'Close' column included:", mse)

# Visualizing the predictions
plt.figure(figsize=(10, 6))
plt.scatter(range(len(y_test)), y_test, label='Actual', alpha=0.7)
plt.scatter(range(len(y_test)), predictions, label='Predicted', alpha=0.7)
plt.title('Actual vs Predicted Values')
plt.xlabel('Sample Index')
plt.ylabel('Value')
plt.legend()
plt.show()
