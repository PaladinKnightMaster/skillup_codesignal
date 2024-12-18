// import { createClient } from 'redis';
// const client = createClient();

// client.on('error', (err) => {
//   console.error('Error connecting to Redis', err);
// });

// await client.connect();

// // TODO: Modify the addUser function to make the pipeline argument optional
// async function addUser(userId, data, pipeline) {
//   // TODO: Implement the logic to use the pipeline argument if it's not null or use the default client setting
//   await pipeline.set(`user:${userId}`, JSON.stringify(data), {
//     EX: 86400
//   });
// }

// async function getUser(userId) {
//   const data = await client.get(`user:${userId}`);
//   return JSON.parse(data);
// }

// // TODO: Modify the addScore function to make the pipeline argument optional
// async function addScore(userId, score, pipeline) {
//   // TODO: Implement the logic to use the pipeline argument if it's not null or use the default client setting
//   await pipeline.zAdd('leaderboard', { score, value: userId });
// }

// async function getLeaderboard(topN = 10) {
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
// ];

// const pipeline = client.multi();
// users.forEach(({ userId, data, score }) => {
//   addUser(userId, data, pipeline);
//   addScore(userId, score, pipeline);
// });
// await pipeline.exec();

// users.push({ userId: 'david', data: { name: 'David', age: 40, email: 'david@example.com' }, score: 90 });

// // TODO: Add the new user 'david' to the users list with the addUser and addScore functions without using a pipeline

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

// TODO: Modify the addUser function to make the pipeline argument optional
async function addUser(userId, data, pipeline = null) {
  // TODO: Implement the logic to use the pipeline argument if it's not null or use the default client setting
  if (pipeline) {
    await pipeline.set(`user:${userId}`, JSON.stringify(data), {
      EX: 86400
    });
    return;
  }
  await client.set(`user:${userId}`, JSON.stringify(data), {
    EX: 86400
  });
}

async function getUser(userId) {
  const data = await client.get(`user:${userId}`);
  return JSON.parse(data);
}

// TODO: Modify the addScore function to make the pipeline argument optional
async function addScore(userId, score, pipeline = null) {
  // TODO: Implement the logic to use the pipeline argument if it's not null or use the default client setting
  if (pipeline) {
    await pipeline.zAdd('leaderboard', { score, value: userId });
    return;
  }
  await client.zAdd('leaderboard', { score, value: userId });
}

async function getLeaderboard(topN = 10) {
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
];

const pipeline = client.multi();
users.forEach(({ userId, data, score }) => {
  addUser(userId, data, pipeline);
  addScore(userId, score, pipeline);
});
await pipeline.exec();

users.push({ userId: 'david', data: { name: 'David', age: 40, email: 'david@example.com' }, score: 90 });

// TODO: Add the new user 'david' to the users list with the addUser and addScore functions without using a pipeline
await addUser('david', users[users.length - 1].data);
await addScore('david', users[users.length - 1].score);

console.log("Leaderboard:", await getLeaderboard());

for (const user of users) {
  const { rank, score } = await getUserRankAndScore(user.userId);
  console.log(`User ${user.userId} rank: ${rank}, score: ${score}`);
}

await client.disconnect();