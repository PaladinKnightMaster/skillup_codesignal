// import fetch from 'node-fetch';

// const query = `
//   query getBooks($limit: Int, $offset: Int) {
//     books(limit: $limit, offset: $offset) {
//       id
//       title
//       author
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
//       author
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

const queryWithVariables = `
  query getBooks($limit: Int, $offset: Int) {
    books(limit: $limit, offset: $offset) {
      id
      title
      author
    }
  }
`;

const queryWithoutVariables = `
  query getBooks {
    books {
      id
      title
      author
    }
  }
`;

const url = 'http://localhost:4000/';

// Fetch books with variables (limit and offset)
const variables = { limit: 5, offset: 0 };

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: queryWithVariables,
    variables,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log('Books with Variables:', JSON.stringify(data, null, 2)))
  .catch((error) => console.error('Error:', error));

// Fetch books without variables (default values will be used)
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: queryWithoutVariables,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log('Books with Default Pagination:', JSON.stringify(data, null, 2)))
  .catch((error) => console.error('Error:', error));
