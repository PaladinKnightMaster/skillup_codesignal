// TODO: Import the createClient function from the 'redis' module

// TODO: Create a Redis client and connect to the Redis server at 'redis://localhost:6379'

// TODO: Handle connection errors by logging them

// TODO: Establish the connection to the Redis server

// TODO: Set numeric values for 'count' and 'completion_rate' in the Redis server with values 5 and 95.5, respectively

// TODO: Retrieve the values of 'count' and 'completion_rate' from the Redis server

// TODO: Print the retrieved values for 'count' and 'completion_rate'

// TODO: Disconnect the client from the Redis server



// TODO: Import the createClient function from the 'redis' module
import { createClient } from 'redis';
// TODO: Create a Redis client and connect to the Redis server at 'redis://localhost:6379'
const client = createClient({ url: 'redis://localhost:6379' });
// TODO: Handle connection errors by logging them
client.on('error', (err) => console.log('Redis Client Error', err));
// TODO: Establish the connection to the Redis server
await client.connect();
// TODO: Set numeric values for 'count' and 'completion_rate' in the Redis server with values 5 and 95.5, respectively
client.set('count', 5);
client.set('completion_rate', 95.5);
// TODO: Retrieve the values of 'count' and 'completion_rate' from the Redis server
const count = await client.get('count');
const completion_rate = await client.get('completion_rate');
// TODO: Print the retrieved values for 'count' and 'completion_rate'
console.log(`Course count: ${count}, Completion rate: ${completion_rate}`);
// TODO: Disconnect the client from the Redis server
await client.disconnect();