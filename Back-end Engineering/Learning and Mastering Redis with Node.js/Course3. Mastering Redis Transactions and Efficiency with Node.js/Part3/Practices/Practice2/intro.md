# Prevent Balance from Exceeding Maximum Limit

Great work so far! You've learned how to implement `watch` in Redis for conditional transactions.

Now, let's make things a bit more interesting. Currently, our function `updateBalance` increments the balance without considering if it goes beyond a certain maximum limit.

Change the function so that the balance does not exceed a specified `maxBalance`. If adding the increment would push the balance over this limit, the balance should not be updated.

Follow the `TODO` comments in the starter code to complete the task.