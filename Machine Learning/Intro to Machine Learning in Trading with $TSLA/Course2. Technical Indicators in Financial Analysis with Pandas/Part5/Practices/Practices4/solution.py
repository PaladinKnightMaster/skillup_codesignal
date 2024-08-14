# import pandas as pd
# import numpy as np
# from datasets import load_dataset
# import matplotlib.pyplot as plt

# # Load Tesla dataset
# dataset = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(dataset['train'])

# # Convert Date column to datetime format and set as index
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
# tesla_df.set_index('Date', inplace=True)

# # TODO: Filter data for the year 2018 and create a copy of the data frame

# # TODO: Calculate VWAP by using the cumulative sum of Volume * Close
# # and dividing by the cumulative sum of the Volume

# # TODO: Visualize VWAP with Close Price
# tesla_df_small[___].plot(figsize=(12, 6), title="TSLA Close Price and VWAP (2018)")
# plt.show()

import pandas as pd
import numpy as np
from datasets import load_dataset
import matplotlib.pyplot as plt

# Load Tesla dataset
dataset = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(dataset['train'])

# Convert Date column to datetime format and set as index
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
tesla_df.set_index('Date', inplace=True)

# Filter data for the year 2018 and create a copy of the data frame
tesla_df_small = tesla_df.loc['2018'].copy()

# Calculate VWAP by using the cumulative sum of Volume * Close
# and dividing by the cumulative sum of the Volume
tesla_df_small['VWAP'] = (np.cumsum(tesla_df_small['Volume'] * tesla_df_small['Close']) /
                          np.cumsum(tesla_df_small['Volume']))

# Visualize VWAP with Close Price
tesla_df_small[['Close', 'VWAP']].plot(figsize=(12, 6), title="TSLA Close Price and VWAP (2018)")
plt.show()
