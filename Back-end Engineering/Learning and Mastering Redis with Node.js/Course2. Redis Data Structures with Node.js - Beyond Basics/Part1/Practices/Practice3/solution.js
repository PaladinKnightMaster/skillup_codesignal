// import { createClient } from 'redis';

// // Connect to Redis
// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//   console.log('Redis Client Error', err);
// });

// await client.connect();

// // TODO: Add UNESCO World Heritage sites to the set 'heritage_sites'
// // Use values 'Great Wall of China', 'Pyramids of Giza', 'Eiffel Tower', 'Great Wall of China'

// // TODO: Retrieve and print all the unique sites from the set 'heritage_sites'

// client.disconnect();

import { createClient } from 'redis';

// Connect to Redis
const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.log('Redis Client Error', err);
});

await client.connect();

// TODO: Add UNESCO World Heritage sites to the set 'heritage_sites'
// Use values 'Great Wall of China', 'Pyramids of Giza', 'Eiffel Tower', 'Great Wall of China'
await client.sAdd('heritage_sites', ['Great Wall of China', 'Pyramids of Giza', 'Eiffel Tower', 'Great Wall of China']);
// TODO: Retrieve and print all the unique sites from the set 'heritage_sites'
const sites = await client.sMembers('heritage_sites');
console.log(`Sites in the set: ${sites}`);

client.disconnect();