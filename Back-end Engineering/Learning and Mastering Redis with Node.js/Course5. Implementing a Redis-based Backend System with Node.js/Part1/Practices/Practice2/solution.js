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

// // TODO: Implement the getUser function that takes a userId and returns the user data
//     // TODO: Retrieve user data from Redis with the key 'user:{userId}'

// const userData = { name: 'Alice', age: 30, email: 'alice@example.com' };

// await addUser(1, userData);

// // TODO: Call the getUser function to retrieve the user data for userId 1

// // TODO: Print the user data

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

// TODO: Implement the getUser function that takes a userId and returns the user data
    // TODO: Retrieve user data from Redis with the key 'user:{userId}'
async function getUser(userId) {
  const userData = await client.get(`user:${userId}`);
  return JSON.parse(userData);
}

const userData = { name: 'Alice', age: 30, email: 'alice@example.com' };

await addUser(1, userData);

// TODO: Call the getUser function to retrieve the user data for userId 1
const user = await getUser(1);

// TODO: Print the user data
console.log(`User data: ${JSON.stringify(user)}`);

await client.disconnect();