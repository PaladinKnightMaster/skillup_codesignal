// import { ApolloServer, gql } from 'apollo-server';
// import DataLoader from 'dataloader';

// // Sample data
// const actors = [
//   { id: '1', name: 'Leonardo DiCaprio' },
//   { id: '2', name: 'Brad Pitt' }
// ];
// const films = [
//   { id: '1', title: 'Inception', actor: '1', streamingService: 'Netflix' },
//   { id: '2', title: 'Once Upon a Time in Hollywood', actor: '2', streamingService: 'Hulu' }
// ];
// const streamingServices = [
//   { id: '1', name: 'Netflix' },
//   { id: '2', name: 'Hulu' }
// ];

// // Define schema
// const typeDefs = gql`
//   type Actor {
//     id: ID!
//     name: String!
//   }

//   type Film {
//     id: ID!
//     title: String!
//     actor: Actor
//     streamingService: String!
//   }

//   type Query {
//     films: [Film]
//     actor(id: ID!): Actor
//   }
// `;

// // TODO: Fill in the missing parts in resolvers
// const resolvers = {
//   Query: {
//     films: ______,
//     actor: ______
//   },
//   Film: {
//     actor: ______
//   }
// };

// // TODO: Initialize the dataloader
// const actorLoader = new DataLoader(______);

// // Initialize Apollo Server
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: () => ({ actorLoader })
// });

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql } from 'apollo-server';
import DataLoader from 'dataloader';

// Sample data
const actors = [
  { id: '1', name: 'Leonardo DiCaprio' },
  { id: '2', name: 'Brad Pitt' }
];
const films = [
  { id: '1', title: 'Inception', actor: '1', streamingService: 'Netflix' },
  { id: '2', title: 'Once Upon a Time in Hollywood', actor: '2', streamingService: 'Hulu' }
];
const streamingServices = [
  { id: '1', name: 'Netflix' },
  { id: '2', name: 'Hulu' }
];

// Define schema
const typeDefs = gql`
  type Actor {
    id: ID!
    name: String!
  }

  type Film {
    id: ID!
    title: String!
    actor: Actor
    streamingService: String!
  }

  type Query {
    films: [Film]
    actor(id: ID!): Actor
  }
`;

// Resolvers
const resolvers = {
  Query: {
    films: () => films,
    actor: async (_: unknown, { id }: { id: string }, { actorLoader }: { actorLoader: DataLoader<string, typeof actors[0]> }) =>
      actorLoader.load(id),
  },
  Film: {
    actor: async (film: { actor: string }, _: unknown, { actorLoader }: { actorLoader: DataLoader<string, typeof actors[0]> }) =>
      actorLoader.load(film.actor),
  }
};

// Initialize the DataLoader
const actorLoader = new DataLoader(async (ids: readonly string[]) => {
  // Map actor IDs to corresponding actor objects
  const actorMap = new Map(actors.map(actor => [actor.id, actor]));
  return ids.map(id => actorMap.get(id) || null);
});

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ actorLoader }),
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
