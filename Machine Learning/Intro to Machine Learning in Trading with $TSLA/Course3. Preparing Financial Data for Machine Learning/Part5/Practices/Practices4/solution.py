# import pandas as pd
# import datasets

# # TODO: Load the Tesla stock dataset 'codesignal/tsla-historic-prices' using the `datasets` library

# # TODO: Add basic features 'Daily_Return' and 'Volatility' to the DataFrame
# # 'Daily_Return' is the difference between the Close price and the Open price
# # 'Volatility' is the difference between the highest and the lowest price

# # TODO: Create a new lag feature 'Volume_lag1' for the 'Volume' column shifted by one day

# # TODO: Handle NaN values resulting from lag feature creation

# # TODO: Define the features and target variables for the dataset
# # Features will include 'Volume_lag1', 'Daily_Return', and 'Volatility'
# # The target will include 'Close' prices

# # TODO: Print the first 5 rows of features and target variables to verify

import pandas as pd
import datasets

# TODO: Load the Tesla stock dataset 'codesignal/tsla-historic-prices' using the `datasets` library
data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(data['train'])
# TODO: Add basic features 'Daily_Return' and 'Volatility' to the DataFrame
# 'Daily_Return' is the difference between the Close price and the Open price
# 'Volatility' is the difference between the highest and the lowest price
tesla_df['Daily_Return'] = tesla_df['Close'] - tesla_df['Open']
tesla_df['Volatility'] = tesla_df['High'] - tesla_df['Low']
# TODO: Create a new lag feature 'Volume_lag1' for the 'Volume' column shifted by one day
tesla_df['Volume_lag1'] = tesla_df['Volume'].shift(1)
# TODO: Handle NaN values resulting from lag feature creation
tesla_df.dropna(inplace=True)
# TODO: Define the features and target variables for the dataset
# Features will include 'Volume_lag1', 'Daily_Return', and 'Volatility'
# The target will include 'Close' prices
features = tesla_df[['Volume_lag1', 'Daily_Return', 'Volatility']].values
target = tesla_df['Close'].values
# TODO: Print the first 5 rows of features and target variables to verify
print("Features (first 5 rows):\n", features[:5])
print("Target (first 5 rows):\n", target[:5])