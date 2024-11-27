// import fetch from 'node-fetch';

// const query = `
//   // TODO: define a query
// `;

// // Define the URL where the server is running
// const url = 'http://localhost:4000/';

// // Fetch data from the server with the GraphQL query, handle the response,
// // and log the data or catch any errors.
// // TODO: define the HTTP request's body
// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: ____,
// })
//   .then((response) => response.json())
//   .then((data) => console.log(JSON.stringify(data, null, 2)))
//   .catch((error) => console.error('Error:', error));

import fetch from 'node-fetch';

const query = `
  query {
    songs {
      title
      artist
    }
  }
`;

// Define the URL where the server is running
const url = 'http://localhost:4000/';

// Fetch data from the server with the GraphQL query, handle the response,
// and log the data or catch any errors.
// TODO: define the HTTP request's body
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(JSON.stringify(data, null, 2)))
  .catch((error) => console.error('Error:', error));