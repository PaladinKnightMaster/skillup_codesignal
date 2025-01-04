// import { ApolloServer, gql, AuthenticationError } from 'apollo-server';

// const users = [{ username: 'admin', password: 'admin' }];

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
//     login(username: String!): String
//     addBook(title: String!, author: String!): Book
//   }
// `;

// const books = [
//   { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
//   { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' }
// ];

// const resolvers = {
//   Query: {
//     books: () => books,
//   },
//   Mutation: {
//     login: (_: any, { username }: { username: string }) => {
//       const user = users.find(user => user.username === username);
//       if (!user) {
//         throw new AuthenticationError('Invalid credentials');
//       }
//       return 'token';
//     },
//     addBook: (_: any, { title, author }: { title: string, author: string }, { token }: { token: string }) => {
//       if (token !== 'Bearer token') {
//         throw new AuthenticationError('You must be logged in');
//       }
//       const newBook = { id: '3', title, author };
//       books.push(newBook);
//       return newBook;
//     },
//   },
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req }) => {
//     const token = req.headers.authorization || '';
//     return { token };
//   }
// });

// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql, AuthenticationError } from 'apollo-server';

const users = [{ username: 'admin', password: 'admin' }];

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

const books = [
  { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' },
];

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
      return 'token'; // Mock token for demonstration
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

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    return { token };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
