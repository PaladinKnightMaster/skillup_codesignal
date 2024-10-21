# import torch.nn as nn

# # TODO: Define the neural network class
#     # TODO: Define init function
#         # TODO: Initialize the parent class
#         # TODO: First fully connected layer (input: 10, output: 20)
#         # TODO: ReLU activation function
#         # TODO: Second fully connected layer (input: 20, output: 15)
#         # TODO: ReLU activation function
#         # TODO: Third fully connected layer (input: 15, output: 5)
#         # TODO: Sigmoid activation function to be used after layer3

#     # TODO: Define forward method
#         # TODO: Apply layer1
#         # TODO: Apply ReLU activation function
#         # TODO: Apply layer2
#         # TODO: Apply ReLU activation function
#         # TODO: Apply layer3
#         # TODO: Apply Sigmoid activation function
#         # TODO: Return the output

# # TODO: Instantiate the model
# # TODO: Print the model's architecture

import torch.nn as nn

# TODO: Define the neural network class
class MyOwnNN(nn.Module):
    # TODO: Define init function
    def __init__(self):
        # TODO: Initialize the parent class
        super(MyOwnNN, self).__init__()
        # TODO: First fully connected layer (input: 10, output: 20)
        self.layer1 = nn.Linear(in_features=10, out_features=20)
        # TODO: ReLU activation function
        self.relu1 = nn.ReLU()
        # TODO: Second fully connected layer (input: 20, output: 15)
        self.layer2 = nn.Linear(in_features=20, out_features=15)
        # TODO: ReLU activation function
        self.relu2 = nn.ReLU()
        # TODO: Third fully connected layer (input: 15, output: 5)
        self.layer3 = nn.Linear(in_features=15, out_features=5)
        # TODO: Sigmoid activation function to be used after layer3
        self.sigmoid = nn.Sigmoid()

    # TODO: Define forward method
    def forward(self, x):
        # TODO: Apply layer1
        x = self.layer1(x)
        # TODO: Apply ReLU activation function
        x = self.relu1(x)
        # TODO: Apply layer2
        x = self.layer2(x)
        # TODO: Apply ReLU activation function
        x = self.relu2(x)
        # TODO: Apply layer3
        x = self.layer3(x)
        # TODO: Apply Sigmoid activation function
        x = self.sigmoid(x)
        # TODO: Return the output
        return x

# TODO: Instantiate the model
model = MyOwnNN()
# TODO: Print the model's architecture
print(model)