// import { createClient } from 'redis';

// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', err => console.log('Redis Client Error', err));

// await client.connect();

// // TODO: Set the key and value pair with the key 'hero' and value 'Iron Man'

// // TODO: Retrieve the key 'hero' from Redis and assign it to the variable 'value'

// console.log(`Stored string in Redis: ${value}`);

// // TODO: Delete the key 'hero' from Redis

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

// TODO: Set the key and value pair with the key 'hero' and value 'Iron Man'
await client.set('hero', 'Iron Man');
// TODO: Retrieve the key 'hero' from Redis and assign it to the variable 'value'
const value = await client.get('hero');
console.log(`Stored string in Redis: ${value}`);

// TODO: Delete the key 'hero' from Redis
await client.del('hero');
await client.disconnect();