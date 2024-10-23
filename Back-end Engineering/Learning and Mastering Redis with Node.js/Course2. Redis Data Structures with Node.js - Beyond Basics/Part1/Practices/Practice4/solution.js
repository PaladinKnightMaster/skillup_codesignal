// import { createClient } from 'redis';

// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//   console.log('Redis Client Error', err);
// });

// await client.connect();

// await client.sAdd('cities', ['New York', 'Los Angeles', 'Chicago', 'New York']);

// // TODO: Get the number of cities in the set
// const cityCount = null;

// console.log(`Number of cities in the set: ${cityCount}`);

// // TODO: Remove 'Chicago' from the set 'cities'

// // TODO: Get the number of cities in the set after removal
// const cityCountAfterRemoval = null;

// console.log(`Number of cities in the set after removal: ${cityCountAfterRemoval}`);

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.log('Redis Client Error', err);
});

await client.connect();

await client.sAdd('cities', ['New York', 'Los Angeles', 'Chicago', 'New York']);

// TODO: Get the number of cities in the set
const cityCount = await client.sCard('cities');

console.log(`Number of cities in the set: ${cityCount}`);

// TODO: Remove 'Chicago' from the set 'cities'
await client.sRem('cities', 'Chicago');

// TODO: Get the number of cities in the set after removal
const cityCountAfterRemoval = await client.sCard('cities');

console.log(`Number of cities in the set after removal: ${cityCountAfterRemoval}`);

await client.disconnect();