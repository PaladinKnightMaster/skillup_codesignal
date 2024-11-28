// import { createClient } from 'redis';

// const client = createClient({
//     url: 'redis://localhost:6379'
// });

// // Connect to Redis
// await client.connect();

// // TODO: Save snapshot using asynchronous command
// try {
//     client.save();
//     console.log("Manual snapshot triggered.");
// } catch (err) {
//     console.error("Error during manual snapshot:", err);
// }

// setTimeout(async () => {
//     await client.disconnect();
// }, 1000);

import { createClient } from 'redis';

const client = createClient({
    url: 'redis://localhost:6379'
});

// Connect to Redis
await client.connect();

// TODO: Save snapshot using asynchronous command
try {
    await client.bgSave();
    console.log("Manual snapshot triggered.");
} catch (err) {
    console.error("Error during manual snapshot:", err);
}

setTimeout(async () => {
    await client.disconnect();
}, 1000);