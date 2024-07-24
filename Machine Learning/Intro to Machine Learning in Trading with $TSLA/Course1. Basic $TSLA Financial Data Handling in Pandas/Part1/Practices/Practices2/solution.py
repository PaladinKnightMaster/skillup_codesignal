# import pandas as pd
# import datasets

# # Load the TSLA dataset using the datasets library
# tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')

# # Create DataFrame from the dataset
# tesla_df = pd.DataFrame(tesla_data)

# # Display the first few rows of the DataFrame
# print(tesla_df.head())

# # Display the last few rows of the DataFrame
# print(tesla_df.tail())
import pandas as pd
import datasets

# Load the TSLA dataset using the datasets library
tesla_data = datasets.load_dataset('codesignal/tsla-historic-prices')

# Create DataFrame from the dataset
tesla_df = pd.DataFrame(tesla_data['train'])

# Display the first few rows of the DataFrame
print(tesla_df.head())

# Display the last few rows of the DataFrame
print(tesla_df.tail())