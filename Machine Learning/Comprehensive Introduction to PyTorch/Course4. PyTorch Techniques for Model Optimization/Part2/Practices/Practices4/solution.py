# import torch
# import torch.nn as nn
# import torch.optim as optim
# from torch.utils.data import DataLoader, TensorDataset
# from sklearn.datasets import load_wine

# # Load dataset
# wine = load_wine()
# X = torch.tensor(wine.data, dtype=torch.float32)
# y = torch.tensor(wine.target, dtype=torch.long)

# # Create a DataLoader for mini-batches of size 32 and shuffle the data
# batch_size = 32
# dataset = TensorDataset(X, y)
# data_loader = DataLoader(dataset, batch_size=batch_size, shuffle=True)

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

# # Model training with mini-batches
# num_epochs = 10
# for epoch in range(num_epochs):
#     model.train()
#     running_loss = 0.0
#     for batch_X, batch_y in data_loader:
#         optimizer.zero_grad()
#         outputs = model(batch_X)
#         loss = criterion(outputs, batch_y)
#         loss.backward()
#         optimizer.step()
#         print(f'Batch Loss: {loss.item():.4f}')

#         # TODO: Update the running loss
#         # Remember to multiply the loss by the batch size

#     # TODO: Calculate the epoch loss

#     print(f'Epoch [{epoch+1}/{num_epochs}] Average Loss: {epoch_loss:.4f}')

import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, TensorDataset
from sklearn.datasets import load_wine

# Load dataset
wine = load_wine()
X = torch.tensor(wine.data, dtype=torch.float32)
y = torch.tensor(wine.target, dtype=torch.long)

# Create a DataLoader for mini-batches of size 32 and shuffle the data
batch_size = 32
dataset = TensorDataset(X, y)
data_loader = DataLoader(dataset, batch_size=batch_size, shuffle=True)

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

# Model training with mini-batches
num_epochs = 10
for epoch in range(num_epochs):
    model.train()
    running_loss = 0.0
    for batch_X, batch_y in data_loader:
        optimizer.zero_grad()
        outputs = model(batch_X)
        loss = criterion(outputs, batch_y)
        loss.backward()
        optimizer.step()
        print(f'Batch Loss: {loss.item():.4f}')

        # TODO: Update the running loss
        # Remember to multiply the loss by the batch size
        running_loss += loss.item() * batch_X.size(0)

    # TODO: Calculate the epoch loss
    epoch_loss = running_loss / len(dataset)

    print(f'Epoch [{epoch+1}/{num_epochs}] Average Loss: {epoch_loss:.4f}')