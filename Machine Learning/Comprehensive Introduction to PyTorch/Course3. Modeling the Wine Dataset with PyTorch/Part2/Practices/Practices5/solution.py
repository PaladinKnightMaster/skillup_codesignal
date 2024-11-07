# import torch
# import torch.nn as nn
# import torch.optim as optim
# from data_preprocessing import load_preprocessed_data

# X_train, X_test, y_train, y_test = load_preprocessed_data()

# # TODO: Define the model using nn.Sequential
# # - Input layer with 13 features
# # - First hidden layer with 32 units and ReLU activation
# # - Second hidden layer with 16 units and ReLU activation
# # - Output layer with 3 units (for the wine classes)

# # TODO: Define criterion using nn.CrossEntropyLoss
# # The loss function should be suitable for multi-class classification problems

# # TODO: Define optimizer using optim.Adam with a learning rate of 0.001

# # TODO: Train the model
# # - Set the model to training mode
# # - Clear gradients, perform the forward pass, compute loss, backpropagate, and update the optimizer
# # - Capture the training loss
# # - Set the model to evaluation mode
# # - Compute and capture validation loss
# # - Print the loss values every 10 epochs

# # Train the model for 150 epochs and store the history of training and validation losses

import torch
import torch.nn as nn
import torch.optim as optim
from data_preprocessing import load_preprocessed_data

X_train, X_test, y_train, y_test = load_preprocessed_data()

# TODO: Define the model using nn.Sequential
# - Input layer with 13 features
# - First hidden layer with 32 units and ReLU activation
# - Second hidden layer with 16 units and ReLU activation
# - Output layer with 3 units (for the wine classes)
model = nn.Sequential(
    nn.Linear(13, 32),
    nn.ReLU(),
    nn.Linear(32, 16),
    nn.ReLU(),
    nn.Linear(16, 3)
)
# TODO: Define criterion using nn.CrossEntropyLoss
# The loss function should be suitable for multi-class classification problems
criterion = nn.CrossEntropyLoss()
# TODO: Define optimizer using optim.Adam with a learning rate of 0.001
optimizer = optim.Adam(model.parameters(), lr=0.001)
# TODO: Train the model
# - Set the model to training mode
# - Clear gradients, perform the forward pass, compute loss, backpropagate, and update the optimizer
# - Capture the training loss
# - Set the model to evaluation mode
# - Compute and capture validation loss
# - Print the loss values every 10 epochs

# Train the model for 150 epochs and store the history of training and validation losses
num_epochs = 150
history = {'loss': [], 'val_loss': []}
for epoch in range(num_epochs):
    model.train()
    optimizer.zero_grad()
    outputs = model(X_train)
    loss = criterion(outputs, y_train)
    loss.backward()
    optimizer.step()
    history['loss'].append(loss.item())

    model.eval()
    with torch.no_grad():
        outputs = model(X_test)
        val_loss = criterion(outputs, y_test)
        history['val_loss'].append(val_loss.item())
    if epoch % 10 == 0:
        print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}, Validation Loss: {val_loss.item():.4f}')