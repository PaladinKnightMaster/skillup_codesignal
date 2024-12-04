# Integrating Apollo Server with Express

## Introduction and Context Setting
Welcome to this lesson on **Integrating Apollo Server with Express**! In previous lessons, you learned about setting up a basic GraphQL server, defining types and queries, and querying with arguments. In this lesson, you'll learn how to integrate **Apollo Server** with **Express**, a popular web application framework for Node.js.

## Introduction to Express
**Express** is a minimal and flexible Node.js web application framework. It provides a robust set of features for building web and mobile applications.

Combining **Apollo Server** with **Express** allows you to leverage the strengths of both tools, creating a powerful and flexible API server. Express handles routing and middleware, while Apollo Server manages the GraphQL operations.

## Creating the GraphQL Schema and Resolvers
Type definitions define the shape of your data and the operations that can be performed. For example, you might define a `Book` type and a `Query` type to specify how to fetch books.

Let's define our schema:

```TypeScript
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }
`;
```

Resolvers fetch the data specified in the schema. Let's define the resolvers:

```TypeScript
const resolvers = {
  Query: {
    books: () => books,
    book: (_: unknown, args: { id: string }) => books.find(book => book.id === args.id),
  },
};
```

## Integrating Apollo Server with Express
Let's create a basic Express app:

```TypeScript
import express from 'express';
const app = express();
```

Then, we create an Apollo Server instance and pass the type definitions and resolvers:

```TypeScript
import { ApolloServer, gql } from 'apollo-server-express';

const server = new ApolloServer({ typeDefs, resolvers });
```

Finally, we apply the Apollo middleware to the Express app:

```TypeScript
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
};

startApolloServer();
```

In the last code block, we asynchronously start the Apollo Server and use `applyMiddleware` to connect it to our Express app at the `/graphql` endpoint. We then start the Express server on port 4000, logging that the server is ready. Finally, we call `startApolloServer()` to initiate the setup.

## Example Queries and Testing: Query Definition
After we defined our server and started it, let's do some queries.

First, we define our queries:

```TypeScript
const queryBooks = `
  query {
    books {
      id
      title
      author
    }
  }
`;

const queryBookById = (id: string) => `
  query {
    book(id: "${id}") {
      id
      title
      author
    }
  }
`;
```

Here, we define two queries, one for fetching all books and another for fetching a book by its ID.

## Example Queries and Testing: Fetch the Data
Next, we use the `fetch` API to execute these queries:

```TypeScript
import fetch from 'node-fetch';

const url = 'http://localhost:4000/graphql';

const fetchData = async (query: string) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
};

const runQueries = async () => {
  await fetchData(queryBooks);
  await fetchData(queryBookById('1'));
};

// Run the queries
runQueries();
```

The `fetchData` function sends a POST request to our GraphQL endpoint with the specified query. The `runQueries` function executes our defined queries.

## Example Queries and Testing: Output
Running the previous code should give you output like:

```JSON
{
  "data": {
    "books": [
      {
        "id": "1",
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien"
      },
      {
        "id": "2",
        "title": "Harry Potter",
        "author": "J.K. Rowling"
      }
    ]
  }
}
```

```JSON
{
  "data": {
    "book": {
      "id": "1",
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien"
    }
  }
}
```

Which corresponds with the data we initially defined.

## Summary
In this lesson, you learned how to integrate `Apollo Server` with `Express`, create a GraphQL schema and resolvers, and run your server. You've also seen examples of executing queries to fetch data. Let's go and practice now!
