# Building Networks Easily with Sequential Models in PyTorch

## Introduction
Hello, and welcome to our next lesson on Building Networks Easily with Sequential Models in PyTorch. In the previous lesson, we learnt how to initialize a neural network in PyTorch from scratch, a method that gives more flexibility for complex models. Now, we will focus on a more efficient way of building the model using PyTorch's `nn.Sequential` model representation. By the end of this lesson, you will be able to construct and inspect a Sequential Model in PyTorch. Let's dive in!

## Sequential Models in PyTorch
Before we delve into code, it's essential to understand the theoretical aspect. A Sequential Model, as the name suggests, allows us to build a model as a plain stack of layers — with each layer having one input tensor and one output tensor. This method of building models is extremely organized and efficient.

The Sequential model is a linear stack of layers you can easily create using the `nn.Sequential()` function. It makes the building of models more comfortable, and the created models are shorter and more readable.

If you recall from our previous example, when we build traditional neural networks, we define a custom class, add layers inside the constructor, and implement the forward method to define the computation steps. While this gives a lot of flexibility, it can be overkill for simple models. Here is where Sequential Models are handy — creating compact and understandable models.

## Building a Sequential Model
Now that we know what Sequential Models are, let's dive into the code example and unravel how to build one in PyTorch.

```Python
import torch
import torch.nn as nn

model = nn.Sequential(
    nn.Linear(2, 10),  # First layer: input size 2, output size 10
    nn.ReLU(),         # ReLU activation function
    nn.Linear(10, 1),  # Second layer: input size 10, output size 1
    nn.Sigmoid()       # Sigmoid activation function
)
```

In the code:

* We first import the necessary libraries, `torch` and `torch.nn`.
* We initialize the model with `nn.Sequential()`, which will contain all the layers.
* We then add two Linear layers and two activation functions (ReLU and Sigmoid) sequentially.

In the first layer, `nn.Linear(2, 10)`, we define a Linear module with 2 input features and 10 output features. The second operation `nn.ReLU()` introduces a non-linearity between the layers. Next, we add another Linear layer `nn.Linear(10, 1)` that takes as input the output of the previous layer (10 input features) and also has 1 output feature. The last operation, `nn.Sigmoid()`, represents the Sigmoid activation function. It squashes the output between the range 0 and 1, which is useful for output neurons in the case of binary classification, like the case here.

## Inspecting a Sequential Model
To view the structure of our model, we can print the model:

```Python
print("Sequential Model Architecture:\n", model)
```

The output will be:

```
Sequential Model Architecture:
 Sequential(
  (0): Linear(in_features=2, out_features=10, bias=True)
  (1): ReLU()
  (2): Linear(in_features=10, out_features=1, bias=True)
  (3): Sigmoid()
)
```

This output shows the model architecture, describing each layer sequentially as they were added. It provides an easy-to-understand representation of the model's structure, highlighting the layers and their configurations such as input and output sizes. Each operation performed in our model is labeled with a number. The numbering begins at zero (as is common in Python), and the operations are executed in order during the forward computation.

## Lesson Summary and Practice
Well done! You've just learned how to build and inspect a **Sequential Model in PyTorch**! This knowledge is practical and useful when building Machine Learning models. However, always remember that learning is most effective when accompanied by practice. In the upcoming tasks, you'll get to apply these concepts in various scenarios, enhancing your problem-solving abilities and consolidation of the topic. Let's keep progressing!
