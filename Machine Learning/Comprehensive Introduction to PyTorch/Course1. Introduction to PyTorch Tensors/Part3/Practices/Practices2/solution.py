# import torch

# # Creating a tensor for manipulation
# tensor_example = torch.tensor([[1, 2, 3, 4],
#                                [5, 6, 7, 8],
#                                [9, 10, 11, 12],
#                                [13, 14, 15, 16]])

# # TODO: Reshape the tensor into an 8x2 tensor
# reshaped_tensor = tensor_example.view(4, 4)

# # Displaying the original and reshaped tensors
# print(f"Original Tensor: \n{tensor_example}\n")
# print(f"Reshaped Tensor: \n{reshaped_tensor}")

import torch

# Creating a tensor for manipulation
tensor_example = torch.tensor([[1, 2, 3, 4],
                               [5, 6, 7, 8],
                               [9, 10, 11, 12],
                               [13, 14, 15, 16]])

# TODO: Reshape the tensor into an 8x2 tensor
reshaped_tensor = tensor_example.view(8, 2)

# Displaying the original and reshaped tensors
print(f"Original Tensor: \n{tensor_example}\n")
print(f"Reshaped Tensor: \n{reshaped_tensor}")