# import pandas as pd
# from sklearn.preprocessing import StandardScaler
# import datasets

# # Load the Tesla stock dataset
# data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(data['train'])

# # Feature Engineering: creating new features
# # TODO: Create a new feature with a value corresponding to a daily price change
# tesla_df['Daily_Change'] = ____
# # TODO: Create a new feature with a value equals to mean price during the day
# tesla_df['Mean_Price'] = ____

# # Defining features
# features = tesla_df[['Daily_Change', 'Mean_Price', 'Volume', 'Open']].values

# # Scaling the features
# scaler = StandardScaler()
# features_scaled = scaler.fit_transform(features)

# # Displaying the first few scaled features
# print("Scaled features (first 5 rows):\n", features_scaled[:5])

# # TODO: Check mean values and standard deviations of scaled features
# scaled_means = ____
# scaled_stds = ____

# print("\nMean values of scaled features:", scaled_means)
# print("Standard deviations of scaled features:", scaled_stds)

import pandas as pd
from sklearn.preprocessing import StandardScaler
import datasets

# Load the Tesla stock dataset
data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(data['train'])

# Feature Engineering: creating new features
# TODO: Create a new feature with a value corresponding to a daily price change
tesla_df['Daily_Change'] = tesla_df['Close'] - tesla_df['Open']
# TODO: Create a new feature with a value equals to mean price during the day
tesla_df['Mean_Price'] = (tesla_df['High'] + tesla_df['Low']) / 2

# Defining features
features = tesla_df[['Daily_Change', 'Mean_Price', 'Volume', 'Open']].values

# Scaling the features
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)

# Displaying the first few scaled features
print("Scaled features (first 5 rows):\n", features_scaled[:5])

# TODO: Check mean values and standard deviations of scaled features
scaled_means = features_scaled.mean(axis=0)
scaled_stds = features_scaled.std(axis=0)

print("\nMean values of scaled features:", scaled_means)
print("Standard deviations of scaled features:", scaled_stds)