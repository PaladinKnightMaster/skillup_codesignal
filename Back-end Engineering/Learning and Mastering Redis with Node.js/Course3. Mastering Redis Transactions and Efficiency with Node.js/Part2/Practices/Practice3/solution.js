// import { createClient } from 'redis';

// const client = createClient();

// client.on('error', console.error);
// await client.connect();

// // TODO: Modify the function to accept a second parameter userId
// async function updateBalance(increment) {
//   while (true) {
//     try {
//       // TODO: Modify the watch command to monitor the balance key for any user ID instead of just user 1
//       await client.watch(`balance:1`);
//       const balance = parseInt(await client.get(`balance:1`), 10) || 0;

//       const pipeline = client.multi();
//       pipeline.set(`balance:1`, balance + increment);

//       const result = await pipeline.exec();
//       if (result) break;
//     } catch (err) {
//       console.log('Retrying transaction:', err.message);
//       continue;
//     }
//   }
// }

// await client.set('balance:1', 100);
// await client.set('balance:15', 70);

// // TODO: Modify the call to updateBalance to pass the userId as an argument for both users
// await updateBalance(100);
// await updateBalance(10);

// const updatedBalance1 = await client.get('balance:1');
// console.log(`Updated balance for user 1: ${updatedBalance1}`);
// const updatedBalance15 = await client.get('balance:15');
// console.log(`Updated balance for user 15: ${updatedBalance15}`);

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient();

client.on('error', console.error);
await client.connect();

// TODO: Modify the function to accept a second parameter userId
async function updateBalance(increment, userId) {
  while (true) {
    try {
      // TODO: Modify the watch command to monitor the balance key for any user ID instead of just user 1
      await client.watch(`balance:${userId}`);
      const balance = parseInt(await client.get(`balance:${userId}`), 10) || 0;

      const pipeline = client.multi();
      pipeline.set(`balance:${userId}`, balance + increment);

      const result = await pipeline.exec();
      if (result) break;
    } catch (err) {
      console.log('Retrying transaction:', err.message);
      continue;
    }
  }
}

await client.set('balance:1', 100);
await client.set('balance:15', 70);

// TODO: Modify the call to updateBalance to pass the userId as an argument for both users
await updateBalance(100, 1);
await updateBalance(10, 15);

const updatedBalance1 = await client.get('balance:1');
console.log(`Updated balance for user 1: ${updatedBalance1}`);
const updatedBalance15 = await client.get('balance:15');
console.log(`Updated balance for user 15: ${updatedBalance15}`);

await client.disconnect();