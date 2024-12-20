import fetch from 'node-fetch';

const query = `
  query getBooks($limit: Int, $offset: Int) {
    books(limit: $limit, offset: $offset) {
      id
      title
      author
    }
  }
`;

const url = 'http://localhost:4000/';

const variables = {
  limit: 5,
  offset: 0
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(JSON.stringify(data, null, 2)))
  .catch((error) => console.error('Error:', error));