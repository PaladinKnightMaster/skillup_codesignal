import fetch from 'node-fetch';

const url = 'http://localhost:4000/';

const fetchBook = async (id: string) => {
  const query = `
    query {
      book(id: "${id}") {
        title
        author
      }
    }
  `;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  });

  const data = await response.json();
  console.log(data);
};

const addNewBook = async (title: string, author?: string) => {
  const mutation = `
    mutation {
      addBook(title: "${title}", author: "${author || ''}") {
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
    },
    body: JSON.stringify({
      query: mutation,
    }),
  });

  const data = await response.json();
  console.log(data);
};

// Test the functions with corner cases
// Case 1: Fetch a non-existent book
fetchBook('999');

// Case 2: Add a book without providing an author
addNewBook('1984');

// Case 3: Add a book without providing a title
addNewBook('', 'George Orwell');

// Case 4: Properly add a book to ensure success path works
addNewBook('Animal Farm', 'George Orwell');