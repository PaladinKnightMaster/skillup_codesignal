# import pandas as pd
# import datasets

# # Load TSLA dataset
# tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla_data['train'])

# # TODO: Convert the Date column to datetime type and set as index
# tesla_df['Date'] = pd.to_datetime(___)
# tesla_df.set_index(___, inplace=True)

# # TODO: Sort the DataFrame based on the index
# tesla_df.sort_index(______)

# # Display the first few rows to verify the changes
# print(tesla_df.head())

import pandas as pd
import datasets

# Load TSLA dataset
tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla_data['train'])

# TODO: Convert the Date column to datetime type and set as index
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
tesla_df.set_index('Date', inplace=True)

# TODO: Sort the DataFrame based on the index
tesla_df.sort_index(ascending=False, inplace=True)

# Display the first few rows to verify the changes
print(tesla_df.head())