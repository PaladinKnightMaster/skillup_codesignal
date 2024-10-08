# import numpy as np
# import torch
# from torch.utils.data import DataLoader, TensorDataset

# # Define a simple array as input data
# X = np.array([[1.0, 2.0], [2.0, 1.0], [3.0, 4.0], [4.0, 3.0]])
# # Define the target outputs for our dataset
# y = np.array([0, 1, 0, 1])

# # Convert X and y into PyTorch tensors
# X_tensor = torch.tensor(X, dtype=torch.float32)
# y_tensor = torch.tensor(y, dtype=torch.int32)

# # TODO: Create a tensor dataset from the tensors X_tensor and y_tensor

# # TODO: Create a data loader from the dataset with batch_size 2 and shuffle enabled

# # Iterate through the dataloader
# for batch_X, batch_y in dataloader:
#     print(f"Batch X:\n{batch_X}")
#     print(f"Batch y:\n{batch_y}\n")

import numpy as np
import torch
from torch.utils.data import DataLoader, TensorDataset

# Define a simple array as input data
X = np.array([[1.0, 2.0], [2.0, 1.0], [3.0, 4.0], [4.0, 3.0]])
# Define the target outputs for our dataset
y = np.array([0, 1, 0, 1])

# Convert X and y into PyTorch tensors
X_tensor = torch.tensor(X, dtype=torch.float32)
y_tensor = torch.tensor(y, dtype=torch.int32)

# TODO: Create a tensor dataset from the tensors X_tensor and y_tensor
dataSet = TensorDataset(X_tensor, y_tensor)
# TODO: Create a data loader from the dataset with batch_size 2 and shuffle enabled
dataloader = DataLoader(dataSet, batch_size=2, shuffle=True)
# Iterate through the dataloader
for batch_X, batch_y in dataloader:
    print(f"Batch X:\n{batch_X}")
    print(f"Batch y:\n{batch_y}\n")