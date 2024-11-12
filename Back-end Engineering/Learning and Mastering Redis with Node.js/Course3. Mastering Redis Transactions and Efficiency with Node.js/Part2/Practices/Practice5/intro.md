# Updating User Points with Redis Watch Command

You’ve done well learning the `watch` command in Redis for enforcing conditional transactions.

Now, let's put everything together in this practice task. You'll write a function to update user points in a Redis database. Use `watch` to ensure the transaction succeeds only if the monitored key remains unchanged. If another client updates the key during the transaction, it should retry until it works.