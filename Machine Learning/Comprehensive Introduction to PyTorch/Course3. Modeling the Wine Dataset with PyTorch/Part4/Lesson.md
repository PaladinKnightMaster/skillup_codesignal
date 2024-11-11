# Saving and Loading PyTorch Models

## Introduction
Welcome to our session on saving and loading PyTorch models. After investing hours or days in training a model, saving your progress is crucial. You may want to use the trained model on another device, share it, or just load it in the future. This lesson focuses on how to achieve that, so let's get started!

## Brief Recap: Model Training
But before, let's refresh our memory from previous lessons. We've trained a PyTorch model to classify wines using PyTorch's `nn.Sequential` class, along with `CrossEntropyLoss` and the `Adam` optimizer. Here's a quick snapshot:

```Python
import torch
import torch.nn as nn
import torch.optim as optim
from data_preprocessing import load_preprocessed_data

# Load the preprocessed data
X_train, X_test, y_train, y_test = load_preprocessed_data()

# Build the model
model = nn.Sequential(
    nn.Linear(13, 10),
    nn.ReLU(),
    nn.Linear(10, 10),
    nn.ReLU(),
    nn.Linear(10, 3)
)

# Define the loss function and optimizer
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
```

## Saving a Model with PyTorch
After model training, it's time to preserve the model for later use. Here's where PyTorch's handy `torch.save()` method comes into play. It saves the model into a file ending in `.pth`, which indicates that this file holds a serialized PyTorch model.

Serialization is a process where an object in memory (like our PyTorch model) is converted into a format that can be saved on disk or sent over a network. Hence, when we save a model, we're serializing the entire module.

Here's the code that saves our model:

```Python
# Save the entire model
torch.save(model, 'wine_model.pth')
```

## Loading a Model with PyTorch
To use the saved model, we must load it back into memory with `torch.load`. After loading, it's essential to set the model to evaluation mode with `model.eval()`.

The `model.eval()` switches certain layers to evaluation mode (as opposed to training mode), ensuring consistent behavior of layers during inference, such as preventing dropout layers from dropping neurons. This is good practice whenever you're using the model for predictions and not training it.

Here's how to load a saved model:

```Python
# Load the entire model
loaded_model = torch.load('wine_model.pth')
loaded_model.eval()
```

## Evaluating a Loaded Model
To verify the loaded model, you should evaluate it on the test data and compare its performance with the original model. Here's how you can do it:

```Python
from sklearn.metrics import accuracy_score

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
```

By comparing the accuracy of the original and loaded model, you can confirm that the model was saved and loaded correctly, ensuring consistent performance. As shown on the output of the above code:

```Plain text
Original Model Accuracy: 0.9259
Loaded Model Accuracy: 0.9259
```

This indicates that the loaded model's performance is identical to the original model, verifying that the saving and loading process preserved the model accurately.

## Lesson Summary and Practice
Great job on completing this session! You've learned how to save and load PyTorch models. Such a capability is crucial for efficient machine learning projects. Now, it's time for some hands-on practice. Your task is to train a model, save it, load it back into memory, and evaluate its performance on test data.

Remember: Practice is to learning what refinement is to crude oil. Keep up the hard work!

## Additional Resources
For your convenience, here is the helpful code snippet for loading and preprocessing the Wine dataset, which you can use to ensure your data is properly prepared for training and evaluation in PyTorch:

```Python
import torch
from sklearn.datasets import load_wine
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

def load_preprocessed_data():
    # Load the Wine dataset
    wine = load_wine()
    X, y = wine.data, wine.target

    # Split the dataset into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, stratify=y)

    # Scale the features
    scaler = StandardScaler().fit(X_train)
    X_train_scaled = scaler.transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    # Convert to PyTorch tensors
    X_train_tensor = torch.tensor(X_train_scaled, dtype=torch.float32)
    X_test_tensor = torch.tensor(X_test_scaled, dtype=torch.float32)
    y_train_tensor = torch.tensor(y_train, dtype=torch.long)
    y_test_tensor = torch.tensor(y_test, dtype=torch.long)

    return X_train_tensor, X_test_tensor, y_train_tensor, y_test_tensor
```
