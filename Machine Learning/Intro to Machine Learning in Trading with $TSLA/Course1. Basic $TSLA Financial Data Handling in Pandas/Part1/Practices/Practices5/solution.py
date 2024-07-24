# import pandas as pd
# import datasets

# # TODO: Load the TSLA dataset (`codesignal/tsla-historic-prices`) using the `datasets` library

# # TODO: Create a DataFrame from the loaded dataset

# # TODO: Display the first few rows of the DataFrame

# # TODO: Display the last few rows of the DataFrame
import pandas as pd
import datasets

# TODO: Load the TSLA dataset (`codesignal/tsla-historic-prices`) using the `datasets` library
tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')

# TODO: Create a DataFrame from the loaded dataset
tesla_df = pd.DataFrame(tesla_data['train'])

# TODO: Display the first few rows of the DataFrame
print(tesla_df.head())

# TODO: Display the last few rows of the DataFrame
print(tesla_df.tail())