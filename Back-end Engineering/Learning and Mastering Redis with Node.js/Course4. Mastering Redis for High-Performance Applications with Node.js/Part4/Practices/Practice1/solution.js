import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

// Connect to Redis
await client.connect();

// Save and load snapshot in Redis
await client.save();
await client.bgSave();

console.log("Manual snapshot triggered.");
await client.disconnect();