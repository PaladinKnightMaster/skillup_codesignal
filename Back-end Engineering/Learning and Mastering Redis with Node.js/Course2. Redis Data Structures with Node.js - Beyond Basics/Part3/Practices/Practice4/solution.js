// import { createClient } from 'redis';

// // Connect to Redis
// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//   console.log('Redis Client Error', err);
// });

// await client.connect();

// // Setting user online status in a bitmap
// // TODO: Set bits for users 0, 1, 2, and 3 to indicate statuses online, online, offline and online respectively

// // Getting user online status from the bitmap
// // TODO: Get and print the status for users 0, 2, and 3

// // Close connection
// client.disconnect();

import { createClient } from 'redis';

// Connect to Redis
const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.log('Redis Client Error', err);
});

await client.connect();

// Setting user online status in a bitmap
// TODO: Set bits for users 0, 1, 2, and 3 to indicate statuses online, online, offline and online respectively
await client.setBit('user_online', 0, 1);
await client.setBit('user_online', 1, 1);
await client.setBit('user_online', 2, 0);
await client.setBit('user_online', 3, 1);
// Getting user online status from the bitmap
// TODO: Get and print the status for users 0, 2, and 3
const status0 = await client.getBit('user_online', 0);
const status2 = await client.getBit('user_online', 2);
const status3 = await client.getBit('user_online', 3);
console.log(`User 0 online: ${status0}, User 2 online: ${status2}, User 3 online: ${status3}`);

// Close connection
client.disconnect();