# import pandas as pd
# import matplotlib.pyplot as plt
# from datasets import load_dataset
# from sklearn.model_selection import cross_val_score
# from sklearn.ensemble import GradientBoostingRegressor
# from sklearn.preprocessing import StandardScaler

# # Load dataset
# tesla = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla['train'])

# # Preprocess data
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
# tesla_df['Rolling_Mean_5'] = tesla_df['Adj Close'].rolling(window=5).mean()
# tesla_df['Rolling_Std_5'] = tesla_df['Adj Close'].rolling(window=5).std()
# tesla_df['Rolling_Mean_20'] = tesla_df['Adj Close'].rolling(window=20).mean()
# tesla_df.dropna(inplace=True)

# # Select features and target
# features = tesla_df[['Open', 'High', 'Low', 'Close', 'Volume', 'Rolling_Mean_5', 'Rolling_Std_5', 'Rolling_Mean_20']].values
# target = tesla_df['Adj Close'].shift(-1).dropna().values
# features = features[:-1]  # Align features and target

# # TODO: Standardize features

# # TODO: Instantiate model using GradientBoostingRegressor

# # TODO: Perform cross-validation with 5 folds

# # TODO: Fit model and generate predictions
# predictions = ____

# # Plotting predictions vs actual values
# plt.figure(figsize=(10, 6))
# plt.scatter(range(len(target)), target, label='Actual', alpha=0.7)
# plt.scatter(range(len(target)), predictions, label='Predicted', alpha=0.7)
# plt.title('Actual vs Predicted Values with Cross-Validation')
# plt.xlabel('Sample Index')
# plt.ylabel('Value')
# plt.legend()
# plt.show()

import pandas as pd
import matplotlib.pyplot as plt
from datasets import load_dataset
from sklearn.model_selection import cross_val_score
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.preprocessing import StandardScaler

# Load dataset
tesla = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla['train'])

# Preprocess data
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
tesla_df['Rolling_Mean_5'] = tesla_df['Adj Close'].rolling(window=5).mean()
tesla_df['Rolling_Std_5'] = tesla_df['Adj Close'].rolling(window=5).std()
tesla_df['Rolling_Mean_20'] = tesla_df['Adj Close'].rolling(window=20).mean()
tesla_df.dropna(inplace=True)

# Select features and target
features = tesla_df[['Open', 'High', 'Low', 'Close', 'Volume', 'Rolling_Mean_5', 'Rolling_Std_5', 'Rolling_Mean_20']].values
target = tesla_df['Adj Close'].shift(-1).dropna().values
features = features[:-1]  # Align features and target

# TODO: Standardize features
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)
# TODO: Instantiate model using GradientBoostingRegressor
model = GradientBoostingRegressor(n_estimators=100, learning_rate=0.1, max_depth=3, random_state=42)
# TODO: Perform cross-validation with 5 folds
score = cross_val_score(model, features_scaled, target, cv=5).mean()
# TODO: Fit model and generate predictions
predictions = model.fit(features_scaled, target).predict(features_scaled)

# Plotting predictions vs actual values
plt.figure(figsize=(10, 6))
plt.scatter(range(len(target)), target, label='Actual', alpha=0.7)
plt.scatter(range(len(target)), predictions, label='Predicted', alpha=0.7)
plt.title('Actual vs Predicted Values with Cross-Validation')
plt.xlabel('Sample Index')
plt.ylabel('Value')
plt.legend()
plt.show()