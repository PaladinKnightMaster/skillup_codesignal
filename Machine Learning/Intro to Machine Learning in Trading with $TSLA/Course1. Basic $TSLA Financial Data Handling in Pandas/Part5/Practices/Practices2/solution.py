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

# # Filtering the dataset for the years 2020 to 2022
# tesla_2020_2022 = tesla_df.loc['2020', '2022']
# print(tesla_2020_2022.head())

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

# Filtering the dataset for the years 2020 to 2022
tesla_2020_2022 = tesla_df.loc['2020':'2022']
print(tesla_2020_2022.head())