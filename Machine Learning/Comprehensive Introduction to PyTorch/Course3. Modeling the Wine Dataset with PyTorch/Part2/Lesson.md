# Building a Multi-Class Classification Model with PyTorch

## Lesson Overview
Excellent work on preprocessing the Wine dataset! Now, it's time to leverage those efforts by building a **multi-class classification model using PyTorch**. In this lesson, we will walk you through the entire process—from loading the preprocessed data to defining and training our model. We'll also explore the concepts of loss functions and optimizers, crucial for improving our model's performance. Let's dive in and build our classification model step-by-step!

## Loading the Preprocessed Dataset
Before we start building our multi-class classification model, we need to load our preprocessed dataset. To maintain modular code, we use the `load_preprocessed_data` function from our previous lesson, stored in `data_preprocessing.py`. This function handles loading, splitting, scaling, and converting the Wine dataset into PyTorch tensors, providing the data in a format that is ready to train our model.

Load the preprocessed dataset:

```Python
from data_preprocessing import load_preprocessed_data

X_train, X_test, y_train, y_test = load_preprocessed_data()
```

Here's a brief recap of the `data_preprocessing.py`:

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

With the dataset loaded, we're ready to build our multi-class classification model.

## Building a Multi-Class Neural Network with PyTorch
A machine learning model in PyTorch is generally composed of layers. Our model is a multi-class feed-forward neural network consisting of linear and non-linear layers, where we have three linear layers and two ReLU (Rectified Linear Unit) activation layers. This model structure is defined using `nn.Sequential`. The `nn.Linear` function represents a linear transformation and `nn.ReLU` introduces non-linearity to the model, which is essential for learning complex patterns.

Let's break the following code down:

```Python
import torch
import torch.nn as nn

# Define the model using nn.Sequential
model = nn.Sequential(
    nn.Linear(13, 10),
    nn.ReLU(),
    nn.Linear(10, 10),
    nn.ReLU(),
    nn.Linear(10, 3)
)

# Display model's architecture
print(model)
```

We begin with an input layer `nn.Linear(13, 10)`, which accepts input tensors of size 13 (the number of features in our dataset) and outputs tensors of size 10. Next, a ReLU activation layer applies an element-wise non-linear transformation. This process is repeated for another layer. Finally, we have an output layer `nn.Linear(10, 3)`, which takes an input of size 10 and returns an output of size 3, corresponding to our three wine classes.

The output of our model will be a tensor of raw scores (logits) for each of the three classes. These logits can be converted to probabilities by applying a softmax function, which we'll explain is automatically handled by our loss function later. The model's output represents the model's confidence in each class.

The model's architecture displayed from the above code will be:

```Plain text
Sequential(
  (0): Linear(in_features=13, out_features=10, bias=True)
  (1): ReLU()
  (2): Linear(in_features=10, out_features=10, bias=True)
  (3): ReLU()
  (4): Linear(in_features=10, out_features=3, bias=True)
)
```

This output describes the neural network architecture we defined. It shows each layer in sequence, including the type (Linear or ReLU), the number of input and output features for Linear layers, and whether a bias term is included.

## Defining the Loss Function
Now that we've defined our model structure, we need to specify how to measure its performance.

The performance is determined by the loss function, which calculates the disparity between the model's predictions and the actual labels. Simply put, the loss function tells us how wrong our model is. For our classification problem, the suitable loss function is Cross-Entropy loss. Here's how you define it in PyTorch:

```Python
criterion = nn.CrossEntropyLoss()
```

Cross-Entropy loss is used when the output needs to be a probability distribution. This means it helps measure how different the predicted probabilities are from the actual labels. Because of the way `CrossEntropyLoss` works, it expects raw scores (also known as logits) as input and it internally applies the softmax function to convert these scores into probabilities. So, even though softmax is typically used for multi-class classification problems, we don't need to add a separate softmax layer in our model; the loss function handles it for us. This simplifies our model design and ensures numerical stability.

## Defining the Optimizer
To improve the performance of our model, we need to update the model parameters (weights and biases). This is where an optimizer comes in. The optimizer helps to adjust these parameters to reduce the loss. The optimizer we use in this case is Adam. Adam, short for Adaptive Moment Estimation, is an algorithm that adjusts the model's parameters based on the gradients (which tell us how much the loss would change if we changed the parameters). Here's how you set it up in PyTorch:

```Python
import torch.optim as optim

optimizer = optim.Adam(model.parameters(), lr=0.001)
```

The Adam optimizer includes settings like the learning rate (`lr`), which controls how big a step we take while updating the parameters of the model. The `model.parameters()` call returns an iterator of all the parameters (weights and biases) in our model that need to be optimized. These parameters are updated during the training process to minimize the loss. A learning rate of `0.001` is generally a good starting point for many problems. This balance ensures that we steadily move towards a solution without making too large of a step and potentially missing the optimal parameters.

By defining the loss function and the optimizer, we lay the groundwork for our model to learn and improve through training.

## Training the Model
After defining the model and its evaluation metrics, our next step is to train the model using our training data.

```Python
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
```

Here's a step-by-step breakdown of the code:

1. **Set Number of Epochs**: Define how many times the model will iterate over the entire training dataset.
2. **Initialize History**: Create a dictionary to store loss and validation loss values for each epoch.
3. **Training Loop**: Loop through the training process for the specified number of epochs.
4. **Training Phase**: Switch to training mode, clear gradients, make predictions, calculate loss, perform backpropagation, update parameters, and store training loss.
5. **Evaluation Phase**: Switch to evaluation mode, disable gradient calculation, make predictions on validation data (`outputs_val`), which is not used to train the model but to evaluate how it performs on unseen data, calculate validation loss, and store validation loss.
6. **Print Progress**: Every 10 epochs, print the current epoch, training loss, and validation loss to monitor progress.
The output of our complete training process might look like this:

```Plain text
Epoch [10/150], Loss: 1.1324, Validation Loss: 1.1123
Epoch [20/150], Loss: 1.1020, Validation Loss: 1.0844
Epoch [30/150], Loss: 1.0713, Validation Loss: 1.0547
Epoch [40/150], Loss: 1.0366, Validation Loss: 1.0204
...
Epoch [150/150], Loss: 0.3014, Validation Loss: 0.3216
```

## Lesson Summary
Congratulations on reaching the end of this lesson! You have learned how to construct a neural network model in PyTorch, from defining the model structure to training it. You mastered the concept of how the loss function and optimizer work in tandem to reduce the model's error, how they are defined, and used.

To reinforce what you've learned, your next exercises will involve building the model and training process for our Wine dataset. This will give you the practical experience necessary to tackle real-world machine learning problems using PyTorch confidently. Enjoy practicing to make perfect!
