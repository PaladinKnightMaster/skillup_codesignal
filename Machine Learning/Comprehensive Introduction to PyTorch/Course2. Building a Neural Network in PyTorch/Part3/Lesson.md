# Training a Neural Network Model with PyTorch

## Lesson Overview
Hello and welcome! In this lesson, we'll dive into the process of training a **neural network model** in **PyTorch**. You'll learn how to import necessary modules, prepare data, define a loss function or criterion, and an optimizer, and set up and run a training loop. By the end of this lesson, you’ll be able to train a neural network model using PyTorch.

Our example will be training a neural network to predict if a soccer team is likely to win based on average goals scored by the team and average goals conceded by the opponent.

## Introduction to Training a Neural Network in PyTorch
Before starting, let's briefly refresh our knowledge on training a Neural Network. Training a model is a process of learning the weight parameters that minimize the error on the training data. The process involves passing data through the model (forward propagation), computing the `loss` (how far the model's `prediction` is from the actual `value`), and then adjusting the weights using this loss (Backward Propagation).

To do this in PyTorch, we will need our training data, a defined model, a loss function, and an optimizer for adjusting the weights.

Let's proceed with our example code and demonstrate this concept more vividly.

## Preparing the Input and Output Data
At the core of supervised learning techniques, we need input data (features) and output data (target/labels). In our scenario, the input represents the average goals scored by a soccer team and the average goals conceded by their opponent during the season. The output is binary, indicating whether the team is likely to win a match against this specific opponent `(1)` or not `(0)`.

Let's create our input and output tensor data using the `torch.tensor()` function.

```Python
import torch

# Input features [Average Goals Scored, Average Goals Conceded by Opponent]
X = torch.tensor([
    [3.0, 0.5], [1.0, 1.0], [0.5, 2.0], [2.0, 1.5],
    [3.5, 3.0], [2.0, 2.5], [1.5, 1.0], [0.5, 0.5],
    [2.5, 0.8], [2.1, 2.0], [1.2, 0.5], [0.7, 1.5]
], dtype=torch.float32)

# Target outputs [1 if the team is likely to win, 0 otherwise]
y = torch.tensor([[1], [0], [0], [1], [1], [0], [1], [0], [1], [0], [1], [0]], dtype=torch.float32)
```

It is important to note that we've used `dtype=torch.float32` for both `X` and `y` as our loss function (Binary Cross-Entropy) requires the target tensor `y` to be in floating-point format. Other loss functions may require different data types, so it's crucial to ensure compatibility.

## Defining the Model
We need to define our neural network model. For this binary classification task, we'll use a simple feedforward neural network with an input layer, one hidden layer, and an output layer.

```Python
import torch.nn as nn

# Define the model using nn.Sequential
model = nn.Sequential(
    nn.Linear(2, 10),
    nn.ReLU(),
    nn.Linear(10, 1),
    nn.Sigmoid()
)
```

## Defining the Criterion and Optimizer
To train our neural network model, we need to define a `criterion` (also known as a loss function) and an `optimizer`.

The criterion measures how far the model's predictions are from the actual output. PyTorch provides several loss function classes, and for our binary classification task, we'll use the Binary Cross-Entropy (BCE) Loss.

The **optimizer** is used to update the model parameters (weights and biases) based on the derivatives computed during backpropagation. PyTorch offers several optimization algorithms under `torch.optim`. In this example, we'll use Adam with a learning rate of 0.1.

```Python
import torch.optim as optim

criterion = nn.BCELoss()
optimizer = optim.Adam(model.parameters(), lr=0.1)
```

## Setting Up the Training Loop
Training a neural network typically involves iteratively passing data through our model, calculating the loss, and backpropagating the loss to update our model. This process is repeated for a certain number of epochs. An epoch is one complete pass through the entire training dataset.

Let's demonstrate this with our example code.

```Python
# Train the model for 50 epochs
for epoch in range(50):
    model.train()  # Set the model to training mode

    optimizer.zero_grad()  # Zero the gradients for this iteration

    outputs = model(X)  # Forward pass: compute predictions

    loss = criterion(outputs, y)  # Compute the loss

    loss.backward()  # Backward pass: compute the gradient of the loss

    optimizer.step()  # Optimize the model parameters based on the gradients

    if (epoch+1) % 10 == 0:  # Print every 10 epochs
        print(f"Epoch {epoch+1}, Loss: {loss.item()}")  # Print epoch loss
```

After setting up the training loop, the code runs a sequence of operations for each epoch, where an epoch is a single pass through the entire dataset. Here’s a breakdown of each step:

1. **Model Training Mode**: `model.train()` places the model in training mode, enabling necessary features that should only be active during training. It's good practice to keep it inside the loop to ensure the model is consistently set to training mode at the start of each epoch, especially if you might switch to other modes for some reason during the training process.
2. **Reset Gradients**: `optimizer.zero_grad()` is called to reset the gradients of the model parameters; this is crucial because gradients accumulate by default in PyTorch.
3. **Forward Pass**: `outputs = model(X)` computes the model's predictions based on the current state of the model parameters.
4. **Loss Calculation**: The loss is calculated by comparing the model's predictions (`outputs`) to the true labels (`y`) using the pre-defined loss function `criterion`, which in this case is `nn.BCELoss()`.

Following the loss calculation, the backward pass is initiated:

1. **Backward Pass**: `loss.backward()` computes the gradients of the loss with respect to each parameter.
2. **Parameter Update**: The optimizer uses these gradients in `optimizer.step()` to adjust the model's parameters, reducing the loss for the next iteration.

This sequence is repeated for a predefined number of epochs (`50` in this case), allowing the model to iteratively learn and improve its performance on the training data.

## Tracking and Monitoring the Training Process
While training, it's helpful to keep track of the loss at each epoch (or at certain intervals). This allows us to see how our model is improving over time or if it's struggling. Here, we print the loss every 10 epochs.

```Python
for epoch in range(50):
    # Training steps...

    if (epoch+1) % 10 == 0:  # Every 10 epochs (range starts from 0)
        print(f"Epoch {epoch+1}, Loss: {loss.item()}")  # Print epoch loss
```

The output of the above code will be:

```
Epoch 10, Loss: 0.171359583735466
Epoch 20, Loss: 0.03882661089301109
Epoch 30, Loss: 0.012083499692380428
Epoch 40, Loss: 0.005638712551444769
Epoch 50, Loss: 0.0035258333664387465
```

The displayed `loss` values at various epochs indicate how the model's performance is improving over time as it learns from the training data.

## Lesson Summary and Practice
Congratulations! You've just walked through the process of training a neural network model in PyTorch. You've learned to:

* Define a loss function and an optimizer
* Set up and run a training loop
* Monitor your model's progress during training

To reinforce your understanding and mastery of these concepts, work through the upcoming practice exercises. They will give you the opportunity to apply what you've learned to new scenarios and solidify your PyTorch proficiency.

And remember, successful machine learning is a process of iteration and refinement. Don't be discouraged if your first models aren't perfect. With practice and experience, your models (and your skills!) will continue to improve, so keep learning and experimenting!
