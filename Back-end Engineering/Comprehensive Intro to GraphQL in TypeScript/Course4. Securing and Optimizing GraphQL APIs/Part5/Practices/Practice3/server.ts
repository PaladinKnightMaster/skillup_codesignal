// import { ApolloServer, gql } from 'apollo-server';
// import { createTestClient } from 'apollo-server-testing';

// // Define schema
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
//       const newBook = { id: String(books.length + 1), title, author };
//       books.push(newBook);
//       return newBook;
//     }
//   }
// ];

// // Initialize Apollo Server
// const server = new ApolloServer({ typeDefs, resolvers });

// // TODO: Create test client

// // Testing Queries and Mutations
// const queryBooks = async () => {
//   // TODO: call the all-books query from the test client here
//   const res = ____;
//   console.log(res.data);
// };

// const addBook = async () => {
//   // TODO: call the add book mutation from the test client here
//   const res = ____;
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
  }

  type Query {
    books: [Book]
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
    books: () => books
  },
  Mutation: {
    addBook: (_: any, { title, author }: { title: string, author: string }) => {
      const newBook = { id: String(books.length + 1), title, author };
      books.push(newBook);
      return newBook;
    }
  }
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
        }
      }
    `
  });
  console.log('Books Query Result:', res.data);
};

const addBook = async () => {
  const res = await mutate({
    mutation: gql`
      mutation {
        addBook(title: "1984", author: "George Orwell") {
          id
          title
          author
        }
      }
    `
  });
  console.log('Add Book Mutation Result:', res.data);
};

// Running the tests
(async () => {
  await queryBooks();
  await addBook();
  await queryBooks(); // Verify the added book is present
})();
