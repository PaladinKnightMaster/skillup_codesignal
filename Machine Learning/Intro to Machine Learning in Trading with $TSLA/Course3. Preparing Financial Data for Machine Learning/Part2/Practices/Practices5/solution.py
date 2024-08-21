# import pandas as pd
# import datasets
# from sklearn.preprocessing import StandardScaler

# # TODO: Load the Tesla dataset using `datasets.load_dataset`
# # TODO: Convert the dataset to a pandas DataFrame

# # TODO: Create new features: 'Volatility' and 'Daily_Average'
# # Volatility represents the price fluctuation daily range relative to the opening price.
# # Daily_Average represents the average of the daily high and low prices.

# # TODO: Define the features from the DataFrame
# # The features will include Volatility, Daily_Average, and Volume

# # TODO: Initialize the StandardScaler and scale the features

# # TODO: Print the first 5 rows of the scaled features

# # TODO: Check and print the mean values and standard deviations of the scaled features

import pandas as pd
import datasets
from sklearn.preprocessing import StandardScaler

# TODO: Load the Tesla dataset using `datasets.load_dataset`
data = datasets.load_dataset('codesignal/tsla-historic-prices')
# TODO: Convert the dataset to a pandas DataFrame
tesla_df = pd.DataFrame(data['train'])

# TODO: Create new features: 'Volatility' and 'Daily_Average'
# Volatility represents the price fluctuation daily range relative to the opening price.
# Daily_Average represents the average of the daily high and low prices.
tesla_df['Volatility'] = (tesla_df['High'] - tesla_df['Low']) / tesla_df['Open']
tesla_df['Daily_Average'] = (tesla_df['High'] + tesla_df['Low']) / 2

# TODO: Define the features from the DataFrame
# The features will include Volatility, Daily_Average, and Volume
features = tesla_df[['Volatility', 'Daily_Average', 'Volume']].values

# TODO: Initialize the StandardScaler and scale the features
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)
# TODO: Print the first 5 rows of the scaled features
print("Scaled features (first 5 rows):\n", features_scaled[:5])
# TODO: Check and print the mean values and standard deviations of the scaled features
scaled_means = features_scaled.mean(axis=0)
scaled_stds = features_scaled.std(axis=0)
print("\nMean values of scaled features:", scaled_means)
print("Standard deviations of scaled features:", scaled_stds)