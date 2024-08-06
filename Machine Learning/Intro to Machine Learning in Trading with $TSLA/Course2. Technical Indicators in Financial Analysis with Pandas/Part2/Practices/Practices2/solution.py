# import pandas as pd
# import matplotlib.pyplot as plt
# from datasets import load_dataset

# # Load the Tesla dataset
# dataset = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(dataset['train'])

# # Convert the 'Date' column to datetime and set it as index
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
# tesla_df.set_index('Date', inplace=True)

# # Sort the data by date
# tesla_df.sort_index(inplace=True)

# # Calculate the 20-day Exponential Moving Average for the Close Price
# tesla_df['EMA_20'] = tesla_df['Close'].rolling(span=20, adjust=False).mean()

# # Using a smaller date range for better visualization (2018)
# tesla_df_small = tesla_df.loc['2018']

# # Plotting the Close Prices and the 20-day EMA
# tesla_df_small['Close', 'EMA_20'].plot(figsize=(12, 6), title="TSLA Close Price and 20-day EMA (2018)")
# plt.show()

import pandas as pd
import matplotlib.pyplot as plt
from datasets import load_dataset

# Load the Tesla dataset
dataset = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(dataset['train'])

# Convert the 'Date' column to datetime and set it as index
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
tesla_df.set_index('Date', inplace=True)

# Sort the data by date
tesla_df.sort_index(inplace=True)

# Calculate the 20-day Exponential Moving Average for the Close Price
tesla_df['EMA_20'] = tesla_df['Close'].ewm(span=20, adjust=False).mean()

# Using a smaller date range for better visualization (2018)
tesla_df_small = tesla_df.loc['2018']

# Plotting the Close Prices and the 20-day EMA
tesla_df_small[['Close', 'EMA_20']].plot(figsize=(12, 6), title="TSLA Close Price and 20-day EMA (2018)")
plt.show()