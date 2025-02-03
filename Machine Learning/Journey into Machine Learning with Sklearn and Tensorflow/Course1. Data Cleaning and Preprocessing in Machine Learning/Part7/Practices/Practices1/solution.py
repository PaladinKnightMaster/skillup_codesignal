# # Import necessary libraries
# from sklearn.model_selection import train_test_split
# import seaborn as sns

# # Loading the Titanic dataset
# titanic_df = sns.load_dataset('titanic')

# # Splitting the full dataset into the training and testing datasets
# train_data, test_data = train_test_split(titanic_df, test_size=0.2, random_state=42)

# # Printing out the shapes of the datasets
# print(f"Train data shape: {train_data.shape}")
# print(f"Test data shape: {test_data.shape}")

# Import necessary libraries
from sklearn.model_selection import train_test_split
import seaborn as sns

# Loading the Titanic dataset
titanic_df = sns.load_dataset('titanic')

# Splitting the full dataset into the training and testing datasets
train_data, test_data = train_test_split(titanic_df, test_size=0.3, random_state=42)

# Printing out the shapes of the datasets
print(f"Train data shape: {train_data.shape}")
print(f"Test data shape: {test_data.shape}")