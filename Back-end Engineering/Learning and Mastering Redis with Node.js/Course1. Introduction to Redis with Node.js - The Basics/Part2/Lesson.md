# Working with Numbers

## Working with Numbers
Welcome back to our **Redis course**! Now that you know how to connect to a Redis server, it's time to move forward and explore how to work with numbers in Redis. This unit builds on our previous lesson, so make sure you're comfortable establishing a connection to a Redis server.

## What You'll Learn
In this lesson, you will learn how to:

1. Set numeric values in Redis.
2. Retrieve and log numeric values.

Here's the code snippet that we'll be working with:

```JavaScript
import { createClient } from 'redis';

// Create and connect Redis client
const client = createClient({ url: 'redis://localhost:6379' });

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

// Setting and getting numeric values
await client.set('count', 5);
await client.set('completion_rate', 95.5);

const count = await client.get('count');
const completion_rate = await client.get('completion_rate');

console.log(`Course count: ${count}, Completion rate: ${completion_rate}`);

await client.disconnect();
```

Let's break down the code:

* We use modern ES6 `import` syntax to import the `createClient` function from the `redis` library.
* The Redis client is created with `createClient` and connected to the Redis server at `'redis://localhost:6379'`.
* The client is set to log any connection errors.
* The connection to the Redis server is established using `await client.connect()`.
* We set numeric values using the `set` method: `count` with a value of `5` and `completion_rate` with a value of `95.5`.
* We retrieve these values using the `get` method. Note that in JavaScript, the return type of the `get` method is a string, so there's no need to decode it.
* Finally, the client disconnects from the Redis server using `await client.disconnect()`.

## Why It Matters
Working with numbers in Redis is crucial because many real-world applications involve numeric data. From tracking user statistics to monitoring system performance, managing numbers in Redis allows you to perform a variety of useful operations efficiently. By mastering these basic operations with numbers, you'll be well-prepared to tackle more complex tasks and optimize your applications.

Ready to dive in? Let's move on to the practice section and get hands-on experience working with numbers in Redis!
