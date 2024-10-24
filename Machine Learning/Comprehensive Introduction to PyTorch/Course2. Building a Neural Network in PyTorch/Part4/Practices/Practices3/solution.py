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
# optimizer = optim.Adam(model.parameters(), lr=0.01)

# # Train the model for 50 epochs
# for epoch in range(50):
#     model.train()  # Set the model to training mode
#     optimizer.zero_grad()  # Zero the gradients for iteration
#     outputs = model(X)  # Compute predictions
#     loss = criterion(outputs, y)  # Compute the loss
#     loss.backward()  # Compute the gradient of the loss
#     optimizer.step()  # Optimize the model parameters

# # Create a new input tensor
# new_input = torch.tensor([[1.5, 1.5]], dtype=torch.float32)

# # Set the model to evaluation mode
# model.eval()

# # Bad use of model for prediction
# prediction = model(new_input)

# # Print the raw output from the model
# print("Raw output:", prediction)

# # Convert the probability to a binary class label
# print("Prediction:", (prediction > 0.5).int().item())

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
optimizer = optim.Adam(model.parameters(), lr=0.01)

# Train the model for 50 epochs
for epoch in range(50):
    model.train()  # Set the model to training mode
    optimizer.zero_grad()  # Zero the gradients for iteration
    outputs = model(X)  # Compute predictions
    loss = criterion(outputs, y)  # Compute the loss
    loss.backward()  # Compute the gradient of the loss
    optimizer.step()  # Optimize the model parameters

# Create a new input tensor
new_input = torch.tensor([[1.5, 1.5]], dtype=torch.float32)

# Set the model to evaluation mode
model.eval()

# Make the prediction properly by detaching the tensor to avoid tracking gradients
with torch.no_grad():
    prediction = model(new_input)

# Print the raw output from the model
print("Raw output:", prediction.item())

# Convert the probability to a binary class label
print("Prediction (binary):", (prediction > 0.5).int().item())