// import { createClient } from 'redis';

// const client = createClient();

// client.on('error', (err) => console.log('Redis Client Error', err));

// await client.connect();

// const maxBalance = 200;

// async function updateBalance(userId, increment) {
//     const key = `balance:${userId}`;

//     while (true) {
//         const pipeline = client.multi();
//         try {
//             await client.watch(key);
//             let balance = parseInt(await client.get(key)) || 0;
//             // TODO: Add a condition to check if the balance exceeds a maximum limit
//                 // If it does, unwatch the key and break the loop

//             pipeline.set(key, balance + increment);
//             await pipeline.exec();
//             break;
//         } catch (err) {
//             continue;
//         }
//     }
// }

// await client.set('balance:1', 180);
// await updateBalance(1, 30);

// const value = await client.get('balance:1');
// console.log(`Updated balance for user 1: ${value}`);

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

const maxBalance = 200;

async function updateBalance(userId, increment) {
    const key = `balance:${userId}`;

    while (true) {
        const pipeline = client.multi();
        try {
            await client.watch(key);
            let balance = parseInt(await client.get(key)) || 0;
            // TODO: Add a condition to check if the balance exceeds a maximum limit
                // If it does, unwatch the key and break the loop
            if (balance + increment > maxBalance) {
                await client.unwatch();
                console.log(`Cannot set value ${balance} + ${increment} as it exceeds the maximum limit of ${maxBalance}`);
                break;
            }
            pipeline.set(key, balance + increment);
            await pipeline.exec();
            break;
        } catch (err) {
            continue;
        }
    }
}

await client.set('balance:1', 180);
await updateBalance(1, 30);

const value = await client.get('balance:1');
console.log(`Updated balance for user 1: ${value}`);

await client.disconnect();