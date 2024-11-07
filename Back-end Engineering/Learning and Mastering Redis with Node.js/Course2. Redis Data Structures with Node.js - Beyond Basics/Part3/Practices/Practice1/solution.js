import { createClient } from 'redis';

// Connect to Redis
const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.log('Redis Client Error', err);
});

await client.connect();

await client.setBit('user_active', 0, 1);
await client.setBit('user_active', 1, 1);
await client.setBit('user_active', 2, 0);

let user0Active = await client.getBit('user_active', 0);
let user2Active = await client.getBit('user_active', 2);

console.log(`User 0 active: ${user0Active}, User 2 active: ${user2Active}`);

client.disconnect();