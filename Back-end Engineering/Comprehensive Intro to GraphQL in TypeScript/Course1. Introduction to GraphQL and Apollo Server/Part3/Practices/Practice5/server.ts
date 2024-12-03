// import { ApolloServer, gql } from 'apollo-server';

// // TODO: Define the schema for Movie with fields id, title, and director
// // TODO: Define the Query type with two fields: movies and movie(id: ID!)

// // Sample data
// const movies = [
//   { id: '1', title: 'Inception', director: 'Christopher Nolan' },
//   { id: '2', title: 'Titanic', director: 'James Cameron' },
// ];

// // TODO: Write resolvers to fetch movies and a movie by ID
// const resolvers = {
//   Query: {
//     ____
//   },
// };

// // TODO: Initialize Apollo Server with typeDefs and resolvers

// // TODO: Start the server and log the URL

import { ApolloServer, gql } from 'apollo-server';

// TODO: Define the schema for Movie with fields id, title, and director
// TODO: Define the Query type with two fields: movies and movie(id: ID!)
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

// Sample data
const movies = [
  { id: '1', title: 'Inception', director: 'Christopher Nolan' },
  { id: '2', title: 'Titanic', director: 'James Cameron' },
];

// TODO: Write resolvers to fetch movies and a movie by ID
const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_: any, args: { id: string }) => movies.find(movie => movie.id === args.id),
  },
};

// TODO: Initialize Apollo Server with typeDefs and resolvers
const server = new ApolloServer({ typeDefs, resolvers });

// TODO: Start the server and log the URL
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});