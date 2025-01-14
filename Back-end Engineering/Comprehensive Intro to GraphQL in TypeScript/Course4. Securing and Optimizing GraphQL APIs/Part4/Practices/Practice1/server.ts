// import { ApolloServer, gql, UserInputError } from 'apollo-server';

// // Define schema
// const typeDefs = gql`
//   type Book {
//     id: ID!
//     title: String!
//     author: String!
//   }

//   type Query {
//     book(id: ID!): Book
//   }

//   type Mutation {
//     addBook(title: String!, author: String!): Book
//   }
// `;

// // Sample data
// const books = [
//   { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
//   { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' }
// ];

// // Resolvers
// const resolvers = {
//   Query: {
//     book: (_: any, { id }: { id: string }) => {
//       // TODO: Handle error if a book is not found
//       return books.find(book => book.id === id);
//     },
//   },
//   Mutation: {
//     addBook: (_: any, { title, author }: { title: string, author: string }) => {
//       // TODO: Validate title and author
//       const newBook = { id: String(books.length + 1), title, author };
//       books.push(newBook);
//       return newBook;
//     },
//   }
// };

// // Initialize Apollo Server
// const server = new ApolloServer({ typeDefs, resolvers });

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql, UserInputError } from 'apollo-server';

// Define schema
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!): Book
  }
`;

// Sample data
const books = [
  { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' }
];

// Resolvers
const resolvers = {
  Query: {
    book: (_: any, { id }: { id: string }) => {
      const book = books.find(book => book.id === id);
      if (!book) {
        throw new UserInputError('Book not found', {
          invalidArgs: { id },
        });
      }
      return book;
    },
  },
  Mutation: {
    addBook: (_: any, { title, author }: { title: string, author: string }) => {
      if (!title || !author) {
        throw new UserInputError('Title and Author are required', {
          invalidArgs: { title, author },
        });
      }
      const newBook = { id: String(books.length + 1), title, author };
      books.push(newBook);
      return newBook;
    },
  }
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
