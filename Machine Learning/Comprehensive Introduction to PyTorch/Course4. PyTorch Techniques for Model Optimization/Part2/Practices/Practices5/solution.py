# import torch
# import torch.nn as nn
# import torch.optim as optim
# from torch.utils.data import DataLoader, TensorDataset
# from sklearn.datasets import load_wine

# # Load dataset
# wine = load_wine()
# X = torch.tensor(wine.data, dtype=torch.float32)
# y = torch.tensor(wine.target, dtype=torch.long)

# # TODO: Create a TensorDataset using X and y
# # TODO: Create DataLoader for mini-batches with size 16 and shuffle the data

# # Define the model
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

# # TODO: Train the model using mini-batches for 10 epochs
#     # TODO: Set the model to training mode
#     # TODO: Initialize running loss with 0.0
#     # TODO: Iterate over mini-batches using data_loader
#         # TODO: Zero the gradients
#         # TODO: Perform forward pass to get outputs
#         # TODO: Compute loss
#         # TODO: Perform backward pass to compute gradients
#         # TODO: Update weights using optimizer
#         # TODO: Accumulate running loss by adding the scaled batch loss
#         # TODO: Print current batch loss

#     # TODO: Calculate average loss over the epoch
#     # TODO: Print the average loss for the epoch

import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, TensorDataset
from sklearn.datasets import load_wine

# Load dataset
wine = load_wine()
X = torch.tensor(wine.data, dtype=torch.float32)
y = torch.tensor(wine.target, dtype=torch.long)

# TODO: Create a TensorDataset using X and y
dataset = TensorDataset(X, y)
# TODO: Create DataLoader for mini-batches with size 16 and shuffle the data
data_loader = DataLoader(dataset, batch_size=16, shuffle=True)

# Define the model
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

# TODO: Train the model using mini-batches for 10 epochs
for epoch in range(10):
    # TODO: Set the model to training mode
    model.train()
    # TODO: Initialize running loss with 0.0
    running_loss = 0.0
    # TODO: Iterate over mini-batches using data_loader
    for X_batch, y_batch in data_loader:
        # TODO: Zero the gradients
        optimizer.zero_grad()
        # TODO: Perform forward pass to get outputs
        outputs = model(X_batch)
        # TODO: Compute loss
        loss = criterion(outputs, y_batch)
        # TODO: Perform backward pass to compute gradients
        loss.backward()
        # TODO: Update weights using optimizer
        optimizer.step()
        # TODO: Accumulate running loss by adding the scaled batch loss
        running_loss += loss.item() * X_batch.size(0)
        # TODO: Print current batch loss
        print(f'Batch Loss: {loss.item():.4f}')

    # TODO: Calculate average loss over the epoch
    epoch_loss = running_loss / len(dataset)
    # TODO: Print the average loss for the epoch
    print(f'Epoch [{epoch+1}/{10}] Average Loss: {epoch_loss:.4f}')