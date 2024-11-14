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

//             // TODO: Add a condition to check if the balance exceeds a maximum limit or goes below 0
//                 // If it does, unwatch the key and break the loop without updating the balance

//             pipeline.set(key, balance + increment);
//             await pipeline.exec();
//             break;
//         } catch (err) {
//             continue;
//         }
//     }
// }

// await client.set('balance:1', 100);
// await updateBalance(1, 50);  // This should succeed and update the balance to 150
// await updateBalance(1, -200);  // This should not succeed due to the negative balance check
// await updateBalance(1, 150);  // This should not succeed due to the max balance limit check
// await updateBalance(1, -50);  // This should succeed and update the balance to 100
// console.log(`Final balance for user 1: ${await client.get('balance:1')}`);

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

            // TODO: Add a condition to check if the balance exceeds a maximum limit or goes below 0
                // If it does, unwatch the key and break the loop without updating the balance
            if (balance + increment < 0 || balance + increment > maxBalance) {
                await client.unwatch();
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

await client.set('balance:1', 100);
await updateBalance(1, 50);  // This should succeed and update the balance to 150
await updateBalance(1, -200);  // This should not succeed due to the negative balance check
await updateBalance(1, 150);  // This should not succeed due to the max balance limit check
await updateBalance(1, -50);  // This should succeed and update the balance to 100
console.log(`Final balance for user 1: ${await client.get('balance:1')}`);

await client.disconnect();