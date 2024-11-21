// import { createClient } from 'redis';

// const client = createClient({
//     url: 'redis://localhost:6379'
// });

// await client.connect();

// // TODO: Write a Lua script to update the player XP
// const luaScript = `
// -- TODO: Get the current XP for the player using redis.call method

// -- TODO: If XP exists, increment it by the given amount using the first argument

// -- TODO: If XP does not exist, set it to the given amount using the first argument

// -- TODO: Return the new XP value
// `;

// try {
//     const newXP = await client.eval(luaScript, {
//         keys: ['player_xp'],
//         arguments: ['20']
//     });
//     console.log(`New player XP: ${newXP}`);
// } catch (err) {
//     console.error(`Redis error: ${err}`);
// } finally {
//     client.disconnect();
// }

import { createClient } from 'redis';

const client = createClient({
    url: 'redis://localhost:6379'
});

await client.connect();

// TODO: Write a Lua script to update the player XP
const luaScript = `
-- TODO: Get the current XP for the player using redis.call method
local currentXP = redis.call('get', KEYS[1])
-- TODO: If XP exists, increment it by the given amount using the first argument
if currentXP then
    currentXP = tonumber(currentXP) + tonumber(ARGV[1])
-- TODO: If XP does not exist, set it to the given amount using the first argument
else
    currentXP = ARGV[1]
end
-- TODO: Return the new XP value
redis.call('set', KEYS[1], currentXP)
return currentXP
`;

try {
    const newXP = await client.eval(luaScript, {
        keys: ['player_xp'],
        arguments: ['20']
    });
    console.log(`New player XP: ${newXP}`);
} catch (err) {
    console.error(`Redis error: ${err}`);
} finally {
    client.disconnect();
}