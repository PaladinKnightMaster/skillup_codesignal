// import { createClient } from 'redis';
// import { promisify } from 'util';

// const client = createClient({ url: 'redis://localhost:6379' });

// await client.connect();

// const pubsub = client.duplicate();
// await pubsub.connect();

// const sleep = promisify(setTimeout);

// // Subscriber part

// // TODO: Define a messageHandler function that prints the received message in the format: "Received message: {message}"

// // TODO: Create a runPubSub function that subscribes to the 'alerts' channel and passes the messageHandler function as a callback

// runPubSub();

// // Give some time for the subscription to be set up
// await sleep(1000);

// // Publisher part
// const publishResult = await client.publish('alerts', 'System Alert!');
// console.log(`Message published, number of subscribers that received the message: ${publishResult}`);

// // Unsubscribe and disconnect
// await pubsub.unsubscribe('alerts');
// await pubsub.disconnect();
// await client.disconnect();

import { createClient } from 'redis';
import { promisify } from 'util';

const client = createClient({ url: 'redis://localhost:6379' });

await client.connect();

const pubsub = client.duplicate();
await pubsub.connect();

const sleep = promisify(setTimeout);

// Subscriber part

// TODO: Define a messageHandler function that prints the received message in the format: "Received message: {message}"

function messageHandler(message) {
    console.log(`Received message: ${message}`);
}

// TODO: Create a runPubSub function that subscribes to the 'alerts' channel and passes the messageHandler function as a callback

async function runPubSub() {
    await pubsub.subscribe('alerts', (message) => {
        messageHandler(message);
    });
}

runPubSub();

// Give some time for the subscription to be set up
await sleep(1000);

// Publisher part
const publishResult = await client.publish('alerts', 'System Alert!');
console.log(`Message published, number of subscribers that received the message: ${publishResult}`);

// Unsubscribe and disconnect
await pubsub.unsubscribe('alerts');
await pubsub.disconnect();
await client.disconnect();