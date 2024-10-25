// import { createClient } from 'redis';

// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//     console.log('Redis Client Error', err);
// });

// await client.connect();

// await client.zAdd('superhero_scores', { score: 200, value: 'HeroA' });
// await client.zAdd('superhero_scores', { score: 100, value: 'Villain' });
// await client.zAdd('superhero_scores', { score: 300, value: 'Sidekick' });
// await client.zAdd('superhero_scores', { score: 400, value: 'Batman' });

// // TODO: Remove 'Villain' from the leaderboard

// // TODO: Retrieve the two lowest scoring superheroes

// console.log("Two lowest scoring superheroes:", lowHeroes);

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
    console.log('Redis Client Error', err);
});

await client.connect();

await client.zAdd('superhero_scores', { score: 200, value: 'HeroA' });
await client.zAdd('superhero_scores', { score: 100, value: 'Villain' });
await client.zAdd('superhero_scores', { score: 300, value: 'Sidekick' });
await client.zAdd('superhero_scores', { score: 400, value: 'Batman' });

// TODO: Remove 'Villain' from the leaderboard
await client.zRem('superhero_scores', 'Villain');

// TODO: Retrieve the two lowest scoring superheroes
const lowHeroes = await client.zRange('superhero_scores', 0, 1);

console.log("Two lowest scoring superheroes:", lowHeroes);

await client.disconnect();