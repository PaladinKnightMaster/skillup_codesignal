// import express from 'express';
// import { ApolloServer, gql } from 'apollo-server-express';

// // Define schema
// const typeDefs = gql`
//   type Book {
//     id: ID!
//     title: String!
//     author: String!
//   }

//   type Query {
//     books: [Book]
//     book(id: ID!): Book
//   }
// `;

// // Sample data
// let books = [
//   { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
//   { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' },
// ];

// // Resolvers
// const resolvers = {
//   Query: {
//     books: () => books,
//     book: (_: unknown, args: { id: string }) => books.find(book => book.id === args.id),
//   },
// };

// // Initialize Express app
// const app = express();

// // Initialize Apollo Server
// const startApolloServer = async () => {
//   const server = new ApolloServer({ typeDefs, resolvers });
//   server.start(); // Ensure the server is started before applying middleware
//   server.applyMiddleware({ app, path: '/graphql' });

//   // Start the Express server
//   app.listen({ port: 4000 }, () => {
//     console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
//   });
// };

// startApolloServer();

import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

// Define schema
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }
`;

// Sample data
let books = [
  { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' },
];

// Resolvers
const resolvers = {
  Query: {
    books: () => books,
    book: (_: unknown, args: { id: string }) => books.find(book => book.id === args.id),
  },
};

// Initialize Express app
const app = express();

// Initialize Apollo Server
const startApolloServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start(); // Ensure the server is started before applying middleware
  server.applyMiddleware({ app, path: '/graphql' });

  // Start the Express server
  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
};

startApolloServer();