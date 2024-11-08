// import { createClient } from 'redis';

// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//   console.log('Redis Client Error', err);
// });

// await client.connect();

// await client.geoAdd('locations', { longitude: 13.361389, latitude: 38.115556, member: 'Palermo' });
// await client.geoAdd('locations', { longitude: 15.087269, latitude: 37.502669, member: 'Catania' });

// // TODO: Change the unit to calculate the distance in miles
// const distance = await client.geoDist('locations', 'Palermo', 'Catania', 'km');
// console.log('Distance between Palermo and Catania:', distance, 'km');

// client.disconnect();

import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.log('Redis Client Error', err);
});

await client.connect();

await client.geoAdd('locations', { longitude: 13.361389, latitude: 38.115556, member: 'Palermo' });
await client.geoAdd('locations', { longitude: 15.087269, latitude: 37.502669, member: 'Catania' });

// TODO: Change the unit to calculate the distance in miles
const distance = await client.geoDist('locations', 'Palermo', 'Catania', 'mi');
console.log('Distance between Palermo and Catania:', distance, 'miles');

client.disconnect();