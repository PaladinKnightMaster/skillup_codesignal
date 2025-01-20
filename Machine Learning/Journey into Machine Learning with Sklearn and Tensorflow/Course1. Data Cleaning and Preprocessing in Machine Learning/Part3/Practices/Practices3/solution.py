# # Import the necessary libraries
# import numpy as np
# import seaborn as sns

# # TODO: Load the Titanic dataset and store it in a variable named 'titanic_df'

# # TODO: Drop any rows with missing values in the 'age' column

# # TODO: Calculate the first and third quartile of the 'age' column and store them in variables 'Q1_age' and 'Q3_age'

# # TODO: Calculate the Interquartile Range (IQR) for the 'age' column and store it in a variable 'IQR_age'

# # TODO: Using IQR, identify any age values that are outliers and store them in a variable called 'outliers_age'

# # TODO: Output the outliers found in the 'age' column

# Import the necessary libraries
import numpy as np
import seaborn as sns

# Load the Titanic dataset
titanic_df = sns.load_dataset('titanic')

# Drop any rows with missing values in the 'age' column
titanic_df = titanic_df.dropna(subset=['age'])

# Calculate the first and third quartile of the 'age' column
Q1_age = titanic_df['age'].quantile(0.25)
Q3_age = titanic_df['age'].quantile(0.75)

# Calculate the Interquartile Range (IQR) for the 'age' column
IQR_age = Q3_age - Q1_age

# Using IQR, identify any age values that are outliers
lower_bound_age = Q1_age - 1.5 * IQR_age
upper_bound_age = Q3_age + 1.5 * IQR_age
outliers_age = titanic_df['age'][
    (titanic_df['age'] < lower_bound_age) | (titanic_df['age'] > upper_bound_age)
]

# Output the outliers found in the 'age' column
print("Outliers in 'age' column using IQR method:\n", outliers_age)
