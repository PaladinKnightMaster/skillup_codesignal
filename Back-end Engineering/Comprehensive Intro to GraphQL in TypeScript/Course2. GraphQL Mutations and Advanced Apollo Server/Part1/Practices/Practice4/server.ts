// import { ApolloServer, gql } from 'apollo-server';
// import { v4 as uuidv4 } from 'uuid';

// // Define schema with mutations
// const typeDefs = gql`
//   type Book {
//     id: ID!
//     title: String!
//     author: String!
//   }

//   type Query {
//     books: [Book]
//     book(id: ID!): Book
//   }

//   type Mutation {
//     // TODO: Define addBooks and deleteBooks mutations
//   }
// `;

// // Sample data
// let books = [
//   { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
//   { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' },
// ];

// // Resolvers
// const resolvers = {
//   Query: {
//     books: () => books,
//     book: (_: any, args: { id: string }) => books.find(book => book.id === args.id),
//   },
//   Mutation: {
//     // TODO: Implement addBooks mutation
//     // TODO: Implement deleteBooks mutation
//   },
// };

// // Initialize Apollo Server
// const server = new ApolloServer({ typeDefs, resolvers });

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql } from 'apollo-server';
import { v4 as uuidv4 } from 'uuid';

// Define schema with mutations
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!): Book
    addBooks(books: [{ title: String!, author: String! }]!): [Book]
    deleteBook(id: ID!): Book
    deleteBooks(ids: [ID]!): [Book]
  }
`;

// Sample data
let books = [
  { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' },
];

// Resolvers
const resolvers = {
  Query: {
    books: () => books,
    book: (_: any, args: { id: string }) => books.find(book => book.id === args.id),
  },
  Mutation: {
    addBook: (_: any, { title, author }: { title: string, author: string }) => {
      const newBook = { id: uuidv4(), title, author };
      books.push(newBook);
      return newBook;
    },
    addBooks: (_: any, { books: newBooks }: { books: { title: string, author: string }[] }) => {
      const addedBooks = newBooks.map(book => {
        const newBook = { id: uuidv4(), title: book.title, author: book.author };
        books.push(newBook);
        return newBook;
      });
      return addedBooks;
    },
    deleteBook: (_: any, { id }: { id: string }) => {
      const bookIndex = books.findIndex(book => book.id === id);
      if (bookIndex === -1) return null;
      const [deletedBook] = books.splice(bookIndex, 1);
      return deletedBook;
    },
    deleteBooks: (_: any, { ids }: { ids: string[] }) => {
      const deletedBooks = [];
      for (const id of ids) {
        const bookIndex = books.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
          deletedBooks.push(...books.splice(bookIndex, 1));
        }
      }
      return deletedBooks;
    }
  },
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
