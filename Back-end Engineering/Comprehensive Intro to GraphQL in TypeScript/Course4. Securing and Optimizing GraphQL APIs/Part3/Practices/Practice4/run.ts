import fetch from 'node-fetch';

const graphqlQuery = `
  query {
    books {
      id
      title
      author
    }
  }
`;

const graphqlUrl = 'http://localhost:4000/graphql';
const statusUrl = 'http://localhost:4000/status';

(async () => {
  try {
    // Test GraphQL rate limiting
    for (let i = 0; i < 5; i++) {
      const graphqlResponse = await fetch(graphqlUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: graphqlQuery }),
      });

      if (graphqlResponse.status === 429) {
        const text = await graphqlResponse.text();
        console.error(`GraphQL Request ${i + 1}: ${text}`);
      } else {
        const data = await graphqlResponse.json();
        console.log(`GraphQL Request ${i + 1}:`, JSON.stringify(data, null, 2));
      }
    }

    // Test status endpoint rate limiting
    for (let i = 0; i < 3; i++) {
      const statusResponse = await fetch(statusUrl);

      if (statusResponse.status === 429) {
        const text = await statusResponse.text();
        console.error(`Status Request ${i + 1}: ${text}`);
      } else {
        const text = await statusResponse.text();
        console.log(`Status Request ${i + 1}: ${text}`);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
})();