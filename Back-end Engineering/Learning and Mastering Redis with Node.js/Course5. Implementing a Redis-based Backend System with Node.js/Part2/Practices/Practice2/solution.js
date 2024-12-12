// import { createClient } from 'redis';

// const client = createClient();

// client.on('error', (err) => {
//   console.error('Error connecting to Redis', err);
// });

// await client.connect();

// async function addUser(userId, data) {
//   await client.set(`user:${userId}`, JSON.stringify(data), { 'EX': 86400 });
// }

// async function getUser(userId) {
//   const data = await client.get(`user:${userId}`);
//   return data ? JSON.parse(data) : null;
// }

// async function addScore(userId, score) {
//   await client.zAdd('leaderboard', [{ score, value: userId }]);
// }

// // TODO: Implement the getLeaderboard function that takes topN as argument
// // TODO: Retrieve the top N users from the 'leaderboard' sorted set and return it

// const users = [
//   { userId: 'alice', data: { name: 'Alice', age: 30, email: 'alice@example.com' }, score: 50 },
//   { userId: 'bob', data: { name: 'Bob', age: 25, email: 'bob@example.com' }, score: 80 },
//   { userId: 'charlie', data: { name: 'Charlie', age: 35, email: 'charlie@example.com' }, score: 70 }
// ];

// for (const user of users) {
//   await addUser(user.userId, user.data);
//   await addScore(user.userId, user.score);
// }

// // TODO: Call the getLeaderboard function with topN=2 and print the result

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

await client.connect();

async function addUser(userId, data) {
  await client.set(`user:${userId}`, JSON.stringify(data), { 'EX': 86400 });
}

async function getUser(userId) {
  const data = await client.get(`user:${userId}`);
  return data ? JSON.parse(data) : null;
}

async function addScore(userId, score) {
  await client.zAdd('leaderboard', [{ score, value: userId }]);
}

// TODO: Implement the getLeaderboard function that takes topN as argument
// TODO: Retrieve the top N users from the 'leaderboard' sorted set and return it
async function getLeaderboard(topN) {
  const leaderboard = await client.zRange('leaderboard', 0, topN - 1);
  return leaderboard;
}

const users = [
  { userId: 'alice', data: { name: 'Alice', age: 30, email: 'alice@example.com' }, score: 50 },
  { userId: 'bob', data: { name: 'Bob', age: 25, email: 'bob@example.com' }, score: 80 },
  { userId: 'charlie', data: { name: 'Charlie', age: 35, email: 'charlie@example.com' }, score: 70 }
];

for (const user of users) {
  await addUser(user.userId, user.data);
  await addScore(user.userId, user.score);
}

// TODO: Call the getLeaderboard function with topN=2 and print the result
const topN = 2;
const leaderboard = await getLeaderboard(topN);
console.log(`Top ${topN} players: ${JSON.stringify(leaderboard)}`);

await client.disconnect();