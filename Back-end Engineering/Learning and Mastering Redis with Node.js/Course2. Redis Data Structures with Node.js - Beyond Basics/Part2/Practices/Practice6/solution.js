// import { createClient } from 'redis';

// // Connect to Redis
// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//   console.log('Redis Client Error', err);
// });

// await client.connect();

// // TODO: Add product prices to the catalog 'product_catalog' with the following prices:
// // Laptop: 1200, Smartphone: 800, Tablet: 400, Monitor: 600

// // TODO: Retrieve the most expensive product based on the prices

// // TODO: Print the most expensive product and its price

// await client.disconnect();

import { createClient } from 'redis';

// Connect to Redis
const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.log('Redis Client Error', err);
});

await client.connect();

// TODO: Add product prices to the catalog 'product_catalog' with the following prices:
// Laptop: 1200, Smartphone: 800, Tablet: 400, Monitor: 600
await client.zAdd('product_catalog', { score: 1200, value: 'Laptop' });
await client.zAdd('product_catalog', { score: 800, value: 'Smartphone' });
await client.zAdd('product_catalog', { score: 400, value: 'Tablet' });
await client.zAdd('product_catalog', { score: 600, value: 'Monitor' });

// TODO: Retrieve the most expensive product based on the prices
const mostExpensiveProduct = await client.zRange('product_catalog', -1, -1);

// TODO: Print the most expensive product and its price
console.log(`Most expensive product: ${mostExpensiveProduct}`);

await client.disconnect();