// import { createClient } from 'redis';

// const client = createClient();

// const key = 'event:payment';
// await client.connect();

// // TODO: Set the key 'event:payment' with the value 'payment_data' and an expiration time of 3 seconds

// // TODO: Get the time-to-live for the key 'event:payment'
// const ttl = null;
// console.log(`Time-to-live for event key: ${ttl} seconds`);

// setTimeout(async () => {
//     const value = await client.get(key);
//     console.log(`Value after expiration: ${value}`);  // null
//     client.disconnect();
// }, 4000);

import { createClient } from 'redis';

const client = createClient();

const key = 'event:payment';
await client.connect();

// TODO: Set the key 'event:payment' with the value 'payment_data' and an expiration time of 3 seconds
await client.set(key, 'payment_data', { EX: 3 });

// TODO: Get the time-to-live for the key 'event:payment'
const ttl = await client.ttl(key);
console.log(`Time-to-live for event key: ${ttl} seconds`);

setTimeout(async () => {
    const value = await client.get(key);
    console.log(`Value after expiration: ${value}`);  // null
    client.disconnect();
}, 4000);