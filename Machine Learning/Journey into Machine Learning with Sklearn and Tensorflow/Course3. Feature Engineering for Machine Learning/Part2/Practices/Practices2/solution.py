# # Import necessary libraries
# from ucimlrepo import fetch_ucirepo
# import pandas as pd
# from sklearn.preprocessing import LabelEncoder

# # Fetch the dataset
# abalone = fetch_ucirepo(id=1)

# # Extract feature and target data
# X = abalone.data.features.copy()
# y = abalone.data.targets

# # Print the dataset description
# print(X.describe())

# # TODO: Use label encoding to transform the 'Sex' column from categorical to numeric format

# print("Dataset after label encoding: ")
# print(X.head())


# Import necessary libraries
from ucimlrepo import fetch_ucirepo
import pandas as pd
from sklearn.preprocessing import LabelEncoder

# Fetch the dataset
abalone = fetch_ucirepo(id=1)

# Extract feature and target data
X = abalone.data.features.copy()
y = abalone.data.targets

# Print the dataset description
print(X.describe())

# TODO: Use label encoding to transform the 'Sex' column from categorical to numeric format
label_encoder = LabelEncoder()
X['Sex'] = label_encoder.fit_transform(X['Sex'])

print("Dataset after label encoding: ")
print(X.head())