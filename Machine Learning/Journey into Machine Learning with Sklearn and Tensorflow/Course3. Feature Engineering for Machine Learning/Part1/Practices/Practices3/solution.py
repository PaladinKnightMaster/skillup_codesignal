# # Import necessary libraries
# from ucimlrepo import fetch_ucirepo

# # Collect the UCI Abalone dataset
# abalone = fetch_ucirepo(id=1)

# # Isolate features and target
# X = abalone.data.features

# # Display the first five records of the features
# print(X.head(10))  # Incorrect number of records displayed


# Import necessary libraries
from ucimlrepo import fetch_ucirepo

# Collect the UCI Abalone dataset
abalone = fetch_ucirepo(id=1)

# Isolate features and target
X = abalone.data.features

# Display the first five records of the features
print(X.head(5))  # Incorrect number of records displayed