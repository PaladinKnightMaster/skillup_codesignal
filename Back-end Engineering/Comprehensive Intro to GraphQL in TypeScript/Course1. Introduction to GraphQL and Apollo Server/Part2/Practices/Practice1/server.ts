// import { ApolloServer, gql } from 'apollo-server';

// // Schema definition
// const typeDefs = gql`
//   type Book {
//     title: String
//     author: String
//     // TODO: Add a new field 'year' of type Int to the Book type
//   }

//   type Query {
//     books: [Book]
//   }
// `;

// // Sample data
// const books = [
//   { title: 'The Hobbit', author: 'J.R.R. Tolkien' }, // TODO: Add 'year' field with value 1937
//   { title: 'Harry Potter', author: 'J.K. Rowling' }, // TODO: Add 'year' field with value 1997
// ];

// // Resolvers
// const resolvers = {
//   Query: {
//     books: () => books,
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
    // TODO: Add a new field 'year' of type Int to the Book type
    year: Int
  }

  type Query {
    books: [Book]
  }
`;

// Sample data
const books = [
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 }, // TODO: Add 'year' field with value 1937
  { title: 'Harry Potter', author: 'J.K. Rowling', year: 1997 }, // TODO: Add 'year' field with value 1997
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