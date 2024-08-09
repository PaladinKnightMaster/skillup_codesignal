# import pandas as pd
# from datasets import load_dataset
# import matplotlib.pyplot as plt

# # Load and prepare the Tesla dataset
# dataset = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(dataset['train'])
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
# tesla_df.set_index('Date', inplace=True)

# # Calculate the 20-day Simple Moving Average
# tesla_df['SMA_20'] = tesla_df['Close'].rolling(window=20)

# # Calculate the 20-day Exponential Moving Average
# tesla_df['EMA_20'] = tesla_df['Close'].ewm(span=20, adjust=False)

# # Using a smaller date range for better visualization
# tesla_df_small = tesla_df.loc['2018']

# # Plotting
# tesla_df_small[['SMA_20', 'EMA_20']].plot(figsize=(12, 6), title="TSLA Close Price, SMA 20, and EMA 20 (2018)")
# plt.show()

import pandas as pd
from datasets import load_dataset
import matplotlib.pyplot as plt

# Load and prepare the Tesla dataset
dataset = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(dataset['train'])
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
tesla_df.set_index('Date', inplace=True)

# Calculate the 20-day Simple Moving Average
tesla_df['SMA_20'] = tesla_df['Close'].rolling(window=20).mean()

# Calculate the 20-day Exponential Moving Average
tesla_df['EMA_20'] = tesla_df['Close'].ewm(span=20, adjust=False).mean()

# Using a smaller date range for better visualization
tesla_df_small = tesla_df.loc['2018']

# Plotting
tesla_df_small[['Close', 'SMA_20', 'EMA_20']].plot(figsize=(12, 6), title="TSLA Close Price, SMA 20, and EMA 20 (2018)")
plt.show()
