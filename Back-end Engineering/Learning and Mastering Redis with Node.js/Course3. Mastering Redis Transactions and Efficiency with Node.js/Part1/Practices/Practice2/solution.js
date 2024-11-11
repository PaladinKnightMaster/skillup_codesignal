// import { createClient } from 'redis';

// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//   console.error('Error connecting to Redis', err);
// });

// await client.connect();

// await client.set('user', '');
// await client.set('courses_completed', 1);
// await client.set('missions_ongoing', 5);

// const pipeline = client.multi();

// pipeline.incr('courses_completed');
// pipeline.set('user', 'John');
// // TODO: Add a command to decrement missions_ongoing by 2 in the pipeline

// try {
//     const results = await pipeline.exec();
//     console.log(`Transaction results: ${results}`);
// } catch (e) {
//     console.log(`Transaction results: ${e}`);
// }

// const courses_completed = await client.get('courses_completed');
// const user = await client.get('user');
// const missions_ongoing = await client.get('missions_ongoing');

// console.log(`Courses completed: ${courses_completed}`);
// console.log(`User: ${user}`);
// console.log(`Missions ongoing: ${missions_ongoing}`);

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

await client.connect();

await client.set('user', '');
await client.set('courses_completed', 1);
await client.set('missions_ongoing', 5);

const pipeline = client.multi();

pipeline.incr('courses_completed');
pipeline.set('user', 'John');
// TODO: Add a command to decrement missions_ongoing by 2 in the pipeline
pipeline.decrBy('missions_ongoing', 2);

try {
    const results = await pipeline.exec();
    console.log(`Transaction results: ${results}`);
} catch (e) {
    console.log(`Transaction results: ${e}`);
}

const courses_completed = await client.get('courses_completed');
const user = await client.get('user');
const missions_ongoing = await client.get('missions_ongoing');

console.log(`Courses completed: ${courses_completed}`);
console.log(`User: ${user}`);
console.log(`Missions ongoing: ${missions_ongoing}`);

await client.disconnect();