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

// async function readFromStream(streamName) {
//   const entries = await client.xRange(streamName, '-', '+', { COUNT: 10 });
//   return entries;
// }

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

// console.log("Leaderboard:", await getLeaderboard())

// // TODO: Implement the publishMessage function that takes a channel name and a message as arguments
//   // TODO: Publish the message to the channel

// // TODO: Create a channel name for notifications called 'chat_room'

// // Publish messages to the channel
// const messages = [
//   { user: 'alice', text: 'Hello everyone!' },
//   { user: 'bob', text: 'Hi Alice! How are you?' },
//   { user: 'bob', text: 'Did you see the latest news?' }
// ];

// // TODO: Publish each message to the 'chat_room' channel

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

console.log("Leaderboard:", await getLeaderboard())

// TODO: Implement the publishMessage function that takes a channel name and a message as arguments
  // TODO: Publish the message to the channel
const publishMessage = async (channel, message) => {
  await client.publish(channel, JSON.stringify(message));
}

// TODO: Create a channel name for notifications called 'chat_room'
const channel = 'chat_room';

// Publish messages to the channel
const messages = [
  { user: 'alice', text: 'Hello everyone!' },
  { user: 'bob', text: 'Hi Alice! How are you?' },
  { user: 'bob', text: 'Did you see the latest news?' }
];

// TODO: Publish each message to the 'chat_room' channel
for (const message of messages) {
  await publishMessage(channel, message);
}

await client.disconnect();