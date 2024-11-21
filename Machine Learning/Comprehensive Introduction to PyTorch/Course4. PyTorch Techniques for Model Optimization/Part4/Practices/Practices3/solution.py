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

# # Define the model with incorrect dropout
# model = nn.Sequential(
#     nn.Linear(13, 10),
#     nn.ReLU(),
#     nn.Dropout(0.2),  # Dropout of 20% applied to the previous layer
#     nn.Linear(10, 10),
#     nn.ReLU(),
#     nn.Dropout(1.0),  # Dropout of 10% applied to the previous layer
#     nn.Linear(10, 3)
# )

# # Define criterion and optimizer
# criterion = nn.CrossEntropyLoss()
# optimizer = optim.Adam(model.parameters(), lr=0.001)

# for i in range(100):
#     model.train()
#     optimizer.zero_grad()  # Zero the gradient buffers
#     outputs = model(X)  # Forward pass
#     loss = criterion(outputs, y)  # Compute loss
#     loss.backward()  # Backward pass
#     optimizer.step()  # Update weights
#     if (i + 1) % 10 == 0:
#         print(f'Epoch {i+1} Loss: {loss.item()}')

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

# Define the model with incorrect dropout
model = nn.Sequential(
    nn.Linear(13, 10),
    nn.ReLU(),
    nn.Dropout(0.2),  # Dropout of 20% applied to the previous layer
    nn.Linear(10, 10),
    nn.ReLU(),
    nn.Dropout(0.1),  # Dropout of 10% applied to the previous layer
    nn.Linear(10, 3)
)

# Define criterion and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

for i in range(100):
    model.train()
    optimizer.zero_grad()  # Zero the gradient buffers
    outputs = model(X)  # Forward pass
    loss = criterion(outputs, y)  # Compute loss
    loss.backward()  # Backward pass
    optimizer.step()  # Update weights
    if (i + 1) % 10 == 0:
        print(f'Epoch {i+1} Loss: {loss.item()}')