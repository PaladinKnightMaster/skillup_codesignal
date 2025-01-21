# # Import the necessary libraries
# import numpy as np
# import seaborn as sns

# # Load the Titanic Dataset
# titanic_df = sns.load_dataset('titanic')

# # TODO: Ensure that 'age' column does not have null values

# # TODO: Compute IQR for 'age' by finding the first and third quartile and their difference

# # TODO: Using the computed IQR, identify and assign the outliers in 'age' to the variable outliers_age

# # Print the outliers
# print("Outliers in 'Age' using IQR: \n", outliers_age)

# Import the necessary libraries
import numpy as np
import seaborn as sns

# Load the Titanic Dataset
titanic_df = sns.load_dataset('titanic')

# Ensure that 'age' column does not have null values
titanic_df = titanic_df.dropna(subset=['age'])

# Compute IQR for 'age' by finding the first and third quartile and their difference
Q1_age = titanic_df['age'].quantile(0.25)
Q3_age = titanic_df['age'].quantile(0.75)
IQR_age = Q3_age - Q1_age

# Define lower and upper bounds for outliers
lower_bound_age = Q1_age - 1.5 * IQR_age
upper_bound_age = Q3_age + 1.5 * IQR_age

# Identify and assign the outliers in 'age' to the variable outliers_age
outliers_age = titanic_df['age'][
    (titanic_df['age'] < lower_bound_age) | (titanic_df['age'] > upper_bound_age)
]

# Print the outliers
print("Outliers in 'Age' using IQR: \n", outliers_age)
