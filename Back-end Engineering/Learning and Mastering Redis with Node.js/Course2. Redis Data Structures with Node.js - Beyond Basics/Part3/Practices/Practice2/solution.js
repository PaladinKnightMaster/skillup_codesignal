// import { createClient } from 'redis';

// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//   console.log('Redis Client Error', err);
// });

// await client.connect();

// await client.setBit('artist_online', 0, 1);

// // TODO: Set bits to track if the artists are online in the bitmap 'artist_online' for 2 more artists with IDs 1 and 2 and set them to 1 and 0 respectively

// // TODO: Get and print the status of two artists with IDs 0 and 1

// console.log(`Artist 0 online: ${artist0}, Artist 1 online: ${artist1}`);

// client.disconnect();

import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.log('Redis Client Error', err);
});

await client.connect();

await client.setBit('artist_online', 0, 1);

// TODO: Set bits to track if the artists are online in the bitmap 'artist_online' for 2 more artists with IDs 1 and 2 and set them to 1 and 0 respectively
await client.setBit('artist_online', 1, 1);
await client.setBit('artist_online', 2, 0);

// TODO: Get and print the status of two artists with IDs 0 and 1
const artist0 = await client.getBit('artist_online', 0);
const artist1 = await client.getBit('artist_online', 1);

console.log(`Artist 0 online: ${artist0}, Artist 1 online: ${artist1}`);

client.disconnect();