// import { ApolloServer, gql } from 'apollo-server';

// // Define schema with nested types
// const typeDefs = gql`
//   type Author {
//     id: ID!
//     name: String!
//     books: [Book]
//   }

//   type Book {
//     id: ID!
//     title: String!
//     author: Author
//   }

//   type Query {
//     books: [Book]
//     authors: [Author]
//   }
// `;

// // Sample data
// const authors = [
//   { id: '1', name: 'J.R.R. Tolkien' },
//   { id: '2', name: 'J.K. Rowling' }
// ];

// const books = [
//   { id: '1', title: 'The Hobbit', author: authors[0] },
//   { id: '2', title: 'Harry Potter', author: authors[1] }
// ];

// // Resolvers with nested data
// const resolvers = {
//   Query: {
//     books: () => books,
//     authors: () => authors,
//   },
//   Author: {
//     books: (author: { id: string }) => books.filter(book => book.author.id === author.id),
//   },
//   Book: {
//     author: (book: { author: { id: string }}) => authors.find(author => author.id === book.author.id),
//   },
// };

// // Initialize Apollo Server
// const server = new ApolloServer({ typeDefs, resolvers });

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql } from 'apollo-server';

// Define schema with nested types
const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    books: [Book]
  }

  type Book {
    id: ID!
    title: String!
    author: Author
    publisher: Publisher
  }

  type Publisher {
    id: ID!
    name: String!
    books: [Book]
  }

  type Query {
    books: [Book]
    authors: [Author]
    publishers: [Publisher]
  }
`;

// Sample data
const authors = [
  { id: '1', name: 'J.R.R. Tolkien' },
  { id: '2', name: 'J.K. Rowling' }
];

const publishers = [
  { id: '1', name: 'Houghton Mifflin Harcourt' },
  { id: '2', name: 'Bloomsbury' }
];

const books = [
  { id: '1', title: 'The Hobbit', author: authors[0], publisher: publishers[0] },
  { id: '2', title: 'Harry Potter', author: authors[1], publisher: publishers[1] }
];

// Resolvers with nested data
const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
    publishers: () => publishers,
  },
  Author: {
    books: (author: { id: string }) => books.filter(book => book.author.id === author.id),
  },
  Book: {
    author: (book: { author: { id: string }}) => authors.find(author => author.id === book.author.id),
    publisher: (book: { publisher: { id: string }}) => publishers.find(publisher => publisher.id === book.publisher.id),
  },
  Publisher: {
    books: (publisher: { id: string }) => books.filter(book => book.publisher.id === publisher.id),
  },
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
