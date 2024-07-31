# import pandas as pd
# import datasets
# import matplotlib.pyplot as plt

# # Load TSLA dataset
# tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla_data['train'])

# # Convert 'Date' to datetime format and set as index
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
# tesla_df.set_index('Date', inplace=True)

# # TODO: Calculate the 20-day Simple Moving Average for the Close Price

# # Using a smaller date range for better visualization
# tesla_df_small = tesla_df.loc['2018']

# # Plotting
# tesla_df_small[['Close', 'SMA_20']].plot(figsize=(12, 6), title="TSLA Close Price and 20-day SMA (2018)")
# plt.show()

import pandas as pd
import datasets
import matplotlib.pyplot as plt

# Load TSLA dataset
tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla_data['train'])

# Convert 'Date' to datetime format and set as index
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
tesla_df.set_index('Date', inplace=True)

# TODO: Calculate the 20-day Simple Moving Average for the Close Price
tesla_df['SMA_20'] = tesla_df['Close'].rolling(window=20).mean()

# Using a smaller date range for better visualization
tesla_df_small = tesla_df.loc['2018-01-01':'2018-12-31']

# Plotting
tesla_df_small[['Close', 'SMA_20']].plot(figsize=(12, 6), title="TSLA Close Price and 20-day SMA (2018)")
plt.show()