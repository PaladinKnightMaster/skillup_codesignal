# import pandas as pd
# import matplotlib.pyplot as plt
# from datasets import load_dataset

# # Load Tesla dataset
# dataset = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(dataset['train'])

# # Convert the 'Date' column to datetime
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# # Set 'Date' as index
# tesla_df.set_index('Date', inplace=True)

# # Sort the data by date
# tesla_df.sort_index(inplace=True)

# # TODO: Calculate 50-day EMA for the Volume

# # Using a smaller date range for better visualization
# tesla_df_small = tesla_df.loc['2018']

# # TODO: Plot the Volume and 50-day EMA

import pandas as pd
import matplotlib.pyplot as plt
from datasets import load_dataset

# Load Tesla dataset
dataset = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(dataset['train'])

# Convert the 'Date' column to datetime
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# Set 'Date' as index
tesla_df.set_index('Date', inplace=True)

# Sort the data by date
tesla_df.sort_index(inplace=True)

# TODO: Calculate 50-day EMA for the Volume
tesla_df['EMA_50'] = tesla_df['Volume'].ewm(span=50, adjust=False).mean()

# Using a smaller date range for better visualization
tesla_df_small = tesla_df.loc['2018']

# TODO: Plot the Volume and 50-day EMA
tesla_df_small[['Volume', 'EMA_50']].plot(figsize=(12, 6), title="TSLA Volume and 50-day EMA (2018)")
plt.show()