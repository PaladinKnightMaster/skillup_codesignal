// import express from 'express';
// import { ApolloServer, gql } from 'apollo-server-express';

// // Define schema
// const typeDefs = gql`
//   type Actor {
//     id: ID!
//     name: String!
//     age: Int!
//   }

//   type Query {
//     actors: [Actor]
//     actor(id: ID!): Actor
//   }
// `;

// // Sample data
// let actors = [
//   { id: '1', name: 'Robert Downey Jr.', age: 56 },
//   { id: '2', name: 'Scarlett Johansson', age: 36 },
// ];

// // Resolvers
// const resolvers = {
//   Query: {
//     actors: () => actors,
//     actor: (_: unknown, args: { id: string }) => actors.find(actor => actor.id === args.id),
//   },
// };

// // TODO: Initialize Express app
// const app = ____;

// const startApolloServer = async () => {
//     // TODO: Initialize Apollo Server and apply its middleware to the Express app
// };

// startApolloServer();

import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

// Define schema
const typeDefs = gql`
  type Actor {
    id: ID!
    name: String!
    age: Int!
  }

  type Query {
    actors: [Actor]
    actor(id: ID!): Actor
  }
`;

// Sample data
let actors = [
  { id: '1', name: 'Robert Downey Jr.', age: 56 },
  { id: '2', name: 'Scarlett Johansson', age: 36 },
];

// Resolvers
const resolvers = {
  Query: {
    actors: () => actors,
    actor: (_: unknown, args: { id: string }) => actors.find(actor => actor.id === args.id),
  },
};

// TODO: Initialize Express app
const app = express();

const startApolloServer = async () => {
    // TODO: Initialize Apollo Server and apply its middleware to the Express app
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start(); // Ensure the server is started before applying middleware
    server.applyMiddleware({ app, path: '/graphql' });

    // Start the Express server
    app.listen({ port: 4000 }, () => {
      console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    });
};

startApolloServer();