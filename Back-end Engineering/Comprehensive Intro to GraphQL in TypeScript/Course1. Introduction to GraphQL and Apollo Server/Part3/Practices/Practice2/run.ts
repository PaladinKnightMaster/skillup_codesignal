// import fetch from 'node-fetch';

// // Delay function to wait for the server to be ready
// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// const queryBooks = `
//   query {
//     books {
//       id
//       title
//       author
//     }
//   }
// `;

// const queryBookByTitle = (title: string) => `
//   query {
//     bookByTitle(title: "${title}") {
//       id
//       title
//       author
//     }
//   }
// `;

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

//   // Query a book by title
//   const responseBookByTitle = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: queryBookByTitle('The Hobbit'), // Replace 'The Hobbit' with the desired book title
//     }),
//   });

//   const bookByTitleData = await responseBookByTitle.json();
//   console.log('Book by Title:', JSON.stringify(bookByTitleData, null, 2));
// }

// runQueries().catch((error) => console.error('Error:', error));

import fetch from 'node-fetch';

// Delay function to wait for the server to be ready
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const queryBooks = `
  query {
    books {
      id
      title
      author
    }
  }
`;

const queryBookByTitle = (title: string) => `
  query {
    books(title: "${title}") {
      id
      title
      author
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

  // Query a book by title
  const responseBookByTitle = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: queryBookByTitle('The Hobbit'), // Replace 'The Hobbit' with the desired book title
    }),
  });

  const bookByTitleData = await responseBookByTitle.json();
  console.log('Book by Title:', JSON.stringify(bookByTitleData, null, 2));
}

runQueries().catch((error) => console.error('Error:', error));