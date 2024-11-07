# import torch
# import torch.nn as nn
# import torch.optim as optim
# from data_preprocessing import load_preprocessed_data

# X_train, X_test, y_train, y_test = load_preprocessed_data()

# # TODO: Define the model using nn.Sequential
# # The model should have:
# # - An input layer with 13 features
# # - A hidden layer with 20 units and ReLU activation
# # - Another hidden layer with 15 units and ReLU activation
# # - An output layer with 3 units (for the wine classes)

# # TODO: Define criterion using nn.CrossEntropyLoss

# # TODO: Define optimizer using optim.Adam with a learning rate of 0.001

# # Train the model
# num_epochs = 150
# history = {'loss': [], 'val_loss': []}
# for epoch in range(num_epochs):
#     model.train()
#     optimizer.zero_grad()
#     outputs = model(X_train)
#     loss = criterion(outputs, y_train)
#     loss.backward()
#     optimizer.step()
#     history['loss'].append(loss.item())

#     model.eval()
#     with torch.no_grad():
#         outputs_val = model(X_test)
#         val_loss = criterion(outputs_val, y_test)
#         history['val_loss'].append(val_loss.item())

#     if (epoch+1) % 10 == 0:
#         print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}, Validation Loss: {val_loss.item():.4f}')

import torch
import torch.nn as nn
import torch.optim as optim
from data_preprocessing import load_preprocessed_data

X_train, X_test, y_train, y_test = load_preprocessed_data()

# TODO: Define the model using nn.Sequential
# The model should have:
# - An input layer with 13 features
# - A hidden layer with 20 units and ReLU activation
# - Another hidden layer with 15 units and ReLU activation
# - An output layer with 3 units (for the wine classes)
model = nn.Sequential(
    nn.Linear(13, 20),
    nn.ReLU(),
    nn.Linear(20, 15),
    nn.ReLU(),
    nn.Linear(15, 3)
)

# TODO: Define criterion using nn.CrossEntropyLoss
criterion = nn.CrossEntropyLoss()
# TODO: Define optimizer using optim.Adam with a learning rate of 0.001
optimizer = optim.Adam(model.parameters(), lr=0.001)
# Train the model
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
        outputs_val = model(X_test)
        val_loss = criterion(outputs_val, y_test)
        history['val_loss'].append(val_loss.item())

    if (epoch+1) % 10 == 0:
        print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}, Validation Loss: {val_loss.item():.4f}')