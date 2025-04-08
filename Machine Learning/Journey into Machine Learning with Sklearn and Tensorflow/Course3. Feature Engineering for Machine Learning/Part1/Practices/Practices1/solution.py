# # Import necessary libraries
# from ucimlrepo import fetch_ucirepo

# # Collect the UCI Abalone dataset
# abalone = fetch_ucirepo(id=1)

# # Isolate features and target
# X = abalone.data.features

# # Print dataset data
# print(________)


# Import necessary libraries
from ucimlrepo import fetch_ucirepo

# Collect the UCI Abalone dataset
abalone = fetch_ucirepo(id=1)

# Isolate features and target
X = abalone.data.features

# Print dataset data
print(X.head())
