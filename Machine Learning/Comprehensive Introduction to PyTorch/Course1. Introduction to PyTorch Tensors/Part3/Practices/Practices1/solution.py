import torch

# Creating a tensor for manipulation
tensor_a = torch.tensor([[1, 2, 3], [4, 5, 6]])

# Reshape the tensor
reshaped_tensor = tensor_a.view(3, 2)

# Flatten the tensor
flattened_tensor = tensor_a.view(-1)

print(f"Original Tensor:\n{tensor_a}\n")
print(f"Reshaped Tensor:\n{reshaped_tensor}\n")
print(f"Flattened Tensor:\n{flattened_tensor}")