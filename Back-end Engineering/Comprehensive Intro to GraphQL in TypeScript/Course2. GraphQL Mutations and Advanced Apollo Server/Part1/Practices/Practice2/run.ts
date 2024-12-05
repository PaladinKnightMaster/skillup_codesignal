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

// const queryBook = (id: string) => `
//   query {
//     book(id: "${id}") {
//       id
//       title
//       author
//     }
//   }
// `;

// const addBookMutation = (title: string, author: string) => `
//   mutation {
//     addBook(title: "${title}", author: "${author}") {
//       id
//       title
//       author
//     }
//   }
// `;

// const deleteBookMutation = (id: string) => `
//   mutation {
//     deleteBook(id: "${id}") {
//       id
//       title
//       author
//     }
//   }
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

//   console.log("Add a new book:");
//   await makeRequest(addBookMutation("New Book", "New Author"));

//   console.log("Query all books after addition:");
//   await makeRequest(queryBooks);

//   console.log("Delete a book:");
//   await makeRequest(deleteBookMutation("1"));

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

const queryBook = (id: string) => `
  query {
    book(id: "${id}") {
      id
      title
      author
    }
  }
`;

const addBookMutation = (title: string, author: string) => `
  mutation {
    addBook(title: "${title}", author: "${author}") {
      id
      title
      author
    }
  }
`;

const deleteBookMutation = (id: string) => `
  mutation {
    deleteBook(id: "${id}") {
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

  console.log("Add a new book:");
  await makeRequest(addBookMutation("New Book", "New Author"));

  console.log("Query all books after addition:");
  await makeRequest(queryBooks);

  console.log("Delete a book:");
  await makeRequest(deleteBookMutation("1"));

  console.log("Query all books after deletion:");
  await makeRequest(queryBooks);
})();