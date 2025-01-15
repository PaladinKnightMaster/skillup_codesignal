# Rate Limiting in GraphQL

## Introduction
In this lesson, we'll focus on securing your **GraphQL API** by implementing rate limiting. As we secure our APIs, it's crucial to prevent abuse, and rate limiting is a powerful tool for this purpose. Rate limiting helps manage the number of requests a user can make to your API within a specific time frame, ensuring it can handle heavy loads gracefully.

We'll use the `express-rate-limit` library in this lesson. This library is popular for rate-limiting in Express applications due to its simplicity and flexibility.

By the end of this lesson, you'll be equipped to add rate limiting to your **GraphQL API**, protecting your resources and improving the performance and reliability of your server.

## Defining the GraphQL Schema
The schema defines the structure of the data and the queries that can be made. We'll define a simple schema for our books example:

```TypeScript
import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
  }
`;
```
Here's a brief explanation:

* `type Book`: Defines a Book type with fields `id`, `title`, and `author`, all of which are non-nullable.
* `type Query`: Defines a query to fetch a list of books.

## Implementing Rate Limiting in Express
Now, let's introduce rate limiting to our Express application. Middleware in Express is a function that handles requests and responses. We'll use the `express-rate-limit` library for this. Here's how to set it up:

First, import the necessary libraries:

```TypeScript
import express from 'express';
import rateLimit from 'express-rate-limit';
```

Next, define the rate-limiting settings:

```TypeScript
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
  handler: (_, res) => {
    res.status(429).send('Too many requests');
  }
});

app.use(limiter);
```

Here's a breakdown of this code:

* `windowMs`: The time frame for the rate limit (15 minutes in this case).
* `max`: The maximum number of requests a user can make within the window (100 requests).
* `handler`: Custom response when the rate limit is exceeded (`429` status code).

To use different rate limiter for different API endpoints, you can use `app.use('/endpoint', limiter)` notation.

## Integrating Apollo Server with Express
Next, we need to set up Apollo Server with Express. We'll start the Apollo Server and merge it with our existing Express app. Here's how:

First, import the necessary libraries:

```TypeScript
import { ApolloServer } from 'apollo-server-express';
```

Then, define sample data and resolvers:

```TypeScript
const books = [
  { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' }
];

const resolvers = {
  Query: {
    books: () => books,
  },
};
```

Finally, initialize and start the Apollo Server:

```TypeScript
const server = new ApolloServer({ typeDefs, resolvers });

server.start().then(() => {
  server.applyMiddleware({ app, path: '/graphql' });

  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
});
```

In this setup:

- `typeDefs`: Our schema definition.
- `resolvers`: Functions to handle queries.
- `applyMiddleware`: Integrates Apollo Server with Express under the `/graphql` path.
- `app.listen`: Starts the server on port 4000 and logs the server URL.

## Testing the Implementation
To test our implementation, we'll query the GraphQL API to see if rate limiting is working as intended. Here's a Node.js script using `node-fetch` to send a query:

```TypeScript
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
      } else if (response.status === 429) {
        const text = await response.text();
        console.error(`Error: ${text}`);
      }

    } catch (error) {
      console.error('Error:', error);
    }
  }
})();
```

Running this script should provide a response with the list of books from our server:

```JSON
{
  "data": {
    "books": [
      { "id": "1", "title": "The Hobbit", "author": "J.R.R. Tolkien" },
      { "id": "2", "title": "Harry Potter", "author": "J.K. Rowling" }
    ]
  }
}
```

If you exceed the rate limit by running this script more than 100 times in 15 minutes, you should see a `429 Too Many Requests` response.

## Lesson Summary
In this lesson, we covered:

- Defining a simple **GraphQL** schema.
- Applying rate limiting middleware to an *Express* app.
- Integrating **Apollo Server** with **Express** to secure GraphQL APIs.
- Testing the implementation to observe rate limiting in action.

By applying these techniques, you ensure your GraphQL API is more secure and can handle high loads in a stable manner. Well done on reaching the end of this course! Now, it's time to put your knowledge into practice with the exercises that follow. Keep exploring and refining your skills in GraphQL and API security.
