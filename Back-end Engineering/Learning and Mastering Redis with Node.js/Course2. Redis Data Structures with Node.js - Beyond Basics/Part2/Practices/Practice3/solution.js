// import { createClient } from 'redis';

// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//   console.log('Redis Client Error', err);
// });

// await client.connect();

// await client.zAdd('leaderboard', [{ score: 100, value: 'Alice' }, { score: 400, value: 'Bob' }, { score: 300, value: 'Charlie' }, { score: 350, value: 'John' }]);

// // TODO: Change the line below to get the rank of 'Alice' from highest to lowest score
// const rank = await client.zRank('leaderboard', 'Alice')

// console.log('Rank:', rank);

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.log('Redis Client Error', err);
});

await client.connect();

await client.zAdd('leaderboard', [{ score: 100, value: 'Alice' }, { score: 400, value: 'Bob' }, { score: 300, value: 'Charlie' }, { score: 350, value: 'John' }]);

// TODO: Change the line below to get the rank of 'Alice' from highest to lowest score
const rank = await client.zRevRank('leaderboard', 'Alice')

console.log('Rank:', rank);

await client.disconnect();