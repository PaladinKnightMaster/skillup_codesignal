# Introduction to PyTorch Tensors

## Topic Overview
Welcome to this lesson on **Introduction to PyTorch Tensors**! PyTorch is an open-source deep learning library built to provide maximum flexibility and speed during implementing and building the neural network models. PyTorch performs computations on `tensors`, which are similar to arrays but with additional features. The goal of this lesson is to understand what a tensor is and how to create a tensor. By the end of this lesson, you will be able to:

1. Understand what PyTorch is and why it's essential in deep learning.
2. Know the basics of Tensors, including their properties and creation process.
3. Write code that builds and inspects tensors using PyTorch.

## Introduction to PyTorch
PyTorch is a flexible and powerful framework for scientific computing and deep learning, originally developed by Facebook's AI Research lab and now maintained by a large open-source community. PyTorch's ecosystem includes a wide array of tools and libraries, making it suitable for various applications such as computer vision, natural language processing, and reinforcement learning, among others.

People use frameworks like PyTorch to build neural networks because they simplify the development process, offer powerful computational capabilities, especially on GPUs, and provide extensive community support and resources for both research and production environments.

To install PyTorch, you can use pip. Here's how you can do it:

```bash
pip install torch
```
Now your environment is ready to use PyTorch and start building neural network projects.

## Understanding Tensors
Tensors are the core data structure in PyTorch and many other deep learning frameworks. They are like arrays (n-dimensional arrays) and matrices (2-dimensional tensors), but unlike arrays and matrices, tensors can be used on hardware accelerators like GPUs. You can consider Tensors as the generalization of numbers (0-dim tensor), vectors (1-dim tensor), and matrices (2-dim tensor) in multi-dimension.

Tensors are vital in almost all domains of Machine Learning and Deep Learning. Neural Networks take tensors as input and produce tensors as output. Even the parameters of a Neural Network, the weights, and biases, are saved as tensors.

## Creating a Tensor with PyTorch
To create a tensor, you first need to import the PyTorch with `import torch`. After that, you can use the `torch.tensor()` function to easily convert a Python list into a tensor.

For example, let's create a 2x3 tensor in PyTorch using a python list:

```Python
import torch

# Creating a tensor
tensor_example = torch.tensor([[1, 2, 3], [4, 5, 6]])
print(tensor_example)
```

When you run the above code, it will print the tensor:

```
tensor([[1, 2, 3],
        [4, 5, 6]])
```
As you can see, the tensor has been created successfully!

## Inspecting Tensor Attributes
Each tensor in PyTorch has various attributes that you can inspect. These include the shape and data type of the tensor. The 'shape' represents the size of each dimension of the tensor, while the 'dtype' represents the data type of the tensor elements.

Let's inspect some properties for our `tensor_example`:

```Python
# Displaying basic properties of tensors
print(f"Shape of tensor: {tensor_example.shape}")
print(f"Data type of tensor: {tensor_example.dtype}")
```

The output will be:

```
Shape of tensor: torch.Size([2, 3])
Data type of tensor: torch.int64
```

This shows that our `tensor_example` is a 2x3 tensor (which means it has two rows and three columns) and it contains 64-bit integer elements.

## Hands-On Practice
Now that you've learned about tensors in PyTorch, let's get hands-on and run the complete code that we've explained above:

```Python
import torch

# Creating a tensor
tensor_example = torch.tensor([[1, 2, 3], [4, 5, 6]])

# Displaying basic properties of tensors
print(f"Shape of tensor: {tensor_example.shape}")
print(f"Data type of tensor: {tensor_example.dtype}")
print(tensor_example)
```

The output of the above code will be:

```
Shape of tensor: torch.Size([2, 3])
Data type of tensor: torch.int64
tensor([[1, 2, 3],
        [4, 5, 6]])
```

This demonstrates creating a tensor, inspecting its shape and data type, and showcasing the tensor's structure. These steps are fundamental in understanding how to manipulate and work with tensors in PyTorch.

Great job! You have successfully created your tensor and inspected its properties.

## Lesson Summary and Practice
Congratulations on completing this lesson on Tensors in PyTorch! You've learned about PyTorch, the importance of tensors in Machine Learning, how to create them, and inspect their properties. Keep practicing with tensors to strengthen your understanding. Happy learning!
