// import fetch from 'node-fetch';

// const query = `
//   query getBooks($limit: Int, $offset: Int) {
//     books(____) {
//       id
//       title
//       author
//     }
//   }
// `;

// const url = 'http://localhost:4000/';

// // TODO: Implement pagination in querying

// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     query
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(JSON.stringify(data, null, 2)))
//   .catch((error) => console.error('Error:', error));

import fetch from 'node-fetch';

const query = `
  query getBooks($limit: Int, $offset: Int) {
    books(limit: $limit, offset: $offset) {
      id
      title
      author
    }
  }
`;

const url = 'http://localhost:4000/';

// Pagination variables
const variables = {
  limit: 5,
  offset: 10,
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(JSON.stringify(data, null, 2)))
  .catch((error) => console.error('Error:', error));
