// import { createClient } from 'redis';

// // Create and connect Redis client
// const client = createClient({ url: 'redis://localhost:6379' });

// client.on('error', (err) => console.log('Redis Client Error', err));

// await client.connect();

// await client.set('count', 5);

// let count = await client.get('count');

// console.log(`New course created. Total count: ${count + 1}`);

// await client.disconnect();

import { createClient } from 'redis';

// Create and connect Redis client
const client = createClient({ url: 'redis://localhost:6379' });

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

await client.set('count', 5);

let count = await client.get('count');
count = parseInt(count);

console.log(`New course created. Total count: ${count + 1}`);

await client.disconnect();