# Run the Redis `watch` Command Example

Let's run the code you saw in the lesson and pay careful attention to the output since it will help you better understand this construct.

Using the `watch` command in Redis allows you to monitor specific keys and ensure that transactions are executed only if the monitored keys remain unchanged. This is crucial for maintaining data consistency when multiple clients access and modify the same data.

In this example, we'll monitor and update the user balance in a Redis database:

* A function `updateBalance` updates the balance of a specific user.
* The `watch` command monitors the user's balance key.
* If the key is modified by another client before the transaction completes, the transaction is retried.
* The `multi` method marks the beginning of the transaction block. After calling `multi`, subsequent commands are queued up instead of being executed immediately.
* The `exec` method sends all queued commands within the transaction to be executed atomically.

Here's the code in action. Run it and observe how the balance is updated correctly, even if multiple clients attempt to modify the same key simultaneously.