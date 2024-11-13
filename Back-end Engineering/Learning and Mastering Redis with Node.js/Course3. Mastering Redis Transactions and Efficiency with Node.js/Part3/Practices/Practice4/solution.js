// import { createClient } from 'redis';

// const client = createClient();

// client.on('error', (err) => console.log('Redis Client Error', err));

// await client.connect();

// async function updateStock(itemId, changeInStock) {
//     const key = `stock:${itemId}`;

//     while (true) {
//         const pipeline = client.multi();
//         try {
//             // TODO: Monitor stock levels for the given item with watch command

//             let stock = parseInt(await client.get(key)) || 0;

//             // TODO: If the stock update is invalid (i.e., stock + changeInStock < 0), cancel the transaction and unwatch the key
//             // Remember to break the loop if the stock update is invalid

//             pipeline.set(key, stock + changeInStock);
//             await pipeline.exec();
//             break;
//         } catch (err) {
//             continue;
//         }
//     }
// }

// // Example usage
// await client.set('stock:123', 20);
// await updateStock(123, -5);
// console.log(`Updated stock for item 123: ${await client.get('stock:123')}`);
// await updateStock(123, -30);  // This will not succeed due to the negative stock check
// await updateStock(123, 10);   // This will succeed
// console.log(`Final stock for item 123: ${await client.get('stock:123')}`);

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

async function updateStock(itemId, changeInStock) {
    const key = `stock:${itemId}`;

    while (true) {
        const pipeline = client.multi();
        try {
            // TODO: Monitor stock levels for the given item with watch command
            await client.watch(key);

            let stock = parseInt(await client.get(key)) || 0;

            // TODO: If the stock update is invalid (i.e., stock + changeInStock < 0), cancel the transaction and unwatch the key
            // Remember to break the loop if the stock update is invalid
            if (stock + changeInStock < 0) {
                await client.unwatch();
                break;
            }

            pipeline.set(key, stock + changeInStock);
            await pipeline.exec();
            break;
        } catch (err) {
            continue;
        }
    }
}

// Example usage
await client.set('stock:123', 20);
await updateStock(123, -5);
console.log(`Updated stock for item 123: ${await client.get('stock:123')}`);
await updateStock(123, -30);  // This will not succeed due to the negative stock check
await updateStock(123, 10);   // This will succeed
console.log(`Final stock for item 123: ${await client.get('stock:123')}`);

await client.disconnect();