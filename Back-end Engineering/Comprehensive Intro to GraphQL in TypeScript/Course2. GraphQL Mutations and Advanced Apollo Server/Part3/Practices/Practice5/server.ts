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
// const BOOK_ADDED = 'BOOK_ADDED';

// // Define schema with subscriptions
// const typeDefs = gql`
//   type Book {
//     // TODO: Add Book fields
//   }

//   type Query {
//     // TODO: Add Query fields (list of books)
//   }

//   type Mutation {
//     // TODO: Add `addBook` mutation declaration
//   }

//   type Subscription {
//     // TODO: Add the `bookAdded` subscription declaration
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
//   },
//   Mutation: {
//     addBook: (_: any, { title, author }: { title: string, author: string }) => {
//       const newBook = { id: uuidv4(), title, author };
//       books.push(newBook);
//       // TODO: Notify subscription about the added book
//       return newBook;
//     },
//   },
//   Subscription: {
//     bookAdded: {
//       // TODO: Implement subscription
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
const BOOK_ADDED = 'BOOK_ADDED';

// Define schema with subscriptions
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!): Book
  }

  type Subscription {
    bookAdded: Book
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
  },
  Mutation: {
    addBook: (_: any, { title, author }: { title: string; author: string }) => {
      const newBook = { id: uuidv4(), title, author };
      books.push(newBook);
      pubsub.publish(BOOK_ADDED, { bookAdded: newBook });
      return newBook;
    },
  },
  Subscription: {
    bookAdded: {
      subscribe: () => pubsub.asyncIterator([BOOK_ADDED]),
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
