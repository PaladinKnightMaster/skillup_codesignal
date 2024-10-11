# Decrement and Increment Operations in Redis

Great progress so far! Now, let's make our task a bit more interesting.

Modify the existing Redis operations to:

* Decrement the `completion_rate` by `2.5`.
* Increment the `duration` by `3`.

This will help you see how changing operations can affect your data.

Before you start, let's understand how the decrement by a float value works in Redis. In Redis, there is no direct command to decrement a key using a float value. However, you can use the `incrByFloat` command to decrement a key by a float value by providing a negative float value as an argument.

Here's an example:

```JavaScript
await client.incrByFloat('value', -1.1); // Decrement the value by 1.1
```

Now let's get started with the task!