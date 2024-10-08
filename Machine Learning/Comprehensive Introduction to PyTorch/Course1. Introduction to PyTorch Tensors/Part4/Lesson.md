# Defining a Dataset with PyTorch Tensors

## Topic Overview
Hello and welcome back! Today we focus on defining datasets using **PyTorch** Tensors. These datasets are called TensorDatasets and are a very vital feature of the PyTorch library. In this lesson, you will convert an array into a tensor, create a TensorDataset, use DataLoader for dividing the dataset into batches, and iterate through the batches. Let's dive right into it!

## What is a TensorDataset?
As you might already know, PyTorch's primary unit of data storage is a tensor. But what if you have more than one tensor of data and you need to keep it collected? That's when `TensorDataset` comes into play.

A `TensorDataset` is a dataset that wraps multiple tensors. Each sample is a tuple of tensors where each tensor in the tuple corresponds to a level of the dataset. In simpler terms, it is a way to keep your tensors of input and output data organized together. Using `TensorDataset` makes it very easy to provide and manage your tensors of varying data types.

While it’s not always necessary to use `TensorDataset`, it can be very convenient, especially if you want to use a `DataLoader` for batching and shuffling your data. The major advantage here is that using `TensorDataset`, PyTorch can efficiently store and access the data, which is crucial while working with large datasets.

## Defining an Array in PyTorch
Now, let's get our hands on the first step of our journey - defining an array and converting it into a tensor. For our lesson, we'll start with a simple array of input data and the target outputs for our dataset.

```Python
import numpy as np

# Define a simple array as input data
X = np.array([[1.0, 2.0], [2.0, 1.0], [3.0, 4.0], [4.0, 3.0]])
# Define the target outputs for our dataset
y = np.array([0, 1, 0, 1])
```

Up till here, we have just defined them as numpy arrays. We now have to convert them into PyTorch tensors.

The conversion code is straightforward, the `torch.tensor` function helps us transform our numpy array into tensors, and, with the use of the `dtype` parameter, we can specify them as floating point and integer numbers.

```Python
import torch

# Convert X and y into PyTorch tensors
X_tensor = torch.tensor(X, dtype=torch.float32)
y_tensor = torch.tensor(y, dtype=torch.int32)
```

Now we have successfully converted our arrays into PyTorch tensors!

## Building a Dataset using TensorDataset
We now have our tensors and we can build a `TensorDataset`. Let's see how we can achieve that.

```Python
from torch.utils.data import TensorDataset

# Create a tensor dataset
dataset = TensorDataset(X_tensor, y_tensor)
```

As you can see, the input to `TensorDataset` is the tensors we created above. `TensorDataset` will bundle or rather, wrap these tensors together into a single dataset.

Let's print the contents of our `TensorDataset` to confirm it's properly created.

```Python
# Print x and y of the TensorDataset
for i in range(len(dataset)):
    X_sample, y_sample = dataset[i]
    print(f"X[{i}]: {X_sample}, y[{i}]: {y_sample}")
```

The output will be something like:

```
X[0]: tensor([1., 2.]), y[0]: 0
X[1]: tensor([2., 1.]), y[1]: 1
X[2]: tensor([3., 4.]), y[2]: 0
X[3]: tensor([4., 3.]), y[3]: 1
```

This confirms that our individual tensors have been correctly wrapped into the `TensorDataset`.

## Understanding and Implementing DataLoader
Helping in the effective management of large datasets and easier iterating over data batches, PyTorch provides a tool named `DataLoader`. It allows efficient access to data and can really speed up your model training process.

`DataLoader` takes in a dataset and other parameters like `batch_size`, which defines the number of samples to work with per batch, and shuffle, which indicates to `shuffle` the data every epoch when set to True.

Using a `TensorDataset` with `DataLoader` is highly convenient as it allows for seamless handling of inputs and targets together in batches.

```Python
from torch.utils.data import DataLoader

# Create a data loader
dataloader = DataLoader(dataset, batch_size=2, shuffle=True)
```

## Iterating Through Batches with DataLoader
Finally, we are now able to use the `DataLoader` and iterate through our dataset in batches. This process is fundamental in training Machine Learning models, as it allows the model to generalize better and also enables us to work with larger datasets by fitting only a batch of data in the memory at a time.

Let's now print our batches of data.

```Python
# Iterate through the dataloader
for batch_X, batch_y in dataloader:
    print(f"Batch X:\n{batch_X}")
    print(f"Batch y:\n{batch_y}\n")
```

The output will be something like:

```
Batch X:
tensor([[1., 2.],
        [2., 1.]])
Batch y:
tensor([0, 1], dtype=torch.int32)

Batch X:
tensor([[4., 3.],
        [3., 4.]])
Batch y:
tensor([1, 0], dtype=torch.int32)
```

This output illustrates how `DataLoader` allows us to shuffle and batch our data efficiently. Due to the shuffling, the presented batches and their order might vary each time the code is executed. This is beneficial for model generalization during training.

## Lesson Summary and Practice
That's a wrap! You should now have a good understanding of defining PyTorch tensors and the convenience of using `TensorDataset` especially when paired with `DataLoader`. We also looked at iterating the `DataLoader`.

Now it's your turn to strengthen your newly acquired skills through practice. The upcoming exercises will give you an opportunity to apply today's lesson. These situations with datasets commonly arise in a Machine Learning Engineer's daily work, hence proficiency in these skills is of utmost importance.

Keep practicing and happy learning!
