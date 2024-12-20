// import { createClient } from 'redis';
// import util from 'util';

// const client = createClient({ url: 'redis://localhost:6379' });

// client.on('error', (err) => {
//   console.error('Error connecting to Redis', err);
// });

// await client.connect();

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

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

// // Function to handle incoming messages
// function checkWinner(board) {
//     for (let i = 0; i < 3; i++) {
//         if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0]) return board[i][0];
//         if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i]) return board[0][i];
//     }
//     if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0]) return board[0][0];
//     if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2]) return board[0][2];
//     return null;
// }

// const ticTacToeBoard = [
//     ['', '', ''],
//     ['', '', ''],
//     ['', '', '']
// ];

// async function messageHandler(message) {
//     const data = JSON.parse(message);
//     const user = data.user || 'unknown';
//     const text = data.text || '';
//     const coordinates = data.coordinates || '';

//     // TODO: Implement the message handler for the Tic-Tac-Toe game

//     // TODO: Check if text is 'play', print the message '{user} started a new game.' if true

//     // TODO: Otherwise, check if coordinates are provided
//         // TODO: Extract the value from the message, use the last character of the text

//         // TODO: Split the coordinates and convert them to integers

//         // TODO: Update the ticTacToeBoard with the value at the given coordinates

//         // TODO: Call the checkWinner function to check if there is a winner. It should return the winner (X, O) if there is one, otherwise null

//         // TODO: If there is a winner, publish a message to the channel with the winner and the text '{winner} wins!'

//     // TODO: If the text is not 'play' or coordinates are not provided, print the received message 'Received message from {user}: {text}'
// }

// // Function to subscribe to a channel
// async function subscribeToChannel(channel) {
//     await pubsub.subscribe(channel, (message) => {
//         messageHandler(message);
//     });
//     return pubsub;
// }

// // Channel name for notifications
// const channelName = 'chat_room';

// // Subscribe to the chat channel
// await subscribeToChannel(channelName);

// // Publish messages to the channel
// const messages = [
//   { user: 'alice', text: 'Hello everyone!' },
//   { user: 'bob', text: 'Hi Alice! How are you?' },
//   { user: 'bob', text: 'Did you see the latest news?' },
//   { user: 'charlie', text: 'play' },
//   { user: 'charlie', text: 'playerO', coordinates: '0,0' },
//   { user: 'bob', text: 'playerX', coordinates: '1,1' },
//   { user: 'charlie', text: 'playerO', coordinates: '0,1' },
//   { user: 'bob', text: 'playerX', coordinates: '1,0' },
//   { user: 'charlie', text: 'playerO', coordinates: '0,2' },
// ];

// for (const msg of messages) {
//   await publishMessage(channelName, msg);
// }

// await delay(1000);

// await pubsub.unsubscribe(channelName);
// await pubsub.disconnect();
// await client.disconnect();

import { createClient } from 'redis';
import util from 'util';

const client = createClient({ url: 'redis://localhost:6379' });

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

await client.connect();

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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

// Function to handle incoming messages
function checkWinner(board) {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0]) return board[i][0];
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i]) return board[0][i];
    }
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0]) return board[0][0];
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2]) return board[0][2];
    return null;
}

const ticTacToeBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

async function messageHandler(message) {
    const data = JSON.parse(message);
    const user = data.user || 'unknown';
    const text = data.text || '';
    const coordinates = data.coordinates || '';

    if (text === 'play') {
        console.log(`${user} started a new game.`);
        return;
    }

    if (coordinates) {
        const value = text.slice(-1);
        const [row, col] = coordinates.split(',').map(Number);
        ticTacToeBoard[row][col] = value;

        const winner = checkWinner(ticTacToeBoard);
        if (winner) {
            await publishMessage(channelName, { winner, text: `${winner} wins!` });
        }
    } else {
        console.log(`Received message from ${user}: ${text}`);
    }
}

// Function to subscribe to a channel
async function subscribeToChannel(channel) {
    await pubsub.subscribe(channel, (message) => {
        messageHandler(message);
    });
    return pubsub;
}

// Channel name for notifications
const channelName = 'chat_room';

// Subscribe to the chat channel
await subscribeToChannel(channelName);

// Publish messages to the channel
const messages = [
  { user: 'alice', text: 'Hello everyone!' },
  { user: 'bob', text: 'Hi Alice! How are you?' },
  { user: 'bob', text: 'Did you see the latest news?' },
  { user: 'charlie', text: 'play' },
  { user: 'charlie', text: 'playerO', coordinates: '0,0' },
  { user: 'bob', text: 'playerX', coordinates: '1,1' },
  { user: 'charlie', text: 'playerO', coordinates: '0,1' },
  { user: 'bob', text: 'playerX', coordinates: '1,0' },
  { user: 'charlie', text: 'playerO', coordinates: '0,2' },
];

for (const msg of messages) {
  await publishMessage(channelName, msg);
}

await delay(1000);

await pubsub.unsubscribe(channelName);
await pubsub.disconnect();
await client.disconnect();