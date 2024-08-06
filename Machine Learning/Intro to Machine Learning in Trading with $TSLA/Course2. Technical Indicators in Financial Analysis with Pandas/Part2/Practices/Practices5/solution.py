# import pandas as pd
# import matplotlib.pyplot as plt
# from datasets import load_dataset

# # Load the Tesla dataset
# dataset = load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(dataset['train'])

# # TODO: Convert the 'Date' column to datetime

# # TODO: Set 'Date' as the index

# # TODO: Sort the data by date

# # TODO: Calculate the 50-day Exponential Moving Average (EMA) for the Open Price

# # TODO: Narrow the data to the year 2018 for better visualization

# # TODO: Plot the Open Price and 50-day EMA for 2018

import pandas as pd
import matplotlib.pyplot as plt
from datasets import load_dataset

# Load the Tesla dataset
dataset = load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(dataset['train'])

# TODO: Convert the 'Date' column to datetime
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# TODO: Set 'Date' as the index
tesla_df.set_index('Date', inplace=True)

# TODO: Sort the data by date
tesla_df.sort_index(inplace=True)

# TODO: Calculate the 50-day Exponential Moving Average (EMA) for the Open Price
tesla_df['EMA_50'] = tesla_df['Open'].ewm(span=50, adjust=False).mean()

# TODO: Narrow the data to the year 2018 for better visualization
tesla_df_small = tesla_df.loc['2018']

# TODO: Plot the Open Price and 50-day EMA for 2018
tesla_df_small[['Open', 'EMA_50']].plot(figsize=(12, 6), title="TSLA Open Price and 50-day EMA (2018)")
plt.show()