// import { createClient } from 'redis';

// // Connect to Redis
// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//   console.error('Error connecting to Redis', err);
// });

// await client.connect();

// // TODO: Set initial values for 'item' and 'quantity' to empty string and 10, respectively.

// // TODO: Create a pipeline using client.multi().

// // TODO: Decrement 'quantity' by 1 and set 'item' to 'Laptop' in the pipeline.

// // TODO: Execute the pipeline and print the transaction results.

// // TODO: Retrieve and print updated values of 'quantity' and 'item'.

// // TODO: Disconnect from Redis using await client.disconnect().

import { createClient } from 'redis';

// Connect to Redis
const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

await client.connect();

// TODO: Set initial values for 'item' and 'quantity' to empty string and 10, respectively.
await client.set('item', '');
await client.set('quantity', 10);
// TODO: Create a pipeline using client.multi().
const pipeline = client.multi();
// TODO: Decrement 'quantity' by 1 and set 'item' to 'Laptop' in the pipeline.
pipeline.decr('quantity');
pipeline.set('item', 'Laptop');
// TODO: Execute the pipeline and print the transaction results.
try {
  const results = await pipeline.exec();
  console.log('Transaction results:', results);
} catch (e) {
  console.error('Transaction failed', e);
}
// TODO: Retrieve and print updated values of 'quantity' and 'item'.
const quantity = await client.get('quantity');
const item = await client.get('item');
console.log('Quantity:', quantity);
console.log('Item:', item);
// TODO: Disconnect from Redis using await client.disconnect().
await client.disconnect();