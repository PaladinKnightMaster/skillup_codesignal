# import torch

# # TODO: Create your tensor here

# # TODO: Reshape your tensor here

# # TODO: Flatten your tensor here

# # TODO: Display the properties of your tensors here

import torch

# TODO: Create your tensor here
tensor_example = torch.tensor([[1, 2], [3, 4], [5, 6], [7, 8]])
# TODO: Reshape your tensor here
tensor_reshape = tensor_example.view(2, 4)
# TODO: Flatten your tensor here
tensor_flatten = tensor_reshape.view(-1)
# TODO: Display the properties of your tensors here
print(f"Original Tensor: \n{tensor_example}\n")
print(f"Reshaped Tensor: \n{tensor_reshape}\n")
print(f"Flattened Tensor: \n{tensor_flatten}")