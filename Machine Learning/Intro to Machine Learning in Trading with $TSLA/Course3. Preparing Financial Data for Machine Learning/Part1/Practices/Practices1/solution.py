# import pandas as pd
# import datasets

# # Load the dataset
# data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(data['train'])

# # Creating the High-Low feature
# tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']

# # Displaying the new features
# print(tesla_df[['High-Low']].head())

import pandas as pd
import datasets

# Load the dataset
data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(data['train'])

# Creating the High-Low feature
tesla_df['High-Low'] = tesla_df['High'] - tesla_df['Low']

# Creating the Daily_Change feature
tesla_df['Daily_Change'] = tesla_df['Close'] - tesla_df['Open']

# Displaying the new features
print(tesla_df[['High-Low', 'Daily_Change']].head())
