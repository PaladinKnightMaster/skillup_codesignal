# import pandas as pd
# import datasets
# from sklearn.model_selection import train_test_split
# from sklearn.preprocessing import StandardScaler
# from sklearn.ensemble import GradientBoostingRegressor
# import matplotlib.pyplot as plt

# # Load TSLA dataset
# tesla = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla['train'])

# # Convert Date column to datetime type
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# # Feature Engineering: adding technical indicators as features
# tesla_df['SMA_5'] = tesla_df['Adj Close'].rolling(window=5).mean()
# tesla_df['SMA_10'] = tesla_df['Adj Close'].rolling(window=10).mean()
# tesla_df['EMA_5'] = tesla_df['Adj Close'].ewm(span=5, adjust=False).mean()
# tesla_df['EMA_10'] = tesla_df['Adj Close'].ewm(span=10, adjust=False).mean()

# # Drop NaN values created by moving averages
# tesla_df.dropna(inplace=True)

# # Select features and target
# features = tesla_df[['Open', 'High', 'Low', 'Close', 'Volume', 'SMA_5', 'SMA_10', 'EMA_5', 'EMA_10']].values
# target = tesla_df['Adj Close'].values

# # Splitting the dataset into training and testing sets
# X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.25, random_state=42)

# # TODO: Standardize the features

# # Instantiate and fit the model
# model = GradientBoostingRegressor(random_state=42)
# model.fit(X_train, y_train)

# # Compute feature importance
# feature_importance = model.feature_importances_

# # TODO: Create a DataFrame for better visualization of feature names alongside their importance
# feature_names = ____
# feature_importance_df = ____

# # Sort features by importance
# feature_importance_df = feature_importance_df.sort_values(by='Importance', ascending=False)

# # Print feature importances with names
# print("Feature importance:\n", feature_importance_df)

# # TODO: Plot the feature importance

import pandas as pd
import datasets
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import GradientBoostingRegressor
import matplotlib.pyplot as plt

# Load TSLA dataset
tesla = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla['train'])

# Convert Date column to datetime type
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# Feature Engineering: adding technical indicators as features
tesla_df['SMA_5'] = tesla_df['Adj Close'].rolling(window=5).mean()
tesla_df['SMA_10'] = tesla_df['Adj Close'].rolling(window=10).mean()
tesla_df['EMA_5'] = tesla_df['Adj Close'].ewm(span=5, adjust=False).mean()
tesla_df['EMA_10'] = tesla_df['Adj Close'].ewm(span=10, adjust=False).mean()

# Drop NaN values created by moving averages
tesla_df.dropna(inplace=True)

# Select features and target
features = tesla_df[['Open', 'High', 'Low', 'Close', 'Volume', 'SMA_5', 'SMA_10', 'EMA_5', 'EMA_10']].values
target = tesla_df['Adj Close'].values

# Splitting the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.25, random_state=42)

# TODO: Standardize the features
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Instantiate and fit the model
model = GradientBoostingRegressor(random_state=42)
model.fit(X_train, y_train)

# Compute feature importance
feature_importance = model.feature_importances_

# TODO: Create a DataFrame for better visualization of feature names alongside their importance
feature_names = ['Open', 'High', 'Low', 'Close', 'Volume', 'SMA_5', 'SMA_10', 'EMA_5', 'EMA_10']
feature_importance_df = pd.DataFrame({'Feature': feature_names, 'Importance': feature_importance})

# Sort features by importance
feature_importance_df = feature_importance_df.sort_values(by='Importance', ascending=False)

# Print feature importances with names
print("Feature importance:\n", feature_importance_df)

# TODO: Plot the feature importance
plt.figure(figsize=(10, 6))
plt.bar(range(len(feature_importance)), feature_importance_df['Importance'])
plt.title('Feature Importances')
plt.xlabel('Feature')
plt.ylabel('Importance')
plt.xticks(range(len(feature_importance_df['Feature'])), feature_importance_df['Feature'], rotation=45)
plt.tight_layout()
plt.show()
