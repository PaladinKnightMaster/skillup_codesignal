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

// const queryBookById = (id: string) => `
//   query {
//     book(id: "${id}") {
//       id
//       title
//       author
//     }
//   }
// `;

// const queryBookByTitle = (title: string) => `
//   query {
//     // TODO: Add the query to fetch a book by its title
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

//   // Query a book by Title
//   const responseBookByTitle = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: queryBookByTitle('Harry Potter'), // Replace 'Harry Potter' with the desired book title
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

const queryBookById = (id: string) => `
  query {
    book(id: "${id}") {
      id
      title
      author
    }
  }
`;

const queryBookByTitle = (title: string) => `
  query {
    // TODO: Add the query to fetch a book by its title
    bookByTitle(title: "${title}") {
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

  // Query a book by Title
  const responseBookByTitle = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: queryBookByTitle('Harry Potter'), // Replace 'Harry Potter' with the desired book title
    }),
  });

  const bookByTitleData = await responseBookByTitle.json();
  console.log('Book by Title:', JSON.stringify(bookByTitleData, null, 2));
}

runQueries().catch((error) => console.error('Error:', error));