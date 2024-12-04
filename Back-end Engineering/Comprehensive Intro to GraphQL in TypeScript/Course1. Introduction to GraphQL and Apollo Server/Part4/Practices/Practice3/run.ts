// import fetch from 'node-fetch';

// // TODO: Fill in the URL
// const url = `____`;

// const queryActors = `
//   query {
//     actors {
//       id
//       name
//       age
//     }
//   }
// `;

// const queryActorById = (id: string) => `
//   query {
//     actor(id: "${id}") {
//       id
//       name
//       age
//     }
//   }
// `;

// // Function to fetch data
// const fetchData = async (query: string) => {
//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ query }),
//     });
//     const data = await response.json();
//     console.log(JSON.stringify(data, null, 2));
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// const runQueries = async () => {
//   await fetchData(queryActors);
//   await fetchData(queryActorById('1'));
// };

// // Run the queries
// runQueries();

import fetch from 'node-fetch';

// TODO: Fill in the URL
const url = `http://localhost:4000/graphql`;

const queryActors = `
  query {
    actors {
      id
      name
      age
    }
  }
`;

const queryActorById = (id: string) => `
  query {
    actor(id: "${id}") {
      id
      name
      age
    }
  }
`;

// Function to fetch data
const fetchData = async (query: string) => {
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
};

const runQueries = async () => {
  await fetchData(queryActors);
  await fetchData(queryActorById('1'));
};

// Run the queries
runQueries();