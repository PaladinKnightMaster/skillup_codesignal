# # Import the necessary libraries
# import pandas as pd
# import numpy as np
# import seaborn as sns

# # Load the Titanic Dataset
# titanic_df = sns.load_dataset('titanic')

# # Ensure that 'age' and 'fare' columns do not have null values
# titanic_df = titanic_df.dropna(subset=['age', 'fare'])

# # Compute Z-scores for 'age' and 'fare'
# mean_age = np.mean(titanic_df['age'])
# std_dev_age = np.std(titanic_df['age'])
# Z_scores_age = (titanic_df['age'] - mean_age) / std_dev_age
# outliers_age = titanic_df['age'][np.abs(Z_scores_age) > 3]

# mean_fare = np.mean(titanic_df['fare'])
# std_dev_fare = np.std(titanic_df['fare'])
# Z_scores_fare = (titanic_df['fare'] - mean_fare) / std_dev_fare
# outliers_fare = titanic_df['fare'][np.abs(Z_scores_fare) > 3]

# # Print the outliers
# print("Outliers in 'Age' using Z-score: \n", outliers_age)
# print("\nOutliers in 'Fare' using Z-score: \n", outliers_fare)

# Import the necessary libraries
import pandas as pd
import numpy as np
import seaborn as sns

# Load the Titanic Dataset
titanic_df = sns.load_dataset('titanic')

# Ensure that 'age' and 'fare' columns do not have null values
titanic_df = titanic_df.dropna(subset=['age', 'fare'])

# Compute Z-scores for 'age' and 'fare'
mean_age = np.mean(titanic_df['age'])
std_dev_age = np.std(titanic_df['age'])
Z_scores_age = (titanic_df['age'] - mean_age) / std_dev_age
outliers_age = titanic_df['age'][np.abs(Z_scores_age) > 2.5]

mean_fare = np.mean(titanic_df['fare'])
std_dev_fare = np.std(titanic_df['fare'])
Z_scores_fare = (titanic_df['fare'] - mean_fare) / std_dev_fare
outliers_fare = titanic_df['fare'][np.abs(Z_scores_fare) > 2.5]

# Print the outliers
print("Outliers in 'Age' using Z-score: \n", outliers_age)
print("\nOutliers in 'Fare' using Z-score: \n", outliers_fare)