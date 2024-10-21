// import { createClient } from 'redis';

// // Connect to Redis
// const client = createClient();

// client.on('error', err => console.error('Redis Client Error', err));

// await client.connect();

// for (const student of ['Alice', 'Bob', 'Charlie']) {
//     // TODO: Modify this line to use lPush instead to push elements from the left side of the list
//     await client.rPush('students', student);
// }

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
    // TODO: Modify this line to use lPush instead to push elements from the left side of the list
    await client.lPush('students', student);
}

const students = await client.lRange('students', 0, -1);
console.log('Students in the list:', students);

// Close the connection
await client.disconnect();