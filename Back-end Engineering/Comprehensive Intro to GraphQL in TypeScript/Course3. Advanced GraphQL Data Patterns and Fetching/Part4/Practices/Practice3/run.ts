import fetch from 'node-fetch';

const query = `
  query {
    books {
      title
      author {
        name
      }
    }
  }
`;

const url = 'http://localhost:4000/';

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query,
  }),
})
  .then(response => response.json())
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(error => console.error('Error:', error));

const authorQuery = `
  query {
    author(id: "1") {
      name
    }
  }
`;

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: authorQuery,
  }),
})
  .then(response => response.json())
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(error => console.error('Error:', error));