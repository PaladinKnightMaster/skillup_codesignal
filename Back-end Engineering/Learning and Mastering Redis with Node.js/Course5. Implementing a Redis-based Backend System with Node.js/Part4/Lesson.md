# Utilizing Redis Streams for Event Logging

## Utilizing Redis Streams for Event Logging
Welcome! In this unit, we will explore how to use **Redis streams** for event logging. This is an important part of our **Redis-based backend system project**. By the end of this lesson, you will know how to log events and retrieve them using Redis streams. Remember, you've already learned how to manage user data and handle transactions. Now, we're adding another layer to our system by using streams.

## What You'll Build
In this unit, we will focus on the following tasks:

1. **Adding entries to a stream**: We will log user activities in a Redis stream.
2. **Reading entries from a stream**: You will see how to read the logged events from the stream.

Let's start by refreshing what we've learned about adding data. This time, we will use streams instead of simple keys. Here's a snippet to show how you can add an entry to a stream and read it back:

```JavaScript
import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

await client.connect();

const streamName = 'user_activity_stream';

// Add entries to the stream
client.xAdd(streamName, '*', { 'event': 'login', 'username': 'alice' });
client.xAdd(streamName, '*', { 'event': 'login', 'username': 'bob' });

// Read entries from the stream
const logs = await client.xRange(streamName, '-', '+', { COUNT: 2 });

console.log(logs);

await client.disconnect();
```

In this code, we read the entries from the `user_activity_stream` and print each one. The `streamName` and options passed to `xRange` help control the stream reading operation.

Feel ready to give it a try? Let's jump into the practice section and start working on logging events using Redis streams. Happy coding!