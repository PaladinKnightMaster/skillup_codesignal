// import { ApolloServer, gql } from 'apollo-server';
// import fetch from 'node-fetch';

// // Define schema
// const typeDefs = gql`
//   type Movie {
//     id: ID!
//     title: String!
//     director: String!
//   }

//   type Query {
//     movies: [Movie]
//     externalMovies: [Movie]
//   }
// `;

// // Resolvers
// const resolvers = {
//   Query: {
//     movies: () => [
//       { id: '1', title: 'Inception', director: 'Christopher Nolan' },
//       { id: '2', title: 'The Matrix', director: 'The Wachowskis' }
//     ],
//     // TODO: implement external movies resolver. Request movies from `https://api.tvmaze.com/shows`.
//     // TVmaze API does not provide director info
//     externalMovies: ____
//   }
// };

// // Initialize Apollo Server
// const server = new ApolloServer({ typeDefs, resolvers });

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql } from 'apollo-server';
import fetch from 'node-fetch';

// Define schema
const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    director: String!
  }

  type Query {
    movies: [Movie]
    externalMovies: [Movie]
  }
`;

// Resolvers
const resolvers = {
  Query: {
    movies: () => [
      { id: '1', title: 'Inception', director: 'Christopher Nolan' },
      { id: '2', title: 'The Matrix', director: 'The Wachowskis' }
    ],
    // TODO: implement external movies resolver. Request movies from `https://api.tvmaze.com/shows`.
    // TVmaze API does not provide director info
    externalMovies: async () => {
      const response = await fetch('https://api.tvmaze.com/shows');
      const data = await response.json();
      return data.map((show: any) => ({ id: show.id, title: show.name, director: 'Unknown' }));
    }
  }
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});