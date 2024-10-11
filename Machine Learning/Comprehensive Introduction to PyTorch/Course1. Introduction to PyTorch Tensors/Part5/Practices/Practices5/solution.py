# import torch
# import torch.nn as nn

# # Define an input tensor with specific values
# input_tensor = torch.tensor([[7.5, 3.0, 9.9]], dtype=torch.float32)

# # TODO: Create a linear layer with 3 input features and 4 output features

# # TODO: Define a ReLU activation function

# # TODO: Define a Sigmoid activation function

# # TODO: Process the input through the linear layer to get initial output

# # TODO: Apply the ReLU function to the output of the linear layer

# # TODO: Apply the Sigmoid function to the output of the linear layer

# # TODO: Display the original input tensor

# # TODO: Display the output before activation to see the linear transformation effect

# # TODO: Display the output after activation to observe the effect of ReLU

# # TODO: Display the output after activation to observe the effect of Sigmoid

import torch
import torch.nn as nn

# Define an input tensor with specific values
input_tensor = torch.tensor([[7.5, 3.0, 9.9]], dtype=torch.float32)

# TODO: Create a linear layer with 3 input features and 4 output features
layer = nn.Linear(in_features=3, out_features=4)
# TODO: Define a ReLU activation function
relu = nn.ReLU()
# TODO: Define a Sigmoid activation function
sigmoid = nn.Sigmoid()
# TODO: Process the input through the linear layer to get initial output
output_tensor = layer(input_tensor)
# TODO: Apply the ReLU function to the output of the linear layer
activated_output_relu = relu(output_tensor)
# TODO: Apply the Sigmoid function to the output of the linear layer
activated_output_sigmoid = sigmoid(output_tensor)
# TODO: Display the original input tensor
print(f"Input Tensor:\n{input_tensor}\n")
# TODO: Display the output before activation to see the linear transformation effect
print(f"Output Tensor Before Activation:\n{output_tensor}\n")
# TODO: Display the output after activation to observe the effect of ReLU
print(f"Output Tensor After ReLU Activation:\n{activated_output_relu}\n")
# TODO: Display the output after activation to observe the effect of Sigmoid
print(f"Output Tensor After Sigmoid Activation:\n{activated_output_sigmoid}")