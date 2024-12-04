// import fetch from 'node-fetch';

// const url = 'http://localhost:4000/graphql';

// // TODO: Write the queries to fetch all movies and a specific movie by its id
// const queryMovies = `____`;

// const queryMovieById = (id: string) => `____`;

// const fetchData = async (query: string) => {
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

// const runQueries = async () => {
//   await fetchData(queryMovies);
//   await fetchData(queryMovieById('1'));
// };

// runQueries();

import fetch from 'node-fetch';

const url = 'http://localhost:4000/graphql';

// TODO: Write the queries to fetch all movies and a specific movie by its id
const queryMovies = `
  query {
    movies {
      id
      title
      director
    }
  }
`;

const queryMovieById = (id: string) => `
  query {
    movie(id: "${id}") {
      id
      title
      director
    }
  }
`;

const fetchData = async (query: string) => {
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

const runQueries = async () => {
  await fetchData(queryMovies);
  await fetchData(queryMovieById('1'));
};

runQueries();