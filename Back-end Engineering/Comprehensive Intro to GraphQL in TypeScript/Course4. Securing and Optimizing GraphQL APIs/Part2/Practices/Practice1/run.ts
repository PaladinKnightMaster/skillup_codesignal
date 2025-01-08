// import fetch from 'node-fetch';

// interface GraphQLResponse {
//   data?: any;
//   errors?: any;
// }

// // Function to execute GraphQL queries with timeout
// const executeQuery = async (query: string, variables: any = {}, token: string = '', timeout: number = 5000): Promise<GraphQLResponse> => {
//   const controller = new AbortController();
//   const signal = controller.signal;

//   const fetchTimeout = setTimeout(() => {
//     controller.abort();
//   }, timeout);

//   try {
//     const response = await fetch('http://localhost:4000/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': token,
//       },
//       body: JSON.stringify({ query, variables }),
//       signal
//     });

//     clearTimeout(fetchTimeout);
//     return response.json() as Promise<GraphQLResponse>;
//   } catch (error) {
//     clearTimeout(fetchTimeout);
//     console.error('Fetch error:', error);
//     return { errors: [error] };
//   }
// };

// // Login and get token
// const login = async (username: string, password: string): Promise<string | null> => {
//   const query = `
//     mutation Login($username: String!, $password: String!) {
//       login(username: $username, password: $password) {
//         username
//         role
//       }
//     }
//   `;
//   const variables = { username, password };
//   const response = await executeQuery(query, variables);

//   if (response.errors) {
//     console.error(response.errors);
//     return null;
//   }

//   return `Bearer ${username}`;
// };

// // Adding a book
// const addBook = async (title: string, author: string, token: string): Promise<any | null> => {
//   const query = `
//     mutation AddBook($title: String!, $author: String!) {
//       addBook(title: $title, author: $author) {
//         id
//         title
//         author
//       }
//     }
//   `;
//   const variables = { title, author };
//   const response = await executeQuery(query, variables, token);

//   if (response.errors) {
//     console.error(response.errors);
//     return null;
//   }

//   return response.data.addBook;
// };

// // Fetching books
// const getBooks = async (token: string): Promise<any[] | null> => {
//   const query = `
//     query {
//       books {
//         id
//         title
//         author
//       }
//     }
//   `;
//   const response = await executeQuery(query, {}, token);

//   if (response.errors) {
//     console.error(response.errors);
//     return null;
//   }

//   return response.data.books;
// };

// // Main function to run the tasks
// (async () => {
//   const token = await login('admin', 'admin');
//   if (!token) {
//     console.error('Failed to login');
//     return;
//   }

//   console.log('Fetching books...');
//   const books = await getBooks(token);
//   console.log('Books:', books);

//   console.log('Adding a new book...');
//   const newBook = await addBook('1984', 'George Orwell', token);
//   console.log('Added book:', newBook);

//   console.log('Fetching books again...');
//   const updatedBooks = await getBooks(token);
//   console.log('Books:', updatedBooks);
// })();

import fetch from 'node-fetch';

interface GraphQLResponse {
  data?: any;
  errors?: any;
}

// Function to execute GraphQL queries
const executeQuery = async (query: string, variables: any = {}, token: string = '', timeout: number = 5000): Promise<GraphQLResponse> => {
  const controller = new AbortController();
  const signal = controller.signal;

  const fetchTimeout = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch('http://localhost:4000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify({ query, variables }),
      signal,
    });

    clearTimeout(fetchTimeout);
    return response.json() as Promise<GraphQLResponse>;
  } catch (error) {
    clearTimeout(fetchTimeout);
    console.error('Fetch error:', error);
    return { errors: [error] };
  }
};

// Login and get token
const login = async (username: string, password: string): Promise<string | null> => {
  const query = `
    mutation Login($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        username
        role
      }
    }
  `;
  const variables = { username, password };
  const response = await executeQuery(query, variables);

  if (response.errors) {
    console.error(response.errors);
    return null;
  }

  return `Bearer ${username}`;
};

// Adding a book
const addBook = async (title: string, author: string, token: string): Promise<any | null> => {
  const query = `
    mutation AddBook($title: String!, $author: String!) {
      addBook(title: $title, author: $author) {
        id
        title
        author
      }
    }
  `;
  const variables = { title, author };
  const response = await executeQuery(query, variables, token);

  if (response.errors) {
    console.error(response.errors);
    return null;
  }

  return response.data.addBook;
};

// Fetching books
const getBooks = async (token: string): Promise<any[] | null> => {
  const query = `
    query {
      books {
        id
        title
        author
      }
    }
  `;
  const response = await executeQuery(query, {}, token);

  if (response.errors) {
    console.error(response.errors);
    return null;
  }

  return response.data.books;
};

// Main function to run the tasks
(async () => {
  const adminToken = await login('admin', 'admin');
  const userToken = await login('user', 'user');

  if (!adminToken || !userToken) {
    console.error('Failed to login');
    return;
  }

  console.log('Fetching books as admin...');
  const books = await getBooks(adminToken);
  console.log('Books:', books);

  console.log('Attempting to add a book as user...');
  const userAddAttempt = await addBook('1984', 'George Orwell', userToken);
  console.log('User add attempt:', userAddAttempt);

  console.log('Adding a book as admin...');
  const adminAddBook = await addBook('1984', 'George Orwell', adminToken);
  console.log('Added book as admin:', adminAddBook);

  console.log('Fetching books again as admin...');
  const updatedBooks = await getBooks(adminToken);
  console.log('Books:', updatedBooks);
})();
