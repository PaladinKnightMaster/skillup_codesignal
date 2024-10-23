// import { createClient } from 'redis';

// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//   console.log('Redis Client Error', err);
// });

// await client.connect();

// await client.sAdd('pets', 'Dog', 'Cat', 'Bird', 'Dog');
// let pets = await client.sMembers('pets');

// console.log(`Pets in the set: ${pets}`);

// client.disconnect();

import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.log('Redis Client Error', err);
});

await client.connect();

await client.sAdd('pets', ['Dog', 'Cat', 'Bird', 'Dog']);
let pets = await client.sMembers('pets');

console.log(`Pets in the set: ${pets}`);

client.disconnect();