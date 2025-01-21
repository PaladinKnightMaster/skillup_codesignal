// import { ApolloServer, gql } from 'apollo-server';
// import { createTestClient } from 'apollo-server-testing';

// // Define schema
// const typeDefs = gql`
//   type Book {
//     id: ID!
//     title: String!
//     author: String!
//     publishedYear: Int!
//   }

//   type Query {
//     books: [Book]
//   }

//   type Mutation {
//     addBook(title: String!, author: String!, publishedYear: Int!): Book
//   }
// `;

// // Sample data
// const books = [
//   { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien', publishedYear: 1937 },
//   { id: '2', title: 'Harry Potter', author: 'J.K. Rowling', publishedYear: 1997 }
// ];

// // Resolvers
// const resolvers = {
//   Query: {
//     books: () => books
//   },
//   Mutation: {
//     addBook: (_: any, { title, author, publishedYear }: { title: string, author: string, publishedYear: number }) => {
//       const newBook = { id: String(books.length + 1), title, author, publishedYear };
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
//   const res = await resolvers.query({
//     query: gql`
//       query {
//         books {
//           id
//           title
//           author
//           publishedYear
//         }
//       }
//     `
//   });
//   console.log(res.data);
// };

// const addBook = async () => {
//   const res = await resolvers.addBook({
//     mutation: gql`
//       mutation {
//         addBook(title: "1984", author: "George Orwell", publishedYear: 1949) {
//           id
//           title
//           author
//           publishedYear
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
    publishedYear: Int!
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!, publishedYear: Int!): Book
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
    books: () => books
  },
  Mutation: {
    addBook: (_: any, { title, author, publishedYear }: { title: string, author: string, publishedYear: number }) => {
      const newBook = { id: String(books.length + 1), title, author, publishedYear };
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
          publishedYear
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
        addBook(title: "1984", author: "George Orwell", publishedYear: 1949) {
          id
          title
          author
          publishedYear
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
})();
