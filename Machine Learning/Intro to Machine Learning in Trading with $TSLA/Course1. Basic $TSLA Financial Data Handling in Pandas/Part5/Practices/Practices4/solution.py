# import pandas as pd
# import datasets

# # Load TSLA dataset
# tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla_data['train'])

# # Convert the Date column to datetime type
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# # Set the Date column as the index
# tesla_df.set_index('Date', inplace=True)

# # Sort the DataFrame based on the index
# tesla_df.sort_index(inplace=True)

# # TODO: Filter the dataset for the years 2018, 2019, 2020
# print(tesla_2018_2020.head())

import pandas as pd
import datasets

# Load TSLA dataset
tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla_data['train'])

# Convert the Date column to datetime type
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# Set the Date column as the index
tesla_df.set_index('Date', inplace=True)

# Sort the DataFrame based on the index
tesla_df.sort_index(inplace=True)

# TODO: Filter the dataset for the years 2018, 2019, 2020
tesla_2018_2020 = tesla_df.loc['2018':'2020']
print(tesla_2018_2020.head())