// import { ApolloServer, gql, AuthenticationError } from 'apollo-server';

// // Sample user data
// const users = [
//   { username: 'admin', password: 'admin', role: 'ADMIN' },
//   { username: 'user', password: 'user', role: 'USER' }
// ];

// // Define schema
// const typeDefs = gql`
//   type Product {
//     // TODO: Add product type fields. Fields: 'id', 'name', 'price'
//   }

//   type User {
//     // TODO: Add User fields. Fields: 'username', 'role'
//   }

//   type Query {
//     products: [Product]
//   }

//   type Mutation {
//     // TODO: Add two mutations 'login(username, password)' and 'addProduct(name, price)'
//   }
// `;

// // Sample data
// const products = [
//   { id: '1', name: 'Laptop', price: 999.99 },
//   { id: '2', name: 'Smartphone', price: 499.99 }
// ];

// // Resolvers
// const resolvers = {
//   Query: {
//     products: () => products,
//   },
//   Mutation: {
//     login: ____, // TODO: implement the login mutation
//     addProduct: ____, // TODO: implement the admin-only addProduct mutation
//   },
// };

// // Initialize Apollo Server
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req }) => {
//       // TODO: initialize request context
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
  }
`;

// Sample data
const products = [
  { id: '1', name: 'Laptop', price: 999.99 },
  { id: '2', name: 'Smartphone', price: 499.99 }
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
        throw new AuthenticationError('You do not have permission to add a product');
      }
      const newProduct = { id: String(products.length + 1), name, price };
      products.push(newProduct);
      return newProduct;
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
