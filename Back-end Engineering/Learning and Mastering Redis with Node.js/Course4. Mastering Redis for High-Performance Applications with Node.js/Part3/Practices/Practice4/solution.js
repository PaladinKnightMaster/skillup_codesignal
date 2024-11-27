// import { createClient } from 'redis';
// import { setTimeout } from 'timers/promises';

// async function messageHandler(message) {
//     console.log(`Weather update: ${message}`);
// }

// // Connect to Redis
// const client = createClient({ url: 'redis://localhost:6379' });
// await client.connect();

// // Subscriber part
// const pubsub = client.duplicate();
// await pubsub.connect();
// await pubsub.subscribe('weather_updates', (message) => {
//     messageHandler(message);
// });

// // Give some time for the subscription to be set up
// await setTimeout(1000);

// // Publisher part
// // TODO: Publish 'Sunny day ahead!' to the 'weather_updates' channel

// // TODO: Print the number of subscribers that received the message

// // Let the subscriber run for some time to ensure it receives the message

// // TODO: Unsubscribe from the 'weather_updates' channel

// // TODO: Disconnect the pubsub client

// await client.disconnect();

import { createClient } from 'redis';
import { setTimeout } from 'timers/promises';

async function messageHandler(message) {
    console.log(`Weather update: ${message}`);
}

// Connect to Redis
const client = createClient({ url: 'redis://localhost:6379' });
await client.connect();

// Subscriber part
const pubsub = client.duplicate();
await pubsub.connect();
await pubsub.subscribe('weather_updates', (message) => {
    messageHandler(message);
});

// Give some time for the subscription to be set up
await setTimeout(1000);

// Publisher part
// TODO: Publish 'Sunny day ahead!' to the 'weather_updates' channel
const publishResult = await client.publish('weather_updates', 'Sunny day ahead!');

// TODO: Print the number of subscribers that received the message
console.log(`Number of subscribers that received the message: ${publishResult}`);

// Let the subscriber run for some time to ensure it receives the message
await setTimeout(2000);

// TODO: Unsubscribe from the 'weather_updates' channel
await pubsub.unsubscribe('weather_updates');

// TODO: Disconnect the pubsub client
await pubsub.disconnect();

await client.disconnect();