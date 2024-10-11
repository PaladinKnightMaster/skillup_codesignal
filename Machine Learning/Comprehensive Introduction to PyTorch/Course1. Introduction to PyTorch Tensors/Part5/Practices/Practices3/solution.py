# import torch
# import torch.nn as nn

# # Define an input tensor with specific values
# input_tensor = torch.tensor([[1.0, 2.0]], dtype=torch.float32)

# # Create a linear layer with 2 input features and 3 output features
# layer = nn.Linear(in_features=3, out_features=3)

# # Define a ReLU activation function
# relu = nn.ReLU()

# # Define a Sigmoid activation function
# sigmoid = nn.Sigmoid()

# # Process the input through the linear layer to get initial output
# output_tensor = layer(input_tensor)

# # Apply the ReLU function to the output of the linear layer
# activated_output_relu = relu(output_tensor)

# # Apply the Sigmoid function to the ReLU-activated output
# activated_output_sigmoid = sigmoid(activated_output_relu)

# # Display the original input tensor
# print(f"Input Tensor:\n{input_tensor}\n")

# # Display the output before activation to see the linear transformation effect
# print(f"Output Tensor Before Activation:\n{output_tensor}\n")

# # Display the output after activation to observe the effect of ReLU
# print(f"Output Tensor After ReLU Activation:\n{activated_output_relu}\n")

# # Display the output after activation to observe the effect of Sigmoid
# print(f"Output Tensor After Sigmoid Activation:\n{activated_output_sigmoid}")

import torch
import torch.nn as nn

# Define an input tensor with specific values
input_tensor = torch.tensor([[1.0, 2.0]], dtype=torch.float32)

# Create a linear layer with 2 input features and 3 output features
layer = nn.Linear(in_features=2, out_features=3)

# Define a ReLU activation function
relu = nn.ReLU()

# Define a Sigmoid activation function
sigmoid = nn.Sigmoid()

# Process the input through the linear layer to get initial output
output_tensor = layer(input_tensor)

# Apply the ReLU function to the output of the linear layer
activated_output_relu = relu(output_tensor)

# Apply the Sigmoid function to the ReLU-activated output
activated_output_sigmoid = sigmoid(activated_output_relu)

# Display the original input tensor
print(f"Input Tensor:\n{input_tensor}\n")

# Display the output before activation to see the linear transformation effect
print(f"Output Tensor Before Activation:\n{output_tensor}\n")

# Display the output after activation to observe the effect of ReLU
print(f"Output Tensor After ReLU Activation:\n{activated_output_relu}\n")

# Display the output after activation to observe the effect of Sigmoid
print(f"Output Tensor After Sigmoid Activation:\n{activated_output_sigmoid}")