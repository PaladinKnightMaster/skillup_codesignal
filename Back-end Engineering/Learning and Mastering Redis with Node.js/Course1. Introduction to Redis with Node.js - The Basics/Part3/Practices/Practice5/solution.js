// import { createClient } from 'redis';

// const client = createClient();
// client.on('error', (err) => console.log('Redis Client Error', err));
// await client.connect();

// // TODO: Set initial values for 'stars', 'rating', and 'reviews' to 5, 4.5, and 10 respectively

// // TODO: Decrease 'stars' by 1

// // TODO: Increase 'rating' by 0.5

// // TODO: Increase 'reviews' by 1

// // TODO: Retrieve and print the values of 'stars', 'rating', and 'reviews'

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient();
client.on('error', (err) => console.log('Redis Client Error', err));
await client.connect();

// TODO: Set initial values for 'stars', 'rating', and 'reviews' to 5, 4.5, and 10 respectively
await client.set('stars', 5);
await client.set('rating', 4.5);
await client.set('reviews', 10);
// TODO: Decrease 'stars' by 1
await client.decr('stars');
// TODO: Increase 'rating' by 0.5
await client.incrByFloat('rating', 0.5);
// TODO: Increase 'reviews' by 1
await client.incr('reviews');
// TODO: Retrieve and print the values of 'stars', 'rating', and 'reviews'

const stars = await client.get('stars');
const rating = await client.get('rating');
const reviews = await client.get('reviews');

console.log(`Stars: ${stars}`);
console.log(`Rating: ${rating}`);
console.log(`Reviews: ${reviews}`);

await client.disconnect();