# import pandas as pd
# from sklearn.preprocessing import StandardScaler
# from sklearn.model_selection import train_test_split
# import datasets

# # Load the dataset
# data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(data['train'])

# # Create new features
# tesla_df['5 Day Moving Avg'] = tesla_df['Close'].rolling(window=5).mean()
# tesla_df['10 Day Moving Avg'] = tesla_df['Close'].rolling(window=10).mean()

# # Define features and target
# # Features include 5-day moving avg, 10-day moving avg, and Volume
# features = ____
# target = tesla_df['Close'].values

# # Scale the features
# scaler = StandardScaler()
# features_scaled = scaler.fit_transform(features)

# # TODO: Split the dataset into training and testing sets, using 25% for testing and random_state of 42

# # Verify splits
# print(f"Training features shape: {____}")
# print(f"Testing features shape: {____}")
# print(f"First 5 rows of training features: \n{X_train[:5]}")
# print(f"First 5 training targets: {y_train[:5]}\n")
# print(f"First 5 rows of testing features: \n{X_test[:5]}")
# print(f"First 5 testing targets: {y_test[:5]}")

import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import datasets

# Load the dataset
data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(data['train'])

# Create new features
tesla_df['5 Day Moving Avg'] = tesla_df['Close'].rolling(window=5).mean()
tesla_df['10 Day Moving Avg'] = tesla_df['Close'].rolling(window=10).mean()

# Define features and target
# Features include 5-day moving avg, 10-day moving avg, and Volume
features = tesla_df[['5 Day Moving Avg', '10 Day Moving Avg', 'Volume']].values
target = tesla_df['Close'].values

# Scale the features
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)

# TODO: Split the dataset into training and testing sets, using 25% for testing and random_state of 42
X_train, X_test, y_train, y_test = train_test_split(features_scaled, target, test_size=0.25, random_state=42)
# Verify splits
print(f"Training features shape: {X_train.shape}")
print(f"Testing features shape: {X_test.shape}")
print(f"First 5 rows of training features: \n{X_train[:5]}")
print(f"First 5 training targets: {y_train[:5]}\n")
print(f"First 5 rows of testing features: \n{X_test[:5]}")
print(f"First 5 testing targets: {y_test[:5]}")