// import { createClient } from 'redis';

// const client = createClient();

// const key = 'user:session:99999';

// async function run() {
//     await client.connect();

//     // TODO: Modify the key 'user:session:99999' to have 4 seconds expiration time
//     await client.set(key, 'user_data', { EX: 2 });
//     let value = await client.get(key);
//     console.log(`Value: ${value}`);  // user_data

//     setTimeout(async () => {
//         value = await client.get(key);
//         console.log(`Value after expiration: ${value}`);  // null
//         client.disconnect();
//     }, 5000);
// }

// run();

import { createClient } from 'redis';

const client = createClient();

const key = 'user:session:99999';

async function run() {
    await client.connect();

    // TODO: Modify the key 'user:session:99999' to have 4 seconds expiration time
    await client.set(key, 'user_data', { EX: 4 });
    let value = await client.get(key)
    console.log(`Value: ${value}`);  // user_data

    setTimeout(async () => {
        value = await client.get(key);
        console.log(`Value after expiration: ${value}`);  // null
        client.disconnect();
    }, 5000);
}

run();