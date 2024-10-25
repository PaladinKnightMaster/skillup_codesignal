// import { createClient } from 'redis';

// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//   console.log('Redis Client Error', err);
// });

// await client.connect();

// await client.zAdd('leaderboard', { score: 100, value: 'Alice' });
// await client.zAdd('leaderboard', { score: 400, value: 'Bob' });
// await client.zAdd('leaderboard', { score: 300, value: 'Charlie' });
// await client.zAdd('leaderboard', { score: 350, value: 'Alice' });

// const topPlayers = await client.zRange('leaderboard', -2, -1);
// console.log(`Top 2 players: ${JSON.stringify(topPlayers)}`);

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.log('Redis Client Error', err);
});

await client.connect();

await client.zAdd('leaderboard', { score: 100, value: 'Alice' });
await client.zAdd('leaderboard', { score: 400, value: 'Bob' });
await client.zAdd('leaderboard', { score: 300, value: 'Charlie' });
await client.zAdd('leaderboard', { score: 350, value: 'Alice' });

const topPlayers = await client.zRangeWithScores('leaderboard', -2, -1);
console.log(`Top 2 players: ${JSON.stringify(topPlayers)}`);

await client.disconnect();