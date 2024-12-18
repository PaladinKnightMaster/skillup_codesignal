// import { ApolloServer, gql } from 'apollo-server';
// import fetch from 'node-fetch';

// // Define schema
// const typeDefs = gql`
//   type Superhero {
//     id: ID!
//     name: String!
//     power: String!
//   }

//   type Query {
//     __________ // TODO: Add the localHeroes and externalHeroes queries here
//   }
// `;

// // Resolvers
// const resolvers = {
//   Query: {
//     localHeroes: () => [
//       { id: '1', name: 'Superman', power: 'Super strength' },
//       { id: '2', name: 'Batman', power: 'Intelligence' }
//     ],
//     // TODO: Add the resolver for fetching external superheroes here
//     // Use the following endpoint: https://jsonplaceholder.typicode.com/users
//     // The API endpoint doesn't provide `power`, set this field to a default value instead
//     externalHeroes: ______
//   }
// };

// // Initialize Apollo Server
// const server = new ApolloServer({ __________ });  // TODO: Add typeDefs and resolvers to the ApolloServer initialization

// // Start the server
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

//Sample api data
// [
//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
//   {
//     "id": 2,
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "address": {
//       "street": "Victor Plains",
//       "suite": "Suite 879",
//       "city": "Wisokyburgh",
//       "zipcode": "90566-7771",
//       "geo": {
//         "lat": "-43.9509",
//         "lng": "-34.4618"
//       }
//     },
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//     "company": {
//       "name": "Deckow-Crist",
//       "catchPhrase": "Proactive didactic contingency",
//       "bs": "synergize scalable supply-chains"
//     }
//   },
// ]

import { ApolloServer, gql } from 'apollo-server';
import fetch from 'node-fetch';

// Define schema
const typeDefs = gql`
  type Superhero {
    id: ID!
    name: String!
    power: String!
  }

  type Query {
    localHeroes: [Superhero]
    externalHeroes: [Superhero]
  }
`;

// Resolvers
const resolvers = {
  Query: {
    localHeroes: () => [
      { id: '1', name: 'Superman', power: 'Super strength' },
      { id: '2', name: 'Batman', power: 'Intelligence' }
    ],
    // TODO: Add the resolver for fetching external superheroes here
    // Use the following endpoint: https://jsonplaceholder.typicode.com/users
    // The API endpoint doesn't provide `power`, set this field to a default value instead
    externalHeroes: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      return data.map((user: any) => ({ id: user.id, name: user.name, power: 'Unknown' }));
    }
  }
};

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });  // TODO: Add typeDefs and resolvers to the ApolloServer initialization

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});