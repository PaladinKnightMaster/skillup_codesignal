# Testing GraphQL APIs

## Introduction to Testing GraphQL APIs
Welcome to the final lesson of our course! Here, we'll learn how to test GraphQL APIs, ensuring that your server is robust and reliable. Testing is crucial for maintaining the stability and functionality of your API as it evolves.

## Defining the GraphQL Schema
Let's define a simple schema involving books. This schema includes the `Book` type, a `Query` for retrieving books, and a `Mutation` for adding a book.

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
`;
```
Here's a brief explanation:

- **Book**: Represents a book with `id`, `title`, and `author` fields.
- **Query** `books`: Fetches a list of books.
- **Mutation** `addBook`: Adds a new book.

## Implementing and Testing Queries
Let's implement the `books` query and see how to test it. We'll use a simple array to store our books.

```TypeScript
const books = [
  { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' }
];

const resolvers = {
  Query: {
    books: () => books
  }
};
```

Now, we'll use `createTestClient` from `apollo-server-testing` to test our `books` query. This utility allows us to create an isolated instance of our Apollo Server for testing purposes. By creating a test client, we can programmatically run queries and mutations against our API without needing a running server instance.

Here's how it works:

1. **Setup Apollo Server**:

```TypeScript
import { ApolloServer, gql } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';

const server = new ApolloServer({ typeDefs, resolvers });
const { query } = createTestClient(server as any);
```

2. **Write and Execute the Test Query**:

```TypeScript
const queryBooks = async () => {
  const res = await query({
    query: gql`
      query {
        books {
          id
          title
          author
        }
      }
    `
  });
  console.log(res.data);
};

queryBooks();
```

When you run this code, `createTestClient` sets up the server and allows you to send the `books` query, receiving the results directly in your code for inspection. The expected output is:

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

This example demonstrates how to implement and test a simple query, ensuring your resolver functions as expected.

## Implementing and Testing Mutations
Next, let's implement the `addBook` mutation and learn how to test it.

First, we define the resolver for the `addBook` mutation.

```TypeScript
const resolvers = {
  Query: {
    books: () => books
  },
  Mutation: {
    addBook: (_: any, { title, author }: { title: string, author: string }) => {
      const newBook = { id: String(books.length + 1), title, author };
      books.push(newBook);
      return newBook;
    }
  }
};
```

To test this mutation, we use `createTestClient` from the `apollo-server-testing` package. Here's how to set up and test the `addBook` mutation:

1. **Create the Test Client**:

```TypeScript
import { ApolloServer, gql } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';

const server = new ApolloServer({ typeDefs, resolvers });
const { mutate } = createTestClient(server as any);
```

- This code sets up an isolated Apollo Server instance with your schema (`typeDefs`) and resolvers.
- `createTestClient` is used to get methods like `mutate` to perform mutations without needing a running server instance.

2. **Write and Execute the Test Mutation**:

```TypeScript
const addBook = async () => {
  const res = await mutate({
    mutation: gql`
      mutation {
        addBook(title: "1984", author: "George Orwell") {
          id
          title
          author
        }
      }
    `
  });
  console.log(res.data);
};

addBook();
```

- This function sends the `addBook` mutation to the server and logs the response.
- The mutation adds a new book with title "1984" and author "George Orwell".

When you run this code, the test client executes the `addBook` mutation, and you should see the following output:

```JSON
{
  "data": {
    "addBook": {
      "id": "3",
      "title": "1984",
      "author": "George Orwell"
    }
  }
}
```

This section demonstrates how to test a mutation by setting up a test client with Apollo Server and executing the mutation to ensure it performs correctly.

## Lesson Summary
To sum up, in this lesson, you learned how to:

- Set up a basic GraphQL environment.
- Define a simple GraphQL schema.
- Implement and test queries and mutations using Apollo Server and `apollo-server-testing`.

These testing techniques are essential for ensuring that your GraphQL API remains robust as it scales.

Congratulations on completing the **Comprehensive Intro to GraphQL in TypeScript** course path! Now, you have a strong foundation in both creating and testing GraphQL APIs. Make sure to apply these skills in your future projects and dive deeper into more advanced topics as you grow your expertise. Happy coding!
