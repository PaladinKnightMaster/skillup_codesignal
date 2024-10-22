import torch
import torch.nn as nn

# Creating a basic sequential model
model = nn.Sequential(
    nn.Linear(2, 5),    # First layer: input size 2, output size 5
    nn.ReLU(),           # ReLU activation function
    nn.Linear(5, 1),   # Second layer: input size 5, output size 1
    nn.Sigmoid()         # Sigmoid activation function
)

# Print model's architecture
print("Sequential Model Architecture:\n", model)