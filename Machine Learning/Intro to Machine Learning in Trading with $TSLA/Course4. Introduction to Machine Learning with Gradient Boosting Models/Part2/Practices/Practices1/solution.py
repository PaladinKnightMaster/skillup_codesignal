# from datasets import load_dataset
# import pandas as pd
# from sklearn.preprocessing import StandardScaler
# from sklearn.model_selection import cross_val_score
# from sklearn.ensemble import GradientBoostingRegressor
# import matplotlib.pyplot as plt

# # Load dataset
# tesla = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla['train'])

# # Convert Date column to datetime type
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# # Feature Engineering
# tesla_df['Target'] = tesla_df['Adj Close'].shift(-1) - tesla_df['Adj Close']
# tesla_df['SMA_5'] = tesla_df['Adj Close'].rolling(window=5).mean()
# tesla_df['SMA_10'] = tesla_df['Adj Close'].rolling(window=10).mean()
# tesla_df['EMA_5'] = tesla_df['Adj Close'].ewm(span=5, adjust=False).mean()
# tesla_df['EMA_10'] = tesla_df['Adj Close'].ewm(span=10, adjust=False).mean()

# # Drop NaN values created by moving averages
# tesla_df.dropna(inplace=True)

# # Select features and target
# features = tesla_df[['Open', 'High', 'Low', 'Close', 'Volume', 'SMA_5', 'SMA_10', 'EMA_5', 'EMA_10']].values
# target = tesla_df['Target'].values

# # Standardizing features
# scaler = StandardScaler()
# features_scaled = scaler.fit_transform(features)

# # Instantiate model
# model = GradientBoostingRegressor(n_estimators=100, learning_rate=0.1, max_depth=3, random_state=42)

# # Perform cross-validation
# scores = cross_val_score(model, features_scaled, target, cv=5)
# mean_score = scores.mean()
# print("Mean cross-validation score: ", mean_score)

# # Fit model to visualize predictions
# model.fit(features_scaled, target)
# predictions = model.predict(features_scaled)

# # Plotting predictions vs actual values
# plt.figure(figsize=(10, 6))
# plt.scatter(range(len(target)), target, label='Actual', alpha=0.7)
# plt.scatter(range(len(target)), predictions, label='Predicted', alpha=0.7)
# plt.title('Actual vs Predicted Values with Cross-Validation')
# plt.xlabel('Sample Index')
# plt.ylabel('Value')
# plt.legend()
# plt.show()

from datasets import load_dataset
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import cross_val_score
from sklearn.ensemble import GradientBoostingRegressor
import matplotlib.pyplot as plt

# Load dataset
tesla = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla['train'])

# Convert Date column to datetime type
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# Feature Engineering
tesla_df['Target'] = tesla_df['Adj Close'].shift(-1) - tesla_df['Adj Close']
tesla_df['SMA_5'] = tesla_df['Adj Close'].rolling(window=5).mean()
tesla_df['SMA_10'] = tesla_df['Adj Close'].rolling(window=10).mean()
tesla_df['EMA_5'] = tesla_df['Adj Close'].ewm(span=5, adjust=False).mean()
tesla_df['EMA_10'] = tesla_df['Adj Close'].ewm(span=10, adjust=False).mean()

# Drop NaN values created by moving averages
tesla_df.dropna(inplace=True)

# Select features and target
features = tesla_df[['Open', 'High', 'Low', 'Close', 'Volume', 'SMA_5', 'SMA_10', 'EMA_5', 'EMA_10']].values
target = tesla_df['Target'].values

# Standardizing features
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)

# Instantiate model
model = GradientBoostingRegressor(n_estimators=200, learning_rate=0.1, max_depth=3, random_state=42)

# Perform cross-validation
scores = cross_val_score(model, features_scaled, target, cv=10)
mean_score = scores.mean()
print("Mean cross-validation score: ", mean_score)

# Fit model to visualize predictions
model.fit(features_scaled, target)
predictions = model.predict(features_scaled)

# Plotting predictions vs actual values
plt.figure(figsize=(10, 6))
plt.scatter(range(len(target)), target, label='Actual', alpha=0.7)
plt.scatter(range(len(target)), predictions, label='Predicted', alpha=0.7)
plt.title('Actual vs Predicted Values with Cross-Validation')
plt.xlabel('Sample Index')
plt.ylabel('Value')
plt.legend()
plt.show()