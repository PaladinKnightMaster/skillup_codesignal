# import torch
# import torch.nn as nn

# input_tensor = torch.tensor([[1.0, 2.0]], dtype=torch.float32)

# # Create linear layer with specified number of input and output features
# layer = nn.Linear(in_features=2, out_features=3)

# # Process the input tensor through the linear layer to get initial output
# output_tensor = layer(input_tensor)

# # TODO: Define a ReLU activation function

# # TODO: Apply the ReLU function to the output tensor

# # Define a Sigmoid activation function
# sigmoid = nn.Sigmoid()

# # Apply the Sigmoid function to the output tensor
# activated_output_sigmoid = sigmoid(output_tensor)

# print(f"Input Tensor:\n{input_tensor}\n")
# print(f"Output Tensor Before Activation:\n{output_tensor}\n")
# print(f"Output Tensor After ReLU Activation:\n{activated_output_relu}\n")
# print(f"Output Tensor After Sigmoid Activation:\n{activated_output_sigmoid}")

import torch
import torch.nn as nn

input_tensor = torch.tensor([[1.0, 2.0]], dtype=torch.float32)

# Create linear layer with specified number of input and output features
layer = nn.Linear(in_features=2, out_features=3)

# Process the input tensor through the linear layer to get initial output
output_tensor = layer(input_tensor)

# TODO: Define a ReLU activation function
relu = nn.ReLU()
# TODO: Apply the ReLU function to the output tensor
activated_output_relu = relu(output_tensor)
# Define a Sigmoid activation function
sigmoid = nn.Sigmoid()

# Apply the Sigmoid function to the output tensor
activated_output_sigmoid = sigmoid(output_tensor)

print(f"Input Tensor:\n{input_tensor}\n")
print(f"Output Tensor Before Activation:\n{output_tensor}\n")
print(f"Output Tensor After ReLU Activation:\n{activated_output_relu}\n")
print(f"Output Tensor After Sigmoid Activation:\n{activated_output_sigmoid}")