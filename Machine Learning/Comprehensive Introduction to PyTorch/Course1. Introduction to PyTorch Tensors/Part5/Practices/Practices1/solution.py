import torch
import torch.nn as nn

# Defining an input tensor
input_tensor = torch.tensor([[5.0, 6.0]], dtype=torch.float32)

# Creating a linear layer with 2 input features and 3 output features
layer = nn.Linear(in_features=2, out_features=3)

# Defining a ReLU activation function
relu = nn.ReLU()

# Defining a Sigmoid activation function
sigmoid = nn.Sigmoid()

# Processing the input through the linear layer
output_tensor = layer(input_tensor)

# Applying the ReLU function to the output of the linear layer
activated_output_relu = relu(output_tensor)

# Applying the Sigmoid function to the output of the linear layer
activated_output_sigmoid = sigmoid(output_tensor)

# Displaying the original input tensor
print(f"Input Tensor:\n{input_tensor}\n")

# Displaying the output before activation to see the linear transformation effect
print(f"Output Tensor Before Activation:\n{output_tensor}\n")

# Displaying the output after activation to observe the effect of ReLU
print(f"Output Tensor After ReLU Activation:\n{activated_output_relu}\n")

# Displaying the output after activation to observe the effect of Sigmoid
print(f"Output Tensor After Sigmoid Activation:\n{activated_output_sigmoid}")