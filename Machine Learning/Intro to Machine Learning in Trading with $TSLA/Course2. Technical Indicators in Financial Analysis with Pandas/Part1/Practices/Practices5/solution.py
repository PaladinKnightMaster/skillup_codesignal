# import pandas as pd
# import matplotlib.pyplot as plt
# import datasets

# # Load TSLA dataset
# tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla_data['train'])

# # TODO: Convert 'Date' to datetime format and set as index

# # TODO: Sort the dataset by date

# # TODO: Calculate the 20-day Simple Moving Average for the Close Price

# # Using a smaller date range for better visualization
# tesla_df_small = tesla_df.loc['2018']

# # TODO: Plot the Close price and 20-day SMA on the same chart

import pandas as pd
import matplotlib.pyplot as plt
import datasets

# Load TSLA dataset
tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla_data['train'])

# TODO: Convert 'Date' to datetime format and set as index
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
tesla_df.set_index('Date', inplace=True)

# TODO: Sort the dataset by date
tesla_df.sort_index(inplace=True)

# TODO: Calculate the 20-day Simple Moving Average for the Close Price
tesla_df['SMA_20'] = tesla_df['Close'].rolling(window=20).mean()

# Using a smaller date range for better visualization
tesla_df_small = tesla_df.loc['2018']

# TODO: Plot the Close price and 20-day SMA on the same chart
tesla_df_small[['Close', 'SMA_20']].plot(figsize=(12, 6), title="TSLA Close Price and 20-day SMA (2018)")
plt.show()