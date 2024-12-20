// import { ApolloServer, gql } from 'apollo-server';

// // Define schema with nested types and pagination
// const typeDefs = gql`
//   type Actor {
//     // TODO: set up Actor type with 'id' and 'name' fields
//   }

//   type StreamingService {
//     // TODO: set up StreamingService type with 'id' and 'name' fields
//   }

//   type Film {
//     // TODO: set up Film type with 'id', 'title', 'actors', and 'streamingService' fields
//   }

//   type Query {
//     // TODO: set up queries:
//     // films(limit, offset): [Film]
//     // actors: [Actor]
//     // streamingServices: [StreamingService]
//   }
// `;

// // Sample data
// const actors = [
//   { id: '1', name: 'Actor 1' },
//   { id: '2', name: 'Actor 2' }
// ];

// const streamingServices = [
//   { id: '1', name: 'Service 1' },
//   { id: '2', name: 'Service 2' },
// ];

// const films = [
//   { id: '1', title: 'Film 1', actors: [actors[0], actors[1]], streamingService: streamingServices[0] },
//   { id: '2', title: 'Film 2', actors: [actors[1]], streamingService: streamingServices[1] },
//   // Add more sample films...
// ];

// // Resolvers
// const resolvers = {
//   Query: {
//     // TODO: Implement pagination logic in the resolver
//     films: ___________,
//     actors: ___________,
//     streamingServices: ___________
//   },
//   Film: {
//     actors: ___________,
//     streamingService: ___________
//   }
// };

// // Initialize Apollo Server
// const server = new ApolloServer({ typeDefs, resolvers });

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql } from 'apollo-server';

// Define schema with nested types and pagination
const typeDefs = gql`
  type Actor {
    id: ID!
    name: String!
  }

  type StreamingService {
    id: ID!
    name: String!
  }

  type Film {
    id: ID!
    title: String!
    actors: [Actor]
    streamingService: StreamingService
  }

  type Query {
    films(limit: Int, offset: Int): [Film]
    actors: [Actor]
    streamingServices: [StreamingService]
  }
`;

// Sample data
const actors = [
  { id: '1', name: 'Actor 1' },
  { id: '2', name: 'Actor 2' },
];

const streamingServices = [
  { id: '1', name: 'Service 1' },
  { id: '2', name: 'Service 2' },
];

const films = [
  { id: '1', title: 'Film 1', actorIds: ['1', '2'], streamingServiceId: '1' },
  { id: '2', title: 'Film 2', actorIds: ['2'], streamingServiceId: '2' },
];

// Resolvers
const resolvers = {
  Query: {
    films: (_: unknown, { limit = 10, offset = 0 }: { limit?: number; offset?: number }) =>
      films.slice(offset, offset + limit),
    actors: () => actors,
    streamingServices: () => streamingServices,
  },
  Film: {
    actors: (film: { actorIds: string[] }) =>
      actors.filter(actor => film.actorIds.includes(actor.id)),
    streamingService: (film: { streamingServiceId: string }) =>
      streamingServices.find(service => service.id === film.streamingServiceId),
  },
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
