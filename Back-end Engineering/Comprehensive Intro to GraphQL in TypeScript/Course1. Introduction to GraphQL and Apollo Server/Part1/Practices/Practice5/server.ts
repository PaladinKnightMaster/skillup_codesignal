// // TODO: Import Apollo Server and gql from 'apollo-server'
// import { ApolloServer, gql } from 'apollo-server';
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

// // TODO: Define schema in typeDefs with a single Query type field `hello` returning a String.
// const typeDefs = ____ ;

// // TODO: Define resolver for the `hello` field to return 'Hello, Superheroes!'
// const resolvers = ____ ;

// // TODO: Initialize a new Apollo Server instance with the schema and resolver
// const server = new ApolloServer(____);

// // TODO: Start the server and log the URL where it's running
// server.listen().then(____);

// TODO: Import Apollo Server and gql from 'apollo-server'
import { ApolloServer, gql } from 'apollo-server';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// TODO: Define schema in typeDefs with a single Query type field `hello` returning a String.
const typeDefs =  gql`
  type Query {
    hello: String
  }
`;

// TODO: Define resolver for the `hello` field to return 'Hello, Superheroes!'
const resolvers = {
  Query: {
    hello: () => 'Hello, Superheroes!',
  },
} ;

// TODO: Initialize a new Apollo Server instance with the schema and resolver
const server = new ApolloServer({ typeDefs, resolvers });

// TODO: Start the server and log the URL where it's running
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});