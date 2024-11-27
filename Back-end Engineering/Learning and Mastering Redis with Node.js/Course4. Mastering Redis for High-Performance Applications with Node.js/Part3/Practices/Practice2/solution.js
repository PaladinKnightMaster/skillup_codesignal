// import { createClient } from 'redis';

// const client = createClient({ url: 'redis://localhost:6379' });
// await client.connect();

// const pubsub = client.duplicate();
// await pubsub.connect();

// function messageHandler(message) {
//     console.log(`Received message: ${message}`);
// }

// async function runPubSub() {
//     // TODO: Modify the line below to subscribe to the 'news' channel instead
//     await pubsub.subscribe('notifications', (message) => {
//         messageHandler(message);
//     });
// }

// runPubSub();

// await new Promise(resolve => setTimeout(resolve, 1000));

// // TODO: Modify the line below to publish a message to the 'news' channel instead with the message 'Breaking News!'
// const publishResult = await client.publish('notifications', 'Hello, Redis!');
// console.log(`Message published, number of subscribers that received the message: ${publishResult}`);

// await new Promise(resolve => setTimeout(resolve, 2000));

// // TODO: Modify the line below to unsubscribe from the 'news' channel instead
// await pubsub.unsubscribe('notifications');
// await pubsub.disconnect();
// await client.disconnect();

import { createClient } from 'redis';

const client = createClient({ url: 'redis://localhost:6379' });
await client.connect();

const pubsub = client.duplicate();
await pubsub.connect();

function messageHandler(message) {
    console.log(`Received message: ${message}`);
}

async function runPubSub() {
    // TODO: Modify the line below to subscribe to the 'news' channel instead
    await pubsub.subscribe('news', (message) => {
        messageHandler(message);
    });
}

runPubSub();

await new Promise(resolve => setTimeout(resolve, 1000));

// TODO: Modify the line below to publish a message to the 'news' channel instead with the message 'Breaking News!'
const publishResult = await client.publish('news', 'Breaking News!');
console.log(`Message published, number of subscribers that received the message: ${publishResult}`);

await new Promise(resolve => setTimeout(resolve, 2000));

// TODO: Modify the line below to unsubscribe from the 'news' channel instead
await pubsub.unsubscribe('news');
await pubsub.disconnect();
await client.disconnect();