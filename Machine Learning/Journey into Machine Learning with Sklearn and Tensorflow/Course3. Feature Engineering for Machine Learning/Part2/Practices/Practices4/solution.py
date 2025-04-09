# # Import necessary libraries
# from ucimlrepo import fetch_ucirepo
# import pandas as pd
# from sklearn.decomposition import PCA

# # Fetch the dataset
# abalone = fetch_ucirepo(id=1)

# # Extract feature and target data
# X = abalone.data.features.copy()
# y = abalone.data.targets

# # TODO: Convert 'Sex' column to numeric form using encoding technique
# # TODO: Apply median imputation to fill missing values for numeric columns

# # Apply PCA to reduce the dimensionality of the dataset
# pca = PCA(n_components=2)
# X_pca = pca.fit_transform(X)

# print("Dataset after applying PCA: ")
# print(X_pca[:5, :])


# Import necessary libraries
from ucimlrepo import fetch_ucirepo
import pandas as pd
from sklearn.decomposition import PCA
from sklearn.preprocessing import LabelEncoder
from sklearn.impute import SimpleImputer

# Fetch the dataset
abalone = fetch_ucirepo(id=1)

# Extract feature and target data
X = abalone.data.features.copy()
y = abalone.data.targets

# Convert 'Sex' column to numeric form using LabelEncoder
le = LabelEncoder()
X['Sex'] = le.fit_transform(X['Sex'])

# Apply median imputation to fill missing values for numeric columns
imputer = SimpleImputer(strategy='median')
X_imputed = pd.DataFrame(imputer.fit_transform(X), columns=X.columns)

# Apply PCA to reduce the dimensionality of the dataset
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_imputed)

print("Dataset after applying PCA: ")
print(X_pca[:5, :])
