// import { createClient } from 'redis';
// const client = createClient();

// client.on('error', (err) => {
//   console.error('Error connecting to Redis', err);
// });

// await client.connect();

// async function addUser(userId, data) {
//   await client.set(`user:${userId}`, JSON.stringify(data), {
//     EX: 86400, // 1 day
//   });
// }

// async function getUser(userId) {
//   const data = await client.get(`user:${userId}`);
//   return data ? JSON.parse(data) : null;
// }

// // TODO: Implement the addScore function
// // That takes userId and score as arguments
// // And uses zAdd to add the score to 'leaderboard' with userId as value

// const users = [
//   { userId: 'alice', data: { name: 'Alice', age: 30, email: 'alice@example.com' }, score: 50 },
//   { userId: 'bob', data: { name: 'Bob', age: 25, email: 'bob@example.com' }, score: 80 },
//   { userId: 'charlie', data: { name: 'Charlie', age: 35, email: 'charlie@example.com' }, score: 70 }
// ];

// for (const user of users) {
//   await addUser(user.userId, user.data);
//   // TODO: Call the addScore function for each user to add their scores to the leaderboard
// }

// await client.disconnect();

import { createClient } from 'redis';
const client = createClient();

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

await client.connect();

async function addUser(userId, data) {
  await client.set(`user:${userId}`, JSON.stringify(data), {
    EX: 86400, // 1 day
  });
}

async function getUser(userId) {
  const data = await client.get(`user:${userId}`);
  return data ? JSON.parse(data) : null;
}

// TODO: Implement the addScore function
// That takes userId and score as arguments
// And uses zAdd to add the score to 'leaderboard' with userId as value
async function addScore(userId, score) {
  await client.zAdd('leaderboard', { score, value: userId });
}

const users = [
  { userId: 'alice', data: { name: 'Alice', age: 30, email: 'alice@example.com' }, score: 50 },
  { userId: 'bob', data: { name: 'Bob', age: 25, email: 'bob@example.com' }, score: 80 },
  { userId: 'charlie', data: { name: 'Charlie', age: 35, email: 'charlie@example.com' }, score: 70 }
];

for (const user of users) {
  await addUser(user.userId, user.data);
  // TODO: Call the addScore function for each user to add their scores to the leaderboard
  await addScore(user.userId, user.score);
}

await client.disconnect();