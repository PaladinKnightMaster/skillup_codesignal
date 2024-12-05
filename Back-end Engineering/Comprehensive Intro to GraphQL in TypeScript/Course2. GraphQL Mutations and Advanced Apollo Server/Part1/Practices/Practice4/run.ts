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

// const addBooksMutation = (books: { title: string, author: string }[]) => `
//   // TODO: Define GraphQL mutation to add multiple books
// `;

// const deleteBooksMutation = (ids: string[]) => `
//   // TODO: Define GraphQL mutation to delete multiple books
// `;

// const url = 'http://localhost:4000/';

// const makeRequest = async (query: string) => {
//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ query }),
//     });
//     const json = await response.json();
//     console.log(JSON.stringify(json, null, 2));
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// // Make requests
// (async () => {
//   console.log("Query all books:");
//   await makeRequest(queryBooks);

//   console.log("Add new books:");
//   await makeRequest(addBooksMutation([{ title: "Book A", author: "Author A" }, { title: "Book B", author: "Author B" }]));

//   console.log("Query all books after addition:");
//   await makeRequest(queryBooks);

//   console.log("Delete books:");
//   await makeRequest(deleteBooksMutation(["1", "2"]));

//   console.log("Query all books after deletion:");
//   await makeRequest(queryBooks);
// })();

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

const addBooksMutation = (books: { title: string, author: string }[]) => `
  mutation {
    addBooks(books: ${JSON.stringify(books)}) {
      id
      title
      author
    }
  }
`;

const deleteBooksMutation = (ids: string[]) => `
  mutation {
    deleteBooks(ids: ${JSON.stringify(ids)}) {
      id
      title
      author
    }
  }
`;

const url = 'http://localhost:4000/';

const makeRequest = async (query: string) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    const json = await response.json();
    console.log(JSON.stringify(json, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
};

// Make requests
(async () => {
  console.log("Query all books:");
  await makeRequest(queryBooks);

  console.log("Add new books:");
  await makeRequest(addBooksMutation([{ title: "Book A", author: "Author A" }, { title: "Book B", author: "Author B" }]));

  console.log("Query all books after addition:");
  await makeRequest(queryBooks);

  console.log("Delete books:");
  await makeRequest(deleteBooksMutation(["1", "2"]));

  console.log("Query all books after deletion:");
  await makeRequest(queryBooks);
})();
