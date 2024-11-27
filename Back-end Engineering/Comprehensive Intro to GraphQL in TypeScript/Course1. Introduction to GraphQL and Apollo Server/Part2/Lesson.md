# Basic Types and Queries

## Introduction to GraphQL and Apollo Server
In this lesson, we will define basic types and write simple queries in **GraphQL** using **Apollo Server**. By the end, you'll create a basic GraphQL server to fetch a list of books, building on what you've learned about setting up a GraphQL server.

## Creating the Server with Apollo Server
We'll start by setting up a new Apollo Server instance to manage our GraphQL server. Let's do it step-by-step.

1. **Define the GraphQL schema**:

```TypeScript
import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;
```

In this schema:
  * The `Book` type has `title` and `author` fields, both of which are strings.
  * The `Query` type includes a `books` field that returns an array of `Book` objects.

2. **Create sample data**:

```TypeScript
const books = [
  { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { title: 'Harry Potter', author: 'J.K. Rowling' },
];
```

This array will act as our in-memory database of books.

3. **Define resolvers**:

```TypeScript
const resolvers = {
  Query: {
    books: () => books,
  },
};
```

Here, the resolver for the `books` query simply returns the `books` array we defined earlier.

4. **Initialize, configure, and start Apollo Server**:

```TypeScript
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

Running this command will start the server and print the URL where it's accessible.

## Running Queries Against the Server
With the server running, let's write and execute a query to fetch the list of books.

```TypeScript
import fetch from 'node-fetch';

const query = `
  query {
    books {
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
  body: JSON.stringify({ query }),
})
  .then((response) => response.json())
  .then((data) => console.log(JSON.stringify(data, null, 2)))
  .catch((error) => console.error('Error:', error));
```

This script:

* Sends a POST request to the server with a query to fetch books.
* Logs the response, which should include the list of books with their titles and authors.

The script outputs:

```JSON
{
  "data": {
    "books": [
      {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien"
      },
      {
        "title": "Harry Potter",
        "author": "J.K. Rowling"
      }
    ]
  }
}
```

This output confirms that our server correctly handles the query and returns the expected data.

## Lesson Summary
In this lesson, we:

* Created a schema with a basic type (`Book`).
* Set up resolvers to fetch data.
* Wrote and ran queries to retrieve a list of books.

Next, you will practice what you've learned by tackling exercises that help solidify these concepts. The following lessons will cover more complex queries and mutations.

Happy coding!