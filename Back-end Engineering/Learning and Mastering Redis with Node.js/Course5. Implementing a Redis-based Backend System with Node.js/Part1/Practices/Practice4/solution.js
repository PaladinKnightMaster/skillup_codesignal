// import { createClient } from 'redis';
// const client = createClient();

// client.on('error', (err) => {
//   console.error('Error connecting to Redis', err);
// });

// await client.connect();

// async function addUser(userId, data) {
//   await client.set(`user:${userId}`, JSON.stringify(data), {
//     EX: 86400 // Expires in 1 day (86400 seconds)
//   });
// }

// async function getUser(userId) {
//   const data = await client.get(`user:${userId}`);
//   return data;
// }

// // TODO: Implement the `extendUserTTL` function that takes a userId and 'incr' as increment amount in seconds
//   // TODO: Take the current TTL of the user data using `client.ttl` method

//   // TODO: If the current TTL is greater than 0, extend the expiration time of the user data by 'incr' seconds using `client.expire` method

// const userData = { name: 'Alice', age: 30, email: 'alice@example.com' };
// await addUser(1, userData);

// // TODO: Call `extendUserTTL` for userId 1 with an increment of 86400 seconds

// console.log(`User 1: ${await getUser(1)}`);

// await client.disconnect();

import { createClient } from 'redis';
const client = createClient();

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

await client.connect();

async function addUser(userId, data) {
  await client.set(`user:${userId}`, JSON.stringify(data), {
    EX: 86400 // Expires in 1 day (86400 seconds)
  });
}

async function getUser(userId) {
  const data = await client.get(`user:${userId}`);
  return data;
}

// TODO: Implement the `extendUserTTL` function that takes a userId and 'incr' as increment amount in seconds
  // TODO: Take the current TTL of the user data using `client.ttl` method

  // TODO: If the current TTL is greater than 0, extend the expiration time of the user data by 'incr' seconds using `client.expire` method

async function extendUserTTL(userId, incr) {
  const ttl = await client.ttl(`user:${userId}`);
  if (ttl > 0) {
    await client.expire(`user:${userId}`, ttl + incr);
  }
}

const userData = { name: 'Alice', age: 30, email: 'alice@example.com' };
await addUser(1, userData);

// TODO: Call `extendUserTTL` for userId 1 with an increment of 86400 seconds

await extendUserTTL(1, 86400);

console.log(`User 1: ${await getUser(1)}`);

await client.disconnect();