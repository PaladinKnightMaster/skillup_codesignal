// import { createClient } from 'redis';

// // Connect to Redis
// const client = createClient();

// client.on('error', err => console.error('Redis Client Error', err));

// await client.connect();

// try {
//     // Using hashes to store and retrieve fields and values
//     await client.hSet('user:1000', 'username', 'alice');
//     await client.hSet('user:1000', 'email', 'alice@example.com');

//     const user = await client.hGetAll('user:1000');
//     console.log('User details before deletion:', user);

//     // TODO: Delete the email field from the hash

//     const updatedUser = await client.hGetAll('user:1000');
//     console.log('User details after deletion:', updatedUser);

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

    const user = await client.hGetAll('user:1000');
    console.log('User details before deletion:', user);

    // TODO: Delete the email field from the hash
    await client.hDel('user:1000', 'email');

    const updatedUser = await client.hGetAll('user:1000');
    console.log('User details after deletion:', updatedUser);

} catch (err) {
    console.error('Error:', err);
} finally {
    // Disconnect from Redis
    await client.disconnect();
}