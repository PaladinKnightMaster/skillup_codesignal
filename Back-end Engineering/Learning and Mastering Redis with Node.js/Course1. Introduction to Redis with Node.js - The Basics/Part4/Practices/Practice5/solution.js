// import { createClient } from 'redis';

// // Connect to Redis
// const client = createClient();

// client.on('error', err => console.error('Redis Client Error', err));

// await client.connect();

// // Add initial students to the list
// await client.rPush('students', 'Alice');
// await client.rPush('students', 'Bob');
// await client.rPush('students', 'Charlie');
// await client.rPush('students', 'David');
// await client.rPush('students', 'Eve');
// await client.rPush('students', 'David');

// // TODO: Take the first student from the list and print it

// // TODO: Remove 1st occurrence of 'David' from the list

// // TODO: Print the updated list of students after removing 'David'

// await client.disconnect();

import { createClient } from 'redis';

// Connect to Redis
const client = createClient();

client.on('error', err => console.error('Redis Client Error', err));

await client.connect();

// Add initial students to the list
await client.rPush('students', 'Alice');
await client.rPush('students', 'Bob');
await client.rPush('students', 'Charlie');
await client.rPush('students', 'David');
await client.rPush('students', 'Eve');
await client.rPush('students', 'David');

// TODO: Take the first student from the list and print it
const student = await client.lIndex('students', 0);
console.log(`First student: ${student}`);
// TODO: Remove 1st occurrence of 'David' from the list
await client.lRem('students', 1, 'David');
// TODO: Print the updated list of students after removing 'David'
const students = await client.lRange('students', 0, -1);
console.log('Students in the list:', students);

await client.disconnect();