# Making Predictions with a Trained PyTorch Model

## Introduction
Greetings! In today's lesson, we will learn how to use a trained **PyTorch** model to make predictions. In previous lessons, we've already learned how to define and train a neural network using the PyTorch library. Now, it's time to utilize our trained model and make it useful by producing predictions. To make the lesson as hands-on as possible, we'll be using a trained model to predict if a team is likely to win based on average goals scored by the team and average goals conceded by the opponent.

## Brief Recap of Training
Before we dive into making predictions, let's briefly recap how to train a binary classification model. Here's the code snippet we will use for training:

```Python
import torch
import torch.nn as nn
import torch.optim as optim

# Input features [Average Goals Scored, Average Goals Conceded by Opponent]
X = torch.tensor([
    [3.0, 0.5], [1.0, 1.0], [0.5, 2.0], [2.0, 1.5],
    [3.5, 3.0], [2.0, 2.5], [1.5, 1.0], [0.5, 0.5],
    [2.5, 0.8], [2.1, 2.0], [1.2, 0.5], [0.7, 1.5]
], dtype=torch.float32)

# Target outputs [1 if the team is likely to win, 0 otherwise]
y = torch.tensor([[1], [0], [0], [1], [1], [0], [1], [0], [1], [0], [1], [0]], dtype=torch.float32)

# Define the model using nn.Sequential
model = nn.Sequential(
    nn.Linear(2, 10),
    nn.ReLU(),
    nn.Linear(10, 1),
    nn.Sigmoid()
)

# Define loss function and optimizer
criterion = nn.BCELoss()
optimizer = optim.Adam(model.parameters(), lr=0.01)

# Train the model for 50 epochs
for epoch in range(50):
    model.train()  # Set the model to training mode
    optimizer.zero_grad()  # Zero the gradients for iteration
    outputs = model(X)  # Compute predictions
    loss = criterion(outputs, y)  # Compute the loss
    loss.backward()  # Compute the gradient of the loss
    optimizer.step()  # Optimize the model parameters
```

## Switching the Model to Evaluation Mode
The first crucial step after we've trained our model is to put it in evaluation mode using `model.eval()`. But why do we need to do that? Models can behave differently during training and evaluation phases. For example, many components or layers of the model may have certain behaviors that only need to occur during training, like adjusting internal parameters based on the provided data.

Putting the model in evaluation mode ensures that these components function correctly for making predictions.

Let's go ahead and put our model in evaluation mode:

```Python
# Set the model to evaluation mode
model.eval()
```

Do keep in mind that once we finish predicting, if we want to do further training, we will need to set the model back to the training mode using `model.train()` before starting the training phase.

## Using the Model for Predictions
When making predictions, we only need to feed input data into the model and get the outputs. We don't need to compute gradients because we're not updating the model's weights. As a good practice, we can disable gradient calculation to save memory and computation. PyTorch allows us to do this by wrapping the prediction code block in `with torch.no_grad()`:

Here’s the code to create an input tensor, disable gradient calculation, and make a prediction:

```Python
# Create a new input tensor
new_input = torch.tensor([[4.0, 5.0]], dtype=torch.float32)

# Set the model to evaluation mode
model.eval()

# Disable gradient calculation for inference
with torch.no_grad():
    # Make a prediction for the new input
    prediction = model(new_input)
```

With our model set to the evaluation mode and no gradients, it's time to feed our model some input data and ask it to make forward pass predictions. The input data should be of the same type and shape that the model was trained with. Here, `prediction` is the output from the forward pass of the model.

## Interpreting Model Outputs
Following the forward pass, the model will output raw values. These values are dependent on the architecture and final activation function of your model.

In our example, the output value will be in range (0,1), representing the probability of the class being 1 because our simplified model has a single output node with a Sigmoid activation function.

Let's convert this probability to a binary class label using a threshold, which is usually 0.5:

```Python
# Print the raw output from the model
print("Raw output:", prediction)

# Convert the probability to a binary class label
print("Prediction:", (prediction > 0.5).int().item())
```

The output of the above code will be:

```
Raw output: tensor([[0.1766]])
Prediction: 0
```

This example demonstrates that the model predicted a probability lower than the threshold, ultimately classifying the input as class `0`. In our scenario, this means that the model determined the team is not likely to win the match based on the average goals scored by the team and the average goals conceded by the opponent, showcasing how the output probability is mapped to a class label based on the specified threshold.

## Lesson Summary and Practice
Congratulations! You've just learned how to make predictions using a trained PyTorch model. We walked through the steps of transitioning the model to evaluation mode, disabling gradient computation while using the model to make predictions, and interpreting the output of the model.

By making your trained model provide predictions, you can now see the results of all your hard work during the training phase. Now you will get the chance to apply these concepts in different exercises, which will help you reinforce what you've learned today. The more you practice, the better you get! So, let's move forward and keep practicing.
