import torch

# Creating three tensors
tensor_a = torch.tensor([[1, 2], [3, 4]], dtype=torch.int32) # 2x2 tensor
tensor_b = torch.tensor([[5, 6], [7, 8]], dtype=torch.int32) # 2x2 tensor
tensor_c = torch.tensor([[1], [2]], dtype=torch.int32) # 2x1 tensor

# Addition
tensor_sum = torch.add(tensor_a, tensor_b)
print(f"Tensor Addition:\n{tensor_sum}\n")

# Element-wise Multiplication
tensor_product = torch.mul(tensor_a, tensor_b)
print(f"Element-wise Multiplication:\n{tensor_product}\n")

# Matrix Multiplication
tensor_matmul = torch.matmul(tensor_a, tensor_c)
print(f"Matrix Multiplication:\n{tensor_matmul}\n")

# Broadcasted Addition (Tensor + scalar)
tensor_add_scalar = tensor_a + 5
print(f"Broadcasted Addition (Adding scalar value):\n{tensor_add_scalar}\n")

# Broadcasted Addition between tensors of different shapes:
broadcasted_sum = tensor_a + tensor_c
print(f"Broadcasted Addition: \n{broadcasted_sum}\n")

# Broadcasted Multiplication between tensors of different shapes:
broadcasted_mul = tensor_a * tensor_c
print(f"Broadcasted Multiplication: \n{broadcasted_mul}\n")