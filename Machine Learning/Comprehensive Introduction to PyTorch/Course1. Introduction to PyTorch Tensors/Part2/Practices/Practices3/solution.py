# import torch

# # Creating 2x2 tensors
# tensor_a = torch.tensor([[1, 2], [3, 4]], dtype=torch.float32)
# tensor_b = torch.tensor([[5, 6], [7, 8]], dtype=torch.float32)

# # TODO: Fix the matrix multiplication operation that hangs
# tensor_mul = torch.mul(tensor_a, tensor_b)

# # Prints the result of the multiplication
# print(tensor_mul)

import torch

# Creating 2x2 tensors
tensor_a = torch.tensor([[1, 2], [3, 4]], dtype=torch.float32)
tensor_b = torch.tensor([[5, 6], [7, 8]], dtype=torch.float32)

# TODO: Fix the matrix multiplication operation that hangs
tensor_mul = torch.matmul(tensor_a, tensor_b)

# Prints the result of the multiplication
print(tensor_mul)