# import seaborn as sns
# import pandas as pd

# # Load the Titanic dataset
# titanic_df = sns.load_dataset('titanic')

# # Identify and print the number of missing values in the 'age' and 'embarked' columns
# missing_values_age_embarked = titanic_df[['age', 'embarked']].isnull().sum()
# print('Missing values in age and embarked columns:\n', missing_values_age_embarked)

# # Impute the missing values in the 'age' column with the median age
# titanic_df['age'].fillna(titanic_df['age'].median(), inplace=True)

# # Impute the missing values in the 'embarked' column with a placeholder value 'U' for Unknown
# titanic_df['embarked'].fillna('U', inplace=True)

# # Print the dataset info to confirm that there are no more missing values in 'age' and 'embarked'
# print('\nDataset information post-imputation:')
# print(titanic_df.info())

import seaborn as sns
import pandas as pd

# Load the Titanic dataset
titanic_df = sns.load_dataset('titanic')

# Identify and print the number of missing values in the 'age' and 'embarked' columns
missing_values_age_embarked = titanic_df[['age', 'embarked']].isnull().sum()
print('Missing values in age and embarked columns:\n', missing_values_age_embarked)

# Impute the missing values in the 'age' column with the median age
titanic_df['age'].fillna(titanic_df['age'].median(), inplace=True)

# Impute the missing values in the 'embarked' column with the most common category
most_common_embarked = titanic_df['embarked'].mode()[0]
titanic_df['embarked'].fillna(most_common_embarked, inplace=True)

# Print the dataset info to confirm that there are no more missing values in 'age' and 'embarked'
print('\nDataset information post-imputation:')
print(titanic_df.info())
