// import fetch from 'node-fetch';

// const fetchBooksAndAuthors = async () => {
//   const query = `
//     query {
//       books {
//         title
//         author {
//           name
//         }
//       }
//       authors {
//         name
//         books {
//           title
//         }
//       }
//     }
//   `;

//   const url = 'http://localhost:4000/';

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ query }),
//     });
//     const data = await response.json();
//     console.log(JSON.stringify(data, null, 2));
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// fetchBooksAndAuthors();

import fetch from 'node-fetch';

const fetchBooksAndPublishers = async () => {
  const query = `
    query {
      books {
        title
        publisher {
          name
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

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
};

fetchBooksAndPublishers();
