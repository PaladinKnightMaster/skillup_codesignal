import fetch from 'node-fetch';

const url = 'http://localhost:4000/graphql';

const queryBooks = `
  query {
    books {
      id
      title
      author
    }
  }
`;

const queryBookById = (id: string) => `
  query {
    book(id: "${id}") {
      id
      title
      author
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
  await fetchData(queryBooks);
  await fetchData(queryBookById('1'));
};

// Run the queries
runQueries();