// import { ApolloServer, gql } from 'apollo-server-express';
// import express from 'express';

// // Define schema
// const typeDefs = gql`
//   type Book {
//     id: ID!
//     title: String!
//     author: String!
//   }

//   type Query {
//     books: [Book]
//   }
// `;

// // Sample data
// const books = [
//   { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
//   { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' }
// ];

// // Resolvers
// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };

// // Initialize Express app
// const app = express();

// // TODO: Apply GraphQL rate-limiting middleware to `/graphql` here. It should be limited to 3 requests per 15 seconds.

// // TODO: Apply status endpoint `/status` rate-limiting middleware here. It should be limited to 2 requests per 30 seconds.

// // Add a simple status endpoint
// app.get('/status', (_, res) => {
//   res.send('Server is up and running!');
// });

// // Initialize Apollo Server
// const server = new ApolloServer({ typeDefs, resolvers });

// server.start().then(() => {
//   server.applyMiddleware({ app, path: '/graphql' });

//   // Start the Express server
//   app.listen({ port: 4000 }, () => {
//     console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
//   });
// });

import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import rateLimit from 'express-rate-limit';

// Define schema
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

// Sample data
const books = [
  { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' }
];

// Resolvers
const resolvers = {
  Query: {
    books: () => books,
  },
};

// Initialize Express app
const app = express();

// Apply rate-limiting middleware to `/graphql`
const graphqlLimiter = rateLimit({
  windowMs: 15 * 1000, // 15 seconds
  max: 3, // Limit to 3 requests per windowMs
  handler: (_, res) => {
    res.status(429).send('Too many requests to /graphql - please try again later.');
  }
});
app.use('/graphql', graphqlLimiter);

// Apply rate-limiting middleware to `/status`
const statusLimiter = rateLimit({
  windowMs: 30 * 1000, // 30 seconds
  max: 2, // Limit to 2 requests per windowMs
  handler: (_, res) => {
    res.status(429).send('Too many requests to /status - please try again later.');
  }
});
app.use('/status', statusLimiter);

// Add a simple status endpoint
app.get('/status', (_, res) => {
  res.send('Server is up and running!');
});

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

server.start().then(() => {
  server.applyMiddleware({ app, path: '/graphql' });

  // Start the Express server
  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
});
