# import pandas as pd
# import datasets

# # Step 1: Load TSLA dataset
# tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla_data['train'])

# # Step 2: Convert the Date column to datetime type
# tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# # Step 3: Set the Date column as the index
# tesla_df.set_index('Date', inplace=True)

# # Step 4: Sort the DataFrame based on the index
# tesla_df.sort_index(ascending=True, inplace=True)

# # Step 5: Display the first few rows to verify the changes
# print(tesla_df.head())

import pandas as pd
import datasets

# Step 1: Load TSLA dataset
tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla_data['train'])

# Step 2: Convert the Date column to datetime type
tesla_df['Date'] = pd.to_datetime(tesla_df['Date'])

# Step 3: Set the Date column as the index
tesla_df.set_index('Date', inplace=True)

# Step 4: Sort the DataFrame based on the index
tesla_df.sort_index(ascending=False, inplace=True)

# Step 5: Display the first few rows to verify the changes
print(tesla_df.head())