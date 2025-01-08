# Authorization Strategies for Role-Based Access Control

## Introduction to Role-Based Access Control (RBAC)
In this lesson, we'll delve into **Role-Based Access Control (RBAC)**, a critical concept in securing applications. RBAC helps you manage user permissions based on their roles. This is important for maintaining security and ensuring that users can only access the data and functionalities they are authorized to use.

As a reminder from the previous lesson, we've already set up basic authentication on our GraphQL server using Apollo Server. Now, we will build on that foundation to implement more granular access control using roles.

## Implementing Role-Based Access Control
To implement RBAC, we need to differentiate between user roles and permissions. For simplicity, we will use two roles: ADMIN and USER. Each role will have different permissions.

Here's an example dataset of users with their respective roles:

| Username | Password | Role  |
|----------|----------|-------|
| admin    | admin    | ADMIN |
| user     | user     | USER  |

Next, let's modify our `context` function to extract user roles based on a provided token.

```TypeScript
const users = [
  { username: 'admin', password: 'admin', role: 'ADMIN' },
  { username: 'user', password: 'user', role: 'USER' }
];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    const user = users.find(user => user.username === token.split(' ')[1]);
    return { user };
  }
});
```
This code sets up an `ApolloServer` with user data and parses the `authorization` header from incoming requests to determine the user's identity and role. The `users` array defines users with a `username`, `password`, and `role`. The context function extracts the username from the `Bearer <username>` format token in the `authorization` header, finds the corresponding user in the `users` array, and returns the user object to be used in the resolvers for role-based access control.

## Securing Mutations with RBAC
To secure mutations, we will use the `login` mutation to authenticate users and assign roles. We will then secure another mutation, `addBook`, ensuring only ADMIN users can add books.

```TypeScript
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type User {
    username: String!
    role: String!
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    login(username: String!, password: String!): User
    addBook(title: String!, author: String!): Book
  }
`;

const books = [
  { id: '1', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: '2', title: 'Harry Potter', author: 'J.K. Rowling' }
];

const resolvers = {
  Mutation: {
    login: (_: any, { username, password }: { username: string, password: string }) => {
      const user = users.find(user => user.username === username && user.password === password);
      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }
      return { username: user.username, role: user.role };
    },
    addBook: (_: any, { title, author }: { title: string, author: string }, { user }: { user: { role: string } }) => {
      if (user.role !== 'ADMIN') {
        throw new AuthenticationError('You do not have permissions to add a book');
      }
      const newBook = { id: '3', title, author };
      books.push(newBook);
      return newBook;
    },
  },
};
```
In this setup, we check if the user role is `ADMIN` before allowing them to add a book. If the user does not have the necessary permissions, an `AuthenticationError` is thrown.

## Testing Role-Based Access Control: Login
Let's test our RBAC implementation using a separate script. First, we log in to get a token.

```TypeScript
const login = async (username: string, password: string): Promise<string | null> => {
  const query = `
    mutation Login($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        username
        role
      }
    }
  `;
  const variables = { username, password };
  const response = await executeQuery(query, variables);

  if (response.errors) {
    console.error(response.errors);
    return null;
  }

  return `Bearer ${username}`;
};
```

## Testing Role-Based Access Control: Add and Fetch Books
Next, we call mutations to add a new book and retrieve all books from the server.

```TypeScript
const addBook = async (title: string, author: string, token: string): Promise<any | null> => {
  const query = `
    mutation AddBook($title: String!, $author: String!) {
      addBook(title: $title, author: $author) {
        id
        title
        author
      }
    }
  `;
  const variables = { title, author };
  const response = await executeQuery(query, variables, token);

  if (response.errors) {
    console.error(response.errors);
    return null;
  }

  return response.data.addBook;
};

const getBooks = async (token: string): Promise<any[] | null> => {
  const query = `
    query {
      books {
        id
        title
        author
      }
    }
  `;
  const response = await executeQuery(query, {}, token);

  if (response.errors) {
    console.error(response.errors);
    return null;
  }

  return response.data.books;
};
```

## Testing Role-Based Access Control: Putting All Together
Finally, let's put things together and call all these methods we've defined:

```TypeScript
(async () => {
  const token = await login('admin', 'admin');
  if (!token) {
    console.error('Failed to login');
    return;
  }

  console.log('Fetching books...');
  const books = await getBooks(token);
  console.log('Books:', books);

  console.log('Adding a new book...');
  const newBook = await addBook('1984', 'George Orwell', token);
  console.log('Added book:', newBook);

  console.log('Fetching books again...');
  const updatedBooks = await getBooks(token);
  console.log('Books:', updatedBooks);
})();
```
This example script demonstrates a complete flow: logging in as `admin`, adding a book, and fetching the list of books to validate the role-based access control implementation.

## Lesson Summary
In this lesson, we successfully implemented **Role-Based Access Control (RBAC)** using Apollo Server. You learned how to:

* Set up Apollo Server.
* Implement basic authentication and role-based authorization.
* Secure GraphQL mutations with RBAC.
* Test the implementation using practical examples.

Next, you'll engage in practice exercises to reinforce these concepts. These hands-on activities will help solidify your understanding of RBAC and prepare you for more advanced topics. Keep exploring and experimenting with different scenarios to deepen your knowledge of securing GraphQL APIs.