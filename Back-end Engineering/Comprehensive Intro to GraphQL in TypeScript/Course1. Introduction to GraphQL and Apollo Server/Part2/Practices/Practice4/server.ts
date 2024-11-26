// import { ApolloServer, gql } from 'apollo-server';

// // Schema definition
// const typeDefs = gql`
//   type Song {
//     title: String
//     artist: String
//   }

//   type Query {
//     // TODO: Define a query to fetch an array of Song objects
//     ________
//   }
// `;

// // Sample data
// const songs = [
//   { title: 'Bohemian Rhapsody', artist: 'Queen' },
//   { title: 'Imagine', artist: 'John Lennon' },
// ];

// // Resolvers
// const resolvers = {
//   Query: {
//     // TODO: Write the resolver to return the array of songs
//     ________
//   },
// };

// // Initialize Apollo Server
// const server = new ApolloServer({ typeDefs, resolvers });

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql } from 'apollo-server';

// Schema definition
const typeDefs = gql`
  type Song {
    title: String
    artist: String
  }

  type Query {
    // TODO: Define a query to fetch an array of Song objects
    songs: [Song]
  }
`;

// Sample data
const songs = [
  { title: 'Bohemian Rhapsody', artist: 'Queen' },
  { title: 'Imagine', artist: 'John Lennon' },
];

// Resolvers
const resolvers = {
  Query: {
    // TODO: Write the resolver to return the array of songs
    songs: () => songs,
  },
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});