// import { ApolloServer, gql, UserInputError, ApolloError } from 'apollo-server';

// // Define schema
// const typeDefs = gql`
//   type User {
//     id: ID!
//     name: String!
//     email: String!
//   }

//   type Query {
//     user(id: ID!): User
//   }

//   type Mutation {
//     addUser(name: String!, email: String!): User
//   }
// `;

// // Sample data
// const users = [
//   { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
//   { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' }
// ];

// // Email format regular expression
// const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// // TODO: Add custom exception class - InvalidEmailFormatError

// // TODO: Add custom exception class - EmailAlreadyInUseError

// // Resolvers
// const resolvers = {
//   Query: {
//     user: (_: any, { id }: { id: string }) => {
//       // TODO: Handle error if a user is not found
//     },
//   },
//   Mutation: {
//     addUser: (_: any, { name, email }: { name: string, email: string }) => {
//       // TODO: Validate name, email format, and uniqueness, then add a new user
//       // TODO: Use custom exceptions for invalid email format and email already in use
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
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    user(id: ID!): User
  }

  type Mutation {
    addUser(name: String!, email: String!): User
  }
`;

// Sample data
const users = [
  { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' }
];

// Email format regular expression
const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Custom exception for invalid email format
class InvalidEmailFormatError extends Error {
  constructor(email: string) {
    super(`Invalid email format: ${email}`);
    this.name = 'InvalidEmailFormatError';
  }
}

// Custom exception for email already in use
class EmailAlreadyInUseError extends Error {
  constructor(email: string) {
    super(`Email is already in use: ${email}`);
    this.name = 'EmailAlreadyInUseError';
  }
}

// Resolvers
const resolvers = {
  Query: {
    user: (_: any, { id }: { id: string }) => {
      const user = users.find(user => user.id === id);
      if (!user) {
        throw new UserInputError(`User with ID ${id} not found`);
      }
      return user;
    },
  },
  Mutation: {
    addUser: (_: any, { name, email }: { name: string, email: string }) => {
      if (!name) {
        throw new UserInputError('Name is required');
      }
      if (!emailFormat.test(email)) {
        throw new InvalidEmailFormatError(email);
      }
      if (users.some(user => user.email === email)) {
        throw new EmailAlreadyInUseError(email);
      }

      const newUser = { id: String(users.length + 1), name, email };
      users.push(newUser);
      return newUser;
    },
  }
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
