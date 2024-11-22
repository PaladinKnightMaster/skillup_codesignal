// import { ApolloServer, gql } from 'apollo-server';
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

// // Define schema definitions
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// // Define resolvers
// const resolvers = {
//   Query: {
//     // TODO: The resolver should return a string `"Hello, GraphQL!"`
//     hello: ____,
//   },
// };

// // Initialize Apollo Server
// const server = new ApolloServer(____);

// // Start the server
// server.listen().then(____) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql } from 'apollo-server';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Define schema definitions
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define resolvers
const resolvers = {
  Query: {
    // TODO: The resolver should return a string `"Hello, GraphQL!"`
    hello: () => 'Hello, GraphQL!',
  },
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});