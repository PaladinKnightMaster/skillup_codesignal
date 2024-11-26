// import { ApolloServer, gql } from 'apollo-server';

// // TODO: Define the schema with a 'Song' type having 'title' and 'artist' fields,
// // and a 'Query' type with a 'songs' field returning an array of 'Song' objects.
// const typeDefs = gql`
//   ____
// `;

// // TODO: Provide sample data for songs.
// const songs = [____];

// // TODO: Write resolvers to fetch the song data.
// const resolvers = ____;

// // TODO: Initialize the Apollo Server with typeDefs and resolvers,
// // and start the server, logging the URL it is accessible at.
// const server = ____;

// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

import { ApolloServer, gql } from 'apollo-server';

// TODO: Define the schema with a 'Song' type having 'title' and 'artist' fields,
// and a 'Query' type with a 'songs' field returning an array of 'Song' objects.
const typeDefs = gql`
  type Song {
    title: String
    artist: String
  }

  type Query {
    songs: [Song]
  }
`;

// TODO: Provide sample data for songs.
const songs = [
  { title: 'Bohemian Rhapsody', artist: 'Queen' },
  { title: 'Imagine', artist: 'John Lennon' }
];

// TODO: Write resolvers to fetch the song data.
const resolvers = {
  Query: {
    songs: () => songs,
  },
};

// TODO: Initialize the Apollo Server with typeDefs and resolvers,
// and start the server, logging the URL it is accessible at.
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});