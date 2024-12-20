# Pagination in GraphQL

## Introduction
Welcome to another GraphQL lesson that now focuses on pagination, a critical concept for handling large datasets efficiently.

Pagination is the technique of dividing a dataset into discrete pages, allowing clients to request data in manageable chunks instead of all at once. This improves performance, reduces bandwidth, and provides a better user experience.

## Defining the GraphQL Schema with Pagination
First, let's define the TypeScript code for the GraphQL schema:

```TypeScript
import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books(limit: Int, offset: Int): [Book]
  }
`;
```

Here:

- **Book Type**: It has three fields: `id`, `title`, and `author`.
- **Query Type**: The `books` query takes two optional arguments: `limit` and `offset`, returning an array of `Book`.

## Implementing Resolvers with Pagination Logic
Resolvers are functions that handle fetching data when a field is queried. Here’s how to add the pagination logic:

```TypeScript
const books = Array.from({ length: 50 }, (_, i) => ({
  id: String(i + 1),
  title: `Book ${i + 1}`,
  author: `Author ${i + 1}`
}));

const resolvers = {
  Query: {
    books: (_: unknown, { limit = 10, offset = 0 }: { limit?: number; offset?: number }) => books.slice(offset, offset + limit)
  }
};
```

Here:

- `books` Array: An array of 50 sample book objects is created for demonstration purposes.
- `Query Resolver`: The `books` resolver function takes two optional arguments, `limit` and `offset`, with default values of 10 and 0, respectively.
- `slice Method`: The resolver uses the `slice` method on the `books` array to return a portion of the array. The `slice` method takes two parameters: the starting index (`offset`) and the ending index (`offset + limit`). This effectively returns a subset of books based on the specified `limit` and `offset`, allowing for paginated results.

## Fetching Paginated Data from the Client
We will make client-side requests to fetch paginated data using `node-fetch`. Here is how we can make paginated queries:

First, we define the query:

```TypeScript
import fetch from 'node-fetch';

const query = `
  query getBooks($limit: Int, $offset: Int) {
    books(limit: $limit, offset: $offset) {
      id
      title
      author
    }
  }
`;
```

Then, we define our pagination variable and fetch the data:

```TypeScript
const url = 'http://localhost:4000/';

const variables = {
  limit: 5,
  offset: 0
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(JSON.stringify(data, null, 2)))
  .catch((error) => console.error('Error:', error));
```

Let's quickly understand how it works:

- We define a GraphQL query `getBooks` that takes `limit` and `offset` as parameters to fetch a specific range of books.
- We define the GraphQL URL and variables - parameters `limit` and `offset` to control pagination.
- We use `fetch` to send a POST request to the GraphQL server with the query and variables.
- The response is received in JSON format, parsed, and then logged to the console.

## Lesson Summary
You've now learned:

- **What Pagination Is**: Dividing data into discrete pages for performance and user experience.
- **GraphQL Basics**: Creating a schema and implementing resolvers with `Apollo Server`.
- **Running and Querying**: Starting the Apollo server and fetching paginated data from the client.
Next, you’ll practice these concepts through exercises. Try adjusting `limit` and `offset` values to get different sets of data. Congratulations on completing the lesson and the course! The skills you’ve learned are valuable for creating efficient and flexible APIs using GraphQL. Well done!
