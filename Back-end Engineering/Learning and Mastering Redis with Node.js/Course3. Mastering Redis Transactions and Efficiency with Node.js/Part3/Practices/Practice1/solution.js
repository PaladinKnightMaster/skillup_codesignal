import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

const updateScore = async (userId, points) => {
    const key = `score:${userId}`;
    while (true) {
        try {
            await client.watch(key);
            const score = parseInt(await client.get(key)) || 0;
            if (score + points < 0) {
                await client.unwatch();
                console.log(`Cannot set value ${score} + ${points} as it is negative`);
                break;
            }
            const pipeline = client.multi();
            pipeline.set(key, score + points);
            await pipeline.exec();
            console.log(`Set value in transaction: ${score + points}`);
            break;
        } catch (err) {
            console.log(`Error: ${err} Retrying...`);
            continue;
        }
    }
}

const updateScoreContinuously = async (userId, points, iterations) => {
    const key = `score:${userId}`;
    for (let i = 0; i < iterations; i++) {
        const score = parseInt(await client.get(key)) || 0;
        client.set(key, score + points);
        console.log(`Incremented ${score} + ${points}`);
    }
}

await client.set('score:1', 150);

// Start continuous update in a separate interval
updateScoreContinuously(1, 50, 50);

await updateScore(1, -500);

const value = await client.get('score:1');
console.log(`Updated score for user 1: ${value}`);


// Wait for the updateScoreContinuously to finish
await new Promise(r => setTimeout(r, 1000));

await client.disconnect();