// import fetch from 'node-fetch';

// const fetchBooks = async () => {
//   const query = `
//     query {
//       books {
//         title
//         author
//         publishedDate
//       }
//     }
//   `;

//   const url = 'http://localhost:4000/';

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ query }),
//     });

//     const data = await response.json();
//     console.log('Books:', JSON.stringify(data, null, 2));
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// const addBook = async (title: string, author: string, publishedDate: string) => {
//   const mutation = `
//     mutation {
//       addBook(title: "${title}", author: "${author}", publishedDate: "${publishedDate}") {
//         id
//         title
//         author
//         publishedDate
//       }
//     }
//   `;

//   const url = 'http://localhost:4000/';

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ query: mutation }),
//     });

//     const data = await response.json();
//     console.log('Added Book:', JSON.stringify(data, null, 2));
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// fetchBooks();
// addBook('1984', 'George Orwell', '1949');

import fetch from 'node-fetch';

const fetchBooks = async () => {
  const query = `
    query {
      books {
        title
        author
        publishedDate
        genre
      }
    }
  `;

  const url = 'http://localhost:4000/';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    console.log('Books:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
};

const addBook = async (title: string, author: string, publishedDate: string, genre: string) => {
  const mutation = `
    mutation {
      addBook(title: "${title}", author: "${author}", publishedDate: "${publishedDate}", genre: "${genre}") {
        id
        title
        author
        publishedDate
        genre
      }
    }
  `;

  const url = 'http://localhost:4000/';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: mutation }),
    });

    const data = await response.json();
    console.log('Added Book:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
};

fetchBooks();
addBook('1984', 'George Orwell', '1949', 'Dystopian');
