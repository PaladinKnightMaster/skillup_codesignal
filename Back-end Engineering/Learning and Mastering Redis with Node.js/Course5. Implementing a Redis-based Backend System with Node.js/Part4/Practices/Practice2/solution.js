// import { createClient } from 'redis';

// const client = createClient();

// client.on('error', (err) => {
//   console.error('Error connecting to Redis:', err);
// });

// await client.connect();

// const streamName = 'user_activity_stream';

// const addUser = async (userId, data, client) => {
//   const key = `user:${userId}`;
//   await client.set(key, JSON.stringify(data), { EX: 86400 });
// };

// const getUser = async (userId, client) => {
//   const key = `user:${userId}`;
//   const data = await client.get(key);
//   return data ? JSON.parse(data) : null;
// };

// const addScore = async (userId, score, client) => {
//   await client.zAdd('leaderboard', { score, value: userId });
// };

// const getLeaderboard = async (topN = 10, client) => {
//   const leaderboard = await client.zRangeWithScores('leaderboard', -topN, -1);
//   return leaderboard;
// };

// const getUserRankAndScore = async (userId, client) => {
//   const rank = await client.zRevRank('leaderboard', userId);
//   const score = await client.zScore('leaderboard', userId);
//   return { rank, score };
// };

// // TODO: Implement the addToStream function that takes streamName and entry as arguments
// // Add entry to stream named `streamName`

// const users = [
//   { userId: 'alice', data: { name: 'Alice', age: 30, email: 'alice@example.com' }, score: 50 },
//   { userId: 'bob', data: { name: 'Bob', age: 25, email: 'bob@example.com' }, score: 80 },
//   { userId: 'charlie', data: { name: 'Charlie', age: 35, email: 'charlie@example.com' }, score: 70 },
//   { userId: 'david', data: { name: 'David', age: 40, email: 'david@example.com' }, score: 90 }
// ];

// const pipeline = client.multi();
// for (const user of users) {
//   const userObj = await getUser(user.userId, client);
//   if (userObj) continue;
//   await addUser(user.userId, user.data, client);
//   await addScore(user.userId, user.score, client);
//   // TODO: Call the addToStream function to add user activity to the stream with the following fields:
//   // event: 'user_added'
//   // userId: user.userId
//   // data: JSON.stringify(user.data)
//   // score: user.score
// }
// await pipeline.exec();

// console.log("Leaderboard:", await getLeaderboard(10, client));

// for (const user of users) {
//   const { rank, score } = await getUserRankAndScore(user.userId, client);
//   console.log(`User ${user.userId} rank: ${rank}, score: ${score}`);
// }

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => {
  console.error('Error connecting to Redis:', err);
});

await client.connect();

const streamName = 'user_activity_stream';

const addUser = async (userId, data, client) => {
  const key = `user:${userId}`;
  await client.set(key, JSON.stringify(data), { EX: 86400 });
};

const getUser = async (userId, client) => {
  const key = `user:${userId}`;
  const data = await client.get(key);
  return data ? JSON.parse(data) : null;
};

const addScore = async (userId, score, client) => {
  await client.zAdd('leaderboard', { score, value: userId });
};

const getLeaderboard = async (topN = 10, client) => {
  const leaderboard = await client.zRangeWithScores('leaderboard', -topN, -1);
  return leaderboard;
};

const getUserRankAndScore = async (userId, client) => {
  const rank = await client.zRevRank('leaderboard', userId);
  const score = await client.zScore('leaderboard', userId);
  return { rank, score };
};

// TODO: Implement the addToStream function that takes streamName and entry as arguments
// Add entry to stream named `streamName`
const addToStream = async (streamName, entry) => {
  await client.xAdd(streamName, '*', entry);
};

const users = [
  { userId: 'alice', data: { name: 'Alice', age: 30, email: 'alice@example.com' }, score: 50 },
  { userId: 'bob', data: { name: 'Bob', age: 25, email: 'bob@example.com' }, score: 80 },
  { userId: 'charlie', data: { name: 'Charlie', age: 35, email: 'charlie@example.com' }, score: 70 },
  { userId: 'david', data: { name: 'David', age: 40, email: 'david@example.com' }, score: 90 }
];

const pipeline = client.multi();
for (const user of users) {
  const userObj = await getUser(user.userId, client);
  if (userObj) continue;
  await addUser(user.userId, user.data, client);
  await addScore(user.userId, user.score, client);
  // TODO: Call the addToStream function to add user activity to the stream with the following fields:
  // event: 'user_added'
  // userId: user.userId
  // data: JSON.stringify(user.data)
  // score: user.score
  const entry = {
    'event': 'user_added',
    'userId': user.userId,
    'data': JSON.stringify(user.data),
    'score': user.score
  };
  await addToStream('leaderboard', entry);
}
await pipeline.exec();

console.log("Leaderboard:", await getLeaderboard(10, client));

for (const user of users) {
  const { rank, score } = await getUserRankAndScore(user.userId, client);
  console.log(`User ${user.userId} rank: ${rank}, score: ${score}`);
}

await client.disconnect();