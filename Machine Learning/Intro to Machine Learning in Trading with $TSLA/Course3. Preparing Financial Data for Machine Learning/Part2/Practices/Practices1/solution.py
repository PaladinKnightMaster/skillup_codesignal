# import pandas as pd
# import datasets
# from sklearn.preprocessing import StandardScaler

# # Load the dataset
# data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(data['train'])

# # Feature Engineering: creating new features
# tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
# tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# # Defining features
# features = tesla_df[['High-Low', 'Price-Open', 'Volume']].values

# # Scaling
# scaler = StandardScaler()
# features_scaled = scaler.fit_transform(features)

# # Displaying the first few scaled features
# print("Scaled features (first 5 rows):\n", features_scaled[:5])

# # Checking mean values and standard deviations of scaled features
# scaled_means = features_scaled.mean(axis=0)
# scaled_stds = features_scaled.std(axis=0)

# print("\nMean values of scaled features:", scaled_means)
# print("Standard deviations of scaled features:", scaled_stds)

import pandas as pd
import datasets
from sklearn.preprocessing import StandardScaler

# Load the dataset
data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(data['train'])

# Feature Engineering: creating new features
tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# Scaling only the Volume feature
scaler = StandardScaler()
tesla_df['Volume_Scaled'] = scaler.fit_transform(tesla_df[['Volume']])

# Displaying the first few rows with the new scaled feature
print("Dataset with scaled Volume (first 5 rows):\n", tesla_df[['High-Low', 'Price-Open', 'Volume', 'Volume_Scaled']].head())

# Checking mean value and standard deviation of the scaled Volume feature
volume_scaled_mean = tesla_df['Volume_Scaled'].mean()
volume_scaled_std = tesla_df['Volume_Scaled'].std()

print("\nMean value of scaled Volume:", volume_scaled_mean)
print("Standard deviation of scaled Volume:", volume_scaled_std)
