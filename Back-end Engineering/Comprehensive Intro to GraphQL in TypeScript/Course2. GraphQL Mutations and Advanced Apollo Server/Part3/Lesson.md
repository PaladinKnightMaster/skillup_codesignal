# Setting Up Subscriptions for Real-Time Data

## Lesson Overview
Welcome to this lesson on "**Setting Up Subscriptions for Real-Time Data**". In this lesson, we will discuss real-time data and subscriptions to events in GraphQL.

GraphQL Subscriptions enable clients to listen for real-time updates from the server. When an event that matches the subscription’s criteria occurs, the server sends the updated data to the client automatically.

This is how subscriptions differ from Queries and Mutations:

* **Queries**: Request data from the server.
* **Mutations**: Modify data on the server.
* **Subscriptions**: Receive updates whenever data is changed as specified.

## Setting Up Apollo Server with Subscriptions
Let's begin by setting up our `Apollo Server` to handle subscriptions. We'll start by initializing our server and defining our schema, including the `Subscription` type.

We'll also be using `PubSub` from `graphql-subscriptions`, which is an in-memory event system for publishing and subscribing to events. This allows our resolvers to notify clients about real-time updates.

```TypeScript
import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import { PubSub } from 'graphql-subscriptions';
import { v4 as uuidv4 } from 'uuid';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

// Initialize PubSub
const pubsub = new PubSub();
```

## Defining Schema and Resolvers with Subscriptions
In this section, we'll define the schema with a type definition that includes a **Subscription** type.

```TypeScript
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

  type Subscription {
    bookAdded: Book
  }
`;
```
The `Subscription` type defines a `bookAdded` field which is of type `Book`.

## Writing Resolver Functions
Next, we need to implement resolver functions for these subscriptions. When a new book is added via the `addBook` mutation, it publishes an event called `BOOK_ADDED` which `PubSub` handles, triggering the subscription. This allows subscribed clients to receive real-time updates about the new book.

```TypeScript
// Sample data
let books = [
  { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' },
];

const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    addBook: (_: any, { title, author }: { title: string, author: string }) => {
      const newBook = { id: uuidv4(), title, author };
      books.push(newBook);
      pubsub.publish('BOOK_ADDED', { bookAdded: newBook });
      return newBook;
    },
  },
  Subscription: {
    bookAdded: {
      subscribe: () => pubsub.asyncIterator(['BOOK_ADDED']),
    },
  },
};
```
Here, when a book is added using the `addBook` mutation, the new book data is sent to all clients subscribing to the `bookAdded` subscription through the `pubsub.publish` method.

## Integrating WebSocket for Real-Time Updates
WebSockets provide a way for a server and a client to communicate in real-time over a single, long-lived connection. This is crucial for handling subscriptions.

We'll integrate WebSockets into our `Apollo Server` setup to handle subscriptions.

```TypeScript
// Define the schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Initialize the Express application
const app = express();

// Create the HTTP server
const httpServer = createServer(app);

// Initialize Apollo Server
const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    return { token };
  }
});

// Start the Apollo server and Subscription server
const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: httpServer, path: '/graphql' }
  );

  httpServer.listen(4000, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    console.log(`🚀 Subscriptions ready at ws://localhost:4000/graphql`);
  });
};

startServer();
```
When you run this code, your server should be ready to handle real-time subscriptions.

## Requesting Subscriptions after Setting Up the Server
After setting up the server to handle subscriptions, it's essential to know how to request and subscribe to real-time data updates. Below, we will provide step-by-step instructions for setting up a client to request subscriptions.

First, set up the required endpoints and data structures.

```TypeScript
import WebSocket from 'ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import gql from 'graphql-tag';
import fetch from 'node-fetch';
import { ExecutionResult } from 'graphql';

// Type definitions for GraphQL responses
interface Book {
  id: string;
  title: string;
  author: string;
}

interface BooksQueryResponse {
  books: Book[];
}

interface AddBookMutationResponse {
  addBook: Book;
}

interface BookAddedSubscriptionPayload {
  bookAdded: Book;
}
```

## GraphQL Queries and Mutations
Define the queries and mutations that will be used in the client application.

```TypeScript
const getBooksQuery = gql`
  query {
    books {
      id
      title
      author
    }
  }
`;

const addBookMutation = gql`
  mutation($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      id
      title
      author
    }
  }
`;

const bookAddedSubscription = gql`
  subscription {
    bookAdded {
      id
      title
      author
    }
  }
`;
```

## Helper Function for Sending GraphQL Requests
Create a function to facilitate sending GraphQL requests.

```TypeScript
// Define the GraphQL endpoint
const GRAPHQL_ENDPOINT = 'http://localhost:4000/graphql';
const WEBSOCKET_ENDPOINT = 'ws://localhost:4000/graphql';

const fetchGraphQL = async <T>(query: string, variables?: Record<string, any>): Promise<T> => {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });
  const result = (await response.json()) as ExecutionResult<T>;
  if (!result.errors) {
    return result.data as T;
  } else {
    throw new Error(`GraphQL error: ${result.errors.map((e: any) => e.message).join(', ')}`);
  }
};
```

## Setting Up WebSocket for Subscriptions
Initialize the WebSocket client and set up the subscription for real-time updates.

```TypeScript
const client = new SubscriptionClient(WEBSOCKET_ENDPOINT, { reconnect: true }, WebSocket);

const subscription = client.request({ query: bookAddedSubscription.loc?.source.body! }).subscribe({
  next(response) {
    const data = response.data as { bookAdded: Book };
    if (data && data.bookAdded) {
      console.log('Book added:', data.bookAdded);
    } else {
      console.error('Subscription response was null or undefined:', response);
    }

    delay(1000).then(() => {
      subscription.unsubscribe();
      client.close();
      checkCompletion();
    });
  },
  error(error) {
    console.error('Subscription error:', error);
    client.close();
    checkCompletion();
  },
});
```

## Executing Queries and Mutations
Execute the defined queries and mutations.

```TypeScript
let tasksCompleted = 0;
const totalTasks = 3;

function checkCompletion() {
  tasksCompleted += 1;
  if (tasksCompleted === totalTasks) {
    console.log('All tasks completed.');
    process.exit(0);
  }
}

// Fetch books
fetchGraphQL<{ books: Book[] }>(getBooksQuery.loc?.source.body!)
  .then((data) => console.log('Books:', data.books))
  .catch((error) => console.error('Error fetching books:', error))
  .finally(() => checkCompletion());

// Add a new book
fetchGraphQL<{ addBook: Book }>(addBookMutation.loc?.source.body!, { title: '1984', author: 'George Orwell' })
  .then((data) => console.log('Added book:', data.addBook))
  .catch((error) => console.error('Error adding book:', error))
  .finally(() => checkCompletion());
```

## Summary
In this lesson, we:

* Discussed real-time data and its importance.
* Introduced **GraphQL Subscriptions** and compared them with `Queries` and `Mutations`.
* Set up `Apollo Server` with subscriptions.
* Defined schema and resolver functions.
* Integrated WebSockets for real-time updates.

You’re now ready to move on to the practice exercises. These will help you solidify your understanding by applying what you’ve learned hands-on.
