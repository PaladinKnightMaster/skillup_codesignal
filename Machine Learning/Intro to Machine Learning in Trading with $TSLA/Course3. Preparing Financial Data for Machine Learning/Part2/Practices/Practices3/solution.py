# import pandas as pd
# from sklearn.preprocessing import StandardScaler
# import datasets

# # Load the dataset
# data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(data['train'])

# # Feature Engineering: creating new features
# tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
# tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# # Defining features
# # Features include new columns and 'Volume' column
# features = ____

# # TODO: Initialize the StandardScaler and scale the features
# scaler = StandardScaler()
# features_scaled = ____

# # Displaying the first few scaled features
# print("Scaled features (first 5 rows):\n", features_scaled[:5])

# # Checking mean values and standard deviations of scaled features
# scaled_means = features_scaled.mean(axis=0)
# scaled_stds = features_scaled.std(axis=0)

# print("\nMean values of scaled features:", scaled_means)
# print("Standard deviations of scaled features:", scaled_stds)

import pandas as pd
from sklearn.preprocessing import StandardScaler
import datasets

# Load the dataset
data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(data['train'])

# Feature Engineering: creating new features
tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# Defining features
# Features include new columns and 'Volume' column
features = tesla_df[['High-Low', 'Price-Open', 'Volume']].values

# TODO: Initialize the StandardScaler and scale the features
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)

# Displaying the first few scaled features
print("Scaled features (first 5 rows):\n", features_scaled[:5])

# Checking mean values and standard deviations of scaled features
scaled_means = features_scaled.mean(axis=0)
scaled_stds = features_scaled.std(axis=0)

print("\nMean values of scaled features:", scaled_means)
print("Standard deviations of scaled features:", scaled_stds)