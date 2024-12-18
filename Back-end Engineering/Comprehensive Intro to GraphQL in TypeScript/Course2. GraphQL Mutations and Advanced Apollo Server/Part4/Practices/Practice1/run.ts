import fetch from 'node-fetch';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const runQuery = async () => {
  const query = `
    query {
      localMovies {
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

  // Adding delay to ensure server is running
  await delay(2000);

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
};

runQuery();