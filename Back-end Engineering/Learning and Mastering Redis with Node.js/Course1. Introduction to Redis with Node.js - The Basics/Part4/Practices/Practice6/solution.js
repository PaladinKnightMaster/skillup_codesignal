// import { createClient } from 'redis';

// // Connect to Redis
// const client = createClient();

// client.on('error', err => console.error('Redis Client Error', err));

// await client.connect();

// // TODO: Create list 'movies' and add movies 'Inception', 'The Matrix', 'Interstellar' to the list

// // TODO: Retrieve the first two movies from the list

// console.log('Movies in the list:', movies);

// // Close the connection
// await client.disconnect();

import { createClient } from 'redis';

// Connect to Redis
const client = createClient();

client.on('error', err => console.error('Redis Client Error', err));

await client.connect();

// TODO: Create list 'movies' and add movies 'Inception', 'The Matrix', 'Interstellar' to the list
await client.rPush('movies', 'Inception');
await client.rPush('movies', 'The Matrix');
await client.rPush('movies', 'Interstellar');

// TODO: Retrieve the first two movies from the list
const movies = await client.lRange('movies', 0, 1);

console.log('Movies in the list:', movies);

// Close the connection
await client.disconnect();