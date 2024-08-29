# import pandas as pd
# import datasets

# # Loading the dataset
# data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(data['train'])

# # Creating basic features
# tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
# tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# # TODO: Create a lag feature for the 'Close' column

# # TODO: Drop NaN values to clean the dataset

# # Defining features and the target
# features = tesla_df[['Close_lag1', 'High-Low', 'Price-Open', 'Volume']].values
# target = tesla_df['Close'].values

# # Displaying features and target
# print("Features (first 5 rows):\n", features[:5])
# print("Target (first 5 rows):\n", target[:5])

import pandas as pd
import datasets

# Loading the dataset
data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(data['train'])

# Creating basic features
tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# TODO: Create a lag feature for the 'Close' column
tesla_df['Close_lag1'] = tesla_df['Close'].shift(1)
# TODO: Drop NaN values to clean the dataset
tesla_df.dropna(inplace=True)
# Defining features and the target
features = tesla_df[['Close_lag1', 'High-Low', 'Price-Open', 'Volume']].values
target = tesla_df['Close'].values

# Displaying features and target
print("Features (first 5 rows):\n", features[:5])
print("Target (first 5 rows):\n", target[:5])