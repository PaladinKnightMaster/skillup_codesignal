# Setting Up a Basic GraphQL Server

## Lesson Overview
Welcome to the first lesson of our **"Introduction to GraphQL and Apollo Server"** course! In this lesson, we will introduce you to **GraphQL** and **Apollo Server** and guide you through setting up a basic GraphQL server.

## GraphQL and Apollo Server
**GraphQL** is a query language for APIs that allows you to request only the data you need, unlike REST, which often requires multiple endpoints. **Apollo Server** is a popular, GraphQL-compliant server known for its simplicity and active support. Other tools available include:

* **Express-GraphQL**: Flexible GraphQL server for Express applications.
* **Relay**: JavaScript framework for efficient data fetching with GraphQL.

## Basic Structure of a GraphQL Server
Key components of a GraphQL server:

* **Schema**: Defines data types and the shape of queries. E.g., a `Query` type with a `hello` field that returns a `String`.
* **Resolvers**: Functions that fetch data as per the schema. E.g., the resolver for `hello` returns "Hello, GraphQL!".

When handling a query, the server:

* Validates the query.
* Resolves fields using resolvers.
* Returns the resulting data.

## Creating the Basic GraphQL Server
In this section, we'll set up a step-by-step basic GraphQL server.

1. **Import Apollo Server and GraphQL types**:

```TypeScript
import { ApolloServer, gql } from 'apollo-server';
```
Load necessary modules to create and define the GraphQL server.

2. **Define Schema**:

```TypeScript
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
```
This defines a simple schema with a `Query` type that has a single field `hello`, returning a `String`.

3. **Define Resolvers**:

```TypeScript
const resolvers = {
  Query: {
    hello: () => 'Hello, GraphQL!',
  },
};
```
The resolver for the `hello` field returns the string 'Hello, GraphQL!'.

4. **Initialize and Configure Apollo Server**:

```TypeScript
const server = new ApolloServer({ typeDefs, resolvers });
```

5. **Start the Server**:

```TypeScript
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

When you run the server file, it should print:

```Plain text
🚀 Server ready at http://localhost:4000/
```

## Querying the Server
Now that your server is running, let's query it to test if everything works correctly by doing some querying to the server in a separate file.

1. **Import Fetch Module**:

```TypeScript
import fetch from 'node-fetch';
```

This module helps in making HTTP requests to your server.

2. **Define URL and Query**:

```TypeScript
const url = 'http://localhost:4000/';
const query = `
  query {
    hello
  }
`;
```

Specify the URL of your GraphQL server and the query you want to run.

3. **Create a Function to Execute the Query**:

```TypeScript
async function fetchGraphQLData() {
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
}

fetchGraphQLData();
```

Running this function should give you the output:

```JSON
{
  "data": {
    "hello": "Hello, GraphQL!"
  }
}
```

This confirms the server correctly handles your query and provides the expected response.

## Lesson Summary
Up next, you'll practice creating more complex schemas and queries. This hands-on practice will solidify your understanding and prepare you for advanced topics.
