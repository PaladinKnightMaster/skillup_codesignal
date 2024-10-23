// import { createClient } from 'redis';

// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//   console.log('Redis Client Error', err);
// });

// await client.connect();

// await client.sAdd('countries', ['USA', 'Canada', 'UK', 'USA']);

// // TODO: Modify the code to get the number of countries in the set 'countries' instead of the country names.
// const countries = await client.sMembers('countries');

// console.log(`Countries in the set: ${countries}`);

// client.disconnect();

import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.log('Redis Client Error', err);
});

await client.connect();

await client.sAdd('countries', ['USA', 'Canada', 'UK', 'USA']);

// TODO: Modify the code to get the number of countries in the set 'countries' instead of the country names.
const countries = await client.sCard('countries');

console.log(`Countries in the set: ${countries}`);

client.disconnect();