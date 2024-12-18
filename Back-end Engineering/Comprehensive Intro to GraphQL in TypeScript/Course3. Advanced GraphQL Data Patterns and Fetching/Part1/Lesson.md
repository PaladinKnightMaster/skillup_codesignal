# Nested Resolvers and Data Relationships

## Introduction
GraphQL enables efficient and flexible data querying, reducing payload size and improving application performance.

In this lesson, we use **Apollo Server** to explore nested resolvers and data relationships in GraphQL. By the end, you should be able to create a GraphQL schema with nested types and use nested resolvers to handle complex data relationships.

## GraphQL Schemas and Types
A GraphQL schema defines the structure of the API and the types of data it can return.

Here’s an example defining two types, `Author` and `Book`, which have a nested relationship:

```TypeScript
const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    books: [Book]
  }

  type Book {
    id: ID!
    title: String!
    author: Author
  }

  type Query {
    books: [Book]
    authors: [Author]
  }
`;
```

- `Author` has an `id`, `name`, and a list of `books`.
- `Book` has an `id`, `title`, and an `author`.
- `Query` fetches lists of both `books` and `authors`.

## Building and Understanding Resolvers
Resolvers fetch the data for fields defined in the schema. We use nested resolvers for nested data.

Here’s an example:

```TypeScript
const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
  },
  Author: {
    books: (author) => books.filter(book => book.author.id === author.id),
  },
  Book: {
    author: (book) => authors.find(author => author.id === book.author.id),
  },
};
```

In the example above:

- The `Query` resolver returns the full lists of books and authors.
- The `Author` resolver fetches books associated with an author.
- The `Book` resolver retrieves the author associated with a book.

The nested resolvers work seamlessly because GraphQL calls the resolvers depth-first. For example, when querying a book's author, it first resolves the book and then the associated author field. This also prevents infinite loops because the nested calls are handled recursively within the resolution lifecycle.

## Example Implementation
Given the previously defined schema and resolvers, let's define our sample data:

```TypeScript
const authors = [
  { id: '1', name: 'J.R.R. Tolkien' },
  { id: '2', name: 'J.K. Rowling' }
];

const books = [
  { id: '1', title: 'The Hobbit', author: authors[0] },
  { id: '2', title: 'Harry Potter', author: authors[1] }
];
```

And initialize and start the Apollo Server:

```TypeScript
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

When you run your `server.ts` file, it should print:

```Plain text
🚀 Server ready at http://localhost:4000/
```

## Executing Queries
Now that your GraphQL server is up and running, let's execute a query to fetch nested data.

Example Query:

```TypeScript
const query = `
  query {
    books {
      title
      author {
        name
      }
    }
    authors {
      name
      books {
        title
      }
    }
  }
`;
```

Fetching Data:

```TypeScript
import fetch from 'node-fetch';

const query = `
  query {
    books {
      title
      author {
        name
      }
    }
    authors {
      name
      books {
        title
      }
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

Executing this script fetches the nested data relationships and logs them. You should see an output similar to:

```JSON
{
  "data": {
    "books": [
      {
        "title": "The Hobbit",
        "author": {
          "name": "J.R.R. Tolkien"
        }
      },
      {
        "title": "Harry Potter",
        "author": {
          "name": "J.K. Rowling"
        }
      }
    ],
    "authors": [
      {
        "name": "J.R.R. Tolkien",
        "books": [
          {
            "title": "The Hobbit"
          }
        ]
      },
      {
        "name": "J.K. Rowling",
        "books": [
          {
            "title": "Harry Potter"
          }
        ]
      }
    ]
  }
}
```

## Lesson Summary
In this lesson, we covered how to define GraphQL schemas with nested types and implement nested resolvers for complex data relationships. We also demonstrated executing queries to fetch nested data.

As you move on to the practice exercises, try creating your own schemas and resolvers. Practice is essential to solidify your understanding and improve your skills. This will set a strong foundation for tackling more advanced topics in GraphQL.

Good luck, and enjoy coding!
