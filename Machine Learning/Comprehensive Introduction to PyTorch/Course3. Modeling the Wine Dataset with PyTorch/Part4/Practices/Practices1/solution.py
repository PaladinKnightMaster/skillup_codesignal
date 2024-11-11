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

# Save the entire model
torch.save(model, 'wine_model.pth')

# Load the entire model
loaded_model = torch.load('wine_model.pth')
loaded_model.eval()

# Verify the loaded model by evaluating it on test data
with torch.no_grad():
    # Make predictions for both models
    model.eval()
    original_outputs = model(X_test)
    loaded_outputs = loaded_model(X_test)
    # Format predictions
    _, original_predicted = torch.max(original_outputs, 1)
    _, loaded_predicted = torch.max(loaded_outputs, 1)
    # Calculate accuracies
    original_accuracy = accuracy_score(y_test, original_predicted)
    loaded_accuracy = accuracy_score(y_test, loaded_predicted)

# Display accuracies for both models
print(f'Original Model Accuracy: {original_accuracy:.4f}')
print(f'Loaded Model Accuracy: {loaded_accuracy:.4f}')