// import { ApolloServer, gql } from 'apollo-server';

// // Define schema with nested types
// const typeDefs = gql`
//   type Actor {
//     // TODO: Define Actor's schema
//     // Fields: `id`, `name`, `films`
//   }

//   type Film {
//     // TODO: Define Film's schema
//     // Fields: `id`, `title`, `actors`, `streamingService`
//   }

//   type StreamingService {
//     // TODO: Define Streaming Service's schema
//     // Fields: `id`, `name`, `films`
//   }

//   type Query {
//     films: [Film]
//     actors: [Actor]
//     streamingServices: [StreamingService]
//   }
// `;

// // Sample data
// const streamingServices = [
//   { id: '1', name: 'Netflix' },
//   { id: '2', name: 'Hulu' }
// ];

// const actors = [
//   { id: '1', name: 'Robert Downey Jr.' },
//   { id: '2', name: 'Scarlett Johansson' }
// ];

// const films = [
//   { id: '1', title: 'Avengers: Endgame', streamingService: streamingServices[0] },
//   { id: '2', title: 'Iron Man', streamingService: streamingServices[1] }
// ];

// // Updating actors to include film references
// actors[0].films = [films[0], films[1]];
// actors[1].films = [films[0]];

// // Updating films to include actor references
// films[0].actors = [actors[0], actors[1]];
// films[1].actors = [actors[0]];

// // Updating streaming services to include film references
// streamingServices[0].films = [films[0]];
// streamingServices[1].films = [films[1]];

// // Resolvers with nested data
// const resolvers = {
//   Query: {
//     films: ____,
//     actors: ____,
//     streamingServices: ____,
//   },
//   Actor: {
//     films: ____,
//   },
//   Film: {
//     actors: ____,
//     streamingService: ____,
//   },
//   StreamingService: {
//     films: ____,
//   },
// };

// // Initialize Apollo Server
// const server = new ApolloServer({ typeDefs, resolvers });

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql } from 'apollo-server';

// Define schema with nested types
const typeDefs = gql`
  type Actor {
    id: ID!
    name: String!
    films: [Film]
  }

  type Film {
    id: ID!
    title: String!
    actors: [Actor]
    streamingService: StreamingService
  }

  type StreamingService {
    id: ID!
    name: String!
    films: [Film]
  }

  type Query {
    films: [Film]
    actors: [Actor]
    streamingServices: [StreamingService]
  }
`;

// Sample data
const streamingServices = [
  { id: '1', name: 'Netflix' },
  { id: '2', name: 'Hulu' },
];

const actors = [
  { id: '1', name: 'Robert Downey Jr.', films: [] },
  { id: '2', name: 'Scarlett Johansson', films: [] },
];

const films = [
  { id: '1', title: 'Avengers: Endgame', actors: [], streamingServiceId: '1' },
  { id: '2', title: 'Iron Man', actors: [], streamingServiceId: '2' },
];

// Link films with actors
films[0].actors = [actors[0], actors[1]]; // Avengers: Endgame
films[1].actors = [actors[0]]; // Iron Man

// Link actors with films
actors[0].films = [films[0], films[1]]; // Robert Downey Jr.
actors[1].films = [films[0]]; // Scarlett Johansson

// Link streaming services with films
streamingServices[0].films = [films[0]]; // Netflix
streamingServices[1].films = [films[1]]; // Hulu

// Resolvers with nested data
const resolvers = {
  Query: {
    films: () => films,
    actors: () => actors,
    streamingServices: () => streamingServices,
  },
  Actor: {
    films: (actor: { id: string }) =>
      films.filter(film => film.actors.some(a => a.id === actor.id)),
  },
  Film: {
    actors: (film: { id: string }) =>
      actors.filter(actor => actor.films.some(f => f.id === film.id)),
    streamingService: (film: { streamingServiceId: string }) =>
      streamingServices.find(service => service.id === film.streamingServiceId),
  },
  StreamingService: {
    films: (service: { id: string }) =>
      films.filter(film => film.streamingServiceId === service.id),
  },
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
