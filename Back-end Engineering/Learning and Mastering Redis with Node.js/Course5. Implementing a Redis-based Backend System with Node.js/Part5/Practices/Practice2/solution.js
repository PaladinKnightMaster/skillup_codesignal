// import { createClient } from 'redis';
// import util from 'util';

// const client = createClient({ url: 'redis://localhost:6379' });

// client.on('error', (err) => {
//   console.error('Error connecting to Redis', err);
// });

// await client.connect();

// const pubsub = client.duplicate();
// await pubsub.connect();

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

// console.log("Leaderboard:", await getLeaderboard());

// // Function to publish messages to a channel
// async function publishMessage(channel, message) {
//   await client.publish(channel, JSON.stringify(message));
// }

// // Channel name for notifications
// const channelName = 'chat_room';

// // Publish messages to the channel
// const messages = [
//   { user: 'alice', text: 'Hello everyone!' },
//   { user: 'bob', text: 'Hi Alice! How are you?' },
//   { user: 'bob', text: 'Did you see the latest news?' }
// ];

// for (const msg of messages) {
//   await publishMessage(channelName, msg);
// }

// // TODO: Implement the messageHandler function that takes 'message' as input
//     // TODO: Parse the message data using JSON.parse

//     // TODO: Print the message data with the format "Received message from {data.user}: {data.text}"

// // TODO: Implement the subscribeToChannel function that takes 'channel' as input
//     // TODO: Subscribe to the channel with the messageHandler function

//     // TODO: Return the pubsub instance

// // TODO: Subscribe to the chat channel using the subscribeToChannel function

// // TODO: Unsubscribe from the channel and disconnect the pubsub and client

import { createClient } from 'redis';
import util from 'util';

const client = createClient({ url: 'redis://localhost:6379' });

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

await client.connect();

const pubsub = client.duplicate();
await pubsub.connect();

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

console.log("Leaderboard:", await getLeaderboard());

// Function to publish messages to a channel
async function publishMessage(channel, message) {
  await client.publish(channel, JSON.stringify(message));
}

// Channel name for notifications
const channelName = 'chat_room';

// Publish messages to the channel
const messages = [
  { user: 'alice', text: 'Hello everyone!' },
  { user: 'bob', text: 'Hi Alice! How are you?' },
  { user: 'bob', text: 'Did you see the latest news?' }
];

for (const msg of messages) {
  await publishMessage(channelName, msg);
}

// TODO: Implement the messageHandler function that takes 'message' as input
    // TODO: Parse the message data using JSON.parse

    // TODO: Print the message data with the format "Received message from {data.user}: {data.text}"
const messageHandler = (message) => {
  const data = JSON.parse(message.data);
  console.log(`Received message from ${data.user}: ${data.text}`);
};

// TODO: Implement the subscribeToChannel function that takes 'channel' as input
    // TODO: Subscribe to the channel with the messageHandler function

    // TODO: Return the pubsub instance
const subscribeToChannel = async (channel) => {
  await pubsub.subscribe(channel, (message) => messageHandler(message));
  return pubsub;
};

// TODO: Subscribe to the chat channel using the subscribeToChannel function
const chatChannel = 'chat_room';
await subscribeToChannel(chatChannel);

// TODO: Unsubscribe from the channel and disconnect the pubsub and client
await pubsub.unsubscribe(chatChannel);
await pubsub.disconnect();