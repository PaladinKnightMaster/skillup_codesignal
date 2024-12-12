// import fetch from 'node-fetch';

// const fetchSongsAndComposers = async () => {
//   const query = `
//     query {
//         // TODO: define the query
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

// fetchSongsAndComposers();

import fetch from 'node-fetch';

const fetchSongsAndComposers = async () => {
  const query = `
    query {
        songs {
            title
            composer {
                name
            }
        }
        composers {
            name
            songs {
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

fetchSongsAndComposers();