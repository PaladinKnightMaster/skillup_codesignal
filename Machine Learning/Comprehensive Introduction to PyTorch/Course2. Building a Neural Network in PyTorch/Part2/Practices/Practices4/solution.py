# import torch
# import torch.nn as nn

# # TODO: Create your Sequential model here

# # TODO: Print the model's architecture here

import torch
import torch.nn as nn

# TODO: Create your Sequential model here
model = nn.Sequential(
    nn.Linear(3, 7),
    nn.ReLU(),
    nn.Linear(7, 5),
    nn.ReLU(),
    nn.Linear(5, 1),
    nn.Sigmoid()
)

# TODO: Print the model's architecture here
print(model)