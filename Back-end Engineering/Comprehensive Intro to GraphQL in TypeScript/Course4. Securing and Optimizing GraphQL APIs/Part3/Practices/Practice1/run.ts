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
  for (let i = 0; i < 5; i++) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(JSON.stringify(data, null, 2));
      } else {
        const text = await response.text();
        console.error(`Error: ${text}`);
      }

    } catch (error) {
      console.error('Error:', error);
    }
  }
})();