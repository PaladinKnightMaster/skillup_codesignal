# import pandas as pd
# import matplotlib.pyplot as plt
# from datasets import load_dataset

# # Step 1: Load and prepare the Tesla dataset
# dataset = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(dataset['train'])
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
# tesla_df.set_index('Date', inplace=True)

# # Step 2: Calculate the 200-day SMA and EMA
# # TODO: Calculate the 200-day SMA for the Volume
# # TODO: Calculate the 200-day EMA for the Volume

# # Step 3: Focus on data from the year 2018 for better visualization
# tesla_df_small = tesla_df.loc['2018']

# # Step 4: Plot the Volume along with SMA and EMA
# plt.figure(figsize=(12, 6))
# tesla_df_small[['Volume', 'SMA_200', 'EMA_200']].plot(title="TSLA Close Price, SMA 200, and EMA 200 (2018)")
# plt.show()

import pandas as pd
import matplotlib.pyplot as plt
from datasets import load_dataset

# Step 1: Load and prepare the Tesla dataset
dataset = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(dataset['train'])
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
tesla_df.set_index('Date', inplace=True)

# Step 2: Calculate the 200-day SMA and EMA
# TODO: Calculate the 200-day SMA for the Volume
tesla_df['SMA_200'] = tesla_df['Volume'].rolling(window=200).mean()
# TODO: Calculate the 200-day EMA for the Volume
tesla_df['EMA_200'] = tesla_df['Volume'].ewm(span=200, adjust=False).mean()

# Step 3: Focus on data from the year 2018 for better visualization
tesla_df_small = tesla_df.loc['2018']

# Step 4: Plot the Volume along with SMA and EMA
plt.figure(figsize=(12, 6))
tesla_df_small[['Volume', 'SMA_200', 'EMA_200']].plot(title="TSLA Close Price, SMA 200, and EMA 200 (2018)")
plt.show()