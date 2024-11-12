# Introduction to Watch in Redis Using JavaScript

## Introduction to Watch in Redis
Welcome back! You've now learned how to build and execute basic transactions in Redis. This next lesson takes you a step further by introducing the watch command. This command will help you implement more controlled and conditional transactions. They are essential for scenarios where you need to monitor certain keys and ensure the operations are completed only when specific conditions are met.

## What You'll Learn
In this unit, you will delve into the functionality of the `watch` command in Redis. Here's a quick overview of what you will learn:

1. **Setting Up** `watch`: Understanding the importance of monitoring keys to control transaction execution.
2. **Implementing Conditional Updates**: Writing functions that use `watch` to implement safer and more conditional updates to your Redis data.

Let's take a look at a practical example of how to use `watch` in your code.

## Practical Example Using `watch`
```JavaScript
import { createClient } from 'redis';

const client = createClient();

client.on('error', console.error);
await client.connect();

async function updateBalance(userId, increment) {
  while (true) {
    try {
      await client.watch(`balance:${userId}`);
      const balance = parseInt(await client.get(`balance:${userId}`), 10) || 0;

      const pipeline = client.multi();
      pipeline.set(`balance:${userId}`, balance + increment);

      const result = await pipeline.exec();
      if (result) break;
    } catch (err) {
      if (err.message === 'EXECABORT Transaction discarded because of previous errors.') {
        console.log('Retrying transaction:', err.message);
        continue;
      } else {
        throw err;
      }
    }
  }
}

await client.set('balance:1', 100);
await updateBalance(1, 50);

const updatedBalance = await client.get('balance:1');
console.log(`Updated balance for user 1: ${updatedBalance}`);

await client.disconnect();
```

In this example, we start by watching the `balance:{userId}` key to monitor changes. If another client changes the value before you execute your transaction, the `pipeline.exec()` will fail, and the transaction will retry. This ensures that your balance updates are consistent.

Let's break down each step in the code snippet:

We define a function, `updateBalance`, that takes the `userId` and `increment` as arguments.

* We create a pipeline using `client.multi()` to execute multiple commands in a single transaction.
* Inside the `while` loop, we use the `watch` command to monitor the `balance:{userId}` key and ensure that no other client modifies it during the transaction.
* We retrieve the current balance value using `client.get()` and set it to `0` if it doesn't exist.
* We update the balance by adding the `increment` value to the current balance.
* The `pipeline.exec()` command executes the transaction.
* If another client changes the balance key before the transaction is executed, the transaction will retry; this is managed by the `catch` block and the `continue` statement.

Now let's understand how the function is used:

* We set the initial balance for user `1` to `100`.
* We call the `updateBalance` function with `userId=1` and `increment=50` to increase the balance by `50`.
* Finally, we retrieve the updated balance value for user `1` and print it.

## Why It Matters
Mastering the `watch` command is critical for a few important reasons:

1. **Optimized Data Integrity**: Using `watch` ensures that actions only occur if certain conditions are met, allowing for safer updates.
2. **Conditional Logic**: You can tailor your Redis transactions to proceed only when specific keys maintain expected values. This adds a layer of sophistication and precision to your operations.
3. **Error Handling**: `watch` helps avoid conflicts and manage errors when multiple clients are trying to update the same data.

Utilizing `watch` effectively enables you to write more robust and reliable applications, safeguarding against potential race conditions and ensuring that concurrent updates do not interfere with each other.

Ready to get hands-on and explore further? Let's move on to the practice section and apply these commands in various scenarios to solidify your understanding.
