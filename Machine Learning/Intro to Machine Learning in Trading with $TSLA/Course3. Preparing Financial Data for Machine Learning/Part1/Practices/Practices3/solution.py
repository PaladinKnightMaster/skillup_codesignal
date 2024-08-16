# import pandas as pd
# import datasets

# # Load the dataset
# data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(data['train'])

# # TODO: Create the High-Low feature by subtracting the 'Low' price from the 'High' price
# tesla_df['High-Low'] = ___

# # Create the Price-Open feature
# tesla_df['Price-Open'] = ___

# # Display the new features
# print(tesla_df[['High-Low', 'Price-Open']].head())

import pandas as pd
import datasets

# Load the dataset
data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(data['train'])

# TODO: Create the High-Low feature by subtracting the 'Low' price from the 'High' price
tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']

# Create the Price-Open feature
tesla_df['Price-Open'] = tesla_df['Close'] - tesla_df['Open']

# Display the new features
print(tesla_df[['High-Low', 'Price-Open']].head())