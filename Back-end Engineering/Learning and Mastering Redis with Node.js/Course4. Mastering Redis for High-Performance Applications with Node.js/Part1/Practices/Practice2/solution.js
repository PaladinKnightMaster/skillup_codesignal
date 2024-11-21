// import { createClient } from 'redis';

// const client = createClient({
//     host: 'localhost',
//     port: 6379
// });

// client.on('error', (err) => {
//     console.error('Error connecting to Redis', err);
// });

// await client.connect();

// await client.xAdd('mystream', '*', { 'event': 'login', 'user': 'Alice' });
// await client.xAdd('mystream', '*', { 'event': 'purchase', 'user': 'Bob', 'amount': '100' });
// await client.xAdd('mystream', '*', { 'event': 'add_to_cart', 'user': 'Alice', 'product': 'laptop' });

// // TODO: Change the code below to read only the first two events instead of all
// const messages = await client.xRange('mystream', '-', '+');
// console.log(`Stream messages: ${JSON.stringify(messages)}`);

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient({
    host: 'localhost',
    port: 6379
});

client.on('error', (err) => {
    console.error('Error connecting to Redis', err);
});

await client.connect();

await client.xAdd('mystream', '*', { 'event': 'login', 'user': 'Alice' });
await client.xAdd('mystream', '*', { 'event': 'purchase', 'user': 'Bob', 'amount': '100' });
await client.xAdd('mystream', '*', { 'event': 'add_to_cart', 'user': 'Alice', 'product': 'laptop' });

// TODO: Change the code below to read only the first two events instead of all
const messages = await client.xRange('mystream', '-', '+', { COUNT: 2 });
console.log(`Stream messages: ${JSON.stringify(messages)}`);

await client.disconnect();