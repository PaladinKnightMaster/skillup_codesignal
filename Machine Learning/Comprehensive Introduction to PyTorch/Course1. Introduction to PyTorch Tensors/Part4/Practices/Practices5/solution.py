# import numpy as np
# import torch
# from torch.utils.data import DataLoader, TensorDataset

# # Define a simple array for superhero strength levels
# strength_levels = np.array([[3.5, 4.0], [5.0, 2.5], [6.0, 7.0], [4.5, 3.5]])
# # Define the target labels representing hero or villain
# labels = np.array([0, 1, 0, 1])

# # TODO: Convert the strength levels and labels into PyTorch tensors with appropriate data types

# # TODO: Create a tensor dataset using the tensors

# # TODO: Create a data loader using the dataset with batch_size 2 and shuffle enabled

# # TODO: Iterate through the dataloader and print each batch

import numpy as np
import torch
from torch.utils.data import DataLoader, TensorDataset

# Define a simple array for superhero strength levels
strength_levels = np.array([[3.5, 4.0], [5.0, 2.5], [6.0, 7.0], [4.5, 3.5]])
# Define the target labels representing hero or villain
labels = np.array([0, 1, 0, 1])

# TODO: Convert the strength levels and labels into PyTorch tensors with appropriate data types
strength_levels_tensor = torch.tensor(strength_levels, dtype=torch.float32)
labels_tensor = torch.tensor(labels, dtype=torch.int32)
# TODO: Create a tensor dataset using the tensors
dataset = TensorDataset(strength_levels_tensor, labels_tensor)
# TODO: Create a data loader using the dataset with batch_size 2 and shuffle enabled
dataloader = DataLoader(dataset, batch_size=2, shuffle=True)
# TODO: Iterate through the dataloader and print each batch
for batch_strength_levels, batch_labels in dataloader:
    print(f"Batch Strength Levels:\n{batch_strength_levels}")
    print(f"Batch Labels:\n{batch_labels}\n")