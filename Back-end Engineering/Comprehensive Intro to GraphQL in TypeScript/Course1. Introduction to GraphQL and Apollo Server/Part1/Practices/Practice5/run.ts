// // Import fetch from 'node-fetch'
// import fetch from 'node-fetch';

// // Define Apollo Server URL
// const url = 'http://localhost:4000/';

// // TODO: Define GraphQL query to fetch `hello`
// const query = `____`;

// // Create an async function to execute the query and log the response data
// async function fetchGraphQLData() {
//   try {
//     // TODO: Retrieve the response from the server
//     const response = ____ ;

//     const data = await response.json();
//     console.log(JSON.stringify(data, null, 2));
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// // Execute the function to query GraphQL server
// fetchGraphQLData();

// Import fetch from 'node-fetch'
import fetch from 'node-fetch';

// Define Apollo Server URL
const url = 'http://localhost:4000/';

// TODO: Define GraphQL query to fetch `hello`
const query = `
  query {
    hello
}`;

// Create an async function to execute the query and log the response data
async function fetchGraphQLData() {
  try {
    // TODO: Retrieve the response from the server
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

// Execute the function to query GraphQL server
fetchGraphQLData();