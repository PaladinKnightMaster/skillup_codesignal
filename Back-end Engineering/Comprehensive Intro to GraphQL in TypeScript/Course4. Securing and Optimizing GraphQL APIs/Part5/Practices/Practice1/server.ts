// import { ApolloServer, gql } from 'apollo-server';
// import { createTestClient } from 'apollo-server-testing';

// // Define schema
// const typeDefs = gql`
//   type Book {
//     id: ID!
//     title: String!
//     author: String!
//     // TODO: Add publishedYear field
//   }

//   type Query {
//     books: [Book]
//   }

//   type Mutation {
//     // TODO: Accept publishedYear as argument
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
//     books: () => books
//   },
//   Mutation: {
//     addBook: (_: any, { title, author }: { title: string, author: string }) => {
//       const newBook = { id: String(books.length + 1), title, author }; // TODO: Add publishedYear to newBook
//       books.push(newBook);
//       return newBook;
//     }
//   }
// };

// // Initialize Apollo Server
// const server = new ApolloServer({ typeDefs, resolvers });

// // Create test client
// const { query, mutate } = createTestClient(server as any);

// // Testing Queries and Mutations
// const queryBooks = async () => {
//   const res = await query({
//     query: gql`
//       query {
//         books {
//           id
//           title
//           author
//           // TODO: Retrieve publishedYear
//         }
//       }
//     `
//   });
//   console.log(res.data);
// };

// const addBook = async () => {
//   const res = await mutate({
//     mutation: gql`
//       mutation {
//         addBook(title: "1984", author: "George Orwell") {
//           id
//           title
//           author
//           // TODO: Include publishedYear in response
//         }
//       }
//     `
//   });
//   console.log(res.data);
// };

// // Running the tests
// queryBooks();
// addBook();

import { ApolloServer, gql } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';

// Define schema
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    publishedYear: Int! # Added publishedYear field
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!, publishedYear: Int!): Book # Accepts publishedYear as an argument
  }
`;

// Sample data
const books = [
  { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien', publishedYear: 1937 },
  { id: '2', title: 'Harry Potter', author: 'J.K. Rowling', publishedYear: 1997 }
];

// Resolvers
const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    addBook: (_: any, { title, author, publishedYear }: { title: string; author: string; publishedYear: number }) => {
      const newBook = { id: String(books.length + 1), title, author, publishedYear }; // Include publishedYear in the new book
      books.push(newBook);
      return newBook;
    },
  },
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Create test client
const { query, mutate } = createTestClient(server as any);

// Testing Queries and Mutations
const queryBooks = async () => {
  const res = await query({
    query: gql`
      query {
        books {
          id
          title
          author
          publishedYear # Retrieve publishedYear
        }
      }
    `,
  });
  console.log('Query Books:', res.data);
};

const addBook = async () => {
  const res = await mutate({
    mutation: gql`
      mutation {
        addBook(title: "1984", author: "George Orwell", publishedYear: 1949) {
          id
          title
          author
          publishedYear # Include publishedYear in response
        }
      }
    `,
  });
  console.log('Add Book:', res.data);
};

// Running the tests
(async () => {
  await queryBooks();
  await addBook();
})();
