# Learning Rate Scheduling in PyTorch

## Topic Overview
Hello and welcome! In today's lesson, we will delve into **Learning Rate Scheduling in PyTorch**. Learning rate scheduling is a technique used to adjust the learning rate during training to improve model convergence and performance. By the end of this lesson, you will understand the importance of learning rate scheduling and how to implement it in PyTorch using the `ReduceLROnPlateau` scheduler.

## Introduction to Learning Rate Scheduling
Learning rate scheduling involves changing the learning rate during the training process to enhance the performance and stability of the model. A consistent learning rate may cause the model to get stuck in local minima or diverge if it starts too large. Adjusting the learning rate can help the model converge faster and more effectively to a solution.

For example, consider a hiker descending a mountain. If the hiker takes large steps (a high learning rate) initially, they can quickly move closer to the bottom (the solution). However, as they approach the bottom, they need to take smaller steps (a lower learning rate) to avoid overshooting the target. Similarly, learning rate scheduling helps in this gradual reduction of step sizes.

## Overview of PyTorch Learning Rate Schedulers
PyTorch offers several built-in learning rate schedulers to help manage the learning rate during training:

* **StepLR**: Reduces the learning rate by a factor every few epochs.
* **ExponentialLR**: Reduces the learning rate by a multiplicative factor.
* **ReduceLROnPlateau**: Reduces the learning rate when a metric has stopped improving.

In this lesson, we'll focus on the `ReduceLROnPlateau` scheduler, which reduces the learning rate when a specified metric has stopped improving. This is useful in cases where the learning rate needs to adapt based on the performance of the model on a validation set, rather than following a predefined schedule.

## Loading the Dataset and Defining the Model
Let's start by defining a simple neural network model and preparing the dataset. We'll use the Wine dataset from sklearn, which is a classic multi-class classification dataset.

```Python
import torch
import torch.nn as nn
import torch.optim as optim
from sklearn.datasets import load_wine
from sklearn.model_selection import train_test_split

# Load dataset
wine = load_wine()
X = torch.tensor(wine.data, dtype=torch.float32)
y = torch.tensor(wine.target, dtype=torch.long)

# Split dataset into training and validation sets
X_train, X_valid, y_train, y_valid = train_test_split(X, y, test_size=0.2, random_state=42)

# Define the model
model = nn.Sequential(
    nn.Linear(13, 10),
    nn.ReLU(),
    nn.Linear(10, 10),
    nn.ReLU(),
    nn.Linear(10, 3)
)

# Define criterion and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.1)
```

We split the dataset into training and validation sets using an 80-20 split, ensuring 20% of the data is set aside for validation.

## Setting Up the Scheduler
Next, we'll initialize the `ReduceLROnPlateau` scheduler with a `mode` of 'min', a `factor` value of 0.1, and a `patience` of 10 epochs. The `mode='min'` setting is used when you want to reduce the learning rate as soon as the monitored quantity (validation loss) stops decreasing. Essentially, if the validation loss does not improve (i.e., reduces) for 10 consecutive epochs, the scheduler will decrease the learning rate by a factor of 0.1.

```Python
import torch.optim.lr_scheduler as lr_scheduler

# Learning rate scheduler
scheduler = lr_scheduler.ReduceLROnPlateau(optimizer, mode='min', factor=0.1, patience=10)
```

## Model Training with ReduceLROnPlateau Scheduler
We'll set up our training loop, making sure to update the learning rate with the scheduler based on validation loss at the end of each epoch.

Here's how the training loop looks:

```Python
# Model training with learning rate scheduling
num_epochs = 100
for epoch in range(num_epochs):
    model.train()
    optimizer.zero_grad()
    outputs = model(X_train)
    loss = criterion(outputs, y_train)
    loss.backward()
    optimizer.step()

    model.eval()
    with torch.no_grad():
        val_outputs = model(X_valid)
        val_loss = criterion(val_outputs, y_valid)

    scheduler.step(val_loss)  # Update learning rate based on validation loss

    if (epoch + 1) % 10 == 0:
        lr = optimizer.param_groups[0]["lr"]
        print(f'Epoch [{epoch + 1}/{num_epochs}], LR: {lr:.6f}')
```

In this loop:

* The validation loss is calculated at the end of each epoch with `scheduler.step(val_loss)`. This allows the `ReduceLROnPlateau` scheduler to adjust the learning rate based on the performance of the model on the validation set.
* We monitor the learning rate by printing it every 10 epochs using `optimizer.param_groups[0]["lr"]` to ensure the scheduler is adjusting the learning rate as expected.

## Monitoring Learning Rate
Monitoring the learning rate during training is crucial to understanding how it changes and affects the model's performance. In the training loop above, we print the current learning rate every 10 epochs using `optimizer.param_groups[0]["lr"]`.

The output will be:

```Plain text
Epoch [10/100], LR: 0.100000
Epoch [20/100], LR: 0.100000
Epoch [30/100], LR: 0.010000
Epoch [40/100], LR: 0.001000
Epoch [50/100], LR: 0.000100
Epoch [60/100], LR: 0.000010
Epoch [70/100], LR: 0.000010
Epoch [80/100], LR: 0.000001
Epoch [90/100], LR: 0.000000
Epoch [100/100], LR: 0.000000
```

This helps us observe how the learning rate changes over time and ensures the scheduler is working as expected. The changes in learning rate correspond with the plateauing or improvement in validation loss, indicating the model is adapting its learning rate based on performance.

## Lesson Summary
In this lesson, we've explored **Learning Rate Scheduling in PyTorch**. You learned about the significance of learning rate scheduling, examined various PyTorch schedulers, and implemented the `ReduceLROnPlateau` scheduler with a practical example. Understanding and applying learning rate scheduling is crucial for optimizing model training and achieving better performance.

By practicing these techniques, you'll be well-equipped to train your models more effectively and handle real-world machine learning challenges. Keep experimenting and analyzing how learning rate adjustments impact your model training process!

Next, we'll have practice exercises to reinforce these concepts and improve your machine learning skills. Happy coding!
