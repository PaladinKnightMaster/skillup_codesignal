// import { ApolloServer, gql, AuthenticationError } from 'apollo-server';

// // Sample user data
// const users = [
//   { username: 'admin', password: 'admin', role: 'ADMIN' },
//   { username: 'moderator', password: 'moderator', role: 'MODERATOR' },
//   { username: 'user', password: 'user', role: 'USER' }
// ];

// // Define schema
// const typeDefs = gql`
//   type Book {
//     id: ID!
//     title: String!
//     author: String!
//   }

//   type User {
//     username: String!
//     role: String!
//   }

//   type Query {
//     books: [Book]
//   }

//   type Mutation {
//     login(username: String!, password: String!): User
//     addBook(title: String!, author: String!): Book
//     removeBook(id: ID!): Book
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
//     books: () => books,
//   },
//   Mutation: {
//     login: (_: any, { username, password }: { username: string, password: string }) => {
//       const user = users.find(user => user.username === username && user.password === password);
//       if (!user) {
//         throw new AuthenticationError('Invalid credentials');
//       }
//       return { username: user.username, role: user.role };
//     },
//     addBook: (_: any, { title, author }: { title: string, author: string }, { user }: { user: { role: string } }) => {
//       // TODO: Extend for MODERATOR role
//       if (user.role !== 'ADMIN') {
//         throw new AuthenticationError('You do not have permissions to add a book');
//       }
//       const newBook = { id: String(books.length + 1), title, author };
//       books.push(newBook);
//       return newBook;
//     },
//     removeBook: (_: any, { id }: { id: string }, { user }: { user: { role: string } }) => {
//       if (user.role !== 'ADMIN') {
//         throw new AuthenticationError('You do not have permissions to remove a book');
//       }
//       const bookIndex = books.findIndex(book => book.id === id);
//       if (bookIndex === -1) {
//         throw new AuthenticationError('Book not found');
//       }
//       const removedBook = books.splice(bookIndex, 1)[0];
//       return removedBook;
//     },
//   },
// };

// // Initialize Apollo Server
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req }) => {
//     const token = req.headers.authorization || '';
//     const user = users.find(user => user.username === token.split(' ')[1]);
//     return { user };
//   }
// });

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql, AuthenticationError } from 'apollo-server';

// Sample user data
const users = [
  { username: 'admin', password: 'admin', role: 'ADMIN' },
  { username: 'moderator', password: 'moderator', role: 'MODERATOR' },
  { username: 'user', password: 'user', role: 'USER' }
];

// Define schema
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type User {
    username: String!
    role: String!
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    login(username: String!, password: String!): User
    addBook(title: String!, author: String!): Book
    removeBook(id: ID!): Book
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
    books: () => books,
  },
  Mutation: {
    login: (_: any, { username, password }: { username: string; password: string }) => {
      const user = users.find(user => user.username === username && user.password === password);
      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }
      return { username: user.username, role: user.role };
    },
    addBook: (_: any, { title, author }: { title: string; author: string }, { user }: { user: { role: string } }) => {
      if (user.role !== 'ADMIN' && user.role !== 'MODERATOR') {
        throw new AuthenticationError('You do not have permissions to add a book');
      }
      const newBook = { id: String(books.length + 1), title, author };
      books.push(newBook);
      return newBook;
    },
    removeBook: (_: any, { id }: { id: string }, { user }: { user: { role: string } }) => {
      if (user.role !== 'ADMIN') {
        throw new AuthenticationError('You do not have permissions to remove a book');
      }
      const bookIndex = books.findIndex(book => book.id === id);
      if (bookIndex === -1) {
        throw new AuthenticationError('Book not found');
      }
      const removedBook = books.splice(bookIndex, 1)[0];
      return removedBook;
    },
  },
};

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    const user = users.find(user => user.username === token.split(' ')[1]);
    return { user };
  }
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
