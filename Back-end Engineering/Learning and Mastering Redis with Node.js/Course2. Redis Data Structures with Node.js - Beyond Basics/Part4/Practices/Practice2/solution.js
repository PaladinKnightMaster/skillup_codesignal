// import { createClient } from 'redis';

// // Connect to Redis
// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//   console.log('Redis Client Error', err);
// });

// await client.connect();

// // Adding locations with geographic coordinates (longitude, latitude, name)
// await client.geoAdd('locations', { longitude: 13.361389, latitude: 38.115556, member: 'Palermo'});

// // TODO: Modify the code to add the location of Paris instead of Catania with the coordinates (2.352222, 48.856613)
// await client.geoAdd('locations', { longitude: 15.087269, latitude: 37.502669, member: 'Catania'});

// // TODO: Modify the code to calculate the distance between Palermo and Paris
// const distance = await client.geoDist('locations', 'Palermo', 'Catania', 'km');
// console.log('Distance:', distance);

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

// Adding locations with geographic coordinates (longitude, latitude, name)
await client.geoAdd('locations', { longitude: 13.361389, latitude: 38.115556, member: 'Palermo'});

// TODO: Modify the code to add the location of Paris instead of Catania with the coordinates (2.352222, 48.856613)
await client.geoAdd('locations', { longitude: 2.352222, latitude: 48.856613, member: 'Paris'});

// TODO: Modify the code to calculate the distance between Palermo and Paris
const distance = await client.geoDist('locations', 'Palermo', 'Paris', 'km');
console.log('Distance:', distance);

// Close connection
client.disconnect();