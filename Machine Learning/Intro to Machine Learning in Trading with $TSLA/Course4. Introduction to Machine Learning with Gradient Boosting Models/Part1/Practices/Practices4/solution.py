# import pandas as pd
# from sklearn.preprocessing import StandardScaler
# import datasets
# from sklearn.model_selection import train_test_split
# from sklearn.ensemble import GradientBoostingRegressor
# from sklearn.metrics import mean_squared_error
# import matplotlib.pyplot as plt

# # Load dataset
# tesla = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla['train'])

# # Convert the 'Date' column to datetime format
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# # Calculate technical indicators: Simple Moving Average (SMA), Exponential Moving Average (EMA), and Volatility
# tesla_df['SMA_5'] = tesla_df['Adj Close'].rolling(window=5).mean()
# tesla_df['EMA_5'] = tesla_df['Adj Close'].ewm(span=5, adjust=False).mean()
# tesla_df['Volatility'] = tesla_df['Close'].rolling(window=5).std()

# # Drop NaN values created by indicators
# tesla_df.dropna(inplace=True)

# # Selecting features and target
# # TODO: Configure all the features you need for training the model (choose yourself)
# # Note: you cannot include the target (Close) column here
# features = ____

# # TODO: configure the target - 'Close' column
# target = ____

# # TODO: Standardize features
# scaler = StandardScaler()
# features_scaled = ____

# # Splitting the dataset into training and testing sets
# X_train, X_test, y_train, y_test = train_test_split(features_scaled, target, test_size=0.25, random_state=42)

# # TODO: Instantiate the Gradient Boosting Regressor and fit the model
# # to the training data

# # TODO: Predict the values for X_test and calculate the Mean Squared Error (MSE)

# # Visualizing the actual vs predicted values
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
import datasets
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.metrics import mean_squared_error
import matplotlib.pyplot as plt

# Load dataset
tesla = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla['train'])

# Convert the 'Date' column to datetime format
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# Calculate technical indicators: Simple Moving Average (SMA), Exponential Moving Average (EMA), and Volatility
tesla_df['SMA_5'] = tesla_df['Adj Close'].rolling(window=5).mean()
tesla_df['EMA_5'] = tesla_df['Adj Close'].ewm(span=5, adjust=False).mean()
tesla_df['Volatility'] = tesla_df['Close'].rolling(window=5).std()

# Drop NaN values created by indicators
tesla_df.dropna(inplace=True)

# Selecting features and target
# TODO: Configure all the features you need for training the model (choose yourself)
# Note: you cannot include the target (Close) column here
features = tesla_df[['SMA_5', 'EMA_5', 'Volatility']].values

# TODO: configure the target - 'Close' column
target = tesla_df['Close'].values

# TODO: Standardize features
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)

# Splitting the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(features_scaled, target, test_size=0.25, random_state=42)

# TODO: Instantiate the Gradient Boosting Regressor and fit the model
# to the training data
model = GradientBoostingRegressor(random_state=42)
model.fit(X_train, y_train)
# TODO: Predict the values for X_test and calculate the Mean Squared Error (MSE)
predictions = model.predict(X_test)
mse = mean_squared_error(y_test, predictions)
print("Mean Squared Error:", mse)
# Visualizing the actual vs predicted values
plt.figure(figsize=(10, 6))
plt.scatter(range(len(y_test)), y_test, label='Actual', alpha=0.7)
plt.scatter(range(len(y_test)), predictions, label='Predicted', alpha=0.7)
plt.title('Actual vs Predicted Values')
plt.xlabel('Sample Index')
plt.ylabel('Value')
plt.legend()
plt.show()