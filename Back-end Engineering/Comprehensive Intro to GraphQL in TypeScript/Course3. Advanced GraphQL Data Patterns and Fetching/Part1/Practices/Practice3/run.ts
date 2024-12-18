// import fetch from 'node-fetch';

// // TODO: Add publishers to the query
// const query = `
//   query {
//     books {
//       title
//       author {
//         name
//       }
//     }
//     authors {
//       name
//       books {
//         title
//       }
//     }
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
    books {
      title
      author {
        name
      }
      publisher {
        name
      }
    }
    authors {
      name
      books {
        title
      }
    }
    publishers {
      name
      books {
        title
      }
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
