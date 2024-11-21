#  import torch
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

# # TODO: Define the model with dropout
# # - Add Linear(13, 10)
# # - Add ReLU
# # - Add Dropout(0.1)
# # - Add Linear(10, 10)
# # - Add ReLU
# # - Add Dropout(0.05)
# # - Add Linear(10, 3)

# # TODO: Print the model summary

# # TODO: Define criterion and optimizer with weight decay
# # - Use nn.CrossEntropyLoss() for criterion
# # - Use optim.Adam with lr=0.001 and weight_decay=0.01 for optimizer

# # TODO: Write the training loop and print the loss every 10 epochs

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

# TODO: Define the model with dropout
model = nn.Sequential(
# - Add Linear(13, 10)
    nn.Linear(13, 10),
# - Add ReLU
    nn.ReLU(),
# - Add Dropout(0.1)
    nn.Dropout(0.1),
# - Add Linear(10, 10)
    nn.Linear(10, 10),
# - Add ReLU
    nn.ReLU(),
# - Add Dropout(0.05)
    nn.Dropout(0.05),
# - Add Linear(10, 3)
    nn.Linear(10, 3)
)

# TODO: Print the model summary
print(model)
# TODO: Define criterion and optimizer with weight decay
# - Use nn.CrossEntropyLoss() for criterion
criterion = nn.CrossEntropyLoss()
# - Use optim.Adam with lr=0.001 and weight_decay=0.01 for optimizer
optimizer = optim.Adam(model.parameters(), lr=0.001, weight_decay=0.01)

# TODO: Write the training loop and print the loss every 10 epochs
for i in range(100):
    model.train()
    optimizer.zero_grad()  # Zero the gradient buffers
    outputs = model(X)  # Forward pass
    loss = criterion(outputs, y)  # Compute loss
    loss.backward()  # Backward pass
    optimizer.step()  # Update weights

    if (i+1) % 10 ==0:
        print(f'Epoch {i+1} Loss: {loss.item()}')