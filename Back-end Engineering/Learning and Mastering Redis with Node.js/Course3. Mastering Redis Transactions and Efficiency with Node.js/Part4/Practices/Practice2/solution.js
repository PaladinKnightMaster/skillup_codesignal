// import { createClient } from 'redis';

// const client = createClient({
//     url: 'redis://localhost:6379'
// });
// await client.connect();

// const luaScript = `
// local current = redis.call('get', KEYS[1])
// if current then
//     current = tonumber(current)
//     -- TODO: Change the script to decrement the value by ARGV[1]
//     redis.call('set', KEYS[1], current + ARGV[1])
//     return current + ARGV[1]
// else
//     redis.call('set', KEYS[1], ARGV[1])
//     return ARGV[1]
// end
// `;

// const scriptSha = await client.scriptLoad(luaScript);
// const newCount = await client.evalSha(scriptSha, {
//     keys: ['counter'],
//     arguments: ['5']
// });

// console.log(`New counter value: ${newCount}`);

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient({
    url: 'redis://localhost:6379'
});
await client.connect();

const luaScript = `
local current = redis.call('get', KEYS[1])
if current then
    current = tonumber(current)
    -- TODO: Change the script to decrement the value by ARGV[1]
    redis.call('set', KEYS[1], current - ARGV[1])
    return current - ARGV[1]
else
    redis.call('set', KEYS[1], -ARGV[1])
    return -ARGV[1]
end
`;

const scriptSha = await client.scriptLoad(luaScript);
const newCount = await client.evalSha(scriptSha, {
    keys: ['counter'],
    arguments: ['5']
});

console.log(`New counter value: ${newCount}`);

await client.disconnect();