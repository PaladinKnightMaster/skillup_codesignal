# Using Redis Watch Command for Consistent Score Updates

Let's run the code you saw in the lesson and closely observe the output to solidify your understanding.

Using the `watch` command in Redis allows you to monitor specific keys and ensure that transactions are executed only if the monitored keys remain unchanged. This is crucial for maintaining data consistency when multiple clients access and modify the same data.

In this example, we'll monitor and update the user's score in a Redis database:

* A function `updateScore` updates the score of a specific user by 1. This method is called only once.
* The `watch` command monitors the user's score key.
* If the key is modified by another client before the transaction completes, the transaction is retried.
* A separate function continuously updates the score to simulate concurrent modifications. The value is updated 50 times in rapid succession.

Run the following code and observe how the score is updated correctly, even if multiple clients attempt to modify the same key simultaneously.