// import { ApolloServer, gql } from 'apollo-server-express';
// import express from 'express';
// import { PubSub } from 'graphql-subscriptions';
// import { v4 as uuidv4 } from 'uuid';
// import { createServer } from 'http';
// import { SubscriptionServer } from 'subscriptions-transport-ws';
// import { execute, subscribe } from 'graphql';
// import { makeExecutableSchema } from '@graphql-tools/schema';

// // Initialize PubSub
// const pubsub = new PubSub();
// const MAGAZINE_ADDED = 'MAGAZINE_ADDED';

// // Define schema with subscriptions
// const typeDefs = gql`
//   type Magazine {
//     id: ID!
//     title: String!
//     publisher: String!
//   }

//   type Query {
//     magazines: [Magazine]
//   }

//   type Mutation {
//     addMagazine(title: String!, publisher: String!): Magazine
//   }

//   type Subscription {
//     magazineAdded: Magazine
//   }
// `;

// // Sample data
// let magazines = [
//   { id: '1', title: 'Tech Monthly', publisher: 'Tech Publishers' },
//   { id: '2', title: 'Science Weekly', publisher: 'Science Publishers' },
// ];

// // Resolvers
// const resolvers = {
//   Query: {
//     magazines: () => magazines,
//   },
//   Mutation: {
//     addMagazine: (_: any, { title, publisher }: { title: string, publisher: string }) => {
//       const newMagazine = { id: uuidv4(), title, publisher };
//       magazines.push(newMagazine);
//       pubsub.publish(MAGAZINE_ADDED, { __________ });
//       return newMagazine;
//     },
//   },
//   Subscription: {
//     magazineAdded: {
//       subscribe: () => pubsub.asyncIterator([MAGAZINE_ADDED]),
//     },
//   },
// };

// // Define the schema
// const schema = makeExecutableSchema({ typeDefs, resolvers });

// // Initialize the Express application
// const app = express();

// // Create the HTTP server
// const httpServer = createServer(app);

// // Initialize Apollo Server
// const server = new ApolloServer({
//   schema,
//   context: ({ req }) => {
//     const token = req.headers.authorization || '';
//     return { token };
//   }
// });

// // Start the Apollo server and Subscription server
// const startServer = async () => {
//   await server.start();
//   server.applyMiddleware({ app });

//   SubscriptionServer.create(
//     { schema, execute, subscribe },
//     { server: httpServer, path: '/graphql' }
//   );

//   httpServer.listen(4000, () => {
//     console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
//     console.log(`🚀 Subscriptions ready at ws://localhost:4000/graphql`);
//   });
// };

// startServer();

import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import { PubSub } from 'graphql-subscriptions';
import { v4 as uuidv4 } from 'uuid';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

// Initialize PubSub
const pubsub = new PubSub();
const MAGAZINE_ADDED = 'MAGAZINE_ADDED';

// Define schema with subscriptions
const typeDefs = gql`
  type Magazine {
    id: ID!
    title: String!
    publisher: String!
  }

  type Query {
    magazines: [Magazine]
  }

  type Mutation {
    addMagazine(title: String!, publisher: String!): Magazine
  }

  type Subscription {
    magazineAdded: Magazine
  }
`;

// Sample data
let magazines = [
  { id: '1', title: 'Tech Monthly', publisher: 'Tech Publishers' },
  { id: '2', title: 'Science Weekly', publisher: 'Science Publishers' },
];

// Resolvers
const resolvers = {
  Query: {
    magazines: () => magazines,
  },
  Mutation: {
    addMagazine: (_: any, { title, publisher }: { title: string; publisher: string }) => {
      const newMagazine = { id: uuidv4(), title, publisher };
      magazines.push(newMagazine);
      pubsub.publish(MAGAZINE_ADDED, { magazineAdded: newMagazine });
      return newMagazine;
    },
  },
  Subscription: {
    magazineAdded: {
      subscribe: () => pubsub.asyncIterator([MAGAZINE_ADDED]),
    },
  },
};

// Define the schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Initialize the Express application
const app = express();

// Create the HTTP server
const httpServer = createServer(app);

// Initialize Apollo Server
const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    return { token };
  },
});

// Start the Apollo server and Subscription server
const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: httpServer, path: '/graphql' }
  );

  httpServer.listen(4000, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    console.log(`🚀 Subscriptions ready at ws://localhost:4000/graphql`);
  });
};

startServer();
