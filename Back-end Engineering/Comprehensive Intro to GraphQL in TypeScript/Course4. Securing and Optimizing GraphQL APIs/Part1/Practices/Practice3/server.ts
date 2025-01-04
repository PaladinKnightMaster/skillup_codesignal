// import { ApolloServer, gql, AuthenticationError } from 'apollo-server';

// // Define schema definitions
// const typeDefs = gql`
//   type Post {
//     id: ID!
//     title: String!
//     content: String!
//   }

//   type Query {
//     posts: [Post]
//   }

//   type Mutation {
//     // TODO: Define the login mutation that takes username and password as arguments and returns a String
//     addPost(title: String!, content: String!): Post
//   }
// `;

// const users = [{ username: 'admin', password: 'admin' }];
// const posts = [
//   { id: '1', title: 'First Post', content: 'This is the first post' },
//   { id: '2', title: 'Second Post', content: 'This is the second post' }
// ];

// // Define resolvers
// const resolvers = {
//   Query: {
//     posts: () => posts,
//   },
//   Mutation: {
//     // TODO: Implement the login mutation to authenticate the user and return a token
//     addPost: (_: any, { title, content }: { title: string, content: string }, { token }: { token: string }) => {
//       if (token !== 'Bearer token') {
//         throw new AuthenticationError('You must be logged in');
//       }
//       const newPost = { id: '3', title, content };
//       posts.push(newPost);
//       return newPost;
//     },
//   },
// };

// // Initialize Apollo Server
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req }) => {
//     const token = req.headers.authorization || '';
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
  type Post {
    id: ID!
    title: String!
    content: String!
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    login(username: String!, password: String!): String
    addPost(title: String!, content: String!): Post
  }
`;

const users = [{ username: 'admin', password: 'admin' }];
const posts = [
  { id: '1', title: 'First Post', content: 'This is the first post' },
  { id: '2', title: 'Second Post', content: 'This is the second post' },
];

// Define resolvers
const resolvers = {
  Query: {
    posts: () => posts,
  },
  Mutation: {
    login: (_: any, { username, password }: { username: string; password: string }) => {
      const user = users.find(user => user.username === username && user.password === password);
      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }
      return 'token'; // Mock token for demonstration
    },
    addPost: (_: any, { title, content }: { title: string; content: string }, { token }: { token: string }) => {
      if (token !== 'Bearer token') {
        throw new AuthenticationError('You must be logged in');
      }
      const newPost = { id: (posts.length + 1).toString(), title, content };
      posts.push(newPost);
      return newPost;
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
