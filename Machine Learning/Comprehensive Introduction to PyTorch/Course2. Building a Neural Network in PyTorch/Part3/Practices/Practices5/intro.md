# Mastering PyTorch Model Training

Good job on getting this far! Let's put everything together and write a complete PyTorch training routine on our own.

1. **Model Definition**: Define a neural network model using `nn.Sequential`. The architecture should consist of two linear layers with a `ReLU` activation function in between. The final output should be passed through a `Sigmoid` function to squash it between 0 and 1.

2. **Loss Function and Optimizer**: Use **Binary Cross-Entropy Loss** (`BCELoss`) as the loss function and **Adam** as the optimizer with a learning rate of `0.01`.

3. **Training Loop**: Train the model for 50 epochs. In each epoch:

    * Perform `zero_grad`: to reset gradients.
    * Forward pass: compute model predictions.
    * Backward pass: compute the gradient of the loss.
    * Optimize: update the model parameters.

Lastly, print the epoch number and the loss at the current step if the current epoch is a multiple of 10.

Get started and proceed with the task!