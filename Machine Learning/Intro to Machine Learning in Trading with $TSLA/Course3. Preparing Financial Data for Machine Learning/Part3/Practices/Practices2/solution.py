# import pandas as pd
# from sklearn.preprocessing import StandardScaler
# from sklearn.model_selection import train_test_split
# import datasets

# # Load dataset
# data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(data['train'])

# # Feature engineering
# tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
# tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# # Define features and target
# features = tesla_df[['High-Low', 'Price-Open', 'Volume']].values
# target = tesla_df['Close'].values

# # Scale features
# scaler = StandardScaler()
# features_scaled = scaler.fit_transform(features)

# # Split dataset into training and testing sets
# X_train, y_train, X_test, y_test = train_test_split(features_scaled, target, test_size=0.25, random_state=42)

# # Verify splits
# print(f"Training features shape: {X_train.shape}")
# print(f"Testing features shape: {X_test.shape}")

# print(f"First 5 rows of training features:\n{X_train[:5]}")
# print(f"First 5 training targets: {y_train[:5]}\n")

# print(f"First 5 rows of testing features:\n{X_test[:5]}")
# print(f"First 5 testing targets: {y_test[:5]}")

import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import datasets

# Load dataset
data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(data['train'])

# Feature engineering
tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# Define features and target
features = tesla_df[['High-Low', 'Price-Open', 'Volume']].values
target = tesla_df['Close'].values

# Scale features
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)

# Split dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(features_scaled, target, test_size=0.25, random_state=42)

# Verify splits
print(f"Training features shape: {X_train.shape}")
print(f"Testing features shape: {X_test.shape}")

print(f"First 5 rows of training features:\n{X_train[:5]}")
print(f"First 5 training targets: {y_train[:5]}\n")

print(f"First 5 rows of testing features:\n{X_test[:5]}")
print(f"First 5 testing targets: {y_test[:5]}")