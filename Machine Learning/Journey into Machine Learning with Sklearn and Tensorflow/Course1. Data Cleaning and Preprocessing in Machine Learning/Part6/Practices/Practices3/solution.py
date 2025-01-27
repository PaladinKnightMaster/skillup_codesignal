# # Import necessary libraries
# import seaborn as sns
# import pandas as pd
# import numpy as np

# # Load the Titanic dataset
# titanic_df = sns.load_dataset("titanic")

# # Create a new feature 'family_size'
# titanic_df['family_size'] = titanic_df['sibsp'] + titanic_df['parch'] + 1

# # TODO: Transform the 'fare' column into a new column 'log10_fare' using log base 10. Include an adjustment for zero fares.

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

# Transform the 'fare' column into a new column 'log10_fare' using log base 10, including an adjustment for zero fares
titanic_df['log10_fare'] = np.log10(titanic_df['fare'] + 0.1)

# Print the first 5 rows of the dataframe
print(titanic_df.head())
