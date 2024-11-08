// import { createClient } from 'redis';

// // TODO: Connect to Redis

// // TODO: Add the city New York with geo coordinates (-74.0060, 40.7128)

// // TODO: Add the city Los Angeles with geo coordinates (-118.2437, 34.0522)

// // TODO: Calculate the distance between New York and Los Angeles in miles and print it

// // TODO: Remember to disconnect the client at the end

import { createClient } from 'redis';

// TODO: Connect to Redis
const client = createClient({
  url: 'redis://localhost:6379'
})

client.on('error', (err) => {
  console.log('Redis Client Error', err);
})

await client.connect();
// TODO: Add the city New York with geo coordinates (-74.0060, 40.7128)
await client.geoAdd('locations', { longitude: -74.0060, latitude: 40.7128, member: 'New York' });
// TODO: Add the city Los Angeles with geo coordinates (-118.2437, 34.0522)
await client.geoAdd('locations', { longitude: -118.2437, latitude: 34.0522, member: 'Los Angeles' });
// TODO: Calculate the distance between New York and Los Angeles in miles and print it
const distance = await client.geoDist('locations', 'New York', 'Los Angeles', 'mi');
console.log(`Distance between New York and Los Angeles: ${distance} mi`);
// TODO: Remember to disconnect the client at the end
await client.disconnect();