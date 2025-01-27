# # Import necessary libraries
# import seaborn as sns
# import pandas as pd
# import numpy as np

# # Load the Titanic dataset
# titanic_df = sns.load_dataset("titanic")

# # Create a new feature 'family_size'
# titanic_df['family_size'] = titanic_df['sibsp'] + titanic_df['parch'] + 1

# # Modify 'fare' feature to 'log_fare' using natural logarithm
# titanic_df['log_fare'] = np.log(titanic_df['fare'] + 0.1)

# # One-hot encode 'sex' feature
# sex_dummies = pd.get_dummies(titanic_df['sex'], dtype=int)
# titanic_df = pd.concat([titanic_df, sex_dummies], axis=1)

# # Print the first 5 rows of the dataframe
# print(titanic_df.head())

# Import necessary libraries
import seaborn as sns
import pandas as pd
import numpy as np

# Load the Titanic dataset
titanic_df = sns.load_dataset("titanic")

# Create a new feature 'family_size'
titanic_df['family_size'] = titanic_df['sibsp'] + titanic_df['parch'] + 1

# Modify 'fare' feature to 'log_fare' using base-10 logarithm
titanic_df['log_fare'] = np.log10(titanic_df['fare'] + 0.1)

# One-hot encode 'sex' feature
sex_dummies = pd.get_dummies(titanic_df['sex'], dtype=int)
titanic_df = pd.concat([titanic_df, sex_dummies], axis=1)

# Print the first 5 rows of the dataframe
print(titanic_df.head())
