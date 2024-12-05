// import { ApolloServer, gql } from 'apollo-server';
// import { v4 as uuidv4 } from 'uuid';

// // Define schema with mutations
// const typeDefs = gql`
//   type Album {
//       // TODO: Define album type fields (id, title, artist)
//   }

//   type Query {
//       // TODO: Define query fields (albums, album with id)
//   }

//   type Mutation {
//       // TODO: Define mutation fields (addAlbum, deleteAlbum)
//   }
// `;

// // Sample data
// let albums = [
//   { id: '1', title: 'Dark Side of the Moon', artist: 'Pink Floyd' },
//   { id: '2', title: 'Thriller', artist: 'Michael Jackson' },
// ];

// // Resolvers
// const resolvers = {
//   Query: {
//     // TODO: Implement resolvers for queries
//   },
//   Mutation: {
//     // TODO: Implement resolvers for mutations
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
  type Album {
      // TODO: Define album type fields (id, title, artist)
      id: ID!
      title: String!
      artist: String!
  }

  type Query {
      // TODO: Define query fields (albums, album with id)
      albums: [Album]
      album(id: ID!): Album
  }

  type Mutation {
      // TODO: Define mutation fields (addAlbum, deleteAlbum)
      addAlbum(title: String!, artist: String!): Album
      deleteAlbum(id: ID!): Album
  }
`;

// Sample data
let albums = [
  { id: '1', title: 'Dark Side of the Moon', artist: 'Pink Floyd' },
  { id: '2', title: 'Thriller', artist: 'Michael Jackson' },
];

// Resolvers
const resolvers = {
  Query: {
    // TODO: Implement resolvers for queries
    albums: () => albums,
    album: (_: unknown, args: { id: string }) => albums.find(album => album.id === args.id),
  },
  Mutation: {
    // TODO: Implement resolvers for mutations
    addAlbum: (_: unknown, args: { title: string, artist: string }) => {
      const newAlbum = { id: uuidv4(), title: args.title, artist: args.artist };
      albums.push(newAlbum);
      return newAlbum;
    },
    deleteAlbum: (_: unknown, args: { id: string }) => {
      const deletedAlbum = albums.find(album => album.id === args.id);
      albums = albums.filter(album => album.id !== args.id);
      return deletedAlbum;
    },
  },
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});