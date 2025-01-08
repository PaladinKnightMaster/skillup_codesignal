import fetch from 'node-fetch';

interface GraphQLResponse {
  data?: any;
  errors?: any;
}

// Function to execute GraphQL queries with timeout
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
      signal
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

// Removing a book
const removeBook = async (id: string, token: string): Promise<any | null> => {
  const query = `
    mutation RemoveBook($id: ID!) {
      removeBook(id: $id) {
        id
        title
        author
      }
    }
  `;
  const variables = { id };
  const response = await executeQuery(query, variables, token);

  if (response.errors) {
    console.error(response.errors);
    return null;
  }

  return response.data.removeBook;
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
}

// Main function to run the tasks
(async () => {
  // Test login as a moderator and add a book
  const modToken = await login('moderator', 'moderator');
  if (!modToken) {
    console.error('Failed to login as moderator');
    return;
  }

  console.log('Fetching books as moderator...');
  const modBooks = await getBooks(modToken);
  console.log('Books:', modBooks);

  console.log('Adding a new book as moderator...');
  const modNewBook = await addBook('1984', 'George Orwell', modToken);
  console.log('Added book:', modNewBook);

  console.log('Fetching books again as moderator...');
  const modUpdatedBooks = await getBooks(modToken);
  console.log('Books:', modUpdatedBooks);

  try {
    console.log('Attempting to remove a book as moderator (should fail)...');
    await removeBook(modNewBook.id, modToken);
  } catch (error) {
    console.error('Failed to remove book as moderator, as expected');
  }

  // Test login as an admin and add a book
  const adminToken = await login('admin', 'admin');
  if (!adminToken) {
    console.error('Failed to login as admin');
    return;
  }

  console.log('Fetching books as admin...');
  const adminBooks = await getBooks(adminToken);
  console.log('Books:', adminBooks);

  console.log('Adding a new book as admin...');
  const adminNewBook = await addBook('Animal Farm', 'George Orwell', adminToken);
  console.log('Added book:', adminNewBook);

  console.log('Fetching books again as admin...');
  const adminUpdatedBooks = await getBooks(adminToken);
  console.log('Books:', adminUpdatedBooks);

  console.log('Removing a book as admin...');
  const removedBook = await removeBook(adminNewBook.id, adminToken);
  console.log('Removed book:', removedBook);

  // Test login as a user and add a book (should fail)
  const userToken = await login('user', 'user');
  if (!userToken) {
    console.error('Failed to login as user');
    return;
  }

  console.log('Fetching books as user...');
  const userBooks = await getBooks(userToken);
  console.log('Books:', userBooks);

  try {
    console.log('Attempting to add a new book as user...');
    await addBook('Brave New World', 'Aldous Huxley', userToken);
  } catch (error) {
    console.error('Failed to add book as user, as expected');
  }
})();