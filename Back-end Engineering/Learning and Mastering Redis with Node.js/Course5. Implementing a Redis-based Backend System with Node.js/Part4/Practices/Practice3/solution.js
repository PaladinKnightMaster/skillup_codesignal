// import { createClient } from 'redis';
// import util from 'util';

// const client = createClient();

// client.on('error', (err) => {
//   console.error('Error connecting to Redis', err);
// });

// await client.connect();

// async function addUser(userId, data) {
//   await client.set(`user:${userId}`, JSON.stringify(data), {
//     EX: 86400,  // 1 day
//   });
// }

// async function getUser(userId) {
//   const data = await client.get(`user:${userId}`);
//   return data ? JSON.parse(data) : null;
// }

// async function addScore(userId, score) {
//   await client.zAdd('leaderboard', {
//     score: score,
//     value: userId,
//   });
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

// async function addToStream(streamName, entry) {
//   await client.xAdd(streamName, '*', entry);
// }

// // TODO: Implement the readFromStream function that takes streamName as an argument
// // Use xRange to read 10 entries from the stream starting from the beginning
// // Return the entries array

// const users = [
//   { userId: 'alice', data: { name: 'Alice', age: 30, email: 'alice@example.com' }, score: 50 },
//   { userId: 'bob', data: { name: 'Bob', age: 25, email: 'bob@example.com' }, score: 80 },
//   { userId: 'charlie', data: { name: 'Charlie', age: 35, email: 'charlie@example.com' }, score: 70 },
//   { userId: 'david', data: { name: 'David', age: 40, email: 'david@example.com' }, score: 90 }
// ];

// const streamName = 'user_activity_stream';

// for (const user of users) {
//   const userObj = await getUser(user.userId);
//   if (!userObj) {
//     await addUser(user.userId, user.data);
//     await addScore(user.userId, user.score);
//     await addToStream(streamName, {
//       event: 'user_added',
//       user_id: user.userId,
//       data: JSON.stringify(user.data),
//       score: user.score.toString(),
//     });
//   }
// }

// console.log("Leaderboard:", await getLeaderboard());

// for (const user of users) {
//   const { rank, score } = await getUserRankAndScore(user.userId);
//   console.log(`User ${user.userId} rank: ${rank}, score: ${score}`);
// }

// // TODO: Read entries from the stream using the readFromStream function

// // TODO: Iterate over the stream entries and print each entry

// await client.disconnect();

import { createClient } from 'redis';
import util from 'util';

const client = createClient();

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

await client.connect();

async function addUser(userId, data) {
  await client.set(`user:${userId}`, JSON.stringify(data), {
    EX: 86400,  // 1 day
  });
}

async function getUser(userId) {
  const data = await client.get(`user:${userId}`);
  return data ? JSON.parse(data) : null;
}

async function addScore(userId, score) {
  await client.zAdd('leaderboard', {
    score: score,
    value: userId,
  });
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

async function addToStream(streamName, entry) {
  await client.xAdd(streamName, '*', entry);
}

// TODO: Implement the readFromStream function that takes streamName as an argument
// Use xRange to read 10 entries from the stream starting from the beginning
// Return the entries array
async function readFromStream(streamName) {
  const entries = await client.xRange(streamName, '-', '+', { COUNT: 10 });
  return entries;
}

const users = [
  { userId: 'alice', data: { name: 'Alice', age: 30, email: 'alice@example.com' }, score: 50 },
  { userId: 'bob', data: { name: 'Bob', age: 25, email: 'bob@example.com' }, score: 80 },
  { userId: 'charlie', data: { name: 'Charlie', age: 35, email: 'charlie@example.com' }, score: 70 },
  { userId: 'david', data: { name: 'David', age: 40, email: 'david@example.com' }, score: 90 }
];

const streamName = 'user_activity_stream';

for (const user of users) {
  const userObj = await getUser(user.userId);
  if (!userObj) {
    await addUser(user.userId, user.data);
    await addScore(user.userId, user.score);
    await addToStream(streamName, {
      event: 'user_added',
      user_id: user.userId,
      data: JSON.stringify(user.data),
      score: user.score.toString(),
    });
  }
}

console.log("Leaderboard:", await getLeaderboard());

for (const user of users) {
  const { rank, score } = await getUserRankAndScore(user.userId);
  console.log(`User ${user.userId} rank: ${rank}, score: ${score}`);
}

// TODO: Read entries from the stream using the readFromStream function
const entries = await readFromStream(streamName);

// TODO: Iterate over the stream entries and print each entry
for (const entry of entries) {
  console.log(entry);
}

await client.disconnect();

//Result
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
{
  id: '1734601125859-0',
  message: [Object: null prototype] {
    event: 'user_added',
    user_id: 'alice',
    data: '{"name":"Alice","age":30,"email":"alice@example.com"}',
    score: '50'
  }
}
{
  id: '1734601125860-0',
  message: [Object: null prototype] {
    event: 'user_added',
    user_id: 'bob',
    data: '{"name":"Bob","age":25,"email":"bob@example.com"}',
    score: '80'
  }
}
{
  id: '1734601125861-0',
  message: [Object: null prototype] {
    event: 'user_added',
    user_id: 'charlie',
    data: '{"name":"Charlie","age":35,"email":"charlie@example.com"}',
    score: '70'
  }
}
{
  id: '1734601125861-1',
  message: [Object: null prototype] {
    event: 'user_added',
    user_id: 'david',
    data: '{"name":"David","age":40,"email":"david@example.com"}',
    score: '90'
  }
}
*/