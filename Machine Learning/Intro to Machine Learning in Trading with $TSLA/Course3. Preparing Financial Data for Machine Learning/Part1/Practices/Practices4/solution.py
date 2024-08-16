# import pandas as pd
# import datasets

# # Load the dataset
# data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(data['train'])

# # TODO: Create the Daily Range Percentage feature (what's the percentage of the highest daily price from the lowest)
# tesla_df['Daily Range %'] = ____

# # Creating the Price Change Percentage feature
# tesla_df['Price Change %'] = (tesla_df['Close'] - tesla_df['Open']) / tesla_df['Open'] * 100

# # TODO: Display the new features of the Tesla dataset

import pandas as pd
import datasets

# Load the dataset
data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(data['train'])

# TODO: Create the Daily Range Percentage feature (what's the percentage of the highest daily price from the lowest)
tesla_df['Daily Range %'] = (tesla_df['High'] - tesla_df['Low']) / tesla_df['Low'] * 100

# Creating the Price Change Percentage feature
tesla_df['Price Change %'] = (tesla_df['Close'] - tesla_df['Open']) / tesla_df['Open'] * 100

# TODO: Display the new features of the Tesla dataset
print(tesla_df[['Daily Range %', 'Price Change %']].head())