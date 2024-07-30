# import pandas as pd
# import datasets

# # TODO: Load the Tesla (TSLA) dataset `codesignal/tsla-historic-prices` and create a DataFrame

# # TODO: Convert the 'Date' column to datetime type to handle date calculations

# # TODO: Set the converted 'Date' column as the DataFrame index to facilitate date-based querying

# # TODO: Sort the DataFrame based on the date index to ensure it's ordered chronologically

# # TODO: Filter the DataFrame to get data from January 2020 to March 2020 (Q1) and print the first few rows

import pandas as pd
import datasets

# TODO: Load the Tesla (TSLA) dataset `codesignal/tsla-historic-prices` and create a DataFrame
tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla_data['train'])

# TODO: Convert the 'Date' column to datetime type to handle date calculations
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# TODO: Set the converted 'Date' column as the DataFrame index to facilitate date-based querying
tesla_df.set_index('Date', inplace=True)

# TODO: Sort the DataFrame based on the date index to ensure it's ordered chronologically
tesla_df.sort_index(inplace=True)

# TODO: Filter the DataFrame to get data from January 2020 to March 2020 (Q1) and print the first few rows
tesla_2020_q1 = tesla_df.loc['2020-01-01':'2020-03-31']
print(tesla_2020_q1.head())