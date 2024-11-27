import { createClient } from 'redis';

const client = createClient({ url: 'redis://localhost:6379' });
await client.connect();

// Subscriber setup
const pubsub = client.duplicate();
await pubsub.connect();

function messageHandler(message) {
    console.log(`Received message: ${message}`);
}

async function runPubSub() {
    await pubsub.subscribe('notifications', (message) => {
        messageHandler(message);
    });
}

runPubSub();

await new Promise(resolve => setTimeout(resolve, 1000));

// Publisher part
const publishResult = await client.publish('notifications', 'Hello, Redis!');
console.log(`Message published, number of subscribers that received the message: ${publishResult}`);

// Let the subscriber run for some time to ensure it receives the message
await new Promise(resolve => setTimeout(resolve, 2000));

// Clean up
await pubsub.unsubscribe('notifications');
await pubsub.disconnect();
await client.disconnect();