# Overfitting Prevention with Regularization and Dropout

## Introduction
Hello and welcome! In today's lesson, we'll explore techniques to prevent overfitting in neural networks using **PyTorch**. You will learn about regularization and dropout methods, specifically **L2 Regularization** and **Dropout**, and how to implement these techniques in PyTorch to enhance your model's performance.

## Data Loading
To demonstrate overfitting prevention, we'll use the wine dataset, a classic dataset in machine learning. Let's load the data using the `load_wine` function from `sklearn.datasets`.

Here's the code to load and select the data:

```Python
from sklearn.datasets import load_wine
import torch

# Load and select the data
wine = load_wine()
X = wine.data
y = wine.target

# Convert to PyTorch tensors
X = torch.tensor(X, dtype=torch.float32)
y = torch.tensor(y, dtype=torch.long)
```

This code loads the wine dataset, attributes features and targets to different variables, and finally converts the data to PyTorch tensors.

## What is Regularization?
Regularization is a technique used to prevent overfitting in machine learning models. Overfitting occurs when a model learns not only the underlying patterns in the training data but also the random noise, leading to poor performance on new, unseen data. Regularization techniques add additional constraints or penalties to the model's learning process, encouraging it to focus on the most important patterns in the data and improving its generalization ability.

## Understanding Dropout
Dropout is a regularization technique used to prevent overfitting in neural networks. During training, dropout layers randomly set a fraction of activations in the preceding layer to zero at each update. This prevents the network from becoming too dependent on any particular neurons, thereby promoting generalization.

The fraction of activations set to zero is determined by the dropout rate, typically a value between 0 and 1. For instance, a dropout rate of 0.2 implies that 20% of the neurons will be randomly dropped during each iteration of training. This technique helps in creating a more robust model that performs better on unseen data.

## Building a Model with Dropout Layers
Now, let's define a neural network model using PyTorch. We'll build the model using `nn.Sequential` and focus specifically on adding dropout layers to reduce overfitting.

In the following code:

* `nn.Linear`: Defines a fully connected layer.
* `nn.ReLU`: Adds activation functions to introduce non-linearities.
* `nn.Dropout`: Adds dropout layers with rates of 20% and 10%, respectively. Each dropout layer randomly sets the specified proportion of nodes in the previous layer to zero during training.

```Python
import torch.nn as nn

# Define the model with dropout
model = nn.Sequential(
    nn.Linear(13, 10),
    nn.ReLU(),
    nn.Dropout(0.2),  # Dropout applied to the previous layer
    nn.Linear(10, 10),
    nn.ReLU(),
    nn.Dropout(0.1),  # Dropout applied to the previous layer
    nn.Linear(10, 3)
)

# Print the model summary
print(model)
```

The output shows the structure of our defined neural network, including layers, activation functions, and dropout rates:

```Plain text
Sequential(
  (0): Linear(in_features=13, out_features=10, bias=True)
  (1): ReLU()
  (2): Dropout(p=0.2, inplace=False)
  (3): Linear(in_features=10, out_features=10, bias=True)
  (4): ReLU()
  (5): Dropout(p=0.1, inplace=False)
  (6): Linear(in_features=10, out_features=3, bias=True)
)
```

## Understanding L2 Regularization
A common regularization technique is called L2 regularization, which penalizes large weights by adding their squared values to the loss function. This discourages the model from relying too heavily on any particular feature, thereby enhancing generalization. In PyTorch, L2 regularization is typically implemented by specifying the `weight_decay` parameter in the optimizer.

## Training with L2 Regularization
In the following code we will start training a model without regularization and introduce it midway to observe its effect. Here, regularization is applied by adding weight decay to our criterion. We are also going to print the L2 norm of the weights in the first layer at different epochs to observe how they evolve over time. The L2 norm is a measure of the magnitude of the weights, calculated as the square root of the sum of the squared weights. It gives an indication of how large the weights are.

```Python
import torch.optim as optim

# Defining criterion and optimizer without weight decay
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

for i in range(100):
    model.train()
    optimizer.zero_grad()  # Zero the gradient buffers
    outputs = model(X)  # Forward pass
    loss = criterion(outputs, y)  # Compute loss
    loss.backward()  # Backward pass

    if(i==50):
        # Introducing weight decay from 50th epoch on
        optimizer = optim.Adam(model.parameters(), lr=0.001, weight_decay=0.01)
        print("\nRegularization added to optimizer\n")

    if (i+1) % 10 ==0:
        # L2 norm of weights of the first linear layer
        first_layer_weights = model[0].weight.norm(2).item()
        print(f'{i+1} - L2 norm of weights: {first_layer_weights}')

    optimizer.step()  # Update weights
```

In this code:

* Initially, the optimizer is set up without any L2 regularization.
* At epoch 50, the optimizer is updated to include L2 regularization by adding a `weight_decay` of 0.1. This introduces a penalty to the weights, helping prevent overfitting.
* The L2 norm of the weights in the first linear layer is printed every 10 epochs to monitor their magnitude.

## Observing Regularization during Training
Here's how the output of the previous code might look like:

```Plain text
10 - L2 norm of weights: 1.8384225368499756
20 - L2 norm of weights: 1.8378220796585083
30 - L2 norm of weights: 1.8378770351409912
40 - L2 norm of weights: 1.839258074760437
50 - L2 norm of weights: 1.8409700393676758

Regularization added to optimizer

60 - L2 norm of weights: 1.784838318824768
70 - L2 norm of weights: 1.725461721420288
80 - L2 norm of weights: 1.669530987739563
90 - L2 norm of weights: 1.6180046796798706
100 - L2 norm of weights: 1.570449948310852
```

Notice how the L2 norm of weights in the first layer evolves over epochs. Initially, the L2 norm increases slightly, indicating that the weights are growing. After reaching epoch 50, the L2 norm starts to decrease, showing the effect of the stronger L2 regularization by controlling the magnitude of the weights. This adaptive approach helps to ensure the model does not overfit.

## Summary
In this lesson, we've explored techniques like L2 Regularization and Dropout to prevent overfitting. We built a neural network model using PyTorch, applied these techniques, and trained the model to see their effects.

Practice exercises will help solidify these concepts by allowing you to implement and experiment with these techniques using different settings. These skills are crucial for building robust and generalizable machine learning models in real-world applications.

Happy coding, and keep exploring the power of PyTorch!
