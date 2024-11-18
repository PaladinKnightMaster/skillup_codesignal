// import { createClient } from 'redis';

// const client = createClient({
//     url: 'redis://localhost:6379'
// });

// try {
//     await client.connect();

//     // Set initial value fo testing
//     await client.set('available_copies:book1', 5);

//     const luaScript = `
//     local decrement_value = tonumber(ARGV[1])
//     local current_value = redis.call('get', KEYS[1])

//     if current_value then
//         current_value = tonumber(current_value)
//         local new_value = current_value - decrement_value

//         -- TODO: Ensure new_value does not go below zero before setting the new value

//         -- TODO: If the new value is less than zero, set it to zero

//         -- TODO: Set the new value in Redis and return it
//     else
//         redis.call('set', KEYS[1], 0)
//         return 0
//     end
//     `;

//     const newCopies = await client.eval(luaScript, {
//         keys: ['available_copies:book1'],
//         arguments: ['2']
//     });

//     console.log(`New available copies: ${newCopies}`);
//     await client.disconnect();
// } catch (error) {
//     console.error(`Redis error: ${error}`);
// }

import { createClient } from 'redis';

const client = createClient({
    url: 'redis://localhost:6379'
});

try {
    await client.connect();

    // Set initial value fo testing
    await client.set('available_copies:book1', 5);

    const luaScript = `
    local decrement_value = tonumber(ARGV[1])
    local current_value = redis.call('get', KEYS[1])

    if current_value then
        current_value = tonumber(current_value)
        local new_value = current_value - decrement_value

        -- TODO: Ensure new_value does not go below zero before setting the new value
        if new_value < 0 then
        -- TODO: If the new value is less than zero, set it to zero
            new_value = 0
        end
        -- TODO: Set the new value in Redis and return it
        redis.call('set', KEYS[1], new_value)
        return new_value
    else
        redis.call('set', KEYS[1], 0)
        return 0
    end
    `;

    const newCopies = await client.eval(luaScript, {
        keys: ['available_copies:book1'],
        arguments: ['2']
    });

    console.log(`New available copies: ${newCopies}`);
    await client.disconnect();
} catch (error) {
    console.error(`Redis error: ${error}`);
}