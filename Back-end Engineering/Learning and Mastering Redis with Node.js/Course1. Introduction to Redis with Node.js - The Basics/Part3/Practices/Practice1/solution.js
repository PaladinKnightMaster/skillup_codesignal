import { createClient } from 'redis';

const client = createClient();
client.on('error', (err) => console.log('Redis Client Error', err));
await client.connect();

await client.set('count', 5);
await client.set('completion_rate', 95.5);
await client.set('duration', 0);

await client.decrBy('count', 1);
await client.incrByFloat('completion_rate', 1.5);
await client.incr('duration');

const count = await client.get('count');
const completion_rate = await client.get('completion_rate');
const duration = await client.get('duration');

console.log(`Course count: ${count}`);
console.log(`Completion rate: ${completion_rate}`);
console.log(`Duration: ${duration}`);

await client.disconnect();