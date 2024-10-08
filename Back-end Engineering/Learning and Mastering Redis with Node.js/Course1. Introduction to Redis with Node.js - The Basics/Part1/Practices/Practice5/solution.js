// import { createClient } from 'redis';

// // TODO: Connect to the Redis server. Remember to use createClient() with the URL 'redis://localhost:6379' to create a connection.

// // TODO: Add an error event listener to the client to log any errors that occur with message 'Redis Client Error'

// // TODO: Use await client.connect() to establish the connection

// // TODO: Set a key-value pair for the key 'city' with the value 'Gotham'

// // TODO: Retrieve the value stored for the key 'city' and print it

// // TODO: Disconnect from the Redis server using await client.disconnect() to ensure cleanup

import { createClient } from 'redis';

// TODO: Connect to the Redis server. Remember to use createClient() with the URL 'redis://localhost:6379' to create a connection.
const client = createClient({ url: 'redis://localhost:6379' });
// TODO: Add an error event listener to the client to log any errors that occur with message 'Redis Client Error'
client.on('error', (err) => console.log('Redis Client Error', err));
// TODO: Use await client.connect() to establish the connection
await client.connect();
// TODO: Set a key-value pair for the key 'city' with the value 'Gotham'
await client.set('city', 'Gotham');
// TODO: Retrieve the value stored for the key 'city' and print it
const value = await client.get('city');
console.log(`Stored string in Redis: ${value}`);
// TODO: Disconnect from the Redis server using await client.disconnect() to ensure cleanup
await client.disconnect();