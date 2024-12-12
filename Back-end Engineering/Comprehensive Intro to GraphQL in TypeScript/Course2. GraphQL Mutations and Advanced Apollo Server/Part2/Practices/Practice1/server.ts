// import { ApolloServer, gql } from 'apollo-server';

// // Define schema with nested queries
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
//   { id: '1', title: 'The Hobbit', author: '1' },
//   { id: '2', title: 'Harry Potter', author: '2' }
// ];

// // Resolvers with nested queries
// const resolvers = {
//   Query: {
//     books: () => books,
//     authors: () => authors
//   },
//   Book: {
//     author: (book: any) => authors.find(author => author.id === book.author)
//   },
//   Author: {
//     books: (author: any) => books.filter(book => book.author === author.id)
//   }
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
  type Publisher {
    id: ID!
    name: String!
    books: [Book]
  }

  type Book {
    id: ID!
    title: String!
    publisher: Publisher
  }

  type Query {
    books: [Book]
    publishers: [Publisher]
  }
`;

// Sample data
const publishers = [
  { id: '1', name: 'Penguin Random House' },
  { id: '2', name: 'HarperCollins' }
];

const books = [
  { id: '1', title: 'The Hobbit', publisher: '1' },
  { id: '2', title: 'Harry Potter', publisher: '2' }
];

// Resolvers with nested queries
const resolvers = {
  Query: {
    books: () => books,
    publishers: () => publishers
  },
  Book: {
    publisher: (book: any) => publishers.find(publisher => publisher.id === book.publisher)
  },
  Publisher: {
    books: (publisher: any) => books.filter(book => book.publisher === publisher.id)
  }
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀 Server ready at ${url}`);
});
