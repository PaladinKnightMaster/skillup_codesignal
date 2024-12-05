# Handling More Complex Data Queries

## Introduction And Context Setting
Welcome to the lesson on "**Handling More Complex Data Queries**" as part of the "**Comprehensive Intro to GraphQL in TypeScript**" course. In this lesson, we'll expand on what we learned about mutations in the previous lesson. We'll focus on setting up nested queries in **GraphQL** to handle more intricate relationships between data, specifically authors and books.

## Defining The Schema With Nested Queries
To handle nested queries, we need a schema that represents our data types and their relationships.

1. **Define Data Types**

We'll create `Author` and `Book` types with fields that reference each other:

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

* `Author` has fields `id`, `name`, and `books`, which is an array of `Book`.
* `Book` has fields `id`, `title`, and an `author`, which is of type `Author`.

2. **Sample Data**

Define some sample data to work with:

```TypeScript
const authors = [
  { id: '1', name: 'J.R.R. Tolkien' },
  { id: '2', name: 'J.K. Rowling' }
];

const books = [
  { id: '1', title: 'The Hobbit', author: '1' },
  { id: '2', title: 'Harry Potter', author: '2' }
];
```

This data will be used to simulate a small library.

## Implementing Resolvers For Nested Queries
Resolvers are responsible for fetching the data defined in your schema.

1. **Define Resolvers**

Here's how you can write resolvers to handle nested queries:

```TypeScript
const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors
  },
  Book: {
    author: (book: any) => authors.find(author => author.id === book.author)
  },
  Author: {
    books: (author: any) => books.filter(book => book.author === author.id)
  }
};
```

* The `Query` resolvers return the sample data for `books` and `authors`.
* The `Book` resolver finds the author of a given book.
* The `Author` resolver filters books written by a given author.

2. **Initialize Apollo Server**

Combine the schema and resolvers to set up the server:

```TypeScript
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

When you run your `server.ts` file, it should print:

```Plain text
🚀 Server ready at http://localhost:4000/
```

## Testing The Nested Queries
Now that your server is up and running let's test the nested queries using a real-world example.

1. **Define The Query**

In a file called `run.ts`, write a query to fetch books and their authors:

```TypeScript
import fetch from 'node-fetch';

const fetchBooksAndAuthors = async () => {
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
};

fetchBooksAndAuthors();
```

2. **Run The Query**

Running this function should give you the following output:

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

This confirms the server correctly handles your nested queries and returns the expected data.

## Summary And Next Steps
In this lesson, you've learned to handle more complex data queries in **GraphQL** by setting up nested queries with **Apollo Server**. You've defined a schema with nested types, implemented resolvers, and tested your queries.

Now, it's time to practice what you've learned. Head over to the practice exercises to solidify your understanding. Try experimenting with more complex queries and relationships to get a deeper grasp of handling data in GraphQL.

Congratulations on making it this far! Keep practicing to reinforce your newfound skills.
