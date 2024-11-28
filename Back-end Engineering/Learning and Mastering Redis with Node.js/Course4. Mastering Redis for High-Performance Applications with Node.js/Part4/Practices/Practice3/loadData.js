import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

async function setKeyValue(key, value) {
  await client.set(key, value);
  console.log(`Set ${key} to ${value}`);
}

async function createSnapshot() {
  await client.save();
}

async function main() {
  await client.connect();

  await setKeyValue('name', 'John');
  await setKeyValue('age', '30');
  await setKeyValue('country', 'USA');
  await setKeyValue('city', 'New York');

  console.log('Creating snapshot...');
  await createSnapshot();

  await client.disconnect();
}

main();