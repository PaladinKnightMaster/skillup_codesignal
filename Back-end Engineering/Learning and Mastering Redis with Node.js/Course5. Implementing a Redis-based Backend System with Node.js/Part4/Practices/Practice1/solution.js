// import { createClient } from 'redis';
// const client = createClient();

// client.on('error', (err) => {
//   console.error('Error connecting to Redis', err);
// });

// await client.connect();

// async function addUser(userId, data, pipeline=null) {
//   const jsonData = JSON.stringify(data);
//   if (pipeline) {
//     pipeline.set(`user:${userId}`, jsonData, { 'EX': 86400 }); // 1 day expiration
//   } else {
//     await client.set(`user:${userId}`, jsonData, { 'EX': 86400 });
//   }
// }

// async function getUser(userId) {
//   const data = await client.get(`user:${userId}`);
//   return data ? JSON.parse(data) : null;
// }

// async function addScore(userId, score, pipeline=null) {
//   if (pipeline) {
//     pipeline.zAdd('leaderboard', { score, value: userId });
//   } else {
//     await client.zAdd('leaderboard', { score, value: userId });
//   }
// }

// async function getLeaderboard(topN=10) {
//   const leaderboard = await client.zRangeWithScores('leaderboard', -topN, -1);
//   return leaderboard;
// }

// async function getUserRankAndScore(userId) {
//   const rank = await client.zRevRank('leaderboard', userId);
//   const score = await client.zScore('leaderboard', userId);
//   return { rank, score };
// }

// const users = [
//   { userId: 'alice', data: { name: 'Alice', age: 30, email: 'alice@example.com' }, score: 50 },
//   { userId: 'bob', data: { name: 'Bob', age: 25, email: 'bob@example.com' }, score: 80 },
//   { userId: 'charlie', data: { name: 'Charlie', age: 35, email: 'charlie@example.com' }, score: 70 },
//   { userId: 'david', data: { name: 'David', age: 40, email: 'david@example.com' }, score: 90 }
// ];

// const pipeline = client.multi();

// for (const user of users) {
//   // TODO: Check if the user exists, if so, skip adding the user

//   addUser(user.userId, user.data, pipeline);
//   addScore(user.userId, user.score, pipeline);
// }

// await pipeline.exec();

// console.log("Leaderboard:", await getLeaderboard());

// for (const user of users) {
//   const { rank, score } = await getUserRankAndScore(user.userId);
//   console.log(`User ${user.userId} rank: ${rank}, score: ${score}`);
// }

// await client.disconnect();

import { createClient } from 'redis';
const client = createClient();

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

await client.connect();

async function addUser(userId, data, pipeline=null) {
  const jsonData = JSON.stringify(data);
  if (pipeline) {
    pipeline.set(`user:${userId}`, jsonData, { 'EX': 86400 }); // 1 day expiration
  } else {
    await client.set(`user:${userId}`, jsonData, { 'EX': 86400 });
  }
}

async function getUser(userId) {
  const data = await client.get(`user:${userId}`);
  return data ? JSON.parse(data) : null;
}

async function addScore(userId, score, pipeline=null) {
  if (pipeline) {
    pipeline.zAdd('leaderboard', { score, value: userId });
  } else {
    await client.zAdd('leaderboard', { score, value: userId });
  }
}

async function getLeaderboard(topN=10) {
  const leaderboard = await client.zRangeWithScores('leaderboard', -topN, -1);
  return leaderboard;
}

async function getUserRankAndScore(userId) {
  const rank = await client.zRevRank('leaderboard', userId);
  const score = await client.zScore('leaderboard', userId);
  return { rank, score };
}

const users = [
  { userId: 'alice', data: { name: 'Alice', age: 30, email: 'alice@example.com' }, score: 50 },
  { userId: 'bob', data: { name: 'Bob', age: 25, email: 'bob@example.com' }, score: 80 },
  { userId: 'charlie', data: { name: 'Charlie', age: 35, email: 'charlie@example.com' }, score: 70 },
  { userId: 'david', data: { name: 'David', age: 40, email: 'david@example.com' }, score: 90 }
];

const pipeline = client.multi();

for (const user of users) {
  // TODO: Check if the user exists, if so, skip adding the user
  const existingUser = await getUser(user.userId);
  if (existingUser) {
    continue;
  }

  addUser(user.userId, user.data, pipeline);
  addScore(user.userId, user.score, pipeline);
}

await pipeline.exec();

console.log("Leaderboard:", await getLeaderboard());

for (const user of users) {
  const { rank, score } = await getUserRankAndScore(user.userId);
  console.log(`User ${user.userId} rank: ${rank}, score: ${score}`);
}

await client.disconnect();


//Result:
/*
Leaderboard: [
  { value: 'alice', score: 50 },
  { value: 'charlie', score: 70 },
  { value: 'bob', score: 80 },
  { value: 'david', score: 90 }
]
User alice rank: 3, score: 50
User bob rank: 1, score: 80
User charlie rank: 2, score: 70
User david rank: 0, score: 90
*/