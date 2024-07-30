# import pandas as pd
# import datasets

# # Load TSLA dataset
# tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla_data['train'])

# # Convert the Date column to datetime type
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# # Set the Date column as the index
# tesla_df.set_index('Date', inplace=True)

# # TODO: Filter data for TSLA prices only in Q4 of 2019 (Oct 2019 - Dec 2019)
# # Print the first few rows

import pandas as pd
import datasets

# Load TSLA dataset
tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla_data['train'])

# Convert the Date column to datetime type
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# Set the Date column as the index
tesla_df.set_index('Date', inplace=True)

# TODO: Filter data for TSLA prices only in Q4 of 2019 (Oct 2019 - Dec 2019)
# Print the first few rows
tesla_2019_q4 = tesla_df.loc['2019-10':'2019-12']
print(tesla_2019_q4.head())