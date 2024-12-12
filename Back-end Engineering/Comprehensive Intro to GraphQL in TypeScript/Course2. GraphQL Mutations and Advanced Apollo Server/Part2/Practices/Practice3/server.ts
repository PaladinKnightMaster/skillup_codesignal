// import { ApolloServer, gql } from 'apollo-server';

// // Define schema with nested queries
// const typeDefs = gql`
//   type Composer {
//     id: ID!
//     name: String!
//     songs: [Song]
//   }

//   type Song {
//     id: ID!
//     title: String!
//     composer: Composer
//   }

//   type Query {
//     songs: [Song]
//     composers: [Composer]
//   }
// `;

// // Sample data
// const composers = [
//   { id: '1', name: 'Hans Zimmer' },
//   { id: '2', name: 'John Williams' }
// ];

// const songs = [
//   { id: '1', title: 'Time', composer: '1' },
//   { id: '2', title: 'Star Wars Theme', composer: '2' }
// ];

// // TODO: Define resolvers with nested queries
// const resolvers = {
//   Query: {
//   },
//   Song: {
//   },
//   Composer: {
//   }
// };

// // Initialize Apollo Server
// const server = new ApolloServer({ typeDefs, resolvers });

// // Start the server
// server.listen().then(({ url }: { url: string }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql } from 'apollo-server';

// Define schema with nested queries
const typeDefs = gql`
  type Composer {
    id: ID!
    name: String!
    songs: [Song]
  }

  type Song {
    id: ID!
    title: String!
    composer: Composer
  }

  type Query {
    songs: [Song]
    composers: [Composer]
  }
`;

// Sample data
const composers = [
  { id: '1', name: 'Hans Zimmer' },
  { id: '2', name: 'John Williams' }
];

const songs = [
  { id: '1', title: 'Time', composer: '1' },
  { id: '2', title: 'Star Wars Theme', composer: '2' }
];

// TODO: Define resolvers with nested queries
const resolvers = {
  Query: {
    songs: () => songs,
    composers: () => composers,
  },
  Song: {
    composer: (song: any) => composers.find(composer => composer.id === song.composer),
  },
  Composer: {
    songs: (composer: any) => songs.filter(song => song.composer === composer.id),
  }
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀 Server ready at ${url}`);
});