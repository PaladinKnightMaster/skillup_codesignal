# Initializing a Neural Network Model in PyTorch

## Lesson Overview
Hey there, budding data scientist! In this lesson, we continue our journey into the world of **PyTorch**. More specifically, we are going to explore how to initialize a basic **Neural Network** in PyTorch.

In order to do this, you will learn how to:

* Utilize PyTorch modules
* Build a simple neural network
* Define forward pass
* Instantiate the neural network model
* Print the model's architecture

Let's dive in!

## Introduction to PyTorch Modules
Before building a neural network, let's understand what a PyTorch module is.

PyTorch’s modules are encapsulated as Python classes and serve as building blocks for designing models. The base to these is the `nn.Module` class. Any model you create in PyTorch is a subclass of the `nn.Module`. Let's check the initial lines in our code:

```Python
import torch
import torch.nn as nn
```

Here we imported PyTorch’s `nn` module, a base class for all neural network modules.

## Build a Simple Neural Network
Let's dive into defining our basic neural network. The code snippet below might seem a bit daunting at first, but don’t worry—we’ll break it down step-by-step:

```Python
class SimpleNN(nn.Module):
    def __init__(self):
        super(SimpleNN, self).__init__()
        self.layer1 = nn.Linear(in_features=2, out_features=10)
        self.relu = nn.ReLU()
        self.layer2 = nn.Linear(in_features=10, out_features=1)
        self.sigmoid = nn.Sigmoid()

    def forward(self, x):
        x = self.layer1(x)
        x = self.relu(x)
        x = self.layer2(x)
        x = self.sigmoid(x)
        return x
```

This code lays out the structure of our neural network. Let's explain each part in detail:

## Class Definition and Inheritance
```Python
class SimpleNN(nn.Module):
    def __init__(self):
        super(SimpleNN, self).__init__()
```
We start by defining a class named `SimpleNN` which inherits from PyTorch's `nn.Module`. This inheritance allows `SimpleNN` to build on the robust features and functionalities provided by PyTorch.

In the `__init__` method, calling `super(SimpleNN, self).__init__()` ensures that `nn.Module`'s base properties are correctly initialized. This is crucial for setting up our neural network layers and activation functions properly.

## Defining Layers: First Layer and ReLU
```Python
self.layer1 = nn.Linear(in_features=2, out_features=10)
self.relu = nn.ReLU()
```
We then define our first fully connected layer. This layer transforms an input with 2 features into an output with 10 features.

Next, we add the ReLU (Rectified Linear Unit) activation function, introducing non-linearity after the first layer. This helps the model capture complex patterns in the data.

## Defining Layers: Second Layer and Sigmoid
```Python
self.layer2 = nn.Linear(in_features=10, out_features=1)
self.sigmoid = nn.Sigmoid()
```
Following that, we set up a second fully connected layer, which transforms the 10 features outputted by the first layer into a single feature. It's important to note that the input size of each layer must always match the output size of the preceding layer for the model to function correctly.

Lastly, we include the Sigmoid activation function, which is applied after the second layer. This function maps the output to a range between 0 and 1, making it perfect for binary classification tasks.

## Defining the Forward Pass
In the `forward()` method of our `SimpleNN` class, we will define how the input tensor `x` moves through the various layers and activation functions. This method will orchestrate the flow of data, specifying the sequence in which the layers and activation functions are applied to the input.

The input tensor `x` is initially the data we feed into the model, which has a size of 2 features (corresponding to `in_features=2` in the first layer). Let’s see how `x` travels through the network:

```Python
def forward(self, x):
    # Apply layer1 (input: 2, output: 10)
    x = self.layer1(x)
    # Apply ReLU activation function (output: 10)
    x = self.relu(x)
    # Apply layer2 (input: 10, output: 1)
    x = self.layer2(x)
    # Apply Sigmoid activation function (output: 1)
    x = self.sigmoid(x)
    # Return the output
    return x
```

Initially, `x` contains the input data with 2 features. It is first transformed by `layer1`, which increases it to 10 features. Then, the ReLU activation function is applied to introduce non-linear behavior. Next, the data moves to `layer2`, where it is reduced from 10 features to 1 feature. Finally, the Sigmoid activation function squashes the output to be between 0 and 1, making it suitable for binary classification tasks. The transformed `x` is now the output of the model and is returned as the final result.

## Instantiate the Neural Network Model
Now, we will create an instance of our `SimpleNN` class which represents our model. Instantiating the model is essentially preparing it to be trained.

```Python
model = SimpleNN()
```

When we now pass input data to `model`, this calls the `forward()` function we defined earlier.

## Printing the Model's Architecture
Lastly, let's print out the architecture of the model we've built:

```Python
print(model)
```
The output of the above code will be:

```
SimpleNN(
  (layer1): Linear(in_features=2, out_features=10, bias=True)
  (relu): ReLU()
  (layer2): Linear(in_features=10, out_features=1, bias=True)
  (sigmoid): Sigmoid()
)
```
This output details the layers included in our `SimpleNN` model. Each layer is specified with its type, input, and output dimensions. For example, `(layer1): Linear(in_features=2, out_features=10, bias=True)` indicates a linear layer that takes an input with 2 features and outputs 10 features, and it includes a bias term.

## Lesson Summary and Practice
Excellent work! Today, we have deepened our understanding of what a PyTorch model is and how to initialize a basic Neural Network. We learned about PyTorch modules, building a simple Neural Network, defining a forward pass, instantiating a model, and printing the model's architecture.

In the next set of exercises, you'll be putting all these concepts to use! You'll be asked to initialize your own Neural Network model. This practice is essential to cement today's learning and give you experience managing and creating PyTorch models. You're doing a great job, keep going!
