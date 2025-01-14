import fetch from 'node-fetch';

const url = 'http://localhost:4000/';

const fetchUser = async (id: string) => {
  const query = `
    query {
      user(id: "${id}") {
        name
        email
      }
    }
  `;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
      }),
    });

    const data: any = await response.json();
    if (data.errors) {
      console.error(data.errors);
    } else {
      console.log(data);
    }
  } catch (error) {
    console.error('Error fetching user:', error);
  }
};

const addNewUser = async (name: string, email: string) => {
  const mutation = `
    mutation {
      addUser(name: "${name}", email: "${email}") {
        id
        name
        email
      }
    }
  `;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: mutation,
      }),
    });

    const data: any = await response.json();
    if (data.errors) {
      console.error(data.errors);
    } else {
      console.log(data);
    }
  } catch (error) {
    console.error('Error adding user:', error);
  }
};

// Test the functions
fetchUser('1'); // User exists
fetchUser('999'); // User does not exist (invalid case)
addNewUser('Alice Cooper', 'alice.cooper@example.com'); // Valid input
addNewUser('', 'missing.name@example.com'); // Missing name (invalid case)
addNewUser('Invalid Email Name', ''); // Missing email (invalid case)