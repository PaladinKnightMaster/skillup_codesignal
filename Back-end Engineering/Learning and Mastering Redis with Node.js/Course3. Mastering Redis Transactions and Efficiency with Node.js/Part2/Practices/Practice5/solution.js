// import { createClient } from 'redis';

// const client = createClient();

// client.on('error', (err) => console.error('Redis client error:', err));
// await client.connect();

// // TODO: Define an async function `updatePoints` that takes two parameters: `userId` and `points`
// // Inside the function, implement the following in a loop:
// // - Use client.watch to monitor the key `points:{userId}`
// // - Retrieve the current points using client.get and parse it as an integer
// // - Create a pipeline using client.multi()
// // - Update the points by adding the given points to the current points using pipeline.set
// // - Execute the transaction using pipeline.exec
// // - Handle any errors and retry the transaction if it fails

// await client.set('points:2', 200);
// await updatePoints(2, 30);

// const value = await client.get('points:2');
// console.log(`Updated points for user 2: ${value}`);

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => console.error('Redis client error:', err));
await client.connect();

// TODO: Define an async function `updatePoints` that takes two parameters: `userId` and `points`
// Inside the function, implement the following in a loop:
// - Use client.watch to monitor the key `points:{userId}`
// - Retrieve the current points using client.get and parse it as an integer
// - Create a pipeline using client.multi()
// - Update the points by adding the given points to the current points using pipeline.set
// - Execute the transaction using pipeline.exec
// - Handle any errors and retry the transaction if it fails
async function updatePoints(userId, points) {
  while (true) {
    try {
      await client.watch(`points:${userId}`);
      const currentPoints = parseInt(await client.get(`points:${userId}`), 10) || 0;

      const pipeline = client.multi();
      pipeline.set(`points:${userId}`, currentPoints + points);

      const result = await pipeline.exec();
      if (result) break;
    } catch (err) {
      console.log('Retrying transaction:', err.message);
      continue;
    }
  }
}

await client.set('points:2', 200);
await updatePoints(2, 30);

const value = await client.get('points:2');
console.log(`Updated points for user 2: ${value}`);

await client.disconnect();