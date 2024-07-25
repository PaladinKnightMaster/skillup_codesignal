# import pandas as pd
# import datasets

# # Load TSLA dataset
# tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla_data['train'])

# # Convert the Date column to datetime type and set as index
# tesla_df.set_index('Date', inplace=True)
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# # Sort the DataFrame based on the index
# tesla_df.sort_index(inplace=True)

# # Display the first few rows to verify the changes
# print(tesla_df.head())

import pandas as pd
import datasets

# Load TSLA dataset
tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla_data['train'])

# Convert the Date column to datetime type and set as index
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])
tesla_df.set_index('Date', inplace=True)

# Sort the DataFrame based on the index
tesla_df.sort_index(inplace=True)

# Display the first few rows to verify the changes
print(tesla_df.head())