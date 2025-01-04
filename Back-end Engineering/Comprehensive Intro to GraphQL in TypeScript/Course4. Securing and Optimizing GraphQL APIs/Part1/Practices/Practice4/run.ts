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
  const data = await response.json() as { data: { login: string } };
  return data.data.login;
}

// Function to add a new event
async function addEvent(token: string, name: string, date: string) {
  const mutation = `
    mutation {
      addEvent(name: "${name}", date: "${date}") {
        id
        name
        date
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
  const data = await response.json() as { data: { addEvent: { id: string, name: string, date: string } } };
  return data;
}

// Run the example
(async () => {
  const token = await login('admin', 'admin');
  console.log('Token:', token);

  const newEvent = await addEvent(token, 'Hackathon', '2023-12-01');
  console.log('New Event:', JSON.stringify(newEvent, null, 2));
})();