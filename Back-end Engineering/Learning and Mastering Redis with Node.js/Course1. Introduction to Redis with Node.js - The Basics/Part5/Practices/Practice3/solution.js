// import { createClient } from 'redis';

// // Connect to Redis
// const client = createClient();

// client.on('error', err => console.error('Redis Client Error', err));

// await client.connect();

// try {
//     await client.hSet('user:1000', 'username', 'alice');
//     await client.hSet('user:1000', 'email', 'alice@example.com');

//     // TODO: Retrieve only the username field of user:1000 using hGet
//     const user = await client.hGetAll('user:1000');

//     // TODO: Modify the print statement to display only the username field
//     console.log('User details:', user);

// } catch (err) {
//     console.error('Error:', err);
// } finally {
//     await client.disconnect();
// }

import { createClient } from 'redis';

// Connect to Redis
const client = createClient();

client.on('error', err => console.error('Redis Client Error', err));

await client.connect();

try {
    await client.hSet('user:1000', 'username', 'alice');
    await client.hSet('user:1000', 'email', 'alice@example.com');

    // TODO: Retrieve only the username field of user:1000 using hGet
    const user = await client.hGet('user:1000', 'username');

    // TODO: Modify the print statement to display only the username field
    console.log('User details:', user);

} catch (err) {
    console.error('Error:', err);
} finally {
    await client.disconnect();
}