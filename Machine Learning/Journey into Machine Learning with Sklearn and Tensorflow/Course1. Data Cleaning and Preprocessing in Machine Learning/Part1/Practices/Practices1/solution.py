import seaborn as sns
import pandas as pd

# Load Titanic dataset
titanic_data = sns.load_dataset('titanic')

# Identify the columns with missing values
missing_values = titanic_data.isnull().sum()
print("Missing values in each column:\n", missing_values)

# Fill the missing values in 'age' with the median age.
titanic_data['age'].fillna(titanic_data['age'].median(), inplace=True)

# Verify the missing values in 'age' have been filled
print("\nMissing values after imputation in 'age' column:\n", titanic_data['age'].isnull().sum())