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

# # TODO: Define the model using nn.Sequential

# # TODO: Define the loss function and optimizer

# # TODO: Train the model for 50 epochs

#     # TODO: Set the model to training mode

#     # TODO: Zero the gradients for this iteration

#     # TODO: Forward pass: compute predictions

#     # TODO: Compute the loss

#     # TODO: Backward pass: compute the gradient of the loss

#     # TODO: Optimize the model parameters based on the gradients

#     # TODO: Print every 10 epochs

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

# TODO: Define the model using nn.Sequential
model = nn.Sequential(
    nn.Linear(2, 10),
    nn.ReLU(),
    nn.Linear(10, 1),
    nn.Sigmoid()
)
# TODO: Define the loss function and optimizer
criterion = nn.BCELoss()
optimizer = optim.Adam(model.parameters(), lr=0.01)
# TODO: Train the model for 50 epochs
for epoch in range(50):
    # TODO: Set the model to training mode
    model.train()
    # TODO: Zero the gradients for this iteration
    optimizer.zero_grad()
    # TODO: Forward pass: compute predictions
    outputs = model(X)
    # TODO: Compute the loss
    loss = criterion(outputs, y)
    # TODO: Backward pass: compute the gradient of the loss
    loss.backward()
    # TODO: Optimize the model parameters based on the gradients
    optimizer.step()
    # TODO: Print every 10 epochs
    if epoch % 10 == 0:
        print(f'Epoch {epoch}: Loss = {loss.item():.4f}')