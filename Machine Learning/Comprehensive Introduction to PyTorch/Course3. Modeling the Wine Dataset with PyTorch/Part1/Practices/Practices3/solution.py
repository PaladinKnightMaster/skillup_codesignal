# from sklearn.datasets import load_wine
# from sklearn.model_selection import train_test_split
# from sklearn.preprocessing import StandardScaler

# # Load the Wine dataset
# wine = load_wine()
# X, y = wine.data, wine.target

# # Split the dataset into training and testing sets
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, stratify=y)

# # Initialize the scaler and fit it to the training data
# scaler = StandardScaler().fit(X_train)

# # TODO: Use the scaler to transform the training and testing features

# # TODO: Display scaled and unscaled samples

from sklearn.datasets import load_wine
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Load the Wine dataset
wine = load_wine()
X, y = wine.data, wine.target

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, stratify=y)

# Initialize the scaler and fit it to the training data
scaler = StandardScaler().fit(X_train)

# TODO: Use the scaler to transform the training and testing features
X_train_scaled = scaler.transform(X_train)
X_test_scaled = scaler.transform(X_test)

# TODO: Display scaled and unscaled samples
print("Unscaled X sample:\n", X_train[0])
print("Scaled X sample:\n", X_train_scaled[0])