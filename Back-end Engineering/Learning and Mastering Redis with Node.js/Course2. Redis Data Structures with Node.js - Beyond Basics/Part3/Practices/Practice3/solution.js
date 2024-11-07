// import { createClient } from 'redis';

// const client = createClient({
//   url: 'redis://localhost:6379'
// });

// client.on('error', (err) => {
//   console.log('Redis Client Error', err);
// });

// await client.connect();

// const users = {
//   'lily': {
//     'id': 0,
//     'active': true
//   },
//   'john': {
//     'id': 1,
//     'active': true
//   },
//   'jane': {
//     'id': 2,
//     'active': false
//   }
// };

// // TODO: Iterate over the users and set their activity status in the bitmap 'user_active' with a user ID and their status.

// // TODO: Retrieve the activity statuses of user 0 and user 2.

// // TODO: Print the retrieved activity statuses.

// client.disconnect();

import { createClient } from 'redis';

const client = createClient({
  url: 'redis://localhost:6379'
});

client.on('error', (err) => {
  console.log('Redis Client Error', err);
});

await client.connect();

const users = {
  'lily': {
    'id': 0,
    'active': true
  },
  'john': {
    'id': 1,
    'active': true
  },
  'jane': {
    'id': 2,
    'active': false
  }
};

// TODO: Iterate over the users and set their activity status in the bitmap 'user_active' with a user ID and their status.
for (const [key, value] of Object.entries(users)) {
  await client.setBit('user_active', value.id, value.active ? 1 : 0);
}
// TODO: Retrieve the activity statuses of user 0 and user 2.
const user0Active = await client.getBit('user_active', 0);
const user2Active = await client.getBit('user_active', 2);
// TODO: Print the retrieved activity statuses.
console.log(`User 0 active: ${user0Active}, User 2 active: ${user2Active}`);

client.disconnect();