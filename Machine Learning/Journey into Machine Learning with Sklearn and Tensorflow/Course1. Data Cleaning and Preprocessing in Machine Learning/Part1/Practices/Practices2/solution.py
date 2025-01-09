# import seaborn as sns
# import pandas as pd

# # Load the Titanic dataset
# titanic_data = sns.load_dataset('titanic')

# # Display the structure of the dataset
# print(titanic_data.info())

# # Display summary statistics of the dataset
# print(titanic_data.describe())

import seaborn as sns
import pandas as pd

# Load the Titanic dataset
titanic_data = sns.load_dataset('titanic')

# Display the structure of the dataset
print(titanic_data.info())

# Display summary statistics of the dataset
print(titanic_data[['age', 'fare']].describe())