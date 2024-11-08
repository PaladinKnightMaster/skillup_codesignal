// import { createClient } from 'redis';

// // Connect to Redis
// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//   console.log('Redis Client Error', err);
// });

// await client.connect();

// // TODO: Add location for London (longitude: -0.127758, latitude: 51.507351) to the 'locations' key

// // TODO: Add location for Paris (longitude: 2.352222, latitude: 48.856614) to the 'locations' key

// // TODO: Calculate the distance between London and Paris in kilometers

// console.log(`Distance between London and Paris: ${distance} km`);

// // Close connection
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

// TODO: Add location for London (longitude: -0.127758, latitude: 51.507351) to the 'locations' key
await client.geoAdd('locations', { longitude: -0.127758, latitude: 51.507351, member: 'London' });
// TODO: Add location for Paris (longitude: 2.352222, latitude: 48.856614) to the 'locations' key
await client.geoAdd('locations', { longitude: 2.352222, latitude: 48.856614, member: 'Paris' });
// TODO: Calculate the distance between London and Paris in kilometers
const distance = await client.geoDist('locations', 'London', 'Paris', 'km');
console.log(`Distance between London and Paris: ${distance} km`);

// Close connection
client.disconnect();