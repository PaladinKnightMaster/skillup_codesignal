import torch
import torch.nn as nn
import torch.optim as optim
from data_preprocessing import load_preprocessed_data
from sklearn.metrics import accuracy_score

# Load preprocessed data
X_train, X_test, y_train, y_test = load_preprocessed_data()

# TODO: Build the model using nn.Sequential
# - Input layer with 13 features
# - Two hidden layers of 10 neurons each with ReLU activation
# - Output layer with 3 neurons

# TODO: Define criterion and optimizer
# - Use CrossEntropyLoss for criterion
# - Use Adam optimizer with lr=0.001

# TODO: Train the model
# - Train for 150 epochs
# - For each epoch:
#     - Set the model to training mode using model.train()
#     - Zero the gradients using optimizer.zero_grad()
#     - Pass the training data through the model to get outputs
#     - Calculate the loss by comparing outputs with the actual labels
#     - Perform backpropagation using loss.backward() to calculate gradients
#     - Update model parameters by calling optimizer.step()

# TODO: Save the entire model to 'wine_model.pth'

# TODO: Load the model from 'wine_model.pth'
# - Ensure to set model to evaluation mode using eval()

# Verify the loaded model by evaluating it on test data
# TODO: Implement the evaluation
# - Use torch.no_grad()
# - Calculate and print the accuracy using accuracy_score

import torch
import torch.nn as nn
import torch.optim as optim
from data_preprocessing import load_preprocessed_data
from sklearn.metrics import accuracy_score

# Load preprocessed data
X_train, X_test, y_train, y_test = load_preprocessed_data()

# TODO: Build the model using nn.Sequential
# - Input layer with 13 features
# - Two hidden layers of 10 neurons each with ReLU activation
# - Output layer with 3 neurons
model = nn.Sequential(
    nn.Linear(13, 10),
    nn.ReLU(),
    nn.Linear(10, 10),
    nn.ReLU(),
    nn.Linear(10, 3)
)

# TODO: Define criterion and optimizer
# - Use CrossEntropyLoss for criterion
# - Use Adam optimizer with lr=0.001
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# TODO: Train the model
# - Train for 150 epochs
# - For each epoch:
#     - Set the model to training mode using model.train()
#     - Zero the gradients using optimizer.zero_grad()
#     - Pass the training data through the model to get outputs
#     - Calculate the loss by comparing outputs with the actual labels
#     - Perform backpropagation using loss.backward() to calculate gradients
#     - Update model parameters by calling optimizer.step()
num_epochs = 150
for epoch in range(num_epochs):
    model.train()
    optimizer.zero_grad()
    outputs = model(X_train)
    loss = criterion(outputs, y_train)
    loss.backward()
    optimizer.step()

# TODO: Save the entire model to 'wine_model.pth'
torch.save(model, 'wine_model.pth')

# TODO: Load the model from 'wine_model.pth'
# - Ensure to set model to evaluation mode using eval()
loaded_model = torch.load('wine_model.pth')
loaded_model.eval()

# Verify the loaded model by evaluating it on test data
# TODO: Implement the evaluation
# - Use torch.no_grad()
# - Calculate and print the accuracy using accuracy_score
with torch.no_grad():
    outputs = loaded_model(X_test)
    _, predicted = torch.max(outputs, 1)
    accuracy = accuracy_score(y_test, predicted)
    print(f'Loaded Model Accuracy: {accuracy:.4f}')