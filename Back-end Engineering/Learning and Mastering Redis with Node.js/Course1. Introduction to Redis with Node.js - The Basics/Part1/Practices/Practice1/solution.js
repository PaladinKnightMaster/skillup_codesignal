// import { createClient } from 'redis';

// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', err => console.log('Redis Client Error', err));

// await client.connect();

// // TODO: Modify the code to store and retrieve the value for the key 'hero' with the value 'Superman'
// await client.set('name', 'Redis Learner');
// const value = await client.get('name');
// console.log(`Stored string in Redis: ${value}`);

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

// TODO: Modify the code to store and retrieve the value for the key 'hero' with the value 'Superman'
await client.set('hero', 'Superman');
const value = await client.get('hero');
console.log(`Stored string in Redis: ${value}`);

await client.disconnect();