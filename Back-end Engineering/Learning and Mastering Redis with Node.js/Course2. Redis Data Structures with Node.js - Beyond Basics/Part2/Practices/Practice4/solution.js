// import { createClient } from 'redis';

// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//   console.log('Redis Client Error', err);
// });

// await client.connect();

// // TODO: Add members and their scores to the sorted set. Use values: Alice: 100, Bob: 400, Charlie: 300

// // TODO: Modify the line below to retrieve the top 2 players from the leaderboard instead of all players
// const topPlayers = await client.zRangeWithScores('leaderboard', 0, -1);
// console.log('Top 2 players:', topPlayers);

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.log('Redis Client Error', err);
});

await client.connect();

// TODO: Add members and their scores to the sorted set. Use values: Alice: 100, Bob: 400, Charlie: 300
await client.zAdd('leaderboard', [{ score: 100, value: 'Alice' }, { score: 400, value: 'Bob' }, { score: 300, value: 'Charlie' }]);

// TODO: Modify the line below to retrieve the top 2 players from the leaderboard instead of all players
const topPlayers = await client.zRangeWithScores('leaderboard', -2, -1);
console.log('Top 2 players:', topPlayers);

await client.disconnect();