# import pandas as pd
# import matplotlib.pyplot as plt
# from datasets import load_dataset

# # Load the Tesla dataset
# dataset = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(dataset['train'])

# # Convert 'Date' column to datetime format and set it as the index
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
# tesla_df.set_index('Date', inplace=True)

# # Calculate 50-day and 200-day SMAs
# tesla_df['SMA_50'] = tesla_df['Close'].rolling(window=50).mean()
# tesla_df['SMA_200'] = tesla_df['Close'].rolling(window=200).mean()

# # Identifying the "Golden Cross" and "Death Cross"
# tesla_df['Signal'] = 0  # Default value
# tesla_df.loc[tesla_df['SMA_50'] > tesla_df['SMA_200'], 'Signal'] = 1
# tesla_df.loc[tesla_df['SMA_50'] < tesla_df['SMA_200'], 'Signal'] = -1

# # Creating a column to mark crossover points
# tesla_df['Crossover'] = tesla_df['Signal'].diff()

# # Using a smaller date range for better visualization
# tesla_df_small = tesla_df.loc['2018']

# # Plot with Golden Cross and Death Cross
# fig, ax = plt.subplots(figsize=(12, 6))
# tesla_df_small[['Close', 'SMA_50', 'SMA_200']].plot(ax=ax, title="TSLA with Golden Cross and Death Cross (2018)")

# # TODO: calculate the points for Golden and Death crosses
# crosses = ____
# for idx, row in crosses.iterrows():
#     # TODO: Plot crosses with green (for Golden cross) and red (for Death cross) dots
#     pass

# plt.legend()
# plt.show()

import pandas as pd
import matplotlib.pyplot as plt
from datasets import load_dataset

# Load the Tesla dataset
dataset = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(dataset['train'])

# Convert 'Date' column to datetime format and set it as the index
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
tesla_df.set_index('Date', inplace=True)

# Calculate 50-day and 200-day SMAs
tesla_df['SMA_50'] = tesla_df['Close'].rolling(window=50).mean()
tesla_df['SMA_200'] = tesla_df['Close'].rolling(window=200).mean()

# Identifying the "Golden Cross" and "Death Cross"
tesla_df['Signal'] = 0  # Default value
tesla_df.loc[tesla_df['SMA_50'] > tesla_df['SMA_200'], 'Signal'] = 1
tesla_df.loc[tesla_df['SMA_50'] < tesla_df['SMA_200'], 'Signal'] = -1

# Creating a column to mark crossover points
tesla_df['Crossover'] = tesla_df['Signal'].diff()

# Using a smaller date range for better visualization
tesla_df_small = tesla_df.loc['2018']

# Plot with Golden Cross and Death Cross
fig, ax = plt.subplots(figsize=(12, 6))
tesla_df_small[['Close', 'SMA_50', 'SMA_200']].plot(ax=ax, title="TSLA with Golden Cross and Death Cross (2018)")

# TODO: calculate the points for Golden and Death crosses
crosses = tesla_df_small[tesla_df_small['Crossover'] != 0]
for idx, row in crosses.iterrows():
    # TODO: Plot crosses with green (for Golden cross) and red (for Death cross) dots
    if row['Crossover'] == 1:
        plt.plot(idx, row['SMA_50'], 'go', markersize=10, label='Golden Cross' if 'Golden Cross' not in [text.get_text() for text in ax.get_legend().get_texts()] else "")
    elif row['Crossover'] == -1:
        plt.plot(idx, row['SMA_50'], 'ro', markersize=10, label='Death Cross' if 'Death Cross' not in [text.get_text() for text in ax.get_legend().get_texts()] else "")

plt.legend()
plt.show()