# Operations with Numbers

## Operations with Numbers
Welcome back! Now that you've learned how to work with numbers in **Redis**, it's time to build on that knowledge and explore some basic operations with these numbers. This lesson will show you how to perform operations like incrementing, decrementing, and modifying numeric values directly in Redis.

## What You'll Learn
In this lesson, you will learn how to:

1. Increment and decrement numeric values.
2. Modify numeric values using operations such as increments by a floating point.

Here's the code snippet that we'll be working with:

```JavaScript
import { createClient } from 'redis';

const client = createClient();
client.on('error', (err) => console.log('Redis Client Error', err));
await client.connect();

// Setting and getting string values
await client.set('count', 5);
await client.set('completion_rate', 95.5);
await client.set('duration', 0);

await client.decr('count'); // 4
await client.decrBy('count', 2); // 2
await client.incr('duration'); // 1
await client.incrBy('duration', 2); // 3
await client.incrByFloat('completion_rate', 1.5); // 97

// Fetch the values and log them
const count = await client.get('count');
const duration = await client.get('duration');
const completion_rate = await client.get('completion_rate');

console.log(`Course count: ${count}`); // 2
console.log(`Duration: ${duration}`); // 3
console.log(`Completion rate: ${completion_rate}`); // 97

await client.disconnect();
```

* After setting initial values for `count`, `completion_rate`, and `duration`, we perform various operations:
  * `decr` operation decrements the value of `count` by 1, and `decrBy` decrements it by the specified value, in this case, 2. So, the final value of `count` is 2.
  * `incr` operation increments the value of `duration` by 1, and `incrBy` increments it by the specified value, in this case, 2. So, the final value of `duration` is 3.
  * `incrByFloat` increments the value of `completion_rate` by the specified floating-point value, in this case, 1.5. So, the final value of `completion_rate` is 97.
* At the end, we fetch the updated values of `count`, `duration`, and `completion_rate` and log them to the console.

Note, that the `incr`, `decr`, `incrBy`, and `decrBy` operations cannot be applied to keys that contain floating-point values, that's why we use `incrByFloat` to increment floating-point values. Note, that in order to decrement floating-point values, you can use `incrByFloat` with a negative value.

## Why It Matters
Understanding how to perform operations with numbers in Redis is essential for real-world applications. Imagine you're building a learning management system: you would track user progress, completion rates, and time spent on courses. Redis makes it fast and easy to update these numbers in real-time.

By the end of this lesson, you'll be comfortable with basic numeric operations in Redis, preparing you for more advanced tasks. Ready to get started? Let's dive into the practice section and enhance your Redis skills!
