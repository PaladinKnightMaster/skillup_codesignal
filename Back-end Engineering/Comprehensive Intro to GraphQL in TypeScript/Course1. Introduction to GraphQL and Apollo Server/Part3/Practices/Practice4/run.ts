// import fetch from 'node-fetch';

// const queryBooks = `
//   query {
//     books {
//       id
//       title
//       author
//     }
//   }
// `;

// const queryBookById = (id: string) => `
//   query {
//     book(id: "${id}") {
//       id
//       title
//       author
//     }
//   }
// `;

// // TODO: Add queries to fetch the list of movies and a movie by ID

// const url = 'http://localhost:4000/';

// async function runQueries() {
//   // Query all books
//   const responseBooks = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: queryBooks,
//     }),
//   });

//   const booksData = await responseBooks.json();
//   console.log('Books:', JSON.stringify(booksData, null, 2));

//   // Query a book by ID
//   const responseBookById = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: queryBookById('1'), // Replace '1' with the desired book ID
//     }),
//   });

//   const bookByIdData = await responseBookById.json();
//   console.log('Book by ID:', JSON.stringify(bookByIdData, null, 2));

//   // TODO: Fetch all movies and a movie by ID
// }

// runQueries().catch((error) => console.error('Error:', error));

import fetch from 'node-fetch';

const queryBooks = `
  query {
    books {
      id
      title
      author
    }
  }
`;

const queryBookById = (id: string) => `
  query {
    book(id: "${id}") {
      id
      title
      author
    }
  }
`;

// TODO: Add queries to fetch the list of movies and a movie by ID
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

const url = 'http://localhost:4000/';

async function runQueries() {
  // Query all books
  const responseBooks = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: queryBooks,
    }),
  });

  const booksData = await responseBooks.json();
  console.log('Books:', JSON.stringify(booksData, null, 2));

  // Query a book by ID
  const responseBookById = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: queryBookById('1'), // Replace '1' with the desired book ID
    }),
  });

  const bookByIdData = await responseBookById.json();
  console.log('Book by ID:', JSON.stringify(bookByIdData, null, 2));

  // TODO: Fetch all movies and a movie by ID
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