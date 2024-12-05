// import { createClient } from 'redis';

// const client = createClient();

// client.on('error', (err) => {
//   console.error('Error connecting to Redis', err);
// });

// await client.connect();

// // TODO: Implement the addUser function that takes userId and data as arguments
//     // TODO: Store user data in Redis with key 'user:{userId}'

// const userData = { name: 'Alice', age: 30, email: 'alice@example.com' };

// // TODO: Call the addUser function with userId 1 and userData

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

await client.connect();

// TODO: Implement the addUser function that takes userId and data as arguments
    // TODO: Store user data in Redis with key 'user:{userId}'

async function addUser(userId, data) {
    await client.set(`user:${userId}`, JSON.stringify(data));
}

const userData = { name: 'Alice', age: 30, email: 'alice@example.com' };

// TODO: Call the addUser function with userId 1 and userData

await addUser(1, userData);

await client.disconnect();