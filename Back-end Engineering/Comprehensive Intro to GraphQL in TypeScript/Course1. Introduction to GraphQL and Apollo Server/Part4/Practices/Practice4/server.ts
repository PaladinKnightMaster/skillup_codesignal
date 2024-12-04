// // TODO: Import the necessary modules
// import express from 'express';
// import { ApolloServer, gql } from 'apollo-server-express';

// // TODO: Define the GraphQL schema with a Movie type and corresponding Query type
// // Movie includes three fields: `id`, `title`, `director`
// // Query includes two types of queries: list of all movies and returning movie by its `id`
// const typeDefs = ____ ;

// // TODO: Provide sample data for movies
// let movies = [ ____ ];

// // TODO: Define resolvers for the schema
// const resolvers = { ____ };

// // TODO: Initialize Express app
// const app = ____ ;

// const startApolloServer = async () => {
//   // TODO: Initialize Apollo Server and apply its middleware to the Express app

//   app.listen({ port: 4000 }, () => {
//     console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
//   });
// };

// startApolloServer();

// TODO: Import the necessary modules
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

// TODO: Define the GraphQL schema with a Movie type and corresponding Query type
// Movie includes three fields: `id`, `title`, `director`
// Query includes two types of queries: list of all movies and returning movie by its `id`
const typeDefs = gql`
  type Movie {
  id: ID!
  title: String!
  director: String!
  }

  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
  }
`;

// TODO: Provide sample data for movies
let movies = [ { id: '1', title: 'The Hobbit', director: 'J.R.R. Tolkien' }, { id: '2', title: 'Harry Potter', director: 'J.K. Rowling' } ];

// TODO: Define resolvers for the schema
const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_: unknown, args: { id: string }) => movies.find(movie => movie.id === args.id),
  },
 };

// TODO: Initialize Express app
const app = express();

const startApolloServer = async () => {
  // TODO: Initialize Apollo Server and apply its middleware to the Express app
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start(); // Ensure the server is started before applying middleware
  server.applyMiddleware({ app, path: '/graphql' });

  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
};

startApolloServer();