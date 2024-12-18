// import fetch from 'node-fetch';

// const query = `
//   query {
//     movies {
//       id
//       title
//       director
//     }
//     // TODO: Request external movies as well
//   }
// `;

// const url = 'http://localhost:4000/';

// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     query,
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(JSON.stringify(data, null, 2)))
//   .catch((error) => console.error('Error:', error));

import fetch from 'node-fetch';

const query = `
  query {
    movies {
      id
      title
      director
    }
    externalMovies {
      id
      title
      director
    }
  }
`;

const url = 'http://localhost:4000/';

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