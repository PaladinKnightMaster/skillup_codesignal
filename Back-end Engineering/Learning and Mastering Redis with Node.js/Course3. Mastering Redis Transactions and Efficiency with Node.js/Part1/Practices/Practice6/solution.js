// import { createClient } from 'redis';

// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//   console.error('Error connecting to Redis', err);
// });

// await client.connect();

// const iterations = 100;

// for (let i = 0; i < iterations; i++) {
//   await client.set(`key${i}`, `value${i}`);
// }

// await client.disconnect();

import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

await client.connect();

const iterations = 100;
const pipeline = client.multi(); // Start the pipeline

for (let i = 0; i < iterations; i++) {
  pipeline.set(`key${i}`, `value${i}`);
}

try {
    const results = await pipeline.exec(); // Execute the pipeline
    console.log(`Pipeline execution results:`, results);
} catch (e) {
    console.error(`Pipeline execution error:`, e);
}

await client.disconnect();