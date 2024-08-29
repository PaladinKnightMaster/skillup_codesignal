# import pandas as pd
# import datasets

# # Loading the dataset (revision)
# data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(data['train'])

# # Creating basic features (revision)
# tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
# tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# # Creating a lag feature
# tesla_df['Close_lag1'] = tesla_df['Close'].shift(-1)

# # Dropping NaN values
# tesla_df.dropna(inplace=True)

# # Defining features and the target
# features = tesla_df[['Close_lag1', 'High-Low', 'Price-Open', 'Volume']].values
# target = tesla_df['Close'].values

# # Displaying features and target
# print("Features (first 5 rows):\n", features[:5])
# print("Target (first 5 rows):\n", target[:5])

import pandas as pd
import datasets

# Loading the dataset (revision)
data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(data['train'])

# Creating basic features (revision)
tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# Creating a lag feature
tesla_df['Close_lag1'] = tesla_df['Close'].shift(1)

# Dropping NaN values
tesla_df.dropna(inplace=True)

# Defining features and the target
features = tesla_df[['Close_lag1', 'High-Low', 'Price-Open', 'Volume']].values
target = tesla_df['Close'].values

# Displaying features and target
print("Features (first 5 rows):\n", features[:5])
print("Target (first 5 rows):\n", target[:5])