# Fundamental Tensor Operations in PyTorch

## Lesson Overview
Hello there! In today's lesson, we delve deeper into **PyTorch Tensors** and their fundamental operations such as addition and multiplication. We will also learn about broadcasting, a powerful feature in PyTorch that makes it possible to perform operations between tensors of different shapes. Let's get started!

## Introduction to Tensor Operations
In our previous lesson, we learned about PyTorch Tensors — the basic building blocks in PyTorch that hold data. They resemble arrays in NumPy but come with additional features that are essential for machine learning tasks like GPU acceleration. Now, we will learn the different operations that can be performed on tensors and better understand how these computations happen deep inside neural networks.

Fundamentally, tensor operations include arithmetical operations such as addition, subtraction, multiplication, and division. Two essential forms of multiplication in tensors are element-wise multiplication and matrix multiplication. We can also perform operations between a scalar and a tensor, or between tensors of different shapes — thanks to a technique called Broadcasting.

## Tensor Addition
In tensor addition, we simply add the corresponding elements in the tensors. PyTorch provides the `torch.add()` function that takes two tensors as inputs and returns a new tensor which is the result of adding the input tensors. It is also as easy as using the `+` operator.

Let's go over an example:

```Python
import torch

# Creating two tensors
tensor_a = torch.tensor([[1, 2], [3, 4]], dtype=torch.int32)
tensor_b = torch.tensor([[5, 6], [7, 8]], dtype=torch.int32)

# Tensor addition
tensor_sum = torch.add(tensor_a, tensor_b)
print(f"Tensor Addition:\n{tensor_sum}")
```

The output of the above code will be:

```
Tensor Addition:
tensor([[ 6,  8],
        [10, 12]], dtype=torch.int32)
```

This output shows the result of adding two tensors element-wise. Each element from `tensor_a` is added to the corresponding element in `tensor_b`, resulting in a new tensor of the same shape.

## Element-wise and Matrix Multiplication
Next, let's learn about tensor multiplication. One type is element-wise multiplication where each element in one tensor is multiplied with the corresponding element in the other tensor. We can use the `torch.mul()` function or the `*` operator for this.

The other type is matrix multiplication. This is similar to the matrix multiplication in linear algebra where the dot product of rows and columns is calculated. For this, we use the `torch.matmul()` function.

Below is the Python code demonstrative of these operations:

```Python
# Element-wise Multiplication
tensor_product = torch.mul(tensor_a, tensor_b)
print(f"Element-wise Multiplication:\n{tensor_product}")

# Matrix Multiplication
tensor_c = torch.tensor([[1], [2]], dtype=torch.int32) # 2x1 tensor
tensor_matmul = torch.matmul(tensor_a, tensor_c)
print(f"Matrix Multiplication:\n{tensor_matmul}")
```

The output of the above code will be:

```
Element-wise Multiplication:
tensor([[ 5, 12],
        [21, 32]], dtype=torch.int32)

Matrix Multiplication:
tensor([[ 5],
        [11]], dtype=torch.int32)
```

These outputs demonstrate two different multiplication techniques. In element-wise multiplication, each element of `tensor_a` is multiplied with the corresponding element of `tensor_b`. In matrix multiplication, the dot product between `tensor_a` and `tensor_c` results in a new tensor shape based on matrix product rules.

## Tensor Broadcasting and its Importance
Broadcasting is a technique that allows PyTorch to perform operations on tensors of different shapes. It essentially extends the smaller tensor to match the shape of the larger tensor so that operations can be performed element-wise.

Broadcasting comes in handy while doing operations between a tensor and a scalar, or between tensors of different shapes like adding a vector to each row of a matrix.

Here's how you can accomplish broadcasting in PyTorch:

```Python
# Broadcasted Addition (Tensor + scalar)
tensor_add_scalar = tensor_a + 5
print(f"Broadcasted Addition (Adding scalar value):\n{tensor_add_scalar}")

# Broadcasted Addition between tensors of different shapes (same as torch.add)
broadcasted_sum = tensor_a + tensor_c
print(f"Broadcasted Addition:\n{broadcasted_sum}")

# Broadcasted Multiplication between tensors of different shapes (same as torch.mul)
broadcasted_mul = tensor_a * tensor_c
print(f"Broadcasted Multiplication:\n{broadcasted_mul}")
```

The output of the above code will be:

```
Broadcasted Addition (Adding scalar value):
tensor([[6, 7],
        [8, 9]], dtype=torch.int32)

Broadcasted Addition:
tensor([[2, 3],
        [5, 6]], dtype=torch.int32)

Broadcasted Multiplication:
tensor([[1, 2],
        [6, 8]], dtype=torch.int32)
```

These results illustrate how broadcasting allows operations with tensors of differing shapes. In the first operation, a scalar is added to every element of `tensor_a`, demonstrating broadcasting with a scalar. The second and third outputs show broadcasting operations between two tensors of different shapes, where `tensor_c` is broadcasted to match the shape of `tensor_a` allowing for element-wise addition and multiplication. The addition here is the same as using the `torch.add` method, and the multiplication is the same as using the `torch.mul` method, both of which perform broadcasting internally.

## Summary
Congratulations! You're now familiar with basic tensor operations in PyTorch: addition, multiplication, and broadcasting. We've understood and implemented these operations, especially broadcasting, which is a crucial concept that comes in handy quite often in practice. This will act as the stepping stone towards understanding the workings of neural networks and their implementation in PyTorch. Happy learning!
