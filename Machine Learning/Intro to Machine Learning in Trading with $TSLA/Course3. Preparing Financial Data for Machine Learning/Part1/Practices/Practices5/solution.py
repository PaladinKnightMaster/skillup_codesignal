# import pandas as pd
# import datasets

# # TODO: Load the dataset 'codesignal/tsla-historic-prices' and transform it into a DataFrame

# # TODO: Create the Close-Low feature (Close price minus Low price)

# # TODO: Create the Adj-Open feature (Adj Close price minus Open price)

# # TODO: Print the first 5 rows of the new features 'Close-Low' and 'Adj-Open'

import pandas as pd
import datasets

# TODO: Load the dataset 'codesignal/tsla-historic-prices' and transform it into a DataFrame
data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(data['train'])
# TODO: Create the Close-Low feature (Close price minus Low price)
tesla_df['Close-Low'] = tesla_df['Close'] - tesla_df['Low']
# TODO: Create the Adj-Open feature (Adj Close price minus Open price)
tesla_df['Adj-Open'] = tesla_df['Adj Close'] - tesla_df['Open']
# TODO: Print the first 5 rows of the new features 'Close-Low' and 'Adj-Open'
print(tesla_df[['Close-Low', 'Adj-Open']].head())