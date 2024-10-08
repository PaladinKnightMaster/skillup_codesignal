// import { createClient } from 'redis';

// // Create and connect Redis client
// const client = createClient({ url: 'redis://localhost:6379' });

// client.on('error', (err) => console.log('Redis Client Error', err));

// await client.connect();

// // TODO: Set the total number of students total_students and the average grade average_grade with values 10 and 88.5, respectively

// // TODO: Retrieve the total number of students and the average grade values from Redis

// // TODO: Log the values retrieved from Redis

// await client.disconnect();

import { createClient } from 'redis';

// Create and connect Redis client
const client = createClient({ url: 'redis://localhost:6379' });

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

// TODO: Set the total number of students total_students and the average grade average_grade with values 10 and 88.5, respectively
client.set('total_students', 10);
client.set('average_grade', 88.5);
// TODO: Retrieve the total number of students and the average grade values from Redis
const total_students = await client.get('total_students');
const average_grade = await client.get('average_grade');
// TODO: Log the values retrieved from Redis
console.log(`Total students: ${total_students}, Average grade: ${average_grade}`);
await client.disconnect();