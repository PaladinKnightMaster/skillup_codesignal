// import { createClient } from 'redis';

// // Connect to Redis
// const client = createClient();

// client.on('error', err => console.error('Redis Client Error', err));

// await client.connect();

// try {
//     // Using hashes to store and retrieve fields and values
//     await client.hSet('user', 'username', 'alice');
//     await client.hSet('user', 'email', 'alice@example.com');

//     // TODO: Modify the user hash to include the country field with the value 'USA'

//     const user = await client.hGetAll('user');
//     console.log('User details:', user);

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
    await client.hSet('user', 'username', 'alice');
    await client.hSet('user', 'email', 'alice@example.com');

    // TODO: Modify the user hash to include the country field with the value 'USA'
    await client.hSet('user', 'country', 'USA');

    const user = await client.hGetAll('user');
    console.log('User details:', user);

} catch (err) {
    console.error('Error:', err);
} finally {
    // Disconnect from Redis
    await client.disconnect();
}