// import { createClient } from 'redis';

// // Connect to Redis
// const client = createClient();

// client.on('error', err => console.error('Redis Client Error', err));

// await client.connect();

// for (const student of ['Alice', 'Bob', 'Charlie']) {
//   await client.rPush('students_list', student);
// }
// const student = await client.lIndex('students_list', 1);
// console.log(`Student in the list: ${student}`);

// // Close the connection
// await client.disconnect();

import { createClient } from 'redis';

// Connect to Redis
const client = createClient();

client.on('error', err => console.error('Redis Client Error', err));

await client.connect();

for (const student of ['Alice', 'Bob', 'Charlie']) {
  await client.rPush('students_list', student);
}
const student = await client.lIndex('students_list', 0);
console.log(`Student in the list: ${student}`);

// Close the connection
await client.disconnect();