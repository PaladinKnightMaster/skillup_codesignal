# Advanced Query and Mutation Arguments

## Introduction and Overview
In this lesson, we will build upon your existing **GraphQL** skills by introducing advanced query and mutation arguments. These techniques will enable you to create more flexible and powerful APIs. Advanced arguments allow for better precision in the data you request and the operations you perform.

## Defining Advanced Schema with Arguments
Let's start by defining our GraphQL schema. The schema is a blueprint for the structure of your API.

Below is the schema we will use:

```TypeScript
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    publishedDate: String
    genre: String
  }

  type Query {
    books(genre: String, author: String): [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!, publishedDate: String, genre: String): Book
  }
`;
```
In this schema:

- `Book` type defines the structure of a book object.
- `Query` type has a `books` field that accepts two optional arguments, `genre` and `author`, to filter books.
- `Mutation` type has an `addBook` field that accepts arguments to add a new book to our dataset.

## Resolvers: Filtering Data with Query Arguments
Resolvers fetch the data specified in the schema. Here, we will write resolvers to handle the books query with filtering capabilities:

```TypeScript
const resolvers = {
  Query: {
    books: (_: unknown, { genre, author }: { genre?: string; author?: string }) => {
      return books.filter(book =>
        (genre ? book.genre === genre : true) &&
        (author ? book.author === author : true)
      );
    }
  }
};
```
In this resolver:

- The `books` query accepts `genre` and `author` as optional arguments.
- It filters the `books` array based on these arguments.
- If an argument is provided, it filters by that argument; otherwise, it includes all books.

## Querying with Filter
For example, querying for books by a specific author:

```graphql
query {
  books(author: "J.R.R. Tolkien") {
    title
    author
  }
}
```
This would return:

```JSON
{
  "data": {
    "books": [
      {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien"
      }
    ]
  }
}
```

## Mutations: Adding New Entries with Arguments
Next, we handle mutations to add new entries. Here's how to set up the resolver for adding a book:

```TypeScript
const resolvers = {
  Mutation: {
    addBook: (
      _: unknown,
      { title, author, publishedDate, genre }:
      { title: string; author: string; publishedDate: string; genre: string }
    ) => {
      const newBook = { id: uuidv4(), title, author, publishedDate, genre };
      books.push(newBook);
      return newBook;
    }
  }
};
```
This resolver:

- Accepts `title`, `author`, `publishedDate`, and `genre` as arguments.
- Creates a new book object with a unique `id`.
- Adds the new book to the `books` array.
- Returns the newly added book.
Example mutation request:

```graphql
mutation {
  addBook(title: "1984", author: "George Orwell", publishedDate: "1949", genre: "Dystopian") {
    id
    title
    author
  }
}
```
Response:

```JSON
{
  "data": {
    "addBook": {
      "id": "unique-id",
      "title": "1984",
      "author": "George Orwell",
      "publishedDate": "1949",
      "genre": "Dystopian"
    }
  }
}
```

## Fetching Data Using Queries and Mutations in TypeScript: Fetching Books
Finally, let's see how to fetch data using the `fetch` API in TypeScript. We'll start by querying the list of books and then adding a new book.

```TypeScript
import fetch from 'node-fetch';

const fetchBooks = async () => {
  const query = `
    query {
      books {
        title
        author
        publishedDate
        genre
      }
    }
  `;

  const url = 'http://localhost:4000/';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    console.log('Books:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
};

fetchBooks();
```

## Adding Data Using Queries and Mutations in TypeScript: Adding a Book
Then, let's continue trying to add a book using the proper mutation:

```TypeScript
const addBook = async (title: string, author: string, publishedDate: string, genre: string) => {
  const mutation = `
    mutation {
      addBook(title: "${title}", author: "${author}", publishedDate: "${publishedDate}", genre: "${genre}") {
        id
        title
        author
        publishedDate
        genre
      }
    }
  `;

  const url = 'http://localhost:4000/';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: mutation }),
    });

    const data = await response.json();
    console.log('Added Book:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
};

addBook('1984', 'George Orwell', '1949', 'Dystopian');
```
Both examples demonstrate how to send queries and mutations to the **GraphQL** server and handle the responses.

## Summary and Next Steps
In this lesson, we covered how to enhance your GraphQL API by using advanced arguments in queries and mutations. You learned how to:

- Define a GraphQL schema with advanced arguments.
- Implement resolvers to handle these arguments.
- Perform queries and mutations via the `fetch` API in TypeScript.

This knowledge allows you to create more flexible and powerful GraphQL APIs. Now, it's time for you to practice these concepts with the exercises that follow, which will help you solidify your understanding and build confidence in using advanced GraphQL features.

Good luck, and happy coding!
