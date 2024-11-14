# import torch
# from sklearn.datasets import load_wine
# from torch.utils.data import DataLoader, TensorDataset

# # Load dataset
# wine = load_wine()
# X = torch.tensor(wine.data, dtype=torch.float32)
# y = torch.tensor(wine.target, dtype=torch.long)

# # TODO: Create a DataLoader for mini-batches of size 32
# batch_size = 32
# dataset = TensorDataset(X, y)
# data_loader = DataLoader( _________________ )

# # Check batches
# for batch_X, batch_y in data_loader:
#     print(f'Batch X shape: {batch_X.shape}, Batch y shape: {batch_y.shape}')

import torch
from sklearn.datasets import load_wine
from torch.utils.data import DataLoader, TensorDataset

# Load dataset
wine = load_wine()
X = torch.tensor(wine.data, dtype=torch.float32)
y = torch.tensor(wine.target, dtype=torch.long)

# TODO: Create a DataLoader for mini-batches of size 32
batch_size = 32
dataset = TensorDataset(X, y)
data_loader = DataLoader( dataset, batch_size=batch_size, shuffle=True )

# Check batches
for batch_X, batch_y in data_loader:
    print(f'Batch X shape: {batch_X.shape}, Batch y shape: {batch_y.shape}')