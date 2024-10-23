// import { createClient } from 'redis';

// const client = createClient();

// client.on('error', err => console.error('Redis Client Error', err));

// await client.connect();

// // TODO: Store travel destination details using hashes
//     // Use the key 'destination:9008' and add fields 'city', 'country', and 'attraction'
//     // Use values 'Rome', 'Italy', and 'Colosseum'

// // TODO: Retrieve all fields and values of the hash

// // TODO: Print the retrieved details

import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.error('Redis Client Error', err));

await client.connect();

// TODO: Store travel destination details using hashes
    // Use the key 'destination:9008' and add fields 'city', 'country', and 'attraction'
    // Use values 'Rome', 'Italy', and 'Colosseum'
await client.hSet('destination:9008', 'city', 'Rome');
await client.hSet('destination:9008', 'country', 'Italy');
await client.hSet('destination:9008', 'attraction', 'Colosseum');

// TODO: Retrieve all fields and values of the hash
const destination = await client.hGetAll('destination:9008');

// TODO: Print the retrieved details
console.log('Destination details:', destination);

await client.disconnect();