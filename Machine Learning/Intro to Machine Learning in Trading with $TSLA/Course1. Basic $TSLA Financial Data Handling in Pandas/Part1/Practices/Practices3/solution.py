# import pandas as pd
# import datasets

# # TODO: Load the TSLA dataset using the datasets library
# tesla_data = datasets.____________________________

# # TODO: Create DataFrame from the dataset
# tesla_df = pd.____________________________

# # Display the first few rows of the DataFrame
# print("First few rows of the dataset:")
# print(tesla_df.head())

# # Display the last few rows of the DataFrame
# print("\nLast few rows of the dataset:")
# print(tesla_df.tail())
import pandas as pd
import datasets

# TODO: Load the TSLA dataset using the datasets library
tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')

# TODO: Create DataFrame from the dataset
tesla_df = pd.DataFrame(tesla_data['train'])

# Display the first few rows of the DataFrame
print("First few rows of the dataset:")
print(tesla_df.head())

# Display the last few rows of the DataFrame
print("\nLast few rows of the dataset:")
print(tesla_df.tail())