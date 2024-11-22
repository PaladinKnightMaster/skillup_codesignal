import fetch from 'node-fetch';

// Apollo Server URL
const url = 'http://localhost:4000/';

// GraphQL query
const query = `
  query {
    hello
  }
`;

// Function to execute the query
async function fetchGraphQLData() {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchGraphQLData();