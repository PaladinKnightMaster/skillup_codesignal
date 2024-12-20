// import { ApolloServer, gql } from 'apollo-server';

// // Define schema with nested types and pagination
// const typeDefs = gql`
//   type Author {
//     id: ID!
//     name: String!
//     age: Int!
//     books(limit: Int, offset: Int): [Book]
//   }

//   type Book {
//     id: ID!
//     title: String!
//     author: Author
//   }

//   type Query {
//     books(limit: Int, offset: Int): [Book]
//     authors(limit: Int, offset: Int): [Author]
//   }
// `;

// // Sample data
// const authors = [
//   { id: '1', name: 'Author 1', age: 45 },
//   { id: '2', name: 'Author 2', age: 38 }
// ];

// const books = [
//   { id: '1', title: 'Book 1', author: authors[0] },
//   { id: '2', title: 'Book 2', author: authors[1] },
//   // Add more sample books...
// ];

// // Resolvers
// const resolvers = {
//   Query: {
//     books: (_: unknown, { limit, offset }: { limit?: number; offset?: number }) => ___________,
//     authors: (_: unknown, { limit, offset }: { limit?: number; offset?: number }) => ___________
//   },
//   Author: {
//     books: (author, { limit, offset }: { limit?: number; offset?: number }) => ___________
//   },
//   Book: {
//     author: (book) => authors.find(author => author.id === book.author.id)
//   }
// };

// // Initialize Apollo Server
// const server = new ApolloServer({ typeDefs, resolvers });

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql } from 'apollo-server';

// Define schema with nested types and pagination
const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    age: Int!
    books(limit: Int, offset: Int): [Book]
  }

  type Book {
    id: ID!
    title: String!
    author: Author
  }

  type Query {
    books(limit: Int, offset: Int): [Book]
    authors(limit: Int, offset: Int): [Author]
  }
`;

// Sample data
const authors = [
  { id: '1', name: 'Author 1', age: 45 },
  { id: '2', name: 'Author 2', age: 38 }
];

const books = [
  { id: '1', title: 'Book 1', authorId: '1' },
  { id: '2', title: 'Book 2', authorId: '2' },
  { id: '3', title: 'Book 3', authorId: '1' },
  { id: '4', title: 'Book 4', authorId: '2' },
];

// Resolvers
const resolvers = {
  Query: {
    books: (_: unknown, { limit = 10, offset = 0 }: { limit?: number; offset?: number }) =>
      books.slice(offset, offset + limit),
    authors: (_: unknown, { limit = 10, offset = 0 }: { limit?: number; offset?: number }) =>
      authors.slice(offset, offset + limit),
  },
  Author: {
    books: (author: { id: string }, { limit = 10, offset = 0 }: { limit?: number; offset?: number }) =>
      books.filter(book => book.authorId === author.id).slice(offset, offset + limit),
  },
  Book: {
    author: (book: { authorId: string }) => authors.find(author => author.id === book.authorId),
  },
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
