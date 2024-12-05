// import { ApolloServer, gql } from 'apollo-server';
// import { v4 as uuidv4 } from 'uuid';

// // Define schema with mutations
// const typeDefs = gql`
//   type Song {
//     id: ID!
//     title: String!
//     artist: String!
//   }

//   type Query {
//     songs: [Song]
//     song(id: ID!): Song
//   }

//   type Mutation {
//     addSong(title: String!, artist: String!): Song
//     // TODO: Add mutation for deleting a song
//   }
// `;

// // Sample data
// let songs = [
//   { id: '1', title: 'Bohemian Rhapsody', artist: 'Queen' },
//   { id: '2', title: 'Stairway to Heaven', artist: 'Led Zeppelin' },
// ];

// // Resolvers
// const resolvers = {
//   Query: {
//     songs: () => songs,
//     song: (_: any, args: { id: string }) => songs.find(song => song.id === args.id),
//   },
//   Mutation: {
//     addSong: (_: any, { title, artist }: { title: string, artist: string }) => {
//       const newSong = { id: uuidv4(), title, artist };
//       songs.push(newSong);
//       return newSong;
//     },
//     // TODO: Add a resolver for deleting a song
//   },
// };

// // Initialize Apollo Server
// const server = new ApolloServer({ typeDefs, resolvers });

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql } from 'apollo-server';
import { v4 as uuidv4 } from 'uuid';

// Define schema with mutations
const typeDefs = gql`
  type Song {
    id: ID!
    title: String!
    artist: String!
  }

  type Query {
    songs: [Song]
    song(id: ID!): Song
  }

  type Mutation {
    addSong(title: String!, artist: String!): Song
    // TODO: Add mutation for deleting a song
    deleteSong(id: ID!): Song
  }
`;

// Sample data
let songs = [
  { id: '1', title: 'Bohemian Rhapsody', artist: 'Queen' },
  { id: '2', title: 'Stairway to Heaven', artist: 'Led Zeppelin' },
];

// Resolvers
const resolvers = {
  Query: {
    songs: () => songs,
    song: (_: any, args: { id: string }) => songs.find(song => song.id === args.id),
  },
  Mutation: {
    addSong: (_: any, { title, artist }: { title: string, artist: string }) => {
      const newSong = { id: uuidv4(), title, artist };
      songs.push(newSong);
      return newSong;
    },
    // TODO: Add a resolver for deleting a song
    deleteSong: (_: any, { id }: { id: string }) => {
      const songIndex = songs.findIndex(song => song.id === id);
      if (songIndex === -1) return null;
      const [deletedSong] = songs.splice(songIndex, 1);
      return deletedSong;
    }
  },
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});