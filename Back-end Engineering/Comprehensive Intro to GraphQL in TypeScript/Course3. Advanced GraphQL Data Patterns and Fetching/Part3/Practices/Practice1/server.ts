// import { ApolloServer, gql } from 'apollo-server';
// import { v4 as uuidv4 } from 'uuid';

// // Define schema with basic arguments
// const typeDefs = gql`
//   type Book {
//     id: ID!
//     title: String!
//     author: String!
//     publishedDate: String
//     genre: String
//   }

//   type Query {
//     books(genre: String, author: String): [Book]
//   }

//   type Mutation {
//     addBook(title: String!, author: String!, publishedDate: String, genre: String): Book
//   }
// `;

// // Sample data
// let books = [
//   { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien', publishedDate: '1937', genre: 'Fantasy' },
//   { id: '2', title: 'Harry Potter', author: 'J.K. Rowling', publishedDate: '1997', genre: 'Fantasy' }
// ];

// // Resolvers with basic arguments
// const resolvers = {
//   Query: {
//     books: (_: unknown, { genre, author }: { genre?: string; author?: string }) =>
//       books.filter(book =>
//         (genre ? book.genre === genre : true) &&
//         (author ? book.author === author : true)
//     )
//   },
//   Mutation: {
//     addBook: (
//       _: unknown,
//       { title, author, publishedDate, genre }:
//       { title: string; author: string; publishedDate: string; genre: string }
//     ) => {
//       const newBook = { id: uuidv4(), title, author, publishedDate, genre };
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

// Define schema with updated arguments
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    publishedDate: String
    genre: String
  }

  type Query {
    books(genre: String, author: String, publishedDate: String): [Book]
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

// Resolvers with updated filtering logic
const resolvers = {
  Query: {
    books: (_: unknown, { genre, author, publishedDate }: { genre?: string; author?: string; publishedDate?: string }) =>
      books.filter(book =>
        (genre ? book.genre === genre : true) &&
        (author ? book.author === author : true) &&
        (publishedDate ? book.publishedDate === publishedDate : true)
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
