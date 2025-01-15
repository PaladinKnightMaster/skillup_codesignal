# import seaborn as sns
# import pandas as pd

# # Load the Titanic dataset
# titanic_df = sns.load_dataset('titanic')

# # Drop the 'deck' column due to excessive missing values
# titanic_df_cleaned = titanic_df.drop(columns=['deck'])

# # Impute the missing 'age' values with the median age
# median_age = titanic_df_cleaned['age'].median()
# titanic_df_cleaned['age'].fill(median_age, inplace=True)

# # Impute the missing 'embarked' values with the mode
# mode_embarked = titanic_df_cleaned['embarked'].mode()[0]
# titanic_df_cleaned['embarked'].fillna(mode_embarked, inplace=True)

# # Impute the missing 'embark_town' values with the mode
# mode_embark_town = titanic_df_cleaned['embark_town'].mode()[0]
# titanic_df_cleaned['embark_town'].fillna(mode_embark_town, inplace=True)

# # Check for remaining missing values
# missing_values_after = titanic_df_cleaned.isnull().sum()
# print(missing_values_after)

import seaborn as sns
import pandas as pd

# Load the Titanic dataset
titanic_df = sns.load_dataset('titanic')

# Drop the 'deck' column due to excessive missing values
titanic_df_cleaned = titanic_df.drop(columns=['deck'])

# Impute the missing 'age' values with the median age
median_age = titanic_df_cleaned['age'].median()
titanic_df_cleaned['age'].fillna(median_age, inplace=True)

# Impute the missing 'embarked' values with the mode
mode_embarked = titanic_df_cleaned['embarked'].mode()[0]
titanic_df_cleaned['embarked'].fillna(mode_embarked, inplace=True)

# Impute the missing 'embark_town' values with the mode
mode_embark_town = titanic_df_cleaned['embark_town'].mode()[0]
titanic_df_cleaned['embark_town'].fillna(mode_embark_town, inplace=True)

# Check for remaining missing values
missing_values_after = titanic_df_cleaned.isnull().sum()
print(missing_values_after)
