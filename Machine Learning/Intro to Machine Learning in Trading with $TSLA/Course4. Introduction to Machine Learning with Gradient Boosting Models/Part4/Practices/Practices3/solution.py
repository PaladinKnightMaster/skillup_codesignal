# import pandas as pd
# import datasets
# import warnings
# from sklearn.model_selection import train_test_split
# from sklearn.preprocessing import StandardScaler
# from sklearn.ensemble import GradientBoostingRegressor
# import matplotlib.pyplot as plt

# # Suppressing warnings
# warnings.filterwarnings("ignore", category=UserWarning, module='pandas')

# # Load TSLA dataset
# tesla = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla['train'])

# # Convert Date column to datetime type
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# # Feature Engineering: adding Bollinger Bands as features
# tesla_df['Rolling_Mean'] = tesla_df['Adj Close'].rolling(window=20).mean()
# tesla_df['Bollinger_High'] = tesla_df['Rolling_Mean'] + 2 * tesla_df['Adj Close'].rolling(window=20).std()
# tesla_df['Bollinger_Low'] = tesla_df['Rolling_Mean'] - 2 * tesla_df['Adj Close'].rolling(window=20).std()

# # Drop NaN values created by rolling calculations
# tesla_df.dropna(inplace=True)

# # Select features and target
# features = tesla_df[['Open', 'High', 'Low', 'Close', 'Bollinger_High', 'Bollinger_Low']].values
# target = tesla_df['Adj Close'].values

# # Splitting the dataset into training and testing sets
# X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.25, random_state=42)

# # Standardizing features
# scaler = StandardScaler()
# X_train = scaler.fit_transform(X_train)
# X_test = scaler.transform(X_test)

# # TODO: Instantiate and fit the Gradient Boosting model
# model = ____
# ____

# # TODO: Compute feature importance
# feature_importance = ____

# # Create a DataFrame for better visualization of feature names alongside their importance
# feature_names = ['Open', 'High', 'Low', 'Close', 'Bollinger_High', 'Bollinger_Low']
# feature_importance_df = pd.DataFrame({'Feature': feature_names, 'Importance': feature_importance})

# # TODO: Sort features by importance
# feature_importance_df = ____

# # Print feature importances with names
# print("Feature importance:\n", feature_importance_df)

# # Plotting feature importance
# plt.figure(figsize=(10, 6))
# plt.bar(range(len(feature_importance)), feature_importance)
# plt.title('Feature Importances')
# plt.xlabel('Feature Index')
# plt.ylabel('Importance')
# plt.xticks(range(len(feature_names)), feature_names, rotation=45)
# plt.show()

import pandas as pd
import datasets
import warnings
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import GradientBoostingRegressor
import matplotlib.pyplot as plt

# Suppressing warnings
warnings.filterwarnings("ignore", category=UserWarning, module='pandas')

# Load TSLA dataset
tesla = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla['train'])

# Convert Date column to datetime type
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# Feature Engineering: adding Bollinger Bands as features
tesla_df['Rolling_Mean'] = tesla_df['Adj Close'].rolling(window=20).mean()
tesla_df['Bollinger_High'] = tesla_df['Rolling_Mean'] + 2 * tesla_df['Adj Close'].rolling(window=20).std()
tesla_df['Bollinger_Low'] = tesla_df['Rolling_Mean'] - 2 * tesla_df['Adj Close'].rolling(window=20).std()

# Drop NaN values created by rolling calculations
tesla_df.dropna(inplace=True)

# Select features and target
features = tesla_df[['Open', 'High', 'Low', 'Close', 'Bollinger_High', 'Bollinger_Low']].values
target = tesla_df['Adj Close'].values

# Splitting the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.25, random_state=42)

# Standardizing features
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# TODO: Instantiate and fit the Gradient Boosting model
model = GradientBoostingRegressor(random_state=42)
model.fit(X_train, y_train)

# TODO: Compute feature importance
feature_importance = model.feature_importances_

# Create a DataFrame for better visualization of feature names alongside their importance
feature_names = ['Open', 'High', 'Low', 'Close', 'Bollinger_High', 'Bollinger_Low']
feature_importance_df = pd.DataFrame({'Feature': feature_names, 'Importance': feature_importance})

# TODO: Sort features by importance
feature_importance_df = feature_importance_df.sort_values(by='Importance', ascending=False)

# Print feature importances with names
print("Feature importance:\n", feature_importance_df)

# Plotting feature importance
plt.figure(figsize=(10, 6))
plt.bar(range(len(feature_importance)), feature_importance)
plt.title('Feature Importances')
plt.xlabel('Feature')
plt.ylabel('Importance')
plt.xticks(range(len(feature_names)), feature_names, rotation=45)
plt.tight_layout()
plt.show()
