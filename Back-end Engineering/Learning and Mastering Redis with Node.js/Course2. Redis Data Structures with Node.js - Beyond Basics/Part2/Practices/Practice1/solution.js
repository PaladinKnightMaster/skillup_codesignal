// import { createClient } from 'redis';

// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//   console.log('Redis Client Error', err);
// });

// await client.connect();

// await client.zAdd('leaderboard', [
//   { score: 100, value: 'Alice' },
//   { score: 400, value: 'Bob' },
//   { score: 300, value: 'Charlie' },
//   { score: 350, value: 'Alice' },
//   { score: 370, value: 'John' }
// ]);

// // TODO: Change the range to retrieve the top 3 players instead of top 2
// const topPlayers = await client.zRangeWithScores('leaderboard', -2, -1);
// console.log(`Top 2 players:`, topPlayers);

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.log('Redis Client Error', err);
});

await client.connect();

await client.zAdd('leaderboard', [
  { score: 100, value: 'Alice' },
  { score: 400, value: 'Bob' },
  { score: 300, value: 'Charlie' },
  { score: 350, value: 'Alice' },
  { score: 370, value: 'John' }
]);

// TODO: Change the range to retrieve the top 3 players instead of top 2
const topPlayers = await client.zRangeWithScores('leaderboard', -3, -1);
console.log(`Top 3 players:`, topPlayers);

await client.disconnect();