# import pandas as pd
# from datasets import load_dataset
# import matplotlib.pyplot as plt

# # Load and prepare the Tesla dataset
# dataset = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(dataset['train'])

# # TODO: Convert the 'Date' column to `datetime`

# # TODO: Set 'Date' as the index

# # TODO: Calculate the 20-day Simple Moving Average (SMA) for Open prices

# # TODO: Calculate the 20-day Exponential Moving Average (EMA) for Open prices

# # TODO: Subset the data for the year 2018

# # TODO: Plot the opening price along with SMA and EMA for 2018

import pandas as pd
from datasets import load_dataset
import matplotlib.pyplot as plt

# Load and prepare the Tesla dataset
dataset = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(dataset['train'])

# TODO: Convert the 'Date' column to `datetime`
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
# TODO: Set 'Date' as the index
tesla_df.set_index('Date', inplace=True)
# TODO: Calculate the 20-day Simple Moving Average (SMA) for Open prices
tesla_df['SMA_20'] = tesla_df['Open'].rolling(window=20).mean()
# TODO: Calculate the 20-day Exponential Moving Average (EMA) for Open prices
tesla_df['EMA_20'] = tesla_df['Open'].ewm(span=20, adjust=False).mean()
# TODO: Subset the data for the year 2018
tesla_df_small = tesla_df.loc['2018']
# TODO: Plot the opening price along with SMA and EMA for 2018
tesla_df_small[['Open', 'SMA_20', 'EMA_20']].plot(title="TSLA Open Price, SMA 20, and EMA 20 (2018)")
plt.show()