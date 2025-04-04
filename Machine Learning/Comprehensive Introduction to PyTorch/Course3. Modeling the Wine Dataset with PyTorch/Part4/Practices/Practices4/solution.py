# import torch
# import torch.nn as nn
# import torch.optim as optim
# from data_preprocessing import load_preprocessed_data
# from sklearn.metrics import accuracy_score

# X_train, X_test, y_train, y_test = load_preprocessed_data()

# # Model building
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
# for epoch in range(num_epochs):
#     model.train()
#     optimizer.zero_grad()
#     outputs = model(X_train)
#     loss = criterion(outputs, y_train)
#     loss.backward()
#     optimizer.step()

# # TODO: Save the entire model to a file

# # TODO: Load the model from the file
# # - Make sure to set the loaded model to evaluation mode using 'eval()'

# # Verify the loaded model by evaluating it on test data
# with torch.no_grad():
#     outputs = loaded_model(X_test)
#     _, predicted = torch.max(outputs, 1)
#     accuracy = accuracy_score(y_test, predicted)

# print(f'Loaded Model Accuracy: {accuracy:.4f}')

import torch
import torch.nn as nn
import torch.optim as optim
from data_preprocessing import load_preprocessed_data
from sklearn.metrics import accuracy_score

X_train, X_test, y_train, y_test = load_preprocessed_data()

# Model building
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
for epoch in range(num_epochs):
    model.train()
    optimizer.zero_grad()
    outputs = model(X_train)
    loss = criterion(outputs, y_train)
    loss.backward()
    optimizer.step()

# TODO: Save the entire model to a file
torch.save(model, 'wine_model.pth')

# TODO: Load the model from the file
# - Make sure to set the loaded model to evaluation mode using 'eval()'
loaded_model = torch.load('wine_model.pth')
loaded_model.eval()

# Verify the loaded model by evaluating it on test data
with torch.no_grad():
    outputs = loaded_model(X_test)
    _, predicted = torch.max(outputs, 1)
    accuracy = accuracy_score(y_test, predicted)

print(f'Loaded Model Accuracy: {accuracy:.4f}')