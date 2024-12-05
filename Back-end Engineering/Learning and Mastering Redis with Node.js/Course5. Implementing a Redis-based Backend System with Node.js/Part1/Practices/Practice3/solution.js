// import { createClient } from 'redis';
// const client = createClient();

// client.on('error', (err) => {
//   console.error('Error connecting to Redis', err);
// });

// await client.connect();

// // TODO: Modify the function to accept an additional 'ttl' parameter
// const addUser = async (userId, data) => {
//   // TODO: Set the expiration time using the 'ttl' parameter
//   await client.set(`user:${userId}`, JSON.stringify(data));
// };

// const getUser = async (userId) => {
//   const data = await client.get(`user:${userId}`);
//   return data;
// };

// const userData = { name: 'Alice', age: 30, email: 'alice@example.com' };
// // TODO: Call addUser with an additional 'ttl' parameter of 86400
// await addUser(1, userData);
// console.log(`User 1: ${await getUser(1)}`);

// await client.disconnect();

import { createClient } from 'redis';
const client = createClient();

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

await client.connect();

// TODO: Modify the function to accept an additional 'ttl' parameter
const addUser = async (userId, data, ttl) => {
  // TODO: Set the expiration time using the 'ttl' parameter
  await client.set(`user:${userId}`, JSON.stringify(data), { EX: ttl });
};

const getUser = async (userId) => {
  const data = await client.get(`user:${userId}`);
  return data;
};

const userData = { name: 'Alice', age: 30, email: 'alice@example.com' };
// TODO: Call addUser with an additional 'ttl' parameter of 86400
await addUser(1, userData, 86400);
console.log(`User 1: ${await getUser(1)}`);

await client.disconnect();