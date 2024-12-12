// import { ApolloServer, gql } from 'apollo-server';

// // Define schema with nested queries
// const typeDefs = gql`
//   type Director {
//       // TODO: Define the Director Type
//   }

//   type Movie {
//       // TODO: Define the Movie Type
//   }

//   type Query {
//       // TODO: Define the Movie Type, consisting of a list of movies and list of directors
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

// // TODO: Define resolvers with nested queries
// const resolvers = {
//   Query: {
//     // TODO: Fetch list of movies
//     // TODO: Fetch list of directors
//   },
//   Movie: {
//     // TODO: Resolve director for each movie
//   },
//   Director: {
//     // TODO: Resolve movies for each director
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

// TODO: Define resolvers with nested queries
const resolvers = {
  Query: {
    // TODO: Fetch list of movies
    movies: () => movies,
    // TODO: Fetch list of directors
    directors: () => directors
  },
  Movie: {
    // TODO: Resolve director for each movie
    director: (movie: any) => directors.find(director => director.id === movie.director)
  },
  Director: {
    // TODO: Resolve movies for each director
    movies: (director: any) => movies.filter(movie => movie.director === director.id)
  },
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀 Server ready at ${url}`);
});