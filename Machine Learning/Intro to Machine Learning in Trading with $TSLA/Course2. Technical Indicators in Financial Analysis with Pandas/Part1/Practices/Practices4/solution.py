# import pandas as pd
# import datasets
# import datetime as dt
# import matplotlib.pyplot as plt

# # Load TSLA dataset
# tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla_data['train'])

# # Convert 'Date' to datetime format and set as index
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
# tesla_df.set_index('Date', inplace=True)

# # Sort the dataset by date
# tesla_df.sort_index(inplace=True)

# # Calculate the 200-day Simple Moving Average for the Close Price
# tesla_df['SMA_200'] = tesla_df['Close'].rolling(window=200).mean()

# # Using a smaller date range for better visualization
# tesla_df_small = tesla_df.loc['2018']

# # TODO: Plot the Close price and SMA_200 on the same chart for visualization

import pandas as pd
import datasets
import datetime as dt
import matplotlib.pyplot as plt

# Load TSLA dataset
tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla_data['train'])

# Convert 'Date' to datetime format and set as index
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
tesla_df.set_index('Date', inplace=True)

# Sort the dataset by date
tesla_df.sort_index(inplace=True)

# Calculate the 200-day Simple Moving Average for the Close Price
tesla_df['SMA_200'] = tesla_df['Close'].rolling(window=200).mean()

# Using a smaller date range for better visualization
tesla_df_small = tesla_df.loc['2018']

# TODO: Plot the Close price and SMA_200 on the same chart for visualization
tesla_df_small[['Close', 'SMA_200']].plot(figsize=(12, 6), title="TSLA Close Price and 200-day SMA (2018)")
plt.show()