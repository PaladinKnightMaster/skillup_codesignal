# import torch
# import torch.nn as nn
# import torch.optim as optim

# # Input features [Average Goals Scored, Average Goals Conceded by Opponent]
# X = torch.tensor([
#     [3.0, 0.5], [1.0, 1.0], [0.5, 2.0], [2.0, 1.5],
#     [3.5, 3.0], [2.0, 2.5], [1.5, 1.0], [0.5, 0.5],
#     [2.5, 0.8], [2.1, 2.0], [1.2, 0.5], [0.7, 1.5]
# ], dtype=torch.float32)

# # Target outputs [1 if the team is likely to win, 0 otherwise]
# y = torch.tensor([[1], [0], [0], [1], [1], [0], [1], [0], [1], [0], [1], [0]], dtype=torch.float32)

# # Define the model using nn.Sequential
# model = nn.Sequential(
#     nn.Linear(2, 10),
#     nn.ReLU(),
#     nn.Linear(10, 1),
#     nn.Sigmoid()
# )

# # Define loss function and optimizer
# criterion = nn.BCELoss()
# optimizer = optim.Adam(model.parameters(), lr=0.1)  # Original learning rate

# # Train the model for 50 epochs
# for epoch in range(50):
#     model.train()  # Set the model to training mode

#     optimizer.zero_grad()  # Zero the gradients for this iteration

#     outputs = model(X)  # Forward pass: compute predictions

#     loss = criterion(outputs, y)  # Compute the loss

#     loss.backward()  # Backward pass: compute the gradient of the loss

#     optimizer.step()  # Optimize the model parameters based on the gradients

#     if (epoch+1) % 10 == 0:  # Print every 10 epochs
#         print(f"Epoch {epoch+1}, Loss: {loss.item()}")  # Print epoch loss

import torch
import torch.nn as nn
import torch.optim as optim

# Input features [Average Goals Scored, Average Goals Conceded by Opponent]
X = torch.tensor([
    [3.0, 0.5], [1.0, 1.0], [0.5, 2.0], [2.0, 1.5],
    [3.5, 3.0], [2.0, 2.5], [1.5, 1.0], [0.5, 0.5],
    [2.5, 0.8], [2.1, 2.0], [1.2, 0.5], [0.7, 1.5]
], dtype=torch.float32)

# Target outputs [1 if the team is likely to win, 0 otherwise]
y = torch.tensor([[1], [0], [0], [1], [1], [0], [1], [0], [1], [0], [1], [0]], dtype=torch.float32)

# Define the model using nn.Sequential
model = nn.Sequential(
    nn.Linear(2, 10),
    nn.ReLU(),
    nn.Linear(10, 1),
    nn.Sigmoid()
)

# Define loss function and optimizer
criterion = nn.BCELoss()
optimizer = optim.Adam(model.parameters(), lr=0.01)  # Original learning rate

# Train the model for 50 epochs
for epoch in range(50):
    model.train()  # Set the model to training mode

    optimizer.zero_grad()  # Zero the gradients for this iteration

    outputs = model(X)  # Forward pass: compute predictions

    loss = criterion(outputs, y)  # Compute the loss

    loss.backward()  # Backward pass: compute the gradient of the loss

    optimizer.step()  # Optimize the model parameters based on the gradients

    if (epoch+1) % 10 == 0:  # Print every 10 epochs
        print(f"Epoch {epoch+1}, Loss: {loss.item()}")  # Print epoch loss