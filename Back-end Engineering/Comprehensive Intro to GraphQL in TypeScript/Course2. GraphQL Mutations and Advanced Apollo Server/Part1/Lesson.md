# Adding Mutations for Data Manipulation

## Introduction
Welcome to the first lesson of our "**GraphQL Mutations and Advanced Apollo Server**" course, part of the "**Comprehensive Intro to GraphQL in TypeScript**" series. In this lesson, you'll learn how to add mutations, which will allow you to modify data on the server.

## Revisiting Apollo Server Basics
We'll start with a quick revision of key components without introducing mutations.

1. **Import Modules**: Import the necessary modules, including Apollo Server for setting up the server and uuid for generating unique IDs.

```TypeScript
import { ApolloServer, gql } from 'apollo-server';
import { v4 as uuidv4 } from 'uuid';
```

2. **Define Schema**: Define the GraphQL schema with a `Book` type and a `Query` type to fetch books data.

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

3. **Sample Data**: Provide some sample book data to be served by our query.

```TypeScript
let books = [
  { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' },
];
```

4. **Define Resolvers**: Specify how each field in the schema maps to the data provided.

```TypeScript
const resolvers = {
  Query: {
    books: () => books,
    book: (_: any, args: { id: string }) => books.find(book => book.id === args.id),
  },
};
```

5. **Initialize and Start Server**: Create an instance of ApolloServer and start it.

```TypeScript
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

## Introduction to Mutations
Mutations in GraphQL work like creating, updating, or deleting data records. Let's define the mutations in our schema.

1. **AddBook Mutation**: Define a mutation to add a new book by specifying a title and author.

```TypeScript
type Mutation {
  addBook(title: String!, author: String!): Book
}
```

2. **DeleteBook Mutation**: Define a mutation to delete a book by specifying its ID.

```TypeScript
type Mutation {
  deleteBook(id: ID!): Book
}
```

## Writing Resolvers for Mutations
Resolvers execute the behavior for a given type in the schema.

1. **Adding a Book**: Resolver function to take the title and author, create a new book with a unique ID, add it to the list, and return the new book.

```TypeScript
addBook: (_: any, { title, author }: { title: string, author: string }) => {
  const newBook = { id: uuidv4(), title, author };
  books.push(newBook);
  return newBook;
},
```

2. **Deleting a Book**: Resolver function to take the book ID, find and remove the book from the list, and return the deleted book. The `splice` method removes the book at `bookIndex` from the `books` array and assigns the removed book to the variable `deletedBook`.

```TypeScript
deleteBook: (_: any, { id }: { id: string }) => {
  const bookIndex = books.findIndex(book => book.id === id);
  if (bookIndex === -1) return null;
  const [deletedBook] = books.splice(bookIndex, 1);
  return deletedBook;
},
```

## Testing Mutations
To test our mutations, we'll use a Node.js script to make HTTP requests to our GraphQL server.

1. **Import Fetch Module**: Import the `fetch` function from `node-fetch` to make HTTP requests.

```TypeScript
import fetch from 'node-fetch';
```

2. **Define Queries and Mutations**: Define the queries and mutations we want to perform for testing.

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

const addBookMutation = (title: string, author: string) => `
  mutation {
    addBook(title: "${title}", author: "${author}") {
      id
      title
      author
    }
  }
`;

const deleteBookMutation = (id: string) => `
  mutation {
    deleteBook(id: "${id}") {
      id
      title
      author
    }
  }
`;
```

3. **Function to Execute Requests**: Create a function to send HTTP requests to the GraphQL server and log the response.

```TypeScript
const url = 'http://localhost:4000/';

const makeRequest = async (query: string) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    const json = await response.json();
    console.log(JSON.stringify(json, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
};
```

4. **Execute Sample Requests**: Run a sequence of requests to query books, add a new book, and delete a book, then observe the changes.

```TypeScript
(async () => {
  console.log("Query all books:");
  await makeRequest(queryBooks);

  console.log("Add a new book:");
  await makeRequest(addBookMutation("New Book", "New Author"));

  console.log("Query all books after addition:");
  await makeRequest(queryBooks);

  console.log("Delete a book:");
  await makeRequest(deleteBookMutation("1"));

  console.log("Query all books after deletion:");
  await makeRequest(queryBooks);
})();
```

## Expected Output
When running the script, you should see logged outputs similar to:

```JSON
{
  "data": {
    "books": [
      { "id": "1", "title": "The Hobbit", "author": "J.R.R. Tolkien" },
      { "id": "2", "title": "Harry Potter", "author": "J.K. Rowling" }
    ]
  }
}
```

```JSON
{
  "data": {
    "addBook": {
      "id": "unique-id",
      "title": "New Book",
      "author": "New Author"
    }
  }
}
```

```JSON
{
  "data": {
    "deleteBook": {
      "id": "1",
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien"
    }
  }
}
```

## Review and Next Steps
In this lesson, you learned how to:

1. Set up a basic Apollo Server.
2. Define GraphQL schema with mutations.
3. Write resolver functions for mutations.
4. Test your mutations using a Node.js script.

Next, you'll get hands-on practice with these concepts through a series of exercises. In the upcoming lessons, we will delve deeper into advanced features and best practices in GraphQL and Apollo Server.
