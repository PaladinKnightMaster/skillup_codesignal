import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.error('Redis Client Error', err));

await client.connect();

for (const student of ['Alice', 'Bob', 'Charlie']) {
  client.rPush('students_list', student);
}
const student = await client.lIndex('students_list', 0);
console.log(`Student at index 0: ${student}`);

await client.disconnect();