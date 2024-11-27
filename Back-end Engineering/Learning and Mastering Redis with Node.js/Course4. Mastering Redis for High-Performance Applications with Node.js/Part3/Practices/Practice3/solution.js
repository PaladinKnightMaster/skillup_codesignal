// import { createClient } from 'redis';
// import { setTimeout } from 'timers/promises';

// async function messageHandler(message) {
//     console.log(`Received message: ${message}`);
// }

// const client = createClient({ url: 'redis://localhost:6379' });

// await client.connect();

// const pubsub = client.duplicate();
// await pubsub.connect();

// await pubsub.subscribe('notes', (message) => {
//     messageHandler(message);
// });

// await setTimeout(1000);

// const publishResult = await client.publish('notifications', 'Hello, Redis!');
// console.log(`Message published, number of subscribers that received the message: ${publishResult}`);

// await setTimeout(2000);

// await pubsub.unsubscribe('notifications');
// await pubsub.disconnect();
// await client.disconnect();

import { createClient } from 'redis';
import { setTimeout } from 'timers/promises';

async function messageHandler(message) {
    console.log(`Received message: ${message}`);
}

const client = createClient({ url: 'redis://localhost:6379' });

await client.connect();

const pubsub = client.duplicate();
await pubsub.connect();

await pubsub.subscribe('notifications', (message) => {
    messageHandler(message);
});

await setTimeout(1000);

const publishResult = await client.publish('notifications', 'Hello, Redis!');
console.log(`Message published, number of subscribers that received the message: ${publishResult}`);

await setTimeout(2000);

await pubsub.unsubscribe('notifications');
await pubsub.disconnect();
await client.disconnect();