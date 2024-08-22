# import pandas as pd
# from sklearn.preprocessing import StandardScaler
# from sklearn.model_selection import train_test_split
# import datasets

# # Loading and preprocessing the dataset (revision)
# data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(data['train'])
# tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
# tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# # Defining features and target
# features = tesla_df[['High-Low', 'Price-Open', 'Volume']].values
# target = tesla_df['Close'].values

# # Scaling
# scaler = StandardScaler()
# # TODO: Fit and transform the features using StandardScaler
# features_scaled = ____

# # Splitting the dataset
# # TODO: Split the preprocessed features and target into training
# X_train, X_test, y_train, y_test = ____

# # Verify splits
# print(f"Training features shape: {X_train.shape}")
# print(f"Testing features shape: {X_test.shape}")

# print(f"First 5 rows of training features: \n{X_train[:5]}")
# print(f"First 5 training targets: {y_train[:5]}\n")

# print(f"First 5 rows of testing features: \n{X_test[:5]}")
# print(f"First 5 testing targets: {y_test[:5]}")

import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import datasets

# Loading and preprocessing the dataset (revision)
data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(data['train'])
tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# Defining features and target
features = tesla_df[['High-Low', 'Price-Open', 'Volume']].values
target = tesla_df['Close'].values

# Scaling
scaler = StandardScaler()
# TODO: Fit and transform the features using StandardScaler
features_scaled = scaler.fit_transform(features)

# Splitting the dataset
# TODO: Split the preprocessed features and target into training
X_train, X_test, y_train, y_test = train_test_split(features_scaled, target, test_size=0.3, random_state=42)

# Verify splits
print(f"Training features shape: {X_train.shape}")
print(f"Testing features shape: {X_test.shape}")

print(f"First 5 rows of training features: \n{X_train[:5]}")
print(f"First 5 training targets: {y_train[:5]}\n")

print(f"First 5 rows of testing features: \n{X_test[:5]}")
print(f"First 5 testing targets: {y_test[:5]}")