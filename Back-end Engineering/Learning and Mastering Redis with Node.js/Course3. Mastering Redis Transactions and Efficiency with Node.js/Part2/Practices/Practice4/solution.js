// import { createClient } from 'redis';

// const client = createClient();

// client.on('error', console.error);
// await client.connect();

// async function updateLikes(postId, increment) {
//   while (true) {
//     try {
//       // TODO: Watch the 'likes:{postId}' key

//       // TODO: Retrieve the current number of likes for the 'likes:{postId}' key

//       // TODO: Begin the transaction with multi() method

//       // TODO: Update the number of likes for the 'likes:{postId}' key by setting value to likes + increment

//       // TODO: Execute the transaction

//       break;
//     } catch (err) {
//       console.log('Retrying transaction:', err.message);
//       continue;
//     }
//   }
// }

// await client.set('likes:99', 150);
// await updateLikes(99, 15);

// const updatedLikes = await client.get('likes:99');
// console.log(`Updated likes for post 99: ${updatedLikes}`);

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient();

client.on('error', console.error);
await client.connect();

async function updateLikes(postId, increment) {
  while (true) {
    try {
      // TODO: Watch the 'likes:{postId}' key
      await client.watch(`likes:${postId}`);
      // TODO: Retrieve the current number of likes for the 'likes:{postId}' key
      const likes = parseInt(await client.get(`likes:${postId}`), 10) || 0;
      // TODO: Begin the transaction with multi() method
      const pipeline = client.multi();
      // TODO: Update the number of likes for the 'likes:{postId}' key by setting value to likes + increment
      pipeline.set(`likes:${postId}`, likes + increment);
      // TODO: Execute the transaction
      const result = await pipeline.exec();
      if (result) break;
      break;
    } catch (err) {
      console.log('Retrying transaction:', err.message);
      continue;
    }
  }
}

await client.set('likes:99', 150);
await updateLikes(99, 15);

const updatedLikes = await client.get('likes:99');
console.log(`Updated likes for post 99: ${updatedLikes}`);

await client.disconnect();