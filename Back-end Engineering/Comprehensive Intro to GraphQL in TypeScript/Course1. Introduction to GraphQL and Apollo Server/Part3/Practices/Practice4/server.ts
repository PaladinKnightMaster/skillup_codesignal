// import { ApolloServer, gql } from 'apollo-server';

// // Define schema with arguments
// const typeDefs = gql`
//   type Book {
//     id: ID!
//     title: String!
//     author: String!
//   }

//   // TODO: Add a new type Movie with fields id, title, and director

//   type Query {
//     books: [Book]
//     book(id: ID!): Book
//     // TODO: Add query types to fetch list of movies and a movie by ID
//   }
// `;

// // Sample data
// const books = [
//   { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
//   { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' },
// ];

// // TODO: Add sample data for movies
// const movies = [
//   // TODO: Add sample movies with ids, titles, and directors
// ];

// // Resolvers
// const resolvers = {
//   Query: {
//     books: () => books,
//     book: (_: any, args: { id: string }) => books.find(book => book.id === args.id),
//     // TODO: Add resolvers for fetching movies and a movie by ID
//   },
// };

// // Initialize Apollo Server
// const server = new ApolloServer({ typeDefs, resolvers });

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql } from 'apollo-server';

// Define schema with arguments
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  // TODO: Add a new type Movie with fields id, title, and director
  type Movie {
    id: ID!
    title: String!
    director: String!
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
    // TODO: Add query types to fetch list of movies and a movie by ID
    movies: [Movie]
    movie(id: ID!): Movie
  }
`;

// Sample data
const books = [
  { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' },
];

// TODO: Add sample data for movies
const movies = [
  // TODO: Add sample movies with ids, titles, and directors
  { id: '1', title: 'Inception', director: 'Christopher Nolan' },
  { id: '2', title: 'The Matrix', director: 'The Wachowskis' },
];

// Resolvers
const resolvers = {
  Query: {
    books: () => books,
    book: (_: any, args: { id: string }) => books.find(book => book.id === args.id),
    // TODO: Add resolvers for fetching movies and a movie by ID
    movies: () => movies,
    movie: (_: any, args: { id: string }) => movies.find(movie => movie.id === args.id),
  },
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});