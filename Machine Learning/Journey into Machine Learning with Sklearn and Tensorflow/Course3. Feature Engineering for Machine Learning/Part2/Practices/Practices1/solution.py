# # Import necessary libraries
# from ucimlrepo import fetch_ucirepo
# import pandas as pd

# # Fetch the dataset
# abalone = fetch_ucirepo(id=1)

# # Extract feature and target data
# X = abalone.data.features
# y = abalone.data.targets

# # Print the dataset description
# print(X.describe())

# # Identify the numeric and categorical features
# numeric_features = X.select_dtypes(include=['int64', 'float64']).columns
# categorical_features = X.select_dtypes(exclude=['int64', 'float64']).columns

# # Handle missing values using mean imputation for numeric columns
# X.loc[:, numeric_features] = X.loc[:, numeric_features].fillna(X[numeric_features].mean())

# # For categorical columns, if missing values exist, use mode imputation
# for column in categorical_features:
#     X.loc[:, column] = X.loc[:, column].fillna(X.loc[:, column].mode()[0])

# # Check if any null values exist after the imputations
# print(X.isnull().sum())

# Import necessary libraries
from ucimlrepo import fetch_ucirepo
import pandas as pd

# Fetch the dataset
abalone = fetch_ucirepo(id=1)

# Extract feature and target data
X = abalone.data.features
y = abalone.data.targets

# Print the dataset description
print(X.describe())

# Identify the numeric and categorical features
numeric_features = X.select_dtypes(include=['int64', 'float64']).columns
categorical_features = X.select_dtypes(exclude=['int64', 'float64']).columns

# Handle missing values using mean imputation for numeric columns
X.loc[:, numeric_features] = X.loc[:, numeric_features].fillna(X[numeric_features].median())

# For categorical columns, if missing values exist, use mode imputation
for column in categorical_features:
    X.loc[:, column] = X.loc[:, column].fillna(X.loc[:, column].mode()[0])

# Check if any null values exist after the imputations
print(X.isnull().sum())