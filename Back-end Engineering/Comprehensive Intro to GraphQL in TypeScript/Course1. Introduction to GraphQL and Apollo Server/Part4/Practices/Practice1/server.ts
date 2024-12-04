// import { ApolloServer, gql } from 'apollo-server';

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

// // Initialize Apollo Server
// const server = new ApolloServer({ typeDefs, resolvers });

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import express from 'express';
const app = express();
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

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
};

startApolloServer();