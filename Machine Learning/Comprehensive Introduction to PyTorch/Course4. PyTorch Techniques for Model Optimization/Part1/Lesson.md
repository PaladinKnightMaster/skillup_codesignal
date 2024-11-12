# Saving Progress with Model Checkpointing in PyTorch

## Introduction to Model Checkpointing
In today's lesson, we will focus on model checkpointing using `PyTorch`. Model checkpointing is a vital technique in machine learning that allows us to save the state of a model during training, ensuring that the best-performing models are preserved. By the end of this lesson, you will understand how to implement model checkpointing, allowing you to save your model whenever it achieves the best performance on a validation set.

## What is Model Checkpointing?
Model checkpointing involves saving the state of a neural network model at various points during the training process. This is crucial for several reasons:

* **Prevent Loss of Progress**: In case of unexpected interruptions (e.g., power failure, hardware malfunction), checkpointing helps in resuming training from the last saved state.
* **Save Best Performing Models**: By saving the model whenever it achieves a new best performance on a validation set, we ensure that we retain the best version of our model.

## Setting Up the Environment
First, let’s set up our environment. We will import the necessary libraries, load and split our dataset, and finally build our model:

```Python
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
```

## Initialize Checkpoint Parameters
Before diving into the training loop, let's first set up the initial parameters for checkpointing. This will ensure we can effectively track the model's performance and save the best version. Specifically, we'll need to establish:

* `best_loss` to keep track of the best validation loss. We initialize `best_loss` to `float('inf')` to ensure the first validation loss will trigger a model save.
* `checkpoint_path` where the model will be saved.

```Python
best_loss = float('inf')
checkpoint_path = "best_model.pth"
```

## Training Loop with Checkpointing
Now, we will implement the training loop with validation and model checkpointing:

```Python
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

    # Save the model if the validation loss has decreased
    if val_loss < best_loss:
        best_loss = val_loss
        torch.save(model, checkpoint_path)
        print(f"Model saved at epoch {epoch} with validation loss {val_loss:.4f}!")
```

In this training loop:

* The model is trained on the training set.
* The model's performance is validated on the validation set.
* If the validation loss improves, the model is saved using `torch.save()`. This ensures that only the best performing model is saved.

## Lesson Summary
Congratulations! You've learned about the concept and importance of model checkpointing, as well as how to implement checkpointing in a PyTorch model. Remember, implementing effective checkpointing can significantly boost your productivity and model performance in real-world machine learning tasks. Keep practicing and happy coding!
