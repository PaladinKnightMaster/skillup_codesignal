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

// // TODO: Apply rate-limiting middleware here. It should be limited to 10 requests per 10 minutes.

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

// Apply rate-limiting middleware
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 10, // limit each IP to 10 requests per window
  handler: (_, res) => {
    res.status(429).send('Too many requests - please try again later.');
  },
});
app.use('/graphql', limiter); // Apply limiter specifically to /graphql endpoint

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

server.start().then(() => {
  server.applyMiddleware({ app, path: '/graphql' });

  // Start the Express server
  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
});
