# import pandas as pd
# import datasets
# import matplotlib.pyplot as plt

# # Load TSLA dataset
# tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla_data['train'])

# # Convert 'Date' to datetime format and set as index
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
# tesla_df.set_index('Date', inplace=True)

# # Sort the dataset by date
# tesla_df.sort_index(inplace=True)

# # Calculate the 20-day Simple Moving Average for the Close Price
# tesla_df['SMA_20'] = tesla_df['Close'].rolling(window=20).mean()

# # Using a smaller date range for better visualization
# tesla_df_small = tesla_df.loc['2018']

# # Plotting
# tesla_df_small[['Close', 'SMA_20']].plot(figsize=(12, 6), title="TSLA Close Price and 20-day SMA (2018)")
# plt.show()

# # Print first few rows of the dataframe to check the SMA calculations
# print(tesla_df_small.head())

import pandas as pd
import datasets
import matplotlib.pyplot as plt

# Load TSLA dataset
tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla_data['train'])

# Convert 'Date' to datetime format and set as index
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
tesla_df.set_index('Date', inplace=True)

# Sort the dataset by date
tesla_df.sort_index(inplace=True)

# Calculate the 10-day Simple Moving Average for the Close Price
tesla_df['SMA_10'] = tesla_df['Close'].rolling(window=10).mean()

# Using a smaller date range for better visualization
tesla_df_small = tesla_df.loc['2018']

# Plotting
tesla_df_small[['Close', 'SMA_10']].plot(figsize=(12, 6), title="TSLA Close Price and 10-day SMA (2018)")
plt.show()

# Print first few rows of the dataframe to check the SMA calculations
print(tesla_df_small.head())