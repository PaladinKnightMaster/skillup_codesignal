# import pandas as pd
# import matplotlib.pyplot as plt
# from datasets import load_dataset

# # Load the Tesla dataset
# dataset = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(dataset['train'])

# # Convert 'Date' column to datetime format and set it as the index
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
# tesla_df.set_index('Date', inplace=True)

# # TODO: Calculate 20-day and 50-day SMAs for the 'Volume' column using rolling mean

# # TODO: Identify the "Golden Cross" and "Death Cross" for Volume

# # TODO: Filter the DataFrame for the year 2019

# # TODO: Plot the SMAs along with Volume

# # TODO: Highlight the Golden Cross and Death Cross points

import pandas as pd
import matplotlib.pyplot as plt
from datasets import load_dataset

# Load the Tesla dataset
dataset = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(dataset['train'])

# Convert 'Date' column to datetime format and set it as the index
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
tesla_df.set_index('Date', inplace=True)

# Calculate 20-day and 50-day SMAs
tesla_df['SMA_20'] = tesla_df['Volume'].rolling(window=20).mean()
tesla_df['SMA_50'] = tesla_df['Volume'].rolling(window=50).mean()

# Identifying the "Golden Cross" and "Death Cross"
tesla_df['Signal'] = 0  # Default value
tesla_df.loc[tesla_df['SMA_20'] > tesla_df['SMA_50'], 'Signal'] = 1
tesla_df.loc[tesla_df['SMA_20'] < tesla_df['SMA_50'], 'Signal'] = -1

# Creating a column to mark crossover points
tesla_df['Crossover'] = tesla_df['Signal'].diff()

# Using a smaller date range for better visualization
tesla_df_small = tesla_df.loc['2019']

# Plot with Golden Cross and Death Cross
fig, ax = plt.subplots(figsize=(12, 6))
tesla_df_small[['Volume', 'SMA_20', 'SMA_50']].plot(ax=ax, title="TSLA with Golden Cross and Death Cross (2019)")

# Calculate the points for Golden and Death crosses
crosses = tesla_df_small[tesla_df_small['Crossover'] != 0]
for idx, row in crosses.iterrows():
    # Plot crosses with green (for Golden cross) and red (for Death cross) dots
    if row['Crossover'] == 1:
        plt.plot(idx, row['SMA_20'], 'go', markersize=10, label='Golden Cross' if 'Golden Cross' not in [text.get_text() for text in ax.get_legend().get_texts()] else "")
    elif row['Crossover'] == -1:
        plt.plot(idx, row['SMA_20'], 'ro', markersize=10, label='Death Cross' if 'Death Cross' not in [text.get_text() for text in ax.get_legend().get_texts()] else "")

plt.legend()
plt.show()
