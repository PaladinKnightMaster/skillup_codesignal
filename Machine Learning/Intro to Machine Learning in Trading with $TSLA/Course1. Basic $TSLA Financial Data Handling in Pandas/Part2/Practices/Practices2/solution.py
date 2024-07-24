# import pandas as pd
# import datasets

# # Load TSLA dataset
# tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
# tesla_df = pd.DataFrame(tesla_data['train'])

# # Print basic information about the dataset
# print("\nBasic information about the Tesla DataFrame:")
# # TODO: Add code to print basic information about the dataset using the appropriate method

# # Display summary statistics
# print("\nSummary statistics of the Tesla DataFrame:")
# # TODO: Add code to print the dataset's summary statistics

import pandas as pd
import datasets

# Load TSLA dataset
tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')
tesla_df = pd.DataFrame(tesla_data['train'])

# Print basic information about the dataset
print("\nBasic information about the Tesla DataFrame:")
# TODO: Add code to print basic information about the dataset using the appropriate method
print(tesla_df.info())

# Display summary statistics
print("\nSummary statistics of the Tesla DataFrame:")
# TODO: Add code to print the dataset's summary statistics
print(tesla_df.describe())