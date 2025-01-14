import seaborn as sns
import pandas as pd

# Load the Titanic dataset
titanic_df = sns.load_dataset('titanic')

# Identify and display missing values
missing_values = titanic_df.isnull().sum()
print("Missing values before handling:\n", missing_values)

# Handle missing data by dropping the 'deck' column and imputing 'age'
titanic_df.drop(columns=['deck'], inplace=True)
titanic_df['age'].fillna(titanic_df['age'].median(), inplace=True)

# Impute the 'embarked' and 'embark_town' columns with the most common value
most_common_embarked = titanic_df['embarked'].mode()[0]
titanic_df['embarked'].fillna(most_common_embarked, inplace=True)
most_common_embark_town = titanic_df['embark_town'].mode()[0]
titanic_df['embark_town'].fillna(most_common_embark_town, inplace=True)

# Verify that missing data has been handled
missing_values_after = titanic_df.isnull().sum()
print("Missing values after handling:\n", missing_values_after)