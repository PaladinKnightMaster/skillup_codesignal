import { createClient } from 'redis';

// Create and connect Redis client
const client = createClient({ url: 'redis://localhost:6379' });

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

// Setting and getting numeric values
await client.set('count', 5);
await client.set('completion_rate', 95.5);

const count = await client.get('count');
const completion_rate = await client.get('completion_rate');

console.log(`Course count: ${count}, Completion rate: ${completion_rate}`);

await client.disconnect();