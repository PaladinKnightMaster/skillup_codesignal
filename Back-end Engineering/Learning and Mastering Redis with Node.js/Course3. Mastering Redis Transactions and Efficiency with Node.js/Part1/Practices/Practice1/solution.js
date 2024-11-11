import { createClient } from 'redis';

// Connect to Redis
const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

await client.connect();

// Initialize values
await client.set('user', '');
await client.set('courses_completed', 1);

// Use the pipeline
const pipeline = client.multi();

pipeline.incr('courses_completed');
pipeline.set('user', 'John');

try {
  const results = await pipeline.exec();
  console.log('Transaction results:', results);
} catch (e) {
  console.error('Transaction error:', e);
}

const courses_completed = await client.get('courses_completed');
const user = await client.get('user');

console.log('Courses completed:', courses_completed);
console.log('User:', user);

await client.disconnect();