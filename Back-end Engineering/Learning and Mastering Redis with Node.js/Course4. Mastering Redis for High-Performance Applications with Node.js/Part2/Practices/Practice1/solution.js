import { createClient } from 'redis';

const client = createClient();

const key = 'session:12345';
await client.connect();
await client.set(key, 'data', { EX: 2 });

const value = await client.get(key);
console.log(`Value: ${value}`);  // data

const ttl = await client.ttl(key);
console.log(`Time-to-live for session key: ${ttl} seconds`);

setTimeout(async () => {
    const value = await client.get(key);
    console.log(`Value: ${value}`);  // null
    client.disconnect();
}, 3000);