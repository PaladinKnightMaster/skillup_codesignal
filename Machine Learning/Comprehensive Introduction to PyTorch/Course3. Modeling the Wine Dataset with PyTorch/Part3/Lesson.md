# Deep Model Evaluation with PyTorch

## Introduction
Welcome back! Previously, we trained a multi-classification **PyTorch** model using our prepared **Wine dataset**. Now, let's delve into evaluating our model's performance. In this context, the goal is to discern how well our model generalizes from what it has learned during training to handle unfamiliar, unseen data. This lesson digs into loss functions, accuracy computation, and performance interpretation, all key components in the model evaluation process. Additionally, we will visualize the training and validation losses using `matplotlib` to gain better insights into the learning process and model performance.

## Recap: Building and Training Our Model
Before diving into model evaluation, let's briefly recap the process of building and training our PyTorch model using the Wine dataset. Below is the code snippet from the previous lesson that sets up our model, defines the loss function and optimizer, and trains the model over 150 epochs.

```Python
import torch
import torch.nn as nn
import torch.optim as optim
from data_preprocessing import load_preprocessed_data

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
```

This snippet includes:

1. Loading the preprocessed data.
2. Defining a simple neural network model with 3 layers using `nn.Sequential`.
3. Choosing `CrossEntropyLoss` as the loss function and `Adam` as the optimizer.
4. Training the model for 150 epochs, recording both training and validation loss.

With the model trained, we are now in a position to evaluate its performance in a more detailed manner.

## Predicting and Evaluating on the Test Set
During training, we calculated at each epoch the loss for both the training set and test set, used as validation, and stored these values in our history dictionary. This helped us monitor the model's performance and ensure it was not overfitting to the training data.

Now, to evaluate our fully trained model, we again calculate the test loss and compute the accuracy, which is the fraction of correct predictions over total predictions. We'll use torch.no_grad to disable gradient calculations, as they are not needed during evaluation, and the accuracy_score function from sklearn.metrics to compute accuracy.

Here's the code for performing these evaluations in PyTorch:

```Python
from sklearn.metrics import accuracy_score

# Set the model to evaluation mode
model.eval()

# Disables gradient calculation
with torch.no_grad():
    # Input the test data into the model
    outputs = model(X_test)
    # Calculate the Cross Entropy Loss
    test_loss = criterion(outputs, y_test).item()
    # Choose the class with the highest value as the predicted output
    _, predicted = torch.max(outputs, 1)
    # Calculate the accuracy
    test_accuracy = accuracy_score(y_test, predicted)

print(f'Test Accuracy: {test_accuracy:.4f}, Test Loss: {test_loss:.4f}')
```

In this code, we first set the model to evaluation mode using `model.eval()` to ensure it behaves differently during evaluation compared to training. Next, we disable gradient calculation with `torch.no_grad()` to save memory and computational resources. We then pass the test data through the model to generate the outputs. To evaluate the model's performance, we calculate the Cross Entropy Loss using these outputs.

We also obtain the predicted class labels by selecting the class with the highest value using `torch.max(outputs, 1)`, which returns two tensors: the max value (which we discard using _ as it's not needed) and the index of the max value along dimension 1, which corresponds to the predicted class.

Finally, we compute the test accuracy by comparing the predicted labels with the true labels using the `accuracy_score` function from `sklearn.metrics`. The output values for test accuracy and test loss provide quantitative measures of our model's performance on unseen test data, offering insight into its generalization capability.

```Plain text
Test Accuracy: 0.9259, Test Loss: 0.4211
```

## Visualizing Loss Data with Matplotlib
Visualizing the loss data during model evaluation is crucial as it helps in understanding the learning progress of our model over time. By plotting the training and validation loss, we can identify patterns such as overfitting or underfitting, providing valuable insights to fine-tune the model. Using `matplotlib`, a widely-used plotting library in Python, we will graph the loss history recorded during our training to visually assess the model's performance.

Here's how we plot the loss data:

```Python
import matplotlib.pyplot as plt

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
```

The generated plot might look like this:

![](https://github.com/PaladinKnightMaster/skillup_codesignal/blob/main/assets/images/Screenshot_49.png)

It is possible to see that both the training loss and validation loss decreased steadily, which means the model was learning well from the data. The lines are close together, so the model wasn’t just memorizing the training data; it was actually learning to generalize, which is great because it means it should perform well on new, similar tasks. The smooth decrease in loss also tells us that the training process was stable and overall, the model trained quite successfully.

## Lesson Summary and Practice
In this lesson, we explored different aspects of model evaluation, including calculating loss, predicting labels, and determining accuracy. We also learned how to visualize our loss data using `matplotlib` to assess the training progress. Upcoming practice exercises will give you hands-on experience in applying these concepts. Remember, mastering `PyTorch` requires a balanced mix of understanding and application. Happy coding!

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