# import torch
# import torch.nn as nn
# import torch.optim as optim
# from sklearn.datasets import load_wine

# # Load and select the data
# wine = load_wine()
# X = wine.data
# y = wine.target

# # Convert to PyTorch tensors
# X = torch.tensor(X, dtype=torch.float32)
# y = torch.tensor(y, dtype=torch.long)

# # Define the model without dropout
# model = nn.Sequential(
#     nn.Linear(13, 10),
#     nn.ReLU(),
#     # TODO: Add a Dropout layer with 0.5 probability
#     nn.Linear(10, 10),
#     nn.ReLU(),
#     # TODO: Add a Dropout layer with 0.5 probability
#     nn.Linear(10, 3)
# )

# # Print the model summary
# print(model)

import torch
import torch.nn as nn
import torch.optim as optim
from sklearn.datasets import load_wine

# Load and select the data
wine = load_wine()
X = wine.data
y = wine.target

# Convert to PyTorch tensors
X = torch.tensor(X, dtype=torch.float32)
y = torch.tensor(y, dtype=torch.long)

# Define the model without dropout
model = nn.Sequential(
    nn.Linear(13, 10),
    nn.ReLU(),
    # TODO: Add a Dropout layer with 0.5 probability
    nn.Dropout(0.5),
    nn.Linear(10, 10),
    nn.ReLU(),
    # TODO: Add a Dropout layer with 0.5 probability
    nn.Dropout(0.5),
    nn.Linear(10, 3)
)

# Print the model summary
print(model)