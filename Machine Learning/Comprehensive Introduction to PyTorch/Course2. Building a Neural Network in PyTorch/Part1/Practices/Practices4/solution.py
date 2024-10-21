# import torch
# import torch.nn as nn

# # TODO: Define the neural network class
# class SimpleNN(nn.Module):
#     def __init__(self):
#         # TODO: Initialize the parent class
#         # TODO: Define first fully connected layer: input size 3, output size 16
#         # TODO: Define ReLU activation function (for layer1)
#         # TODO: Define second fully connected layer: input size 16, output size 8
#         # TODO: Define ReLU activation function (for layer2)
#         # TODO: Define third fully connected layer: input size 8, output size 1
#         # TODO: Define Sigmoid activation function (for layer3)

#     def forward(self, x):
#         # Apply layer1 (input: 3, output: 16)
#         x = self.layer1(x)
#         # Apply ReLU activation function (output: 16)
#         x = self.relu1(x)
#         # Apply layer2 (input: 16, output: 8)
#         x = self.layer2(x)
#         # Apply ReLU activation function (output: 8)
#         x = self.relu2(x)
#         # Apply layer3 (input: 8, output: 1)
#         x = self.layer3(x)
#         # Apply Sigmoid activation function (output: 1)
#         x = self.sigmoid(x)
#         # Return the output
#         return x

# # TODO: Instantiate the model

# # TODO: Display model's architecture

import torch
import torch.nn as nn

# TODO: Define the neural network class
class SimpleNN(nn.Module):
    def __init__(self):
        # TODO: Initialize the parent class
        super(SimpleNN, self).__init__()
        # TODO: Define first fully connected layer: input size 3, output size 16
        self.layer1 = nn.Linear(in_features=3, out_features=16)
        # TODO: Define ReLU activation function (for layer1)
        self.relu1 = nn.ReLU()
        # TODO: Define second fully connected layer: input size 16, output size 8
        self.layer2 = nn.Linear(in_features=16, out_features=8)
        # TODO: Define ReLU activation function (for layer2)
        self.relu2 = nn.ReLU()
        # TODO: Define third fully connected layer: input size 8, output size 1
        self.layer3 = nn.Linear(in_features=8, out_features=1)
        # TODO: Define Sigmoid activation function (for layer3)
        self.sigmoid = nn.Sigmoid()

    def forward(self, x):
        # Apply layer1 (input: 3, output: 16)
        x = self.layer1(x)
        # Apply ReLU activation function (output: 16)
        x = self.relu1(x)
        # Apply layer2 (input: 16, output: 8)
        x = self.layer2(x)
        # Apply ReLU activation function (output: 8)
        x = self.relu2(x)
        # Apply layer3 (input: 8, output: 1)
        x = self.layer3(x)
        # Apply Sigmoid activation function (output: 1)
        x = self.sigmoid(x)
        # Return the output
        return x

# TODO: Instantiate the model
model = SimpleNN()
# TODO: Display model's architecture
print(model)