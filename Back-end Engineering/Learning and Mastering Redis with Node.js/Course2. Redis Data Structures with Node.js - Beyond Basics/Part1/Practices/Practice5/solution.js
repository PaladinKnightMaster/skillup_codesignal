// import { createClient } from 'redis';

// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//   console.log('Redis Client Error', err);
// });

// await client.connect();

// // TODO: Add unique movie titles to the 'movies' set. Values: ['Inception', 'The Matrix', 'Interstellar', 'Inception']

// // TODO: Print the size of the 'movies' set

// // TODO: Retrieve all movie titles from the 'movies' set

// // TODO: Print the list of movie titles

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.log('Redis Client Error', err);
});

await client.connect();

// TODO: Add unique movie titles to the 'movies' set. Values: ['Inception', 'The Matrix', 'Interstellar', 'Inception']
await client.sAdd('movies', ['Inception', 'The Matrix', 'Interstellar', 'Inception']);

// TODO: Print the size of the 'movies' set
const movieCount = await client.sCard('movies');
console.log('Size of the set:', movieCount);

// TODO: Retrieve all movie titles from the 'movies' set
const movieTitles = await client.sMembers('movies');

// TODO: Print the list of movie titles
console.log('List of movie titles:', movieTitles);

await client.disconnect();