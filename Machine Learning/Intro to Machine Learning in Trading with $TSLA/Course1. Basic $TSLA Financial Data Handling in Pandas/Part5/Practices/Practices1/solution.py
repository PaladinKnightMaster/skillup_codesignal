# import pandas as pd
# import datasets
# import datasets.utils.logging as datasets_logging

# # Load TSLA dataset
# tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices', split='train')
# tesla_df = pd.DataFrame(tesla_data)

# # Convert the Date column to datetime type
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# # Set the Date column as the index
# tesla_df.set_index('Date', inplace=True)

# # Sort the DataFrame based on the index
# tesla_df.sort_index(inplace=True)

# # Filtering data for January 2020
# tesla_jan_2020 = tesla_df.loc['2020-01']
# print("\nTesla stock data for January 2020:", tesla_jan_2020.head())

import pandas as pd
import datasets
import datasets.utils.logging as datasets_logging

# Load TSLA dataset
tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices', split='train')
tesla_df = pd.DataFrame(tesla_data)

# Convert the Date column to datetime type
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# Set the Date column as the index
tesla_df.set_index('Date', inplace=True)

# Sort the DataFrame based on the index
tesla_df.sort_index(inplace=True)

# Filtering data from January 2020 to March 2020
tesla_jan_mar_2020 = tesla_df.loc['2020-01':'2020-03']
print("\nTesla stock data from January 2020 to March 2020:\n", tesla_jan_mar_2020.head())
