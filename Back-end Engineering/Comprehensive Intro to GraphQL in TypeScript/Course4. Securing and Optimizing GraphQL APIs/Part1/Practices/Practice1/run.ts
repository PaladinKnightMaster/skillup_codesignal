import fetch from 'node-fetch';

// Apollo Server URL
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

  const data: any = await response.json();

  if (data.errors) {
    throw new Error(data.errors[0].message);
  }

  return data.data.login;
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
  return data;
}

// Run the example
(async () => {
  try {
    const token = await login('admin', 'admin');
    console.log('Token:', token);

    const newBook = await addBook(token, '1984', 'George Orwell');
    console.log('New Book:', JSON.stringify(newBook, null, 2));
  } catch (error: any) {
    console.error('Error during successful login:', error.message);
  }

  try {
    await login('invalidUser', 'invalidPass');
  } catch (error: any) {
    console.error('Error during invalid login:', error.message);
  }
})();