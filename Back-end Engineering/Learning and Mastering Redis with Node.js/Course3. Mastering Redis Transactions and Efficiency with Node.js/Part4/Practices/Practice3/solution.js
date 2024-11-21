// import { createClient } from 'redis';

// const client = createClient({
//     url: 'redis://localhost:6379'
// });
// await client.connect();

// const luaScript = `
// local current = redis.call('get', KEYS[1])
// if current then
//     current = tonumber(current)
//     -- TODO: Increment the view count by the provided value and set it using redis.call method

//     return current + ARGV[1]
// else
//     -- TODO: Set the view count to ARGV[1] using redis.call method if 'current' is nil

//     return ARGV[1]
// end
// `;

// try {
//     const scriptSha = await client.scriptLoad(luaScript);
//     const newViews = await client.evalSha(scriptSha, {
//         keys: ['views:post1'],
//         arguments: ['10']
//     });
//     console.log(`New view count: ${newViews}`);
// } catch (e) {
//     console.error(`Redis error: ${e}`);
// } finally {
//     await client.disconnect();
// }

import { createClient } from 'redis';

const client = createClient({
    url: 'redis://localhost:6379'
});
await client.connect();

const luaScript = `
local current = redis.call('get', KEYS[1])
if current then
    current = tonumber(current)
    -- TODO: Increment the view count by the provided value and set it using redis.call method
    redis.call('set', KEYS[1], current + ARGV[1])

    return current + ARGV[1]
else
    -- TODO: Set the view count to ARGV[1] using redis.call method if 'current' is nil
    redis.call('set', KEYS[1], ARGV[1])
    return ARGV[1]
end
`;

try {
    const scriptSha = await client.scriptLoad(luaScript);
    const newViews = await client.evalSha(scriptSha, {
        keys: ['views:post1'],
        arguments: ['10']
    });
    console.log(`New view count: ${newViews}`);
} catch (e) {
    console.error(`Redis error: ${e}`);
} finally {
    await client.disconnect();
}