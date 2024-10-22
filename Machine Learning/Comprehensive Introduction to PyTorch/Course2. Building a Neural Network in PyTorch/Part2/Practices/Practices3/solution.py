# import torch
# import torch.nn as nn

# # Original Sequential Model
# model = nn.Sequential(
#     nn.Linear(2, 7),   # First layer - input size 2, output size 7
#     nn.ReLU(),         # ReLU activation function

#    # TODO: Add another layer to the model (7 inputs, 10 outputs) followed by ReLU function

#     nn.Linear(7, 1),   # Output layer - input size 7, output size 1
#     nn.Sigmoid()       # Sigmoid activation function
# )



# # Print the model's architecture
# print("Original Sequential Model Architecture:\n", model)

import torch
import torch.nn as nn

# Original Sequential Model
model = nn.Sequential(
    nn.Linear(2, 7),   # First layer - input size 2, output size 7
    nn.ReLU(),         # ReLU activation function

   # TODO: Add another layer to the model (7 inputs, 10 outputs) followed by ReLU function
    nn.Linear(7, 10),  # Second layer - input size 7, output size 10
    nn.ReLU(),         # ReLU activation function

    nn.Linear(10, 1),   # Output layer - input size 10, output size 1
    nn.Sigmoid()       # Sigmoid activation function
)



# Print the model's architecture
print("Original Sequential Model Architecture:\n", model)