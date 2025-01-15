# Best Practices for Error Handling in GraphQL

## Introduction
Welcome to the lesson on **Best Practices for Error Handling in GraphQL**. In this lesson, we will explore how to handle errors effectively in your GraphQL API using `Apollo Server` and `TypeScript`. Proper error handling is crucial for building reliable and user-friendly applications.

## How GraphQL Handles Errors and Common Error Types
GraphQL treats errors as part of the response format. If any field in a query fails, it includes an `errors` array in the response. Common error types include:

- User Input Errors
- Authentication Errors
- Validation Errors
- System Errors

## Implementing Basic Error Handling in Resolvers
Apollo Server provides built-in error classes like UserInputError to help you handle common errors. Let's start with handling missing data and validating user inputs.

Here's how you can throw a `UserInputError` if a book is not found:

```TypeScript
import { ApolloServer, gql, UserInputError } from 'apollo-server';

const books = [
  { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' }
];

const resolvers = {
  Query: {
    book: (_: any, { id }: { id: string }) => {
      const book = books.find(book => book.id === id);
      if (!book) {
        throw new UserInputError('Book not found');
      }
      return book;
    },
  }
};
```

In this code, when a book with the specified ID is not found, a `UserInputError` is thrown with the message "Book not found."

## Example: Validating User Inputs
You can also throw an error if the required inputs are missing:

```TypeScript
const resolvers = {
  Mutation: {
    addBook: (_: any, { title, author }: { title: string; author: string }) => {
      if (!title || !author) {
        throw new UserInputError('Title and Author are required');
      }
      const newBook = { id: String(books.length + 1), title, author };
      books.push(newBook);
      return newBook;
    },
  }
};
```

In this code, if either `title` or `author` is missing, a `UserInputError` is thrown with a relevant message.

## Advanced Error Handling Techniques
For more complex cases, you might want to create custom error classes:

```TypeScript
class MyCustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MyCustomError';
  }
}
```

## Handling Multiple Errors
You can handle multiple errors by creating a list of errors and throwing them as needed:

```TypeScript
const errors = [];
if (!title) errors.push('Title is required');
if (!author) errors.push('Author is required');
if (errors.length > 0) throw new UserInputError(errors.join(', '));
```

## Example: Error Handling in a Complete Application
Now, let's put it all together in a complete example. We'll use the provided outcome code:

Here is our server code:

```TypeScript
import { ApolloServer, gql, UserInputError } from 'apollo-server';

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!): Book
  }
`;

const books = [
  { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' }
];

const resolvers = {
  Query: {
    book: (_: any, { id }: { id: string }) => {
      const book = books.find(book => book.id === id);
      if (!book) {
        throw new UserInputError('Book not found');
      }
      return book;
    },
  },
  Mutation: {
    addBook: (_: any, { title, author }: { title: string; author: string }) => {
      if (!title || !author) {
        throw new UserInputError('Title and Author are required');
      }
      const newBook = { id: String(books.length + 1), title, author };
      books.push(newBook);
      return newBook;
    },
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

And here is how we make queries for the server:

```TypeScript
import fetch from 'node-fetch';

const url = 'http://localhost:4000/';

const fetchBook = async (id: string) => {
  const query = `
    query {
      book(id: "${id}") {
        title
        author
      }
    }
  `;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
      }),
    });

    const data = await response.json();

    if (data.errors) {
      console.error('Errors:', data.errors);
    } else {
      console.log('Data:', data);
    }
  } catch (error) {
    console.error('Network Error:', error);
  }
};

const addNewBook = async (title: string, author: string) => {
  const mutation = `
    mutation {
      addBook(title: "${title}", author: "${author}") {
        id
        title
        author
      }
    }
  `;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: mutation,
      }),
    });

    const data = await response.json();

    if (data.errors) {
      console.error('Errors:', data.errors);
    } else {
      console.log('Data:', data);
    }
  } catch (error) {
    console.error('Network Error:', error);
  }
};

// Test the functions
fetchBook('1');
addNewBook('1984', 'George Orwell');
```

In this code, errors from the server response are logged to the console using `console.error`. Additionally, any network errors during the fetch request are caught and logged as "Network Error".

When you run this code, you will set up a server that handles both queries and mutations with proper error handling.

## Lesson Summary
To summarize, in this lesson, you learned the importance of error handling in GraphQL, how to implement basic and advanced error handling techniques, and saw how to apply them in a complete application.

As you move on to the practice exercises, apply these techniques to solidify your understanding. Congratulations on completing this lesson and the course! You've gained essential skills to develop secure and resilient GraphQL APIs. Keep practicing and exploring more advanced topics to enhance your expertise.
