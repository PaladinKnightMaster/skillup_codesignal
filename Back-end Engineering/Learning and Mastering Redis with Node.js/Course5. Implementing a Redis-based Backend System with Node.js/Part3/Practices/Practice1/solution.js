// import { createClient } from 'redis';

// const client = createClient();

// client.on('error', (err) => {
//     console.error('Error connecting to Redis', err);
// });

// await client.connect();

// async function addUser(userId, data) {
//     await client.set(`user:${userId}`, JSON.stringify(data), { 'EX': 86400 });
// }

// async function getUser(userId) {
//     const data = await client.get(`user:${userId}`);
//     return data ? JSON.parse(data) : null;
// }

// async function addScore(userId, score) {
//     await client.zAdd('leaderboard', { score, value: userId });
// }

// async function getLeaderboard(topN = 10) {
//     const leaderboard = await client.zRangeWithScores('leaderboard', -topN, -1);
//     return leaderboard;
// }

// async function getUserRankAndScore(userId) {
//     const rank = await client.zRevRank('leaderboard', userId);
//     const score = await client.zScore('leaderboard', userId);
//     return { rank, score };
// }

// const users = [
//     { userId: 'alice', data: { name: 'Alice', age: 30, email: 'alice@example.com' }, score: 50 },
//     { userId: 'bob', data: { name: 'Bob', age: 25, email: 'bob@example.com' }, score: 80 },
//     { userId: 'charlie', data: { name: 'Charlie', age: 35, email: 'charlie@example.com' }, score: 70 }
// ];

// // TODO: Modify the code below to use pipelines for adding user data and scores
// for (const user of users) {
//     // TODO: Modify the code below to set user data into pipeline instead of calling addUser
//     await addUser(user.userId, user.data);

//     // TODO: Modify the code below to add user score into pipeline instead of calling addScore
//     await addScore(user.userId, user.score);

//     // Remember to execute the pipeline after adding all user data and scores
// }

// console.log('Leaderboard:', await getLeaderboard());
// for (const user of users) {
//     const { rank, score } = await getUserRankAndScore(user.userId);
//     console.log(`User ${user.userId} rank: ${rank}, score: ${score}`);
// }

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
    { userId: 'charlie', data: { name: 'Charlie', age: 35, email: 'charlie@example.com' }, score: 70 }
];

// TODO: Modify the code below to use pipelines for adding user data and scores
const pipeline = client.multi();
for (const user of users) {
    // TODO: Modify the code below to set user data into pipeline instead of calling addUser
    pipeline.set(`user:${user.userId}`, JSON.stringify(user.data), { 'EX': 86400 });
    // TODO: Modify the code below to add user score into pipeline instead of calling addScore
    pipeline.zAdd('leaderboard', { score: user.score, value: user.userId });

    // Remember to execute the pipeline after adding all user data and scores
    await pipeline.exec();
}

console.log('Leaderboard:', await getLeaderboard());
for (const user of users) {
    const { rank, score } = await getUserRankAndScore(user.userId);
    console.log(`User ${user.userId} rank: ${rank}, score: ${score}`);
}

await client.disconnect();