// import { createClient } from 'redis';

// const client = createClient();

// client.on('error', (err) => console.log('Redis Client Error', err));

// await client.connect();

// async function updatePoints(playerId, points) {
//     const key = `points:${playerId}`;
//     while (true) {
//         const pipeline = client.multi();
//         try {
//             // TODO: Watch the points of the specified player with key 'points:{playerId}'

//             // TODO: Get the current points of the player or take 0 if it doesn't exist

//             // TODO: Ensure the current points + points do not go negative, if they do, unwatch and break

//             // TODO: Set the new points (current points + points) for the player using the key 'points:{playerId}'

//             // TODO: Execute the transaction and break
//             break;
//         } catch (err) {
//             continue;
//         }
//     }
// }

// await client.set('points:1', 50);
// await updatePoints(1, 30);
// await updatePoints(1, -100); // This will not succeed due to the negative points check
// await updatePoints(1, -20);  // This will succeed
// console.log(`Final points for player 1: ${await client.get('points:1')}`);

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

async function updatePoints(playerId, points) {
    const key = `points:${playerId}`;
    while (true) {
        const pipeline = client.multi();
        try {
            // TODO: Watch the points of the specified player with key 'points:{playerId}'
            await client.watch(key);
            // TODO: Get the current points of the player or take 0 if it doesn't exist
            let currentPoints = parseInt(await client.get(key)) || 0;
            // TODO: Ensure the current points + points do not go negative, if they do, unwatch and break
            if (currentPoints + points < 0) {
                await client.unwatch();
                break;
            }
            // TODO: Set the new points (current points + points) for the player using the key 'points:{playerId}'
            pipeline.set(key, currentPoints + points);
            // TODO: Execute the transaction and break
            await pipeline.exec();
            break;
        } catch (err) {
            continue;
        }
    }
}

await client.set('points:1', 50);
await updatePoints(1, 30);
await updatePoints(1, -100); // This will not succeed due to the negative points check
await updatePoints(1, -20);  // This will succeed
console.log(`Final points for player 1: ${await client.get('points:1')}`);

await client.disconnect();