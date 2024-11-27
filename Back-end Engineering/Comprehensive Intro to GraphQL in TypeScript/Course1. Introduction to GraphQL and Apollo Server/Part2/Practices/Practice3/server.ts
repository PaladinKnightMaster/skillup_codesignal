// import { ApolloServer, gql } from 'apollo-server';

// const typeDefs = gql`
//   type Book {
//     title: String
//     author: String
//     // TODO: Add publisher field to the Book type
//   }

//   // TODO: Define a new type Publisher with name and location fields

//   type Query {
//     books: [Book]
//   }
// `;

// // TODO: enrich sample data with the publisher data
// const books = [
//   { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
//   { title: 'Harry Potter', author: 'J.K. Rowling' },
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

const typeDefs = gql`
  type Book {
    title: String
    author: String
    // TODO: Add publisher field to the Book type
    publisher: Publisher
  }

  // TODO: Define a new type Publisher with name and location fields
  type Publisher {
    name: String
    location: String
  }

  type Query {
    books: [Book]
  }
`;

// TODO: enrich sample data with the publisher data
const books = [
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', publisher: { name: 'Penguin', location: 'London' } },
  { title: 'Harry Potter', author: 'J.K. Rowling', publisher: { name: 'Bloomsbury', location: 'London' } },
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