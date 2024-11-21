// import { createClient } from 'redis';

// const client = createClient({
//     url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//     console.error('Error connecting to Redis', err);
// });

// await client.connect();

// // TODO: Add three different types of events to a stream named 'eventstream'
//     // Use the following events:
//     // 1. event = 'signup' user = 'John'
//     // 2. event = 'login' user = 'Jane'
//     // 3. event = 'logout' user = 'John'

// // TODO: Read the first two messages from the 'eventstream'

// // TODO: Print the messages

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient({
    url: 'redis://localhost:6379'
});

client.on('error', (err) => {
    console.error('Error connecting to Redis', err);
});

await client.connect();

// TODO: Add three different types of events to a stream named 'eventstream'
    // Use the following events:
    // 1. event = 'signup' user = 'John'
    // 2. event = 'login' user = 'Jane'
    // 3. event = 'logout' user = 'John'

await client.xAdd('eventstream', '*', { 'event': 'signup', 'user': 'John' });
await client.xAdd('eventstream', '*', { 'event': 'login', 'user': 'Jane' });
await client.xAdd('eventstream', '*', { 'event': 'logout', 'user': 'John' });

// TODO: Read the first two messages from the 'eventstream'
const messages = await client.xRange('eventstream', '-', '+', { COUNT: 2 });

// TODO: Print the messages
console.log(`Stream messages: ${JSON.stringify(messages)}`);

await client.disconnect();