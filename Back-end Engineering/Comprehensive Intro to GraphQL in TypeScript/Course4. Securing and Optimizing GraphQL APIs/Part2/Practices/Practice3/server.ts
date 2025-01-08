// import { ApolloServer, gql, AuthenticationError } from 'apollo-server';

// // Sample user data
// const users = [
//   { username: 'admin', password: 'admin', role: 'ADMIN' },
//   { username: 'user', password: 'user', role: 'USER' }
// ];

// // Define schema
// const typeDefs = gql`
//   type Product {
//     id: ID!
//     name: String!
//     price: Float!
//   }

//   type User {
//     username: String!
//     role: String!
//   }

//   type Query {
//     products: [Product]
//   }

//   type Mutation {
//     login(username: String!, password: String!): User
//       // TODO: add two mutations: 'addProduct(name, price): Product' and 'changePassword(username, newPassword): User'
//   }
// `;

// // Sample data
// const products = [
//   { id: '1', name: 'Laptop', price: 999.99 },
//   { id: '2', name: 'Smartphone', price: 599.99 }
// ];

// // Resolvers
// const resolvers = {
//   Query: {
//     products: () => products,
//   },
//   Mutation: {
//     login: (_: any, { username, password }: { username: string, password: string }) => {
//       const user = users.find(user => user.username === username && user.password === password);
//       if (!user) {
//         throw new AuthenticationError('Invalid credentials');
//       }
//       return { username: user.username, role: user.role };
//     },
//     addProduct: (_: any, { name, price }: { name: string, price: number }, { user }: { user: { role: string } }) => {
//       // TODO: Implement the mutation here
//     },
//     changePassword: (_: any, { username, newPassword }: { username: string, newPassword: string }, { user }: { user: { role: string } }) => {
//       // TODO: Implement the mutation here
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
  type Product {
    id: ID!
    name: String!
    price: Float!
  }

  type User {
    username: String!
    role: String!
  }

  type Query {
    products: [Product]
  }

  type Mutation {
    login(username: String!, password: String!): User
    addProduct(name: String!, price: Float!): Product
    changePassword(username: String!, newPassword: String!): User
  }
`;

// Sample data
const products = [
  { id: '1', name: 'Laptop', price: 999.99 },
  { id: '2', name: 'Smartphone', price: 599.99 }
];

// Resolvers
const resolvers = {
  Query: {
    products: () => products,
  },
  Mutation: {
    login: (_: any, { username, password }: { username: string; password: string }) => {
      const user = users.find(user => user.username === username && user.password === password);
      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }
      return { username: user.username, role: user.role };
    },
    addProduct: (_: any, { name, price }: { name: string; price: number }, { user }: { user: { role: string } }) => {
      if (user.role !== 'ADMIN') {
        throw new AuthenticationError('You do not have permissions to perform this action');
      }
      const newProduct = { id: String(products.length + 1), name, price };
      products.push(newProduct);
      return newProduct;
    },
    changePassword: (_: any, { username, newPassword }: { username: string; newPassword: string }, { user }: { user: { role: string } }) => {
      if (user.role !== 'ADMIN') {
        throw new AuthenticationError('You do not have permissions to perform this action');
      }
      const targetUser = users.find(u => u.username === username);
      if (!targetUser) {
        throw new AuthenticationError('User not found');
      }
      targetUser.password = newPassword;
      return { username: targetUser.username, role: targetUser.role };
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
