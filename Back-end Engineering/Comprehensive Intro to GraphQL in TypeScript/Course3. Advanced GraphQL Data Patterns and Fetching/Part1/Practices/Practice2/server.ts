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
//     author: (book: { id: string }) => authors.find(author => author.id === book.author.id),
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
  }

  type Query {
    books: [Book]
    authors: [Author]
  }
`;

// Sample data
const authors = [
  { id: '1', name: 'J.R.R. Tolkien' },
  { id: '2', name: 'J.K. Rowling' }
];
const books = [
  { id: '1', title: 'The Hobbit', authorId: '1' },
  { id: '2', title: 'Harry Potter', authorId: '2' }
];

// Resolvers with nested data
const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
  },
  Author: {
    books: (author: { id: string }) => books.filter(book => book.authorId === author.id),
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
