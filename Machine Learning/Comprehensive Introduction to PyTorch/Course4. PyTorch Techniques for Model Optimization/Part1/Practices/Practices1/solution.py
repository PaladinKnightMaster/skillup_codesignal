# import torch
# import torch.nn as nn
# import torch.optim as optim
# from sklearn.datasets import load_wine
# from sklearn.model_selection import train_test_split

# # Load dataset
# wine = load_wine()
# X = torch.tensor(wine.data, dtype=torch.float32)
# y = torch.tensor(wine.target, dtype=torch.long)

# # Split dataset into training and validation sets
# X_train, X_valid, y_train, y_valid = train_test_split(X, y, test_size=0.2)

# # Define the model using nn.Sequential
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

# # Initializing checkpointing parameters
# best_loss = float('inf')
# checkpoint_path = "best_model.pth"

# # Model training with checkpointing and validation
# num_epochs = 100
# for epoch in range(num_epochs):
#     model.train()
#     optimizer.zero_grad()
#     outputs = model(X_train)
#     loss = criterion(outputs, y_train)
#     loss.backward()
#     optimizer.step()

#     # Validate the model
#     model.eval()
#     with torch.no_grad():
#         val_outputs = model(X_valid)
#         val_loss = criterion(val_outputs, y_valid).item()

#     # TODO: Check if the validation loss has decreased to save the model
#     if __________________:
#         best_loss = val_loss
#         torch.save(model, checkpoint_path)
#         print(f"Model saved at epoch {epoch} with validation loss {val_loss:.4f}!")

import torch
import torch.nn as nn
import torch.optim as optim
from sklearn.datasets import load_wine
from sklearn.model_selection import train_test_split

# Load dataset
wine = load_wine()
X = torch.tensor(wine.data, dtype=torch.float32)
y = torch.tensor(wine.target, dtype=torch.long)

# Split dataset into training and validation sets
X_train, X_valid, y_train, y_valid = train_test_split(X, y, test_size=0.2)

# Define the model using nn.Sequential
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

# Initializing checkpointing parameters
best_loss = float('inf')
checkpoint_path = "best_model.pth"

# Model training with checkpointing and validation
num_epochs = 100
for epoch in range(num_epochs):
    model.train()
    optimizer.zero_grad()
    outputs = model(X_train)
    loss = criterion(outputs, y_train)
    loss.backward()
    optimizer.step()

    # Validate the model
    model.eval()
    with torch.no_grad():
        val_outputs = model(X_valid)
        val_loss = criterion(val_outputs, y_valid).item()

    # TODO: Check if the validation loss has decreased to save the model
    if val_loss < best_loss:
        best_loss = val_loss
        torch.save(model, checkpoint_path)
        print(f"Model saved at epoch {epoch} with validation loss {val_loss:.4f}!")