// import { createClient } from 'redis';

// // Connect to Redis
// const client = createClient();

// client.on('error', err => console.error('Redis Client Error', err));

// await client.connect();

// try {
//     // Using hashes to store and retrieve fields and values
//     await client.hSet('user:1000', 'username', 'alice');
//     await client.hSet('user:1000', 'email', 'alice@example.com');

//     const username = await client.hGet('user:1000', 'username');
//     const email = await client.hGet('user:1000', 'mail');
//     console.log(`User details: ${username} ${email}`);

// } catch (err) {
//     console.error('Error:', err);
// } finally {
//     // Disconnect from Redis
//     await client.disconnect();
// }

import { createClient } from 'redis';

// Connect to Redis
const client = createClient();

client.on('error', err => console.error('Redis Client Error', err));

await client.connect();

try {
    // Using hashes to store and retrieve fields and values
    await client.hSet('user:1000', 'username', 'alice');
    await client.hSet('user:1000', 'email', 'alice@example.com');

    const username = await client.hGet('user:1000', 'username');
    const email = await client.hGet('user:1000', 'email');
    console.log(`User details: ${username} ${email}`);

} catch (err) {
    console.error('Error:', err);
} finally {
    // Disconnect from Redis
    await client.disconnect();
}