// import { ApolloServer, gql } from 'apollo-server';

// // Define schema with pagination
// const typeDefs = gql`
//   type Book {
//     id: ID!
//     title: String!
//     author: String!
//   }

//   type Query {
//     books(limit: Int, offset: Int): [Book]
//   }
// `;

// // Sample data
// const books = Array.from({ length: 50 }, (_, i) => ({
//   id: String(i + 1),
//   title: `Book ${i + 1}`,
//   author: `Author ${i + 1}`
// }));

// // Resolvers with incorrect pagination logic
// const resolvers = {
//   Query: {
//     books: (_: unknown, { limit, offset }: { limit?: number; offset?: number }) => books.slice(offset, limit)
//   }
// };

// // Initialize Apollo Server
// const server = new ApolloServer({ typeDefs, resolvers });

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql } from 'apollo-server';

// Define schema with pagination
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books(limit: Int, offset: Int): [Book]
  }
`;

// Sample data
const books = Array.from({ length: 50 }, (_, i) => ({
  id: String(i + 1),
  title: `Book ${i + 1}`,
  author: `Author ${i + 1}`,
}));

// Resolvers with corrected pagination logic
const resolvers = {
  Query: {
    books: (_: unknown, { limit = 10, offset = 0 }: { limit?: number; offset?: number }) =>
      books.slice(offset, offset + limit),
  },
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
