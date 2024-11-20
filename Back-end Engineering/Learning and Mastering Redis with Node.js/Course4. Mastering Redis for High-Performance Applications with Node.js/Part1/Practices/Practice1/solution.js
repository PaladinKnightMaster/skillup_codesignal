import { createClient } from 'redis';

const client = createClient({
    host: 'localhost',
    port: 6379
});

client.on('error', (err) => {
    console.error('Error connecting to Redis', err);
});

async function manageStreams() {
    await client.connect();

    await client.xAdd('mystream', '*', { 'event': 'login', 'user': 'Alice' });
    await client.xAdd('mystream', '*', { 'event': 'purchase', 'user': 'Bob', 'amount': '100' });
    await client.xAdd('mystream', '*', { 'event': 'add_to_cart', 'user': 'Alice', 'product': 'laptop' });

    const messages = await client.xRange('mystream', '-', '+');
    console.log(`Stream messages: ${JSON.stringify(messages)}`);

    await client.quit();
}

manageStreams().catch(console.error);