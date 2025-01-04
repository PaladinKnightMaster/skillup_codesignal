// import { ApolloServer, gql } from 'apollo-server';

// // Define schema definitions
// const typeDefs = gql`
//   type Book {
//     id: ID!
//     title: String!
//     author: String!
//   }

//   type Query {
//     books: [Book]
//   }

//   type Mutation {
//     // TODO: Define the login mutation that takes username and password as arguments and returns a String
//     // TODO: Define the addBook mutation that takes title and author as arguments and returns a Book
//   }
// `;

// const users = [{ username: 'admin', password: 'admin' }];
// const books = [
//   { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
//   { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' }
// ];

// // Define resolvers
// const resolvers = {
//   Query: {
//     books: () => books,
//   },
//   Mutation: {
//     // TODO: Implement the login mutation to authenticate the user and return a token
//     // TODO: Implement the addBook mutation to add a book to the books array and verify the token
//   },
// };

// // Initialize Apollo Server
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req }) => {
//     // TODO: Parse the Bearer token from the Authorization header
//     const token = ____;
//     return { token };
//   }
// });

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql, AuthenticationError } from 'apollo-server';

// Define schema definitions
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    login(username: String!, password: String!): String
    addBook(title: String!, author: String!): Book
  }
`;

const users = [{ username: 'admin', password: 'admin' }];
const books = [
  { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' }
];

// Define resolvers
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
      return 'token'; // Mock token for simplicity
    },
    addBook: (_: any, { title, author }: { title: string; author: string }, { token }: { token: string }) => {
      if (token !== 'Bearer token') {
        throw new AuthenticationError('You must be logged in');
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
    return { token };
  },
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
