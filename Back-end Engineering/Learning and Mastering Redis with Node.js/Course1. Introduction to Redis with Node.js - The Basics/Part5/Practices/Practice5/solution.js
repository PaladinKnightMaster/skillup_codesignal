// import { createClient } from 'redis';

// // Connect to Redis
// const client = createClient();

// client.on('error', err => console.error('Redis Client Error', err));

// await client.connect();

// try {
//     // TODO: Store the movie details using hashes
//     // Use the key 'movie:3000' and the fields 'title', 'director', and 'year' with the values 'Inception', 'Christopher Nolan', and '2010' respectively

//     // TODO: Retrieve the movie details using the key 'movie:3000'

//     console.log('Movie details:', movie);

// } catch (err) {
//     console.error('Error:', err);
// } finally {
//     // Disconnect from Redis
//     await client.disconnect();
// }

import { createClient } from 'redis';

// Connect to Redis
const client = createClient();

client.on('error', err => console.error('Redis Client Error', err));

await client.connect();

try {
    // TODO: Store the movie details using hashes
    // Use the key 'movie:3000' and the fields 'title', 'director', and 'year' with the values 'Inception', 'Christopher Nolan', and '2010' respectively
    await client.hSet('movie:3000', 'title', 'Inception');
    await client.hSet('movie:3000', 'director', 'Christopher Nolan');
    await client.hSet('movie:3000', 'year', '2010');

    // TODO: Retrieve the movie details using the key 'movie:3000'
    const movie = await client.hGetAll('movie:3000');

    console.log('Movie details:', movie);

} catch (err) {
    console.error('Error:', err);
} finally {
    // Disconnect from Redis
    await client.disconnect();
}