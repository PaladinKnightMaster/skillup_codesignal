# Connecting to a Redis Server Using JavaScript

## Connecting to a Redis Server Using JavaScript
Welcome to the first lesson of our **Redis** course! In this unit, we'll start with the very basics — connecting to a Redis server. Understanding how to establish this connection is essential since it forms the backbone of all the operations you'll perform with Redis. By the end of this lesson, you’ll be confident in setting up a connection to a Redis server and verifying that connection through simple operations.

## What You'll Learn
In this lesson, you will learn how to:

1. Connect to a Redis server using `JavaScript`.
2. Verify your connection by storing and retrieving a value.

Here’s the simple code you’ll be working with:

```JavaScript
import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

// Verify the connection by setting and getting a value
await client.set('name', 'Redis Learner');
let value = await client.get('name');
console.log(`Stored string in Redis: ${value}`);

await client.del('name');
value = await client.get('name');
console.log(`Stored string in Redis: ${value}`);

await client.disconnect();
```

Let's break down the code:

* We import the `createClient` function from the `redis` package, which provides the `JavaScript` interface to `Redis`.
* We use the `createClient` method to create a client and connect to the `Redis` server running on `localhost` at port `6379`. Note, that if you do not provide the `url` option, the client will default to connecting to `localhost:6379`.
* We listen for any errors that may occur during the connection using the `client.on('error')` event listener. If an error occurs, we log it to the console with the message `'Redis Client Error'` followed by the error message.
* We connect to the `Redis` server by calling await `client.connect()`.
* We use the `set` method to store a key-value pair in Redis, where the key is `'name'` and the value is `'Redis Learner'`.
* We retrieve the value stored in Redis using the `get` method, store it in the `value` variable, and print it. Notice that we use the `await` keyword to wait for the asynchronous operation to complete.
* Next, we use `del` to delete the key `'name'` from Redis. After deleting the key, we attempt to retrieve the value again using the `get` method. Since the key has been deleted, the value will be `null`.
* Finally, we disconnect from the Redis server using the `disconnect` method to ensure cleanup.

## Why It Matters
Establishing a connection to a Redis server is the first step in using the various features `Redis` has to offer, from fast data access to caching and message brokering. Without this fundamental step, you wouldn't be able to use `Redis` effectively. Knowing how to connect to a `Redis` server will enable you to start experimenting with `Redis`'s powerful features, such as data structures and atomic operations.
