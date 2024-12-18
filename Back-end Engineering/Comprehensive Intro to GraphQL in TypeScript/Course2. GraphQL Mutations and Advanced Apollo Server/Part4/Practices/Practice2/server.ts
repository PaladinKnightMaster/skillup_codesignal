// import { ApolloServer, gql } from 'apollo-server';
// import fetch from 'node-fetch';

// // Define schema
// const typeDefs = gql`
//   type Album {
//     id: ID!
//     title: String!
//     artist: String!
//   }

//   type Query {
//     albums: [Album]
//     externalAlbums: [Album]
//   }
// `;

// // Resolvers
// const resolvers = {
//   Query: {
//     albums: () => [
//       { id: '1', title: 'Abbey Road', artist: 'The Beatles' },
//       { id: '2', title: 'The Dark Side of the Moon', artist: 'Pink Floyd' }
//     ],
//     externalAlbums: async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/albums');
//       return await response.json();
//     }
//   }
// };

// // Initialize Apollo Server
// const server = new ApolloServer({ typeDefs, resolvers });

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

//Sample api result
// [
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "quidem molestiae enim"
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "sunt qui excepturi placeat culpa"
//   },
// ]

import { ApolloServer, gql } from 'apollo-server';
import fetch from 'node-fetch';

// Define schema
const typeDefs = gql`
  type Album {
    id: ID!
    title: String!
    artist: String
  }

  type Query {
    albums: [Album]
    externalAlbums: [Album]
  }
`;

// Resolvers
const resolvers = {
  Query: {
    albums: () => [
      { id: '1', title: 'Abbey Road', artist: 'The Beatles' },
      { id: '2', title: 'The Dark Side of the Moon', artist: 'Pink Floyd' }
    ],
    externalAlbums: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      return await response.json();
    }
  }
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});