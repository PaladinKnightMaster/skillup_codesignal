// import { createClient } from 'redis';

// const client = createClient();
// client.on('error', (err) => console.log('Redis Client Error', err));
// await client.connect();

// await client.set('followers', 2000);
// await client.set('percent_complete', 12.3);
// await client.set('courses_taken', 0);

// // TODO: Decrement the number of followers by 1

// // TODO: Increment the percentage completion by 4.1

// // TODO: Increment the number of courses taken by 1

// const followers = await client.get('followers');
// const percent_complete = await client.get('percent_complete');
// const courses_taken = await client.get('courses_taken');

// console.log(`Followers: ${followers}`);
// console.log(`Percent Complete: ${percent_complete}`);
// console.log(`Courses Taken: ${courses_taken}`);

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient();
client.on('error', (err) => console.log('Redis Client Error', err));
await client.connect();

await client.set('followers', 2000);
await client.set('percent_complete', 12.3);
await client.set('courses_taken', 0);

// TODO: Decrement the number of followers by 1
await client.decr('followers');
// TODO: Increment the percentage completion by 4.1
await client.incrByFloat('percent_complete', 4.1);
// TODO: Increment the number of courses taken by 1
await client.incr('courses_taken');

const followers = await client.get('followers');
const percent_complete = await client.get('percent_complete');
const courses_taken = await client.get('courses_taken');

console.log(`Followers: ${followers}`);
console.log(`Percent Complete: ${percent_complete}`);
console.log(`Courses Taken: ${courses_taken}`);

await client.disconnect();