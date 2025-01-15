# import seaborn as sns
# import pandas as pd

# # Load Titanic dataset
# titanic_data = sns.load_data('titanic')

# # Display the first few records
# print(titanic_data.head())

# # Review the structure of the dataset
# print(titanic_data.info())

# # Print general statistics of the dataset
# print(titanic_data.describe())

import seaborn as sns
import pandas as pd

# Load Titanic dataset
titanic_data = sns.load_dataset('titanic')

# Display the first few records
print(titanic_data.head())

# Review the structure of the dataset
print(titanic_data.info())

# Print general statistics of the dataset
print(titanic_data.describe())