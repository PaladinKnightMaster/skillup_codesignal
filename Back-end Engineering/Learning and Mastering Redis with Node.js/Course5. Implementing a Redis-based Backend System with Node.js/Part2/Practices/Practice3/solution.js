// import { createClient } from 'redis';

// // Connect to Redis
// const client = createClient();

// client.on('error', (err) => {
//     console.error('Error connecting to Redis', err);
// });

// await client.connect();

// async function addUser(userId, data) {
//     const jsonData = JSON.stringify(data);
//     await client.set(`user:${userId}`, jsonData);
// }

// async function getUser(userId) {
//     const data = await client.get(`user:${userId}`);
//     return data ? JSON.parse(data) : null;
// }

// async function addScore(userId, score) {
//     await client.zAdd('leaderboard', [{ score: score, value: userId }]);
// }

// async function getLeaderboard(topN = 10) {
//     const leaderboard = await client.zRangeWithScores('leaderboard', -topN, -1);
//     return leaderboard;
// }

// // TODO: Implement the getUserRankAndScore function that takes userId as an argument.
//     // TODO: Retrieve the rank and score of the user from the 'leaderboard' sorted set. Hint: use zScore to retrieve the score
//     // Return the rank and score for the user as an object { rank, score }

// const users = [
//     { userId: 'alice', data: { name: 'Alice', age: 30, email: 'alice@example.com' }, score: 50 },
//     { userId: 'bob', data: { name: 'Bob', age: 25, email: 'bob@example.com' }, score: 80 },
//     { userId: 'charlie', data: { name: 'Charlie', age: 35, email: 'charlie@example.com' }, score: 70 }
// ];

// for (const user of users) {
//     await addUser(user.userId, user.data);
//     await addScore(user.userId, user.score);
// }

// const top2 = await getLeaderboard(2);
// console.log(top2);

// // TODO: Call the getUserRankAndScore function for each user and print their rank and score.

// await client.disconnect();

import { createClient } from 'redis';

// Connect to Redis
const client = createClient();

client.on('error', (err) => {
    console.error('Error connecting to Redis', err);
});

await client.connect();

async function addUser(userId, data) {
    const jsonData = JSON.stringify(data);
    await client.set(`user:${userId}`, jsonData);
}

async function getUser(userId) {
    const data = await client.get(`user:${userId}`);
    return data ? JSON.parse(data) : null;
}

async function addScore(userId, score) {
    await client.zAdd('leaderboard', [{ score: score, value: userId }]);
}

async function getLeaderboard(topN = 10) {
    const leaderboard = await client.zRangeWithScores('leaderboard', -topN, -1);
    return leaderboard;
}

// TODO: Implement the getUserRankAndScore function that takes userId as an argument.
    // TODO: Retrieve the rank and score of the user from the 'leaderboard' sorted set. Hint: use zScore to retrieve the score
    // Return the rank and score for the user as an object { rank, score }
async function getUserRankAndScore(userId) {
    const score = await client.zScore('leaderboard', userId);
    const rank = await client.zRank('leaderboard', userId);
    return { rank, score };
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

const top2 = await getLeaderboard(2);
console.log(top2);

// TODO: Call the getUserRankAndScore function for each user and print their rank and score.
for (const user of users) {
    const { rank, score } = await getUserRankAndScore(user.userId);
    console.log(`User ${user.userId} rank: ${rank}, score: ${score}`);
}

await client.disconnect();