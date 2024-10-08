// import { createClient } from 'redis';

// // Create a Redis client
// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', err => console.log('Redis Client Error', err));

// await client.connect();

// // TODO: Modify the code to store and retrieve a multiline string for the key 'quote'
// // The value should be the following multiline string:
// /*
// With great power comes great responsibility.
// - Spider-Man
// */

// await client.set('name', 'Redis Learner');
// const value = await client.get('name');
// console.log(`Stored string in Redis: ${value}`);

// await client.disconnect();

import { createClient } from 'redis';

// Create a Redis client
const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

// TODO: Modify the code to store and retrieve a multiline string for the key 'quote'
// The value should be the following multiline string:
/*
With great power comes great responsibility.
- Spider-Man
*/

await client.set('quote', 'With great power comes great responsibility.\n- Spider-Man');
const value = await client.get('quote');
console.log(`Stored string in Redis: ${value}`);

await client.disconnect();