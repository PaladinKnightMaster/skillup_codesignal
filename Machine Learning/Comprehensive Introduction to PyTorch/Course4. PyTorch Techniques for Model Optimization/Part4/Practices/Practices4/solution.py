# import torch
# import torch.nn as nn
# import torch.optim as optim
# from sklearn.datasets import load_digits

# # Load and select the data
# digits = load_digits()
# X = digits.data
# y = digits.target

# # Convert to PyTorch tensors
# X = torch.tensor(X, dtype=torch.float32)
# y = torch.tensor(y, dtype=torch.long)

# # Define the model with dropout
# model = nn.Sequential(
#     nn.Linear(64, 50),
#     nn.ReLU(),
#     # TODO: Add a Dropout layer with 30%
#     nn.Linear(50, 20),
#     nn.ReLU(),
#     # TODO: Add a Dropout layer with 20%
#     nn.Linear(20, 10)
# )

# # Print the model summary
# print(model)

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
#         # TODO: Add weight decay to optimizer from 50th epoch on, set weight_decay to 0.02
#         print("\nRegularization added to optimizer\n")

#     if (i+1) % 10 ==0:
#         # L2 norm of weights of the first linear layer
#         first_layer_weights = model[0].weight.norm(2).item()
#         print(f'{i+1} - L2 norm of weights: {first_layer_weights}')

#     optimizer.step()  # Update weights

import torch
import torch.nn as nn
import torch.optim as optim
from sklearn.datasets import load_digits

# Load and select the data
digits = load_digits()
X = digits.data
y = digits.target

# Convert to PyTorch tensors
X = torch.tensor(X, dtype=torch.float32)
y = torch.tensor(y, dtype=torch.long)

# Define the model with dropout
model = nn.Sequential(
    nn.Linear(64, 50),
    nn.ReLU(),
    # TODO: Add a Dropout layer with 30%
    nn.Dropout(0.3),
    nn.Linear(50, 20),
    nn.ReLU(),
    # TODO: Add a Dropout layer with 20%
    nn.Dropout(0.2),
    nn.Linear(20, 10)
)

# Print the model summary
print(model)

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
        # TODO: Add weight decay to optimizer from 50th epoch on, set weight_decay to 0.02
        optimizer = optim.Adam(model.parameters(), lr=0.001, weight_decay=0.02)
        print("\nRegularization added to optimizer\n")

    if (i+1) % 10 ==0:
        # L2 norm of weights of the first linear layer
        first_layer_weights = model[0].weight.norm(2).item()
        print(f'{i+1} - L2 norm of weights: {first_layer_weights}')

    optimizer.step()  # Update weights