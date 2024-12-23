// import { ApolloServer, gql } from 'apollo-server';
// import { v4 as uuidv4 } from 'uuid';

// // Define schema with basic arguments
// const typeDefs = gql`
//   type Book {
//     id: ID!
//     title: String!
//     author: String!
//     publishedDate: String
//   }

//   type Query {
//     books(author: String): [Book]
//   }

//   type Mutation {
//     addBook(title: String!, author: String!, publishedDate: String): Book
//   }
// `;

// // Sample data
// let books = [
//   { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien', publishedDate: '1937' },
//   { id: '2', title: 'Harry Potter', author: 'J.K. Rowling', publishedDate: '1997' }
// ];

// // Resolvers with basic arguments
// const resolvers = {
//   Query: {
//     books: (_: unknown, { author }: { author?: string }) =>
//       books.filter(book => (author ? book.author === author : true))
//   },
//   Mutation: {
//     addBook: (
//       _: unknown,
//       { title, author, publishedDate }:
//       { title: string; author: string; publishedDate: string }
//     ) => {
//       const newBook = { id: uuidv4(), title, author, publishedDate };
//       books.push(newBook);
//       return newBook;
//     }
//   }
// };

// // Initialize Apollo Server
// const server = new ApolloServer({ typeDefs, resolvers });

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql } from 'apollo-server';
import { v4 as uuidv4 } from 'uuid';

// Define schema with the new genre field
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    publishedDate: String
    genre: String
  }

  type Query {
    books(author: String, genre: String): [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!, publishedDate: String, genre: String): Book
  }
`;

// Sample data
let books = [
  { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien', publishedDate: '1937', genre: 'Fantasy' },
  { id: '2', title: 'Harry Potter', author: 'J.K. Rowling', publishedDate: '1997', genre: 'Fantasy' },
];

// Resolvers with updated arguments to handle genre
const resolvers = {
  Query: {
    books: (_: unknown, { author, genre }: { author?: string; genre?: string }) =>
      books.filter(book =>
        (author ? book.author === author : true) &&
        (genre ? book.genre === genre : true)
      ),
  },
  Mutation: {
    addBook: (
      _: unknown,
      { title, author, publishedDate, genre }: { title: string; author: string; publishedDate: string; genre: string }
    ) => {
      const newBook = { id: uuidv4(), title, author, publishedDate, genre };
      books.push(newBook);
      return newBook;
    },
  },
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
