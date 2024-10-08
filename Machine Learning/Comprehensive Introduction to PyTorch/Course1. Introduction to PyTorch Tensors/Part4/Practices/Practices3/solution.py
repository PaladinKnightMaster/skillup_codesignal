# import numpy as np
# import torch
# from torch.utils.data import DataLoader, TensorDataset

# # Define a simple array as input data for superhero powers
# Powers = np.array([[5.0, 3.0], [2.0, 4.0], [1.0, 2.0], [3.0, 6.0]])
# # Define the target outputs representing hero or villain
# labels = np.array([0, 1, 0, 1])

# # Convert Powers and labels into PyTorch tensors
# Powers_tensor = torch.tensor(Powers, dtype=torch.float32)
# labels_tensor = torch.tensor(labels, dtype=torch.int32)

# # Create a tensor dataset and data loader
# dataset = TensorDataset(Powers_tensor, labels_tensor)
# dataloader = DataLoader(dataset, batch_size=2, shuffle=True)

# # Iterate through the dataloader
# for batch_Powers, batch_labels in dataset:
#     print(f"Batch Powers:\n{batch_Powers}")
#     print(f"Batch Labels:\n{batch_labels}\n")

import numpy as np
import torch
from torch.utils.data import DataLoader, TensorDataset

# Define a simple array as input data for superhero powers
Powers = np.array([[5.0, 3.0], [2.0, 4.0], [1.0, 2.0], [3.0, 6.0]])
# Define the target outputs representing hero or villain
labels = np.array([0, 1, 0, 1])

# Convert Powers and labels into PyTorch tensors
Powers_tensor = torch.tensor(Powers, dtype=torch.float32)
labels_tensor = torch.tensor(labels, dtype=torch.int32)

# Create a tensor dataset and data loader
dataset = TensorDataset(Powers_tensor, labels_tensor)
dataloader = DataLoader(dataset, batch_size=2, shuffle=True)

# Iterate through the dataloader
for batch_Powers, batch_labels in dataloader:
    print(f"Batch Powers:\n{batch_Powers}")
    print(f"Batch Labels:\n{batch_labels}\n")