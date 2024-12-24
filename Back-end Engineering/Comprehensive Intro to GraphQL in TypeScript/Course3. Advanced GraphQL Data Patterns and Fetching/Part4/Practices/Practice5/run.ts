import fetch from 'node-fetch';

// GraphQL query to fetch dishes and their ingredients
const query = `
  query {
    dishes {
      name
      ingredient {
        name
      }
    }
  }
`;

// Apollo Server URL
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

// GraphQL query to fetch restaurant by ID and its dishes
const restaurantQuery = `
  query {
    restaurant(id: "1") {
      name
      dishes {
        name
        ingredient {
          name
        }
      }
    }
  }
`;

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: restaurantQuery,
  }),
})
  .then(response => response.json())
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(error => console.error('Error:', error));