// import { createClient } from 'redis';

// const client = createClient();

// const main = async () => {
//     await client.connect();

//     // TODO: Set a key ('session:auth_token') with the value 'user123_token' and an expiration time of 7 seconds.

//     // TODO: Retrieve and print the value of the key before it expires.

//     // Wait for the key to expire
//     setTimeout(async () => {
//         // TODO: Try to retrieve and print the value of the key after 8 seconds. It should return null.
//         await client.disconnect();
//     }, 8000);
// };

// main();

import { createClient } from 'redis';

const client = createClient();

const main = async () => {
    await client.connect();

    // TODO: Set a key ('session:auth_token') with the value 'user123_token' and an expiration time of 7 seconds.
    await client.set('session:auth_token', 'user123_token', { EX: 7 });

    // TODO: Retrieve and print the value of the key before it expires.
    const value = await client.get('session:auth_token');
    console.log(`Value: ${value}`);

    // Wait for the key to expire
    setTimeout(async () => {
        // TODO: Try to retrieve and print the value of the key after 8 seconds. It should return null.
        const value = await client.get('session:auth_token');
        console.log(`Value after expiration: ${value}`);
        await client.disconnect();
    }, 8000);
};

main();