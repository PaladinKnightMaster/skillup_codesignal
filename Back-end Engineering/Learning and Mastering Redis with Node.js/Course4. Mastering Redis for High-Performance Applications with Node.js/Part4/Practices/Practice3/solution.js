// import { createClient } from 'redis';

// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// await client.connect();

// // TODO: Retrieve the key-value pairs from the Redis server. Retrieve the keys: name, age, country, city

// console.log(name, age, country, city);

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

await client.connect();

// TODO: Retrieve the key-value pairs from the Redis server. Retrieve the keys: name, age, country, city
const name = await client.get('name');
const age = await client.get('age');
const country = await client.get('country');
const city = await client.get('city');

console.log(name, age, country, city);

await client.disconnect();