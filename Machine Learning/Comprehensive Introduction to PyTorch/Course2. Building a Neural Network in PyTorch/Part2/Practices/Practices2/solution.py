# import torch
# import torch.nn as nn

# # Incorrect Sequential Model
# model = nn.Sequential(
#     nn.ReLU(),         # ReLU activation function
#     nn.Linear(2, 10),  # First layer: input size 2, output size 10
#     nn.Sigmoid()      # Sigmoid activation function
#     nn.Linear(10, 1),  # Second layer: input size 10, output size 1
# )

# # Printing the model's architecture
# print("Sequential Model Architecture:\n", model)

import torch
import torch.nn as nn

# Incorrect Sequential Model
model = nn.Sequential(
    nn.ReLU(),         # ReLU activation function
    nn.Linear(2, 10),  # First layer: input size 2, output size 10
    nn.Sigmoid(),      # Sigmoid activation function
    nn.Linear(10, 1)  # Second layer: input size 10, output size 1
)

# Printing the model's architecture
print("Sequential Model Architecture:\n", model)