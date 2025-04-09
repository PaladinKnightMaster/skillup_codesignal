# # Import necessary libraries
# from ucimlrepo import fetch_ucirepo
# import pandas as pd
# from sklearn.decomposition import PCA
# from sklearn.preprocessing import LabelEncoder

# # Fetch the dataset
# abalone = fetch_ucirepo(id=1)

# # Extract feature and target data
# X = abalone.data.features.copy()
# y = abalone.data.targets

# # Print the dataset description
# print(X.describe())

# # Why is this not affecting the PCA transformation?
# X['Sex'].fit_transform(X['Sex'])

# # Apply PCA to reduce the dimensionality of the dataset
# pca = PCA(n_components=3)
# X_pca = pca.fit_transform(X)

# print("Dataset after applying PCA: ")
# print(X_pca[:5, :])


# Import necessary libraries
from ucimlrepo import fetch_ucirepo
import pandas as pd
from sklearn.decomposition import PCA
from sklearn.preprocessing import LabelEncoder

# Fetch the dataset
abalone = fetch_ucirepo(id=1)

# Extract feature and target data
X = abalone.data.features.copy()
y = abalone.data.targets

# Properly encode the 'Sex' column
le = LabelEncoder()
X['Sex'] = le.fit_transform(X['Sex'])

# Apply PCA to reduce the dimensionality of the dataset
pca = PCA(n_components=3)
X_pca = pca.fit_transform(X)

print("Dataset after applying PCA: ")
print(X_pca[:5, :])
