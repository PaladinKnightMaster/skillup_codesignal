# Querying with Arguments in GraphQL

## Introduction to Querying with Arguments in GraphQL
In our previous lessons, we've discussed setting up a basic GraphQL server using **Apollo Server** and creating basic types and queries. In this lesson, we will focus on querying with arguments in **GraphQL**, which allows you to retrieve specific data based on parameters you provide.

To understand querying with arguments, consider that you might want to fetch details about a specific book from a large collection. Instead of retrieving all books and filtering on the client side, you can pass an argument to your query to get just the book you need directly from the server.

## Defining the GraphQL Schema with Arguments
To query specific data, we need to extend our GraphQL schema to include arguments. Recall from previous lessons that the schema defines the types of data and the shape of our queries.

Here’s how we define a schema with arguments:

```TypeScript
import { ApolloServer, gql } from 'apollo-server';

// Define schema with arguments
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

In this schema:

* The `Book` type has three fields: `id`, `title`, and `author`.
* The `Query` type contains two fields:
  * `books`, which returns an array of `Book` items.
  * `book`, which takes an `id` argument of type `ID!` and returns a single `Book`.

Note that the `!` symbol in `ID!`, `String!`, and other types signifies that these fields are non-nullable. This means that a value for these fields must always be provided and cannot be `null`. For instance, an `id` of type `ID!` must always have a value in any `Book` object.

## Creating Resolvers for Queries with Arguments
Resolvers are functions that return data for the fields defined in your schema. When dealing with arguments, resolvers use these arguments to fetch the specific data requested.

Here are the resolvers for our schema:

```TypeScript
// Sample data
const books = [
  { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' },
];

// Resolvers
const resolvers = {
  Query: {
    books: () => books,
    book: (_: any, args: { id: string }) => books.find(book => book.id === args.id),
  },
};
```

Explanation:

The `books` resolver returns the entire list of books.
The `book` resolver takes an `id` argument and returns the book that matches the given `id`.

## Running the Apollo Server with Updated Schema and Resolvers
To see our updated schema and resolvers in action, we need to initialize and start the Apollo Server.

Here’s the code to do just that:

```TypeScript
// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

When you run this code in your `server.ts` file, you should see the following output:

```Plain text
🚀 Server ready at http://localhost:4000/
```

This indicates that your server is running and ready to handle queries.

## Making GraphQL Queries with Arguments
Now, let's make some GraphQL queries that include arguments.

We can use the following code to query all books and a specific book by ID:

```TypeScript
import fetch from 'node-fetch';

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

const url = 'http://localhost:4000/';

async function runQueries() {
  // Query all books
  const responseBooks = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: queryBooks,
    }),
  });

  const booksData = await responseBooks.json();
  console.log('Books:', JSON.stringify(booksData, null, 2));

  // Query a book by ID
  const responseBookById = await fetch(url, {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: queryBookById('1'), // Replace '1' with the desired book ID
      }),
    });

  const bookByIdData = await responseBookById.json();
  console.log('Book by ID:', JSON.stringify(bookByIdData, null, 2));
}

runQueries().catch((error) => console.error('Error:', error));
```

Explanation:

* We define two GraphQL queries: one to fetch all books and another to fetch a specific book by its ID.
* We use the `fetch` function to make HTTP POST requests to our GraphQL server.
* The server processes the queries and returns the requested data.

Output:

```JSON
Books: {
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

Book by ID: {
  "data": {
    "book": {
      "id": "1",
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien"
    }
  }
}
```

## Lesson Summary
In this lesson, we expanded our knowledge of GraphQL by learning how to query with arguments. We:

Defined a schema that supports arguments in queries.
Created resolvers to handle these queries.
Initialized and ran an Apollo Server with the updated schema and resolvers.
Made and executed GraphQL queries with arguments.
You should now proceed to the practice exercises to solidify your understanding of querying with arguments. In the next lesson, we will tackle more advanced features to further enhance your skills. Keep practicing and refining your knowledge!
