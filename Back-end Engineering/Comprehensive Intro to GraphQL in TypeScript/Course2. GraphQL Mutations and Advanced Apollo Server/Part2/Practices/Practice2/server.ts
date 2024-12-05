// import { ApolloServer, gql } from 'apollo-server';

// // Define schema with nested queries
// const typeDefs = gql`
//   type Director {
//     id: ID!
//     name: String!
//     movies: [Movie]
//   }

//   type Movie {
//     id: ID!
//     title: String!
//     director: Director
//   }

//   type Query {
//     movies: [Movie]
//     directors: [Director]
//   }
// `;

// // Sample data
// const directors = [
//   { id: '1', name: 'Christopher Nolan' },
//   { id: '2', name: 'Steven Spielberg' }
// ];

// const movies = [
//   { id: '1', title: 'Inception', director: '1' },
//   { id: '2', title: 'Jurassic Park', director: '2' }
// ];

// // Resolvers with nested queries
// const resolvers = {
//   Query: {
//     movies: () => movies,
//     directors: () => directors,
//   },
//   Movie: {
//     director: (movie: any) => directors.find(director => director.id === movie.id),  // BUG: Incorrectly comparing `movie.id` instead of `movie.director`
//   },
//   Director: {
//     movies: (director: any) => movies.filter(movie => movie.id === director.id),  // BUG: Incorrectly comparing `movie.id` instead of `movie.director`
//   },
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
  type Director {
    id: ID!
    name: String!
    movies: [Movie]
  }

  type Movie {
    id: ID!
    title: String!
    director: Director
  }

  type Query {
    movies: [Movie]
    directors: [Director]
  }
`;

// Sample data
const directors = [
  { id: '1', name: 'Christopher Nolan' },
  { id: '2', name: 'Steven Spielberg' }
];

const movies = [
  { id: '1', title: 'Inception', director: '1' },
  { id: '2', title: 'Jurassic Park', director: '2' }
];

// Resolvers with nested queries
const resolvers = {
  Query: {
    movies: () => movies,
    directors: () => directors,
  },
  Movie: {
    director: (movie: any) => directors.find(director => director.id === movie.director),  // BUG: Incorrectly comparing `movie.id` instead of `movie.director`
  },
  Director: {
    movies: (director: any) => movies.filter(movie => movie.director === director.id),  // BUG: Incorrectly comparing `movie.id` instead of `movie.director`
  },
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀 Server ready at ${url}`);
});