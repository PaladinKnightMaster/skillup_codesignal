# # Import necessary libraries
# from ucimlrepo import fetch_ucirepo

# # Collect the UCI Abalone dataset
# abalone = fetch_ucirepo(id=1)

# # Isolate features
# X = abalone.data.features

# # TODO: Command the computer to reveal the secrets of the Abalone features.
# # What should you call to gather around all the insightful statistics?


# Import necessary libraries
from ucimlrepo import fetch_ucirepo

# Collect the UCI Abalone dataset
abalone = fetch_ucirepo(id=1)

# Isolate features
X = abalone.data.features

# TODO: Command the computer to reveal the secrets of the Abalone features.
# What should you call to gather around all the insightful statistics?
print(X.describe())