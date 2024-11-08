import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.error('Redis Client Error', err);
});

await client.connect();

await client.geoAdd('locations', { longitude: 13.361389, latitude: 38.115556, member: 'Palermo' });
await client.geoAdd('locations', { longitude: 15.087269, latitude: 37.502669, member: 'Catania' });

const distance = await client.geoDist('locations', 'Palermo', 'Catania', 'km');
console.log(`Distance between Palermo and Catania: ${distance} km`);

await client.disconnect();