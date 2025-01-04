// import fetch from 'node-fetch';

// const url = 'http://localhost:4000/graphql';

// // Function to login and get token
// async function login(username: string, password: string) {
//   const query = `
//     // TODO: Add the login query code
//   `;

//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ query }),
//   });
//   const data = await response.json() as { data: { login: string } };
//   return data.data.login;
// }

// // Function to query books
// async function queryBooks(token: string) {
//   const query = `
//     // TODO: Add code for the retrieval query
//   `;

//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       // TODO: Add the Authorization Bearer token as a header
//     },
//     body: JSON.stringify({ query }),
//   });
//   const data = await response.json() as { data: { books: Array<{ id: string, title: string, author: string }> } };
//   return data;
// }

// // Function to add a new book
// async function addBook(token: string, title: string, author: string) {
//   const mutation = `
//     // TODO: add code for 'addBook' mutation
//   `;

//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`,
//     },
//     body: JSON.stringify({ query: mutation }),
//   });
//   const data = await response.json() as { data: { addBook: { id: string, title: string, author: string } } };
//   return data;
// }

// // Run the example
// (async () => {
//   const token = await login('admin', 'admin');
//   console.log('Token:', token);

//   const booksData = await queryBooks(token);
//   console.log('Books:', JSON.stringify(booksData, null, 2));

//   const newBook = await addBook(token, '1984', 'George Orwell');
//   console.log('New Book:', JSON.stringify(newBook, null, 2));
// })();

import fetch from 'node-fetch';

const url = 'http://localhost:4000/graphql';

// Function to login and get token
async function login(username: string, password: string) {
  const query = `
    mutation {
      login(username: "${username}", password: "${password}")
    }
  `;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  const data = await response.json() as { data: { login: string } };
  return data.data.login;
}

// Function to query books
async function queryBooks(token: string) {
  const query = `
    query {
      books {
        id
        title
        author
      }
    }
  `;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });
  const data = await response.json() as { data: { books: Array<{ id: string, title: string, author: string }> } };
  return data.data.books;
}

// Function to add a new book
async function addBook(token: string, title: string, author: string) {
  const mutation = `
    mutation {
      addBook(title: "${title}", author: "${author}") {
        id
        title
        author
      }
    }
  `;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ query: mutation }),
  });
  const data = await response.json() as { data: { addBook: { id: string, title: string, author: string } } };
  return data.data.addBook;
}

// Run the example
(async () => {
  try {
    const token = await login('admin', 'admin');
    console.log('Token:', token);

    const booksData = await queryBooks(token);
    console.log('Books:', JSON.stringify(booksData, null, 2));

    const newBook = await addBook(token, '1984', 'George Orwell');
    console.log('New Book:', JSON.stringify(newBook, null, 2));
  } catch (error: any) {
    console.error('Error:', error.message);
  }
})();
