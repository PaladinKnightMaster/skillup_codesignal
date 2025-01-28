# # Import necessary libraries
# import seaborn as sns
# import pandas as pd

# # TODO: Load the Titanic dataset and assign it to a variable named 'titanic_df'

# # TODO: Perform one-hot encoding on the 'class' column to create binary columns for each class

# # TODO: Join the new binary columns to 'titanic_df'

# # TODO: Display the first 5 rows of the modified dataframe





# Import necessary libraries
import seaborn as sns
import pandas as pd

# Load the Titanic dataset and assign it to a variable named 'titanic_df'
titanic_df = sns.load_dataset("titanic")

# Perform one-hot encoding on the 'class' column to create binary columns for each class
class_dummies = pd.get_dummies(titanic_df['class'], prefix='class', dtype=int)

# Join the new binary columns to 'titanic_df'
titanic_df = pd.concat([titanic_df, class_dummies], axis=1)

# Display the first 5 rows of the modified dataframe
print(titanic_df.head())
