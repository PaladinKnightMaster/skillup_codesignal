// import { ApolloServer, gql } from 'apollo-server';

// // Schema definition
// const typeDefs = gql`
//   type Book {
//     title, author: String
//   }

//   type Query {
//     books: [Book]
//   }
// `;

// // Sample data
// const books = [
//   { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
//   { title: 'Harry Potter', author: 'J.K. Rowling' },
// ];

// // Resolvers
// const resolvers = {
//   Query: {
//     books: books,
//   },
// };

// // Initialize Apollo Server
// const server = new ApolloServer({ typeDefs, resolvers });

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql } from 'apollo-server';

// Schema definition
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

// Sample data
const books = [
  { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { title: 'Harry Potter', author: 'J.K. Rowling' },
];

// Resolvers
const resolvers = {
  Query: {
    books: () => books,
  },
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});