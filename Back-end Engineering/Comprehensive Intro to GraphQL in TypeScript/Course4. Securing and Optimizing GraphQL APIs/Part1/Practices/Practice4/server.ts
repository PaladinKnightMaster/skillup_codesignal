// import { ApolloServer, gql, AuthenticationError } from 'apollo-server';

// // Define schema definitions
// const typeDefs = gql`
//   type Event {
//     id: ID!
//     name: String!
//     date: String!
//   }

//   type Query {
//     events: [Event]
//   }

//   type Mutation {
//     login(username: String!, password: String!): String
//     // TODO: Define the addEvent mutation. Input fields: 'name', 'date'
//   }
// `;

// const users = [{ username: 'admin', password: 'admin' }];
// const events = [
//   { id: '1', name: 'Conference', date: '2023-10-01' },
//   { id: '2', name: 'Meetup', date: '2023-11-15' }
// ];

// // Define resolvers
// const resolvers = {
//   Query: {
//     events: () => events,
//   },
//   Mutation: {
//     login: (_: any, { username, password }: { username: string, password: string }) => {
//       const user = users.find(user => user.username === username && user.password === password);
//       if (!user) {
//         throw new AuthenticationError('Invalid credentials');
//       }
//       return 'token';
//     },
//     // TODO: Implement the addEvent mutation
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
  type Event {
    id: ID!
    name: String!
    date: String!
  }

  type Query {
    events: [Event]
  }

  type Mutation {
    login(username: String!, password: String!): String
    addEvent(name: String!, date: String!): Event
  }
`;

const users = [{ username: 'admin', password: 'admin' }];
const events = [
  { id: '1', name: 'Conference', date: '2023-10-01' },
  { id: '2', name: 'Meetup', date: '2023-11-15' },
];

// Define resolvers
const resolvers = {
  Query: {
    events: () => events,
  },
  Mutation: {
    login: (_: any, { username, password }: { username: string; password: string }) => {
      const user = users.find(user => user.username === username && user.password === password);
      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }
      return 'token'; // Mock token for demonstration purposes
    },
    addEvent: (_: any, { name, date }: { name: string; date: string }, { token }: { token: string }) => {
      if (token !== 'Bearer token') {
        throw new AuthenticationError('You must be logged in');
      }
      const newEvent = { id: (events.length + 1).toString(), name, date };
      events.push(newEvent);
      return newEvent;
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
