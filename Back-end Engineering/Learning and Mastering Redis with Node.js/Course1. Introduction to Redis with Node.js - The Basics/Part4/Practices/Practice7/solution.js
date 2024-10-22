// import { createClient } from 'redis';

// const client = createClient();
// client.on('error', err => console.error('Redis Client Error', err));

// await client.connect();

// // TODO: Add book titles to the 'famous_books' list. The titles are '1984', 'To Kill a Mockingbird', and 'The Great Gatsby'
//     // Make sure to push the books to the beginning of the list, not to the end

// // TODO: Retrieve all the added book titles from the 'famous_books' list

// // TODO: Print the retrieved book titles

// // Close the connection
// await client.disconnect();

import { createClient } from 'redis';

const client = createClient();
client.on('error', err => console.error('Redis Client Error', err));

await client.connect();

// TODO: Add book titles to the 'famous_books' list. The titles are '1984', 'To Kill a Mockingbird', and 'The Great Gatsby'
    // Make sure to push the books to the beginning of the list, not to the end
await client.lPush('famous_books', '1984');
await client.lPush('famous_books', 'To Kill a Mockingbird');
await client.lPush('famous_books', 'The Great Gatsby');

// TODO: Retrieve all the added book titles from the 'famous_books' list
const books = await client.lRange('famous_books', 0, -1);

// TODO: Print the retrieved book titles
console.log('Books in the list:', books);

// Close the connection
await client.disconnect();