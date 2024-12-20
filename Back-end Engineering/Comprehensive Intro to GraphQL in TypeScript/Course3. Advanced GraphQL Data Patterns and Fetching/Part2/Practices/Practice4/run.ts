// import fetch from 'node-fetch';

// const query = `
//   query getBooks($limit: Int, $offset: Int) {
//     books(limit: $limit, offset: $offset) {
//       id
//       title
//       author {
//         name
//       }
//     }
//   }
// `;

// const url = 'http://localhost:4000/';

// const variables = {
//   limit: 5,
//   offset: 0
// };

// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     query,
//     variables
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(JSON.stringify(data, null, 2)))
//   .catch((error) => console.error('Error:', error));

// const queryWithOffset = `
//   query getBooks {
//     books(limit: 5, offset: 5) {
//       id
//       title
//       author {
//         name
//       }
//     }
//   }
// `;

// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     query: queryWithOffset
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(JSON.stringify(data, null, 2)))
//   .catch((error) => console.error('Error:', error));

import fetch from 'node-fetch';

const queryBooks = `
  query getBooks($limit: Int, $offset: Int) {
    books(limit: $limit, offset: $offset) {
      id
      title
      author {
        name
      }
    }
  }
`;

const queryAuthors = `
  query getAuthors($limit: Int, $offset: Int) {
    authors(limit: $limit, offset: $offset) {
      id
      name
      age
      books(limit: 2) {
        id
        title
      }
    }
  }
`;

const url = 'http://localhost:4000/';

// Fetch paginated books
const variablesBooks = { limit: 5, offset: 0 };
fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: queryBooks, variables: variablesBooks }),
})
  .then(response => response.json())
  .then(data => console.log('Books:', JSON.stringify(data, null, 2)))
  .catch(error => console.error('Error fetching books:', error));

// Fetch paginated authors with nested books
const variablesAuthors = { limit: 2, offset: 0 };
fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: queryAuthors, variables: variablesAuthors }),
})
  .then(response => response.json())
  .then(data => console.log('Authors:', JSON.stringify(data, null, 2)))
  .catch(error => console.error('Error fetching authors:', error));
