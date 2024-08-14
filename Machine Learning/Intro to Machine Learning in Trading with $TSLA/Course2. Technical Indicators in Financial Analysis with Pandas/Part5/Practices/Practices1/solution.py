# import pandas as pd
# from datasets import load_dataset
# import matplotlib.pyplot as plt

# # Load Tesla dataset
# dataset = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(dataset['train'])

# # Convert Date column to datetime format and set as index
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
# tesla_df.set_index('Date', inplace=True)

# # Filter data for the year 2018
# tesla_df_small = tesla_df.loc['2018'].copy()

# # Calculating VWAP using np.cumsum
# price_volume_cumsum = (tesla_df_small['Close'] * tesla_df_small['Volume']).cumsum()
# volume_cumsum = tesla_df_small['Volume'].cumsum()
# tesla_df_small['VWAP'] = price_volume_cumsum / volume_cumsum

# # Visualize VWAP with Close Price
# tesla_df_small[['Close', 'VWAP']].plot(figsize=(12, 6), title="TSLA Close Price and VWAP (2018)")
# plt.show()

import pandas as pd
from datasets import load_dataset
import matplotlib.pyplot as plt

# Load Tesla dataset
dataset = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(dataset['train'])

# Convert Date column to datetime format and set as index
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
tesla_df.set_index('Date', inplace=True)

# Filter data for the year 2018
tesla_df_small = tesla_df.loc['2018'].copy()

# Initialize variables to store cumulative price*volume and cumulative volume
cumulative_pv = 0
cumulative_volume = 0

# Initialize an empty list to store VWAP values
vwap_values = []

# Calculate VWAP using a for loop
for i in range(len(tesla_df_small)):
    cumulative_pv += tesla_df_small['Close'].iloc[i] * tesla_df_small['Volume'].iloc[i]
    cumulative_volume += tesla_df_small['Volume'].iloc[i]
    vwap = cumulative_pv / cumulative_volume
    vwap_values.append(vwap)

# Add VWAP column to the DataFrame
tesla_df_small['VWAP'] = vwap_values

# Visualize VWAP with Close Price
tesla_df_small[['Close', 'VWAP']].plot(figsize=(12, 6), title="TSLA Close Price and VWAP (2018)")
plt.show()
