import fetch from 'node-fetch';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const fetchMoviesAndDirectors = async () => {
  const query = `
    query {
      movies {
        title
        director {
          name
        }
      }
      directors {
        name
        movies {
          title
        }
      }
    }
  `;

  const url = 'http://localhost:4000/';

  try {
    // Add a small delay
    await delay(5000);

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

fetchMoviesAndDirectors();