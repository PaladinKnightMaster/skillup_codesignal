# import seaborn as sns
# import pandas as pd

# # Load the dataset
# titanic = sns.load_dataset('titanic')

# # Find the number of missing values in each column
# missing_values_before = titanic.isnull().sum()
# print("Missing values before handling:")
# print(missing_values_before)

# # TODO: Replace missing data in 'age' column with a central tendency measure of your choice
# titanic['age'].____(____, inplace=True)

# # TODO: Remove a column with too many missing values to salvage
# titanic.____(columns='____', inplace=True)

# # Verify the handling by checking for missing values again
# missing_values_after = titanic.isnull().sum()
# print("\nMissing values after handling:")
# print(missing_values_after)

# # Optionally, show the info of the dataset to visualize the changes
# print("\nDataset information after handling missing data:")
# print(titanic.info())

import seaborn as sns
import pandas as pd

# Load the dataset
titanic = sns.load_dataset('titanic')

# Find the number of missing values in each column
missing_values_before = titanic.isnull().sum()
print("Missing values before handling:")
print(missing_values_before)

# Replace missing data in 'age' column with the median
titanic['age'].fillna(titanic['age'].median(), inplace=True)

# Remove the 'deck' column, which has too many missing values
titanic.drop(columns='deck', inplace=True)

# Verify the handling by checking for missing values again
missing_values_after = titanic.isnull().sum()
print("\nMissing values after handling:")
print(missing_values_after)

# Optionally, show the info of the dataset to visualize the changes
print("\nDataset information after handling missing data:")
print(titanic.info())
