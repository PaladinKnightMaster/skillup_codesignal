# Fetching Data from External APIs

## Introduction
In this lesson, we will learn how to fetch data from external APIs and integrate it with our **GraphQL** server. This skill is crucial when building real-world applications, as data often resides in different places. By combining GraphQL with external APIs, you can create a more robust and comprehensive data layer in your applications.

Previously, you learned how to handle GraphQL mutations, manage complex queries, and set up real-time subscriptions. This lesson will build on those skills, focusing on fetching external data.

## Defining the Schema
A GraphQL schema defines the types and the structure of queries. Here’s the schema we’ll use in this lesson:

```TypeScript
import { gql } from 'apollo-server';

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
    externalBooks: [Book]
  }
`;
```

Here, we define a `Book` type with fields `id`, `title`, and `author`. We also define books and `externalBooks` queries to fetch books from local and external sources, respectively.

## Creating Resolvers
Resolvers define how to fetch data for each type in the schema. We've learned about resolvers in previous lessons, but here's a quick reminder of their purpose.

```TypeScript
import fetch from 'node-fetch';

const resolvers = {
  Query: {
    books: () => [
      { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
      { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' }
    ],
    externalBooks: async () => {
      const response = await fetch('https://api.example.com/books');
      return response.json();
    }
  }
};
```

In the `books` resolver, we return a static list of books. For `externalBooks`, we use `node-fetch` to get book data from an external API.

- The `books` resolver returns a hardcoded array of book objects.
- The `externalBooks` resolver performs an asynchronous operation using `fetch` to get data from an external URL and then returns the JSON response.

## Setting Up Apollo Server
Next, we will set up Apollo Server to use our schema and resolvers.

```TypeScript
import { ApolloServer } from 'apollo-server';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

This code initializes Apollo Server with our defined schema and resolvers, and then starts the server. Once running, you should see:

```Plain text
🚀 Server ready at http://localhost:4000/
```

## Fetching Data from the Server
To test our server and fetch both local and external book data, we will write a simple script using `node-fetch`.

```TypeScript
import fetch from 'node-fetch';

const query = `
  query {
    books {
      id
      title
      author
    }
    externalBooks {
      id
      title
      author
    }
  }
`;

const url = 'http://localhost:4000/';

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(JSON.stringify(data, null, 2)))
  .catch((error) => console.error('Error:', error));
```

- We define a GraphQL query to fetch `books` and `externalBooks`.
- We use `fetch` to send this query to our running server.
- The response is then logged to the console.

## Execution Output
If everything is set up correctly, running this script should produce an output similar to:

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
    ],
    "externalBooks": [
      // Data fetched from the external API
    ]
  }
}
```

## Lesson Summary
In this lesson, you learned how to define a schema, create resolvers for both local and external data sources, set up **Apollo Server**, and query the server. Here are the key points:

- GraphQL schema and the role of resolvers.
- Fetching data from external APIs using `node-fetch`.
- Integrating external APIs into your Apollo Server.

Next, you will apply these concepts in hands-on practice exercises. Experiment with querying different external APIs and consolidating your knowledge.

Congratulations on making it this far. You're now well-equipped to handle external data in your **GraphQL** applications. Keep practicing to master these skills!
