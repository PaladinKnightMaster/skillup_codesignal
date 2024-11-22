// import { createClient } from 'redis';
// import { promisify } from 'util';

// const client = createClient();
// const sleep = promisify(setTimeout);

// const key = 'login:abc123';

// async function run() {
//     await client.connect();
//     await client.set(key, 'user_info', { EX: 3 });
//     let value = await client.get(key);
//     console.log(`User Info: ${value}`); // user_info

//     let ttl = await client.ttl(key);
//     console.log(`Time-to-live for login key: ${ttl} seconds`);

//     // TODO: Extend the expiration time of the key 'login:abc123' to 5 seconds using the client.expire method

//     ttl = await client.ttl(key);
//     console.log(`Extended time-to-live for login key: ${ttl} seconds`);

//     await sleep(5000);
//     value = await client.get(key);
//     console.log(`User Info after extended expiration: ${value}`); // null

//     await client.disconnect();
// }

// run();

import { createClient } from 'redis';
import { promisify } from 'util';

const client = createClient();
const sleep = promisify(setTimeout);

const key = 'login:abc123';

async function run() {
    await client.connect();
    await client.set(key, 'user_info', { EX: 3 });
    let value = await client.get(key);
    console.log(`User Info: ${value}`); // user_info

    let ttl = await client.ttl(key);
    console.log(`Time-to-live for login key: ${ttl} seconds`);

    // TODO: Extend the expiration time of the key 'login:abc123' to 5 seconds using the client.expire method
    await client.expire(key, 5);

    ttl = await client.ttl(key);
    console.log(`Extended time-to-live for login key: ${ttl} seconds`);

    await sleep(5000);
    value = await client.get(key);
    console.log(`User Info after extended expiration: ${value}`); // null

    await client.disconnect();
}

run();