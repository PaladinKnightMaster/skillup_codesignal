# import torch
# from sklearn.datasets import load_wine
# from sklearn.model_selection import train_test_split
# from sklearn.preprocessing import StandardScaler

# # TODO: Define a function load_preprocessed_data that performs the following steps:
# # 1. Load the Wine dataset
# # 2. Split the dataset into training and testing sets
# # 3. Scale the features
# # 4. Convert to PyTorch tensors
# # 5. Return the processed x and y tensors for training and testing

# # TODO: Call load_preprocessed_data and print the shapes of the returned tensors

import torch
from sklearn.datasets import load_wine
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# TODO: Define a function load_preprocessed_data that performs the following steps:
def load_preprocessed_data():
# 1. Load the Wine dataset
    wine = load_wine()
# 2. Split the dataset into training and testing sets
    X, y = wine.data, wine.target
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, stratify=y)
# 3. Scale the features
    scaler = StandardScaler().fit(X_train)
    X_train_scaled = scaler.transform(X_train)
    X_test_scaled = scaler.transform(X_test)
# 4. Convert to PyTorch tensors
    X_train_tensor = torch.tensor(X_train_scaled, dtype=torch.float32)
    X_test_tensor = torch.tensor(X_test_scaled, dtype=torch.float32)
    y_train_tensor = torch.tensor(y_train, dtype=torch.long)
    y_test_tensor = torch.tensor(y_test, dtype=torch.long)
# 5. Return the processed x and y tensors for training and testing
    return X_train_tensor, X_test_tensor, y_train_tensor, y_test_tensor

# TODO: Call load_preprocessed_data and print the shapes of the returned tensors
X_train_tensor, X_test_tensor, y_train_tensor, y_test_tensor = load_preprocessed_data()
print("Shape of X_train_tensor:", X_train_tensor.shape)
print("Shape of X_test_tensor:", X_test_tensor.shape)
print("Shape of y_train_tensor:", y_train_tensor.shape)
print("Shape of y_test_tensor:", y_test_tensor.shape)