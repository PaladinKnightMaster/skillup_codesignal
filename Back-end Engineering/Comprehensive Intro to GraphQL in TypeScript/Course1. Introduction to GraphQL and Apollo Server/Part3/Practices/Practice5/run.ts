// import fetch from 'node-fetch';

// const queryMovies = `
//   // TODO: Write a query to fetch all movies with their id, title, and director
// `;

// const queryMovieById = (id: string) => `
//   // TODO: Write a query to fetch a single movie by its ID with its id, title, and director
// `;

// const url = 'http://localhost:4000/';

// async function runQueries() {
//   // Query all movies
//   const responseMovies = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: queryMovies,
//     }),
//   });

//   const moviesData = await responseMovies.json();
//   console.log('Movies:', JSON.stringify(moviesData, null, 2));

//   // Query a movie by ID
//   const responseMovieById = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: queryMovieById('1'), // Replace '1' with the desired movie ID
//     }),
//   });

//   const movieByIdData = await responseMovieById.json();
//   console.log('Movie by ID:', JSON.stringify(movieByIdData, null, 2));
// }

// runQueries().catch((error) => console.error('Error:', error));

import fetch from 'node-fetch';

const queryMovies = `
  // TODO: Write a query to fetch all movies with their id, title, and director
  query {
    movies {
      id
      title
      director
    }
  }
`;

const queryMovieById = (id: string) => `
  // TODO: Write a query to fetch a single movie by its ID with its id, title, and director
  query {
    movie(id: "${id}") {
      id
      title
      director
    }
  }
`;

const url = 'http://localhost:4000/';

async function runQueries() {
  // Query all movies
  const responseMovies = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: queryMovies,
    }),
  });

  const moviesData = await responseMovies.json();
  console.log('Movies:', JSON.stringify(moviesData, null, 2));

  // Query a movie by ID
  const responseMovieById = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: queryMovieById('1'), // Replace '1' with the desired movie ID
    }),
  });

  const movieByIdData = await responseMovieById.json();
  console.log('Movie by ID:', JSON.stringify(movieByIdData, null, 2));
}

runQueries().catch((error) => console.error('Error:', error));