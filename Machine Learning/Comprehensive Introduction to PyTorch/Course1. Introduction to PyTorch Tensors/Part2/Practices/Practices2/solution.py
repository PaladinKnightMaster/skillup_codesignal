# import torch

# # Creating 2x2 tensors
# tensor_1 = torch.tensor([[1, 2], [3, 4]], dtype=torch.float32)
# tensor_2 = torch.tensor([[5, 6], [7, 8]], dtype=torch.float32)

# # TODO: Change the following line from multiplication to matrix multiplication
# tensor_multiplication = tensor_1 * tensor_2

# # Prints the result of the multiplication
# print(tensor_multiplication)

import torch

# Creating 2x2 tensors
tensor_1 = torch.tensor([[1, 2], [3, 4]], dtype=torch.float32)
tensor_2 = torch.tensor([[5, 6], [7, 8]], dtype=torch.float32)

# TODO: Change the following line from multiplication to matrix multiplication
tensor_multiplication = torch.matmul(tensor_1, tensor_2)

# Prints the result of the multiplication
print(tensor_multiplication)