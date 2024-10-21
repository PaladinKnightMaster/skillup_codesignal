# import torch.nn as nn

# # Define the neural network class
# class MyOwnNN(nn.Module):
#     def __init__(self):
#         # Initialize the parent class
#         super(MyOwnNN, self).__init__()
#         # First fully connected layer: input size 5, output size 10
#         self.layer1 = nn.Linear(in_features=5, out_features=10)
#         # ReLU activation function to be used after layer1
#         self.relu1 = nn.ReLU()
#         # Second fully connected layer: input size 10, output size 20
#         self.layer2 = nn.Linear(in_features=10, out_features=20)
#         # Sigmoid activation function to be used after layer2
#         self.sigmoid1 = nn.Sigmoid()
#         # Incorrectly created third fully connected layer
#         self.layer3 = nn.Linear(in_features=2, out_features=10)
#         # Sigmoid activation function to be used after layer3
#         self.sigmoid2 = nn.Sigmoid()

#     def forward(self, x):
#         # Apply layer1 (input: 5, output: 10)
#         x = self.layer1(x)
#         # Apply ReLU activation function
#         x = self.relu1(x)
#         # Apply layer2 (input: 10, output: 20)
#         x = self.layer2(x)
#         # Apply Sigmoid activation function
#         x = self.sigmoid1(x)
#         # Apply layer3 (input: 2, output: 10) — Error here due to incorrect input size
#         x = self.layer3(x)
#         # Apply Sigmoid activation function
#         x = self.sigmoid2(x)
#         # Return the output
#         return x

# # Instantiate the model
# model = MyOwnNN()

# # Print the model's architecture
# print(model)

import torch.nn as nn

# Define the neural network class
class MyOwnNN(nn.Module):
    def __init__(self):
        # Initialize the parent class
        super(MyOwnNN, self).__init__()
        # First fully connected layer: input size 5, output size 10
        self.layer1 = nn.Linear(in_features=5, out_features=10)
        # ReLU activation function to be used after layer1
        self.relu1 = nn.ReLU()
        # Second fully connected layer: input size 10, output size 20
        self.layer2 = nn.Linear(in_features=10, out_features=20)
        # Sigmoid activation function to be used after layer2
        self.sigmoid1 = nn.Sigmoid()
        # Incorrectly created third fully connected layer
        self.layer3 = nn.Linear(in_features=20, out_features=10)
        # Sigmoid activation function to be used after layer3
        self.sigmoid2 = nn.Sigmoid()

    def forward(self, x):
        # Apply layer1 (input: 5, output: 10)
        x = self.layer1(x)
        # Apply ReLU activation function
        x = self.relu1(x)
        # Apply layer2 (input: 10, output: 20)
        x = self.layer2(x)
        # Apply Sigmoid activation function
        x = self.sigmoid1(x)
        # Apply layer3 (input: 20, output: 10) — Error here due to incorrect input size
        x = self.layer3(x)
        # Apply Sigmoid activation function
        x = self.sigmoid2(x)
        # Return the output
        return x

# Instantiate the model
model = MyOwnNN()

# Print the model's architecture
print(model)