# import torch
# import torch.nn as nn
# import torch.optim as optim
# from data_preprocessing import load_preprocessed_data
# from sklearn.metrics import accuracy_score

# # Load preprocessed data
# X_train, X_test, y_train, y_test = load_preprocessed_data()

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

# # Evaluate on test data
# model.eval()
# with torch.no_grad():
#     outputs = model(X_test)
#     test_loss = criterion(outputs, y_test).item()
#     _, predicted = torch.min(outputs, 1)
#     test_accuracy = accuracy_score(y_test, predicted)

# print(f'Test Accuracy: {test_accuracy:.4f}, Test Loss: {test_loss:.4f}')

import torch
import torch.nn as nn
import torch.optim as optim
from data_preprocessing import load_preprocessed_data
from sklearn.metrics import accuracy_score

# Load preprocessed data
X_train, X_test, y_train, y_test = load_preprocessed_data()

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

# Evaluate on test data
model.eval()
with torch.no_grad():
    outputs = model(X_test)
    test_loss = criterion(outputs, y_test).item()
    _, predicted = torch.max(outputs, 1)
    test_accuracy = accuracy_score(y_test, predicted)

print(f'Test Accuracy: {test_accuracy:.4f}, Test Loss: {test_loss:.4f}')