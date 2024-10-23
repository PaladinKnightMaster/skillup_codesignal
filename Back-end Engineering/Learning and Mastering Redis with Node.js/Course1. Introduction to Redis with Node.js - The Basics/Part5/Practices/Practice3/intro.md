# Retrieve Username from Redis Hash

Nice work so far! Now, let’s modify our existing Redis hash example to store and retrieve specific field values.

Your task is to change the given code to retrieve only the `username` field of `user:1000` instead of all fields.

We'll use the `hGet` method for this. The `hGet` method retrieves the value associated with a specific field of a hash. Here's the syntax:

```JavaScript
await client.hGet(hash_name, field)
```

Make the necessary changes to the code to achieve this.