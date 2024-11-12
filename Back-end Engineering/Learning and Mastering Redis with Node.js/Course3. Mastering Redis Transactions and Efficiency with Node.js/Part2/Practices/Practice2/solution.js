// import { createClient } from 'redis';
// const client = createClient();

// client.on('error', err => console.log('Redis Client Error', err));
// await client.connect();

// async function updateScore(userId, points) {
//   while (true) {
//     try {
//       await client.watch(`score:${userId}`);
//       const score = parseInt(await client.get(`score:${userId}`), 10) || 0;

//       const pipeline = client.multi();
//       pipeline.set(`score:${userId}`, score + points);

//       const result = await pipeline.exec();
//       if (result) {
//         console.log(`Set value in transaction: ${score + points}`);
//         break;
//       }
//     } catch (err) {
//       console.log(`Error: ${err.message} Retrying...`);
//       continue;
//     }
//   }
// }

// async function updateScoreContinuously(userId, points, iterations) {
//   for (let i = 0; i < iterations; i++) {
//     await client.incrBy(`score:${userId}`, points);
//     console.log('Incremented!');
//     await new Promise(r => setTimeout(r, 1));
//   }
// }

// await client.set('score:1', 150);

// // Create and start a promise to update the score continuously
// const continuousUpdatePromise = updateScoreContinuously(1, 50, 50);

// await updateScore(1, 1);

// const value = await client.get('score:1');
// console.log(`Updated score for user 1: ${value}`);

// // Wait for the continuous update to finish
// await continuousUpdatePromise;

// const finalValue = await client.get('score:1');
// console.log(`Final updated score for user 1: ${finalValue}`);

// await client.disconnect();

import { createClient } from 'redis';
const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));
await client.connect();

async function updateScore(userId, points) {
  while (true) {
    try {
      // Watch the key to ensure no other client modifies it
      await client.watch(`score:${userId}`);

      // Retrieve the current score or set it to 0 if it doesn't exist
      const score = parseInt(await client.get(`score:${userId}`), 10) || 0;

      // Begin transaction pipeline
      const pipeline = client.multi();
      pipeline.set(`score:${userId}`, score + points);

      // Execute transaction, breaking the loop if successful
      const result = await pipeline.exec();
      if (result) {
        console.log(`Transaction successful! New score for user ${userId}: ${score + points}`);
        break;
      } else {
        console.log('Transaction failed, retrying...');
      }
    } catch (err) {
      console.log(`Error during transaction: ${err.message}. Retrying...`);
      continue;
    }
  }
}

async function updateScoreContinuously(userId, points, iterations) {
  for (let i = 0; i < iterations; i++) {
    await client.incrBy(`score:${userId}`, points);
    console.log(`Score incremented by ${points}`);
    await new Promise(r => setTimeout(r, 1));
  }
}

await client.set('score:1', 150);

// Start continuous updates in parallel with a single transaction update
const continuousUpdatePromise = updateScoreContinuously(1, 50, 50);

await updateScore(1, 1);

const initialUpdatedValue = await client.get('score:1');
console.log(`Initial updated score for user 1: ${initialUpdatedValue}`);

// Wait for continuous updates to complete
await continuousUpdatePromise;

const finalScore = await client.get('score:1');
console.log(`Final score for user 1 after all updates: ${finalScore}`);

await client.disconnect();
