# Adding Authentication to Your GraphQL Server

## Introduction to Authentication in GraphQL
In this lesson, we're diving into how to add authentication to your GraphQL server. Authentication is crucial for securing your API and ensuring that only authorized users can access specific resources. We'll be using Apollo Server, a popular GraphQL server, to implement this. While Apollo Server is widely used for its simplicity and active support, other alternatives include Express-GraphQL and Relay.

Our goal for this lesson is to:

* Set up an Apollo Server with basic authentication.
* Implement a login system.
* Secure certain GraphQL mutations.

## Setting Up the Apollo Server
First, let's quickly revise how we set up the GraphQL types and mock data. Our GraphQL server will have two mutations - one for logging in using the provided username and password and another for adding a new book given its author and title.

```TypeScript
import { ApolloServer, gql, AuthenticationError } from 'apollo-server';

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
    login(username: String!, password: String!): String
    addBook(title: String!, author: String!): Book
  }
`;

const users = [{ username: 'admin', password: 'admin' }];
const books = [
  { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' }
];
```

## Implementing Authentication Logic
Now let's implement the authentication logic to secure our GraphQL API.

For this example, we use a simple array to mock a user database.

```TypeScript
const users = [{ username: 'admin', password: 'admin' }];
```
The `login` mutation takes a username and password and returns an authentication token if valid.

```TypeScript
login: (_: any, { username, password }: { username: string, password: string }) => {
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    throw new AuthenticationError('Invalid credentials');
  }
  return 'token';
}
```
Here, we check if the provided credentials match any user in our mock database. If they do, we return a token; otherwise, we throw an `AuthenticationError`.

Then, we secure the `addBook` mutation by checking if the provided token is valid.

```TypeScript
addBook: (_: any, { title, author }: { title: string, author: string }, { token }: { token: string }) => {
  if (token !== 'Bearer ' + 'token') {
    throw new AuthenticationError('You must be logged in');
  }
  const newBook = { id: '3', title, author };
  books.push(newBook);
  return newBook;
}
```
This mutation checks if the provided token matches `'Bearer token'`. If not, it throws an `AuthenticationError`.

## Setting up the server
Finally, we start a GraphQL server, providing a proper authorization context on startup:

```TypeScript
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    return { token };
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

## Testing the Implementation: Login
Let's test our implementation by doing some queries to the server we've just set up. First, we call the `login` mutation to authorize our user.

```TypeScript
import fetch from 'node-fetch';

const url = 'http://localhost:4000/graphql';

async function login(username: string, password: string) {
  const query = `
    mutation {
      login(username: "${username}", password: "${password}")
    }
  `;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json() as { data: { login: string } };
  return data.data.login;
}

(async () => {
  const token = await login('admin', 'admin');
  console.log('Token:', token);
});
```

This function sends a login request and retrieves the token.

## Testing the Implementation: Query Books
After we have authorized, let's query our books from the server:

```TypeScript
async function queryBooks(token: string) {
  const query = `
    query {
      books {
        id
        title
        author
      }
    }
  `;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json() as { data: { books: Array<{ id: string, title: string, author: string }> } };
  return data;
}

(async () => {
  const token = await login('admin', 'admin');
  console.log('Token:', token);

  const booksData = await queryBooks(token);
  console.log('Books:', JSON.stringify(booksData, null, 2));
})();
```
This function queries the books with the provided token.

## Testing the Implementation: Adding a New Book
Finally, let's try to add a new book to the server.

```TypeScript
async function addBook(token: string, title: string, author: string) {
  const mutation = `
    mutation {
      addBook(title: "${title}", author: "${author}") {
        id
        title
        author
      }
    }
  `;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ query: mutation }),
  });

  const data = await response.json() as { data: { addBook: { id: string, title: string, author: string } } };
  return data;
}

(async () => {
  const token = await login('admin', 'admin');
  console.log('Token:', token);

  const booksData = await queryBooks(token);
  console.log('Books:', JSON.stringify(booksData, null, 2));

  const newBook = await addBook(token, '1984', 'George Orwell');
  console.log('New Book:', JSON.stringify(newBook, null, 2));
})();
```
This code logs in to get a token, queries the list of books, and attempts to add a new book.

Expected output:

```JSON
Token: token
Books: {
  "data": {
    "books": [
      { "id": "1", "title": "The Hobbit", "author": "J.R.R. Tolkien" },
      { "id": "2", "title": "Harry Potter", "author": "J.K. Rowling" }
    ]
  }
}
New Book: {
  "data": {
    "addBook": {
      "id": "3",
      "title": "1984",
      "author": "George Orwell"
    }
  }
}
```

## Lesson Summary
In this lesson, you learned how to add authentication to your GraphQL server using Apollo Server. We:

* Set up the Apollo Server with basic authentication.
* Implemented a login system to authenticate users.
* Secured the `addBook` mutation to ensure only authenticated users can add books.
Next, you'll get hands-on practice with adding more secure queries and mutations. Great job on completing this lesson! Keep up the good work as you continue your journey in securing and optimizing GraphQL APIs.
