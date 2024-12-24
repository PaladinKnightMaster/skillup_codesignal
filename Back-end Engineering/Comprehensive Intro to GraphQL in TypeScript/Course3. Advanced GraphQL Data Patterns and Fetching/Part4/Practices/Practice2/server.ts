// import { ApolloServer, gql } from 'apollo-server';
// import DataLoader from 'dataloader';

// // Sample data
// const authors = [
//   { id: '1', name: 'J.R.R. Tolkien' },
//   { id: '2', name: 'J.K. Rowling' }
// ];
// const books = [
//   { id: '1', title: 'The Hobbit', author: '1' },
//   { id: '2', title: 'Harry Potter', author: '2' }
// ];

// // Define schema
// const typeDefs = gql`
//   type Author {
//     id: ID!
//     name: String!
//   }

//   type Book {
//     id: ID!
//     title: String!
//     author: Author
//   }

//   type Query {
//     books: [Book]
//     author(id: ID!): Author
//   }
// `;

// // Resolvers
// const resolvers = {
//   Query: {
//     books: () => books,
//     author: async (_: unknown, { id }: { id: string }, { authorLoader }: { authorLoader: DataLoader<string, typeof authors[0]> }) => authorLoader.load(id)
//   },
//   Book: {
//     author: async (book: { author: string }, _: unknown, { authorLoader }: { authorLoader: DataLoader<string, typeof authors[0]> }) => {
//       return authorLoader.load(book.author)
//     }
//   }
// };

// // Initialize dataloader
// const authorLoader = new DataLoader(async (ids: readonly string[]) => {
//   ids.map(id => authors.find(author => author.id === id) as typeof authors[0]);
// });

// // Initialize Apollo Server
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: () => ({ authorLoader })
// });

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql } from 'apollo-server';
import DataLoader from 'dataloader';

// Sample data
const authors = [
  { id: '1', name: 'J.R.R. Tolkien' },
  { id: '2', name: 'J.K. Rowling' }
];
const books = [
  { id: '1', title: 'The Hobbit', author: '1' },
  { id: '2', title: 'Harry Potter', author: '2' }
];

// Define schema
const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
  }

  type Book {
    id: ID!
    title: String!
    author: Author
  }

  type Query {
    books: [Book]
    author(id: ID!): Author
  }
`;

// Resolvers
const resolvers = {
  Query: {
    books: () => books,
    author: async (_: unknown, { id }: { id: string }, { authorLoader }: { authorLoader: DataLoader<string, typeof authors[0]> }) =>
      authorLoader.load(id),
  },
  Book: {
    author: async (book: { author: string }, _: unknown, { authorLoader }: { authorLoader: DataLoader<string, typeof authors[0]> }) =>
      authorLoader.load(book.author),
  }
};

// Initialize dataloader
const authorLoader = new DataLoader(async (ids: readonly string[]) => {
  return ids.map(id => authors.find(author => author.id === id) as typeof authors[0]);
});

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ authorLoader }),
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
