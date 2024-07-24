# import pandas as pd
# import datasets

# # TODO: Load the Tesla (TSLA) dataset `codesignal/tsla-historic-prices` using 'datasets'

# # TODO: Convert the loaded dataset into a DataFrame

# # TODO: Print basic information about the dataset

# # TODO: Display summary statistics of the DataFrame

import pandas as pd
import datasets

# TODO: Load the Tesla (TSLA) dataset `codesignal/tsla-historic-prices` using 'datasets'
tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')

# TODO: Convert the loaded dataset into a DataFrame
tesla_df = pd.DataFrame(tesla_data['train'])

# TODO: Print basic information about the dataset
print(tesla_df.info())

# TODO: Display summary statistics of the DataFrame
print(tesla_df.describe())