# import torch
# import torch.nn as nn
# import torch.optim as optim
# from sklearn.metrics import accuracy_score

# # Training Features
# X_train = torch.tensor([
#     [3.0, 0.5], [1.0, 1.0], [0.5, 2.0], [2.0, 1.5],
#     [3.5, 3.0], [2.0, 2.5], [1.5, 1.0], [0.5, 0.5],
#     [2.5, 0.8], [2.1, 2.0], [1.2, 0.5], [0.7, 1.5]
# ], dtype=torch.float32)
# # Training Targets
# y_train = torch.tensor([[1], [0], [0], [1], [1], [0], [1], [0], [1], [0], [1], [0]], dtype=torch.float32)

# # Test Features
# X_test = torch.tensor([[2.5, 1.0], [0.8, 0.8], [1.0, 2.0], [3.0, 2.5]], dtype=torch.float32)
# # Test Targets
# y_test = torch.tensor([[1], [0], [0], [1]], dtype=torch.float32)

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
#     outputs = model(X_train)  # Compute predictions
#     loss = criterion(outputs, y_train)  # Compute the loss
#     loss.backward()  # Compute the gradient of the loss
#     optimizer.step()  # Optimize the model parameters

# # TODO: Set evaluation mode and disable gradient
#     # TODO: Make Predictions
#     # TODO: Convert to binary classes
#     # TODO: Calculate the loss on the test data
#     # TODO: Calculate the accuracy on the test data

# # TODO: Print the test accuracy and loss

import torch
import torch.nn as nn
import torch.optim as optim
from sklearn.metrics import accuracy_score

# Training Features
X_train = torch.tensor([
    [3.0, 0.5], [1.0, 1.0], [0.5, 2.0], [2.0, 1.5],
    [3.5, 3.0], [2.0, 2.5], [1.5, 1.0], [0.5, 0.5],
    [2.5, 0.8], [2.1, 2.0], [1.2, 0.5], [0.7, 1.5]
], dtype=torch.float32)
# Training Targets
y_train = torch.tensor([[1], [0], [0], [1], [1], [0], [1], [0], [1], [0], [1], [0]], dtype=torch.float32)

# Test Features
X_test = torch.tensor([[2.5, 1.0], [0.8, 0.8], [1.0, 2.0], [3.0, 2.5]], dtype=torch.float32)
# Test Targets
y_test = torch.tensor([[1], [0], [0], [1]], dtype=torch.float32)

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
    outputs = model(X_train)  # Compute predictions
    loss = criterion(outputs, y_train)  # Compute the loss
    loss.backward()  # Compute the gradient of the loss
    optimizer.step()  # Optimize the model parameters

# TODO: Set evaluation mode and disable gradient
model.eval()
with torch.no_grad():
    # TODO: Make Predictions
    outputs = model(X_test)
    # TODO: Convert to binary classes
    predicted_classes = (outputs > 0.5).int()
    # TODO: Calculate the loss on the test data
    test_loss = criterion(outputs, y_test).item()
    # TODO: Calculate the accuracy on the test data
    test_accuracy = accuracy_score(y_test.numpy(), predicted_classes.numpy())

# TODO: Print the test accuracy and loss
print(f'\nTest accuracy: {test_accuracy}, Test loss: {test_loss}')