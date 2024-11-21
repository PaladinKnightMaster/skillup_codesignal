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

# # Define the model with dropout
# model = nn.Sequential(
#     nn.Linear(13, 10),
#     nn.ReLU(),
#     nn.Linear(10, 10),
#     nn.ReLU(),
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

#     if(i==50):
#         # Introducing Weight Decay from 50th epoch on with 0.01 value
#         optimizer = optim.Adam(model.parameters(), lr=0.001, weight_decay=0.01)
#         print("\nRegularization added to optimizer\n")

#     if (i+1) % 10 ==0:
#         # L2 norm of weights of the first linear layer
#         first_layer_weights = model[0].weight.norm(2).item()
#         print(f'{i+1} - L2 norm of weights: {first_layer_weights}')

#     optimizer.step()  # Update weights

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

# Define the model with dropout
model = nn.Sequential(
    nn.Linear(13, 10),
    nn.ReLU(),
    nn.Linear(10, 10),
    nn.ReLU(),
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

    if(i==50):
        # Introducing Weight Decay from 50th epoch on with 0.01 value
        optimizer = optim.Adam(model.parameters(), lr=0.001, weight_decay=0.005)
        print("\nRegularization added to optimizer\n")

    if (i+1) % 10 ==0:
        # L2 norm of weights of the first linear layer
        first_layer_weights = model[0].weight.norm(2).item()
        print(f'{i+1} - L2 norm of weights: {first_layer_weights}')

    optimizer.step()  # Update weights