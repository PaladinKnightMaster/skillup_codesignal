# import torch
# import torch.nn as nn
# import torch.optim as optim
# from data_preprocessing import load_preprocessed_data
# from sklearn.metrics import accuracy_score
# import matplotlib.pyplot as plt

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
#     _, predicted = torch.max(outputs, 1)
#     test_accuracy = accuracy_score(y_test, predicted)

# print(f'Test Accuracy: {test_accuracy:.4f}, Test Loss: {test_loss:.4f}')

# # Plotting actual training and validation loss
# epochs = range(1, num_epochs + 1)
# train_loss = history['loss']
# val_loss = history['val_loss']

# plt.figure(figsize=(8, 5))
# plt.plot(epochs, train_loss, label='Training Loss')
# plt.plot(epochs, val_loss, label='Validation Loss')
# plt.title('Model Loss During Training')
# plt.ylabel('Loss')
# plt.xlabel('Epoch')
# plt.legend()
# plt.show()

import torch
import torch.nn as nn
import torch.optim as optim
from data_preprocessing import load_preprocessed_data
from sklearn.metrics import accuracy_score
import matplotlib.pyplot as plt

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
num_epochs = 200
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

# Plotting actual training and validation loss
epochs = range(1, num_epochs + 1)
train_loss = history['loss']
val_loss = history['val_loss']

plt.figure(figsize=(8, 5))
plt.plot(epochs, train_loss, label='Training Loss')
plt.plot(epochs, val_loss, label='Validation Loss')
plt.title('Model Loss During Training')
plt.ylabel('Loss')
plt.xlabel('Epoch')
plt.legend()
plt.show()