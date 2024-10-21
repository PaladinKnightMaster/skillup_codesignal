import torch
import torch.nn as nn

# Define the neural network class
class SimpleNN(nn.Module):
    def __init__(self):
        # Initialize the parent class
        super(SimpleNN, self).__init__()
        # First fully connected layer: input size 2, output size 10
        self.layer1 = nn.Linear(in_features=2, out_features=10)
        # ReLU activation function to be used after layer1
        self.relu = nn.ReLU()
        # Second fully connected layer: input size 10, output size 1
        self.layer2 = nn.Linear(in_features=10, out_features=1)
        # Sigmoid activation function to be used after layer2
        self.sigmoid = nn.Sigmoid()

    def forward(self, x):
        # Apply layer1 (input: 2, output: 10)
        x = self.layer1(x)
        # Apply ReLU activation function (output: 10)
        x = self.relu(x)
        # Apply layer2 (input: 10, output: 1)
        x = self.layer2(x)
        # Apply Sigmoid activation function (output: 1)
        x = self.sigmoid(x)
        # Return the output
        return x

# Instantiate the model
model = SimpleNN()

# Print the model's architecture
print(model)