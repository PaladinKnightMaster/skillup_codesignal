# Managing User Data with Expiration

Welcome to the first step in building our **Redis-based backend system**. In this unit, we will focus on how to manage user data with expiration using `Redis`. This is a fundamental part of our project that will set the stage for more advanced features in later units. Each unit will focus on a specific aspect of the project, allowing you to build a complete system step by step.

## What You'll Build
Let's take a quick look at what you'll be building in this unit. We will focus on two key operations for managing user data:

1. **Adding user data with an expiration time**: This will ensure that user data is stored for a limited period and automatically deleted afterward.
2. **Retrieving user data**: This operation will help us fetch the user data we previously stored.

Here’s a quick example of how we will structure these operations:

```JavaScript
import { createClient } from 'redis';
const client = createClient();

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

await client.connect();

const data = {
  email: 'user1@example.com'
};

// Add user data with expiration
await client.set('user:1', JSON.stringify(data), {
  EX: 86400 // Expires in 1 day (86400 seconds)
});

// Retrieve user data
const retrievedData = await client.get('user:1');
const parsedData = JSON.parse(retrievedData);
console.log(parsedData); // Output: { email: 'user1@example.com' }

await client.disconnect();
```

Notice how in JavaScript, we use `import` to bring in the necessary module. We handle any connection errors using an event listener. We use `JSON.stringify` to convert data to a JSON string before storing it and then `JSON.parse` to convert it back to an object when retrieving it.

We also specify the expiration time directly in seconds (e.g., `86400` for one day) using the `EX` option in the `set` command.

Now that you have a clear idea of what you'll be building, let's start the practice section and implement this logic. This will solidify your understanding and prepare you for more complex tasks in the upcoming units.