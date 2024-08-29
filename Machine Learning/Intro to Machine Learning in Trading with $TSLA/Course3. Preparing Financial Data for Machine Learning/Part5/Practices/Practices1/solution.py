# import pandas as pd
# import datasets

# # Load the dataset
# data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(data['train'])

# # Create basic features
# tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
# tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# # Create a lag feature
# tesla_df['Close_lag1'] = tesla_df['Close'].shift(1)

# # Drop NaN values resulting from the lag feature
# tesla_df.dropna(inplace=True)

# # Define features and the target
# features = tesla_df[['Close_lag1', 'High-Low', 'Price-Open', 'Volume']].values
# target = tesla_df['Close'].values

# # Display the first 5 rows of features and target
# print("Features (first 5 rows):\n", features[:5])
# print("Target (first 5 rows):\n", target[:5])

import pandas as pd
import datasets

# Load the dataset
data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(data['train'])

# Create basic features
tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']
tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# Create a lag feature
tesla_df['Close_lag2'] = tesla_df['Close'].shift(2)

# Drop NaN values resulting from the lag feature
tesla_df.dropna(inplace=True)

# Define features and the target
features = tesla_df[['Close_lag2', 'High-Low', 'Price-Open', 'Volume']].values
target = tesla_df['Close'].values

# Display the first 5 rows of features and target
print("Features (first 5 rows):\n", features[:5])
print("Target (first 5 rows):\n", target[:5])