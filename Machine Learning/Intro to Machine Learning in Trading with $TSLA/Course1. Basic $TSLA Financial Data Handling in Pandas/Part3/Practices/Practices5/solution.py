# import pandas as pd
# import datasets

# # TODO: Load the Tesla stock dataset and save it as a DataFrame

# # TODO: Convert the 'Date' column to datetime type

# # TODO: Set the 'Date' column as the index

# # TODO: Sort the DataFrame based on the index

# # TODO: Display the first few rows to verify the changes

import pandas as pd
import datasets

# TODO: Load the Tesla stock dataset and save it as a DataFrame

tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')

# TODO: Convert the 'Date' column to datetime type

tesla_df = pd.DataFrame(tesla_data['train'])

tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# TODO: Set the 'Date' column as the index

tesla_df.set_index('Date', inplace=True)

# TODO: Sort the DataFrame based on the index

tesla_df.sort_index(inplace=True)

# TODO: Display the first few rows to verify the changes

print(tesla_df.head())