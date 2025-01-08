// import { ApolloServer, gql, AuthenticationError } from 'apollo-server';

// // Sample user data
// const users = [
//   { username: 'admin', password: 'admin', role: 'ADMIN' },
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
//       const newBook = { id: '3', title, author };
//       books.push(newBook);
//       return newBook;
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
      if (!user || user.role !== 'ADMIN') {
        throw new AuthenticationError('You do not have permission to add a book');
      }
      const newBook = { id: (books.length + 1).toString(), title, author };
      books.push(newBook);
      return newBook;
    },
  },
};

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    const username = token.split(' ')[1]; // Extract username from Bearer token
    const user = users.find(user => user.username === username);
    return { user };
  },
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
