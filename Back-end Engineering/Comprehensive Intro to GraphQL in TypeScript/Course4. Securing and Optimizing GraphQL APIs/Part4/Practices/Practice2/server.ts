// import { ApolloServer, gql, UserInputError } from 'apollo-server';

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

// // Resolvers
// const resolvers = {
//   Query: {
//     user: (_: any, { id }: { id: string }) => {
//       // TODO: Handle error if a user is not found
//     },
//   },
//   Mutation: {
//     addUser: (_: any, { name, email }: { name: string, email: string }) => {
//       // TODO: Validate name and email, and then add a new user
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

// Resolvers
const resolvers = {
  Query: {
    user: (_: any, { id }: { id: string }) => {
      const user = users.find(user => user.id === id);
      if (!user) {
        throw new UserInputError('User not found', {
          invalidArgs: { id },
        });
      }
      return user;
    },
  },
  Mutation: {
    addUser: (_: any, { name, email }: { name: string, email: string }) => {
      if (!name || !email) {
        throw new UserInputError('Both name and email are required', {
          invalidArgs: { name, email },
        });
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
