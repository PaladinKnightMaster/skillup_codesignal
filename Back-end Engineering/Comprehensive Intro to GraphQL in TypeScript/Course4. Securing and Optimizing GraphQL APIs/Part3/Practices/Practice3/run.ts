import fetch from 'node-fetch';

const query = `
  query {
    books {
      id
      title
      author
    }
  }
`;

const url = 'http://localhost:4000/graphql';

(async () => {
  try {
    // Make 10 requests to test rate limiting
    for (let i = 0; i < 15; i++) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (response.status === 429) {
        console.error(`Request ${i + 1}: Rate limit exceeded - Too many requests`);
      } else {
        const data = await response.json();
        console.log(`Request ${i + 1}:`, JSON.stringify(data, null, 2));
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
})();