# import torch

# # Creating three tensors
# tensor_a = torch.tensor([[1, 3], [2, 5]], dtype=torch.float32) # 2x2 tensor
# tensor_b = torch.tensor([[4, 6], [7, 9]], dtype=torch.float32) # 2x2 tensor
# tensor_c = torch.tensor([[2], [3]], dtype=torch.float32) # 2x1 tensor

# # TODO: Perform addition between 'tensor_a' and 'tensor_b' and print the result

# # TODO: Perform element-wise multiplication between 'tensor_a' and 'tensor_b' and print the result

# # TODO: Perform matrix multiplication between 'tensor_a' and 'tensor_c' and print the result

# # TODO: Perform broadcasted addition of scalar 7 to 'tensor_a' and print the result

# # TODO: Perform broadcasted addition between 'tensor_a' and 'tensor_c' and print the result

# # TODO: Perform broadcasted multiplication between 'tensor_a' and 'tensor_c' and print the result

import torch

# Creating three tensors
tensor_a = torch.tensor([[1, 3], [2, 5]], dtype=torch.float32) # 2x2 tensor
tensor_b = torch.tensor([[4, 6], [7, 9]], dtype=torch.float32) # 2x2 tensor
tensor_c = torch.tensor([[2], [3]], dtype=torch.float32) # 2x1 tensor

# TODO: Perform addition between 'tensor_a' and 'tensor_b' and print the result
tensor_add = torch.add(tensor_a, tensor_b)
print(f"Addition:\n{tensor_add}\n")
# TODO: Perform element-wise multiplication between 'tensor_a' and 'tensor_b' and print the result
tensor_mul = torch.mul(tensor_a, tensor_b)
print(f"Element-wise multiplication:\n{tensor_mul}\n")
# TODO: Perform matrix multiplication between 'tensor_a' and 'tensor_c' and print the result
tensor_matmul = torch.matmul(tensor_a, tensor_c)
print(f"Matrix multiplication:\n{tensor_matmul}\n")
# TODO: Perform broadcasted addition of scalar 7 to 'tensor_a' and print the result
tensor_add_scalar = tensor_a + 7
print(f"Broadcasted Addition (Adding scalar value):\n{tensor_add_scalar}\n")
# TODO: Perform broadcasted addition between 'tensor_a' and 'tensor_c' and print the result
tensor_add_broadcast = tensor_a + tensor_c
print(f"Broadcasted Addition:\n{tensor_add_broadcast}\n")
# TODO: Perform broadcasted multiplication between 'tensor_a' and 'tensor_c' and print the result
tensor_mul_broadcast = tensor_a * tensor_c
print(f"Broadcasted Multiplication:\n{tensor_mul_broadcast}\n")