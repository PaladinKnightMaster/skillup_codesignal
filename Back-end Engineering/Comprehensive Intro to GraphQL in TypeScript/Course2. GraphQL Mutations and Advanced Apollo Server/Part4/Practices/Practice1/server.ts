// import { ApolloServer, gql } from 'apollo-server';

// // Define schema
// const typeDefs = gql`
//   type Movie {
//     id: ID!
//     title: String!
//     director: String!
//   }

//   type Query {
//     localMovies: [Movie]
//     externalMovies: [Movie]
//   }
// `;

// // Resolvers
// const resolvers = {
//   Query: {
//     localMovies: () => [
//       { id: '1', title: 'Inception', director: 'Christopher Nolan' },
//       { id: '2', title: 'The Matrix', director: 'The Wachowskis' },
//     ],
//     externalMovies: () => [
//       { id: '3', title: 'Interstellar', director: 'Christopher Nolan' },
//       { id: '4', title: 'The Matrix Reloaded', director: 'The Wachowskis' },
//     ],
//   },
// };

// const server = new ApolloServer({ typeDefs, resolvers });

// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql } from 'apollo-server';

// Define schema
const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    director: String!
  }

  type Query {
    localMovies: [Movie]
    externalMovies: [Movie]
  }
`;

// Resolvers
const resolvers = {
  Query: {
    localMovies: () => [
      { id: '1', title: 'Inception', director: 'Christopher Nolan' },
      { id: '2', title: 'The Matrix', director: 'The Wachowskis' },
    ],
    externalMovies: () => {
      const url = 'https://ghibliapi.vercel.app/films';
      return fetch(url)
        .then((response) => response.json())
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});