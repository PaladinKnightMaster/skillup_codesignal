# Implement Mini-Batch DataLoader

Your task is to implement a mini-batch DataLoader and utilize it for training a simple neural network on the Wine dataset. The goal is to ensure that data is loaded in small, manageable batches that can be fed into the model for more efficient training. You will need to:

Focus on the following TODOs in the code:

* Update the running loss by accumulating the batch loss, scaled by the batch size.
* Calculate the epoch loss by dividing the total running loss by the number of samples.