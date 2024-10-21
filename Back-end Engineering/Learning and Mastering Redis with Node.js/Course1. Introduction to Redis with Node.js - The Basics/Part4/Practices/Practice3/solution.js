// import { createClient } from 'redis';

// // Connect to Redis
// const client = createClient();

// client.on('error', err => console.error('Redis Client Error', err));

// await client.connect();

// for (const student of ['Alice', 'Bob', 'Charlie']) {
//   await client.rPush('students', student);
// }

// // TODO: Modify the line below to take only the first 2 students
// const students = await client.lRange('students', 0, -1);

// console.log('Students in the list:', students);

// // Close the connection
// await client.disconnect();

import { createClient } from 'redis';

// Connect to Redis
const client = createClient();

client.on('error', err => console.error('Redis Client Error', err));

await client.connect();

for (const student of ['Alice', 'Bob', 'Charlie']) {
  await client.rPush('students', student);
}

// TODO: Modify the line below to take only the first 2 students
const students = await client.lRange('students', 0, 1);

console.log('Students in the list:', students);

// Close the connection
await client.disconnect();