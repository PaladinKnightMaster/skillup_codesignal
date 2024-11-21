// import { createClient } from 'redis';

// const client = createClient({
//     url: 'redis://localhost:6379'
// });

// await client.connect();

// const luaScript = `
// -- TODO: Get the scores of player1 and player2 from Redis

// if score1 and score2 then
//     score1 = tonumber(score1)
//     score2 = tonumber(score2)

//     -- TODO: Increment player1_score by ARGV[1] and player2_score by ARGV[2]

//     return {score1 + ARGV[1], score2 + ARGV[2]}
// else
//     -- TODO: Initialize player1 and player2 scores with ARGV[1] and ARGV[2] respectively

//     return {ARGV[1], ARGV[2]}
// end
// `;

// // Load the script into Redis and get the SHA1 hash
// const scriptSha = await client.scriptLoad(luaScript);

// // Use evalSha to run the loaded script
// const newScores = await client.evalSha(scriptSha, {
//     keys: ['player1_score', 'player2_score'],
//     arguments: ['5', '3']
// });

// console.log(`New scores: ${newScores[0]}, ${newScores[1]}`);

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient({
    url: 'redis://localhost:6379'
});

await client.connect();

const luaScript = `
-- Get the scores of player1 and player2 from Redis
local score1 = redis.call('get', KEYS[1])
local score2 = redis.call('get', KEYS[2])

if score1 and score2 then
    -- Convert scores to numbers
    score1 = tonumber(score1)
    score2 = tonumber(score2)

    -- Increment player1_score by ARGV[1] and player2_score by ARGV[2]
    score1 = score1 + tonumber(ARGV[1])
    score2 = score2 + tonumber(ARGV[2])

    -- Persist the updated scores
    redis.call('set', KEYS[1], score1)
    redis.call('set', KEYS[2], score2)

    -- Return the new scores
    return {score1, score2}
else
    -- Initialize player1 and player2 scores with ARGV[1] and ARGV[2] respectively
    local initScore1 = tonumber(ARGV[1])
    local initScore2 = tonumber(ARGV[2])

    redis.call('set', KEYS[1], initScore1)
    redis.call('set', KEYS[2], initScore2)

    -- Return the initialized scores
    return {initScore1, initScore2}
end
`;

try {
    // Load the script into Redis and get the SHA1 hash
    const scriptSha = await client.scriptLoad(luaScript);

    // Use evalSha to run the loaded script
    const newScores = await client.evalSha(scriptSha, {
        keys: ['player1_score', 'player2_score'],
        arguments: ['5', '3']
    });

    console.log(`New scores: ${newScores[0]}, ${newScores[1]}`);
} catch (err) {
    console.error(`Redis error: ${err}`);
} finally {
    await client.disconnect();
}
