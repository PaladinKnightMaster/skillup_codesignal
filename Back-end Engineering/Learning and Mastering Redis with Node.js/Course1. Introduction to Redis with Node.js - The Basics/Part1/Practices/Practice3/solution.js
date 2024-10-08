// import { createClient } from 'redis';

// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', err => console.log('Redis Client Error', err));

// await client.connect();

// await client.set('planet', 'Earth');
// const value = await client.get('plant');
// console.log(`Stored string in Redis: ${value}`);

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

await client.set('planet', 'Earth');
const value = await client.get('planet');
console.log(`Stored string in Redis: ${value}`);

await client.disconnect();