// import fetch from 'node-fetch';

// // Define sleep function for delay
// const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// const queryAlbums = `
//     // TODO: GraphQL query to fetch all albums
// `;

// const queryAlbum = (id: string) => `
//     // TODO: GraphQL query to fetch album by id
// `;

// const addAlbumMutation = (title: string, artist: string) => `
//     // TODO: GraphQL mutation to add a new album
// `;

// const deleteAlbumMutation = (id: string) => `
//     // TODO: GraphQL mutation to delete an album by id
// `;

// const url = 'http://localhost:4000/';

// const makeRequest = async (query: string) => {
//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ query }),
//     });
//     const json = await response.json();
//     console.log(JSON.stringify(json, null, 2));
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// // Make requests
// (async () => {
//   console.log("Waiting for server to start...");
//   await sleep(5000); // Wait for 5 seconds, adjust if necessary

//   console.log("Query all albums:");
//   await makeRequest(queryAlbums);

//   console.log("Add a new album:");
//   await makeRequest(addAlbumMutation("New Album", "New Artist"));

//   console.log("Query all albums after addition:");
//   await makeRequest(queryAlbums);

//   console.log("Delete an album:");
//   await makeRequest(deleteAlbumMutation("1"));

//   console.log("Query all albums after deletion:");
//   await makeRequest(queryAlbums);
// })();

import fetch from 'node-fetch';

// Define sleep function for delay
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const queryAlbums = `
    // TODO: GraphQL query to fetch all albums
    query {
      albums {
        id
        title
        artist
      }
    }
`;

const queryAlbum = (id: string) => `
    // TODO: GraphQL query to fetch album by id
    query {
      album(id: "${id}") {
        id
        title
        artist
      }
    }
`;

const addAlbumMutation = (title: string, artist: string) => `
    // TODO: GraphQL mutation to add a new album
    mutation {
      addAlbum(title: "${title}", artist: "${artist}") {
        id
        title
        artist
      }
    }
`;

const deleteAlbumMutation = (id: string) => `
    // TODO: GraphQL mutation to delete an album by id
    mutation {
      deleteAlbum(id: "${id}") {
        id
        title
        artist
      }
    }
`;

const url = 'http://localhost:4000/';

const makeRequest = async (query: string) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    const json = await response.json();
    console.log(JSON.stringify(json, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
};

// Make requests
(async () => {
  console.log("Waiting for server to start...");
  await sleep(5000); // Wait for 5 seconds, adjust if necessary

  console.log("Query all albums:");
  await makeRequest(queryAlbums);

  console.log("Add a new album:");
  await makeRequest(addAlbumMutation("New Album", "New Artist"));

  console.log("Query all albums after addition:");
  await makeRequest(queryAlbums);

  console.log("Delete an album:");
  await makeRequest(deleteAlbumMutation("1"));

  console.log("Query all albums after deletion:");
  await makeRequest(queryAlbums);
})();