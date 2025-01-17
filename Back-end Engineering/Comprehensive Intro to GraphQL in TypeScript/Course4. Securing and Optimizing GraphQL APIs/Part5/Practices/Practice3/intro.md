# Testing Server and GraphQL Queries

Great progress so far! In this task, you will extend a simple GraphQL server by adding test client functionality. The server is already set up to handle books with fields such as `id`, `title`, and `author`. Your job is to add a `createTestClient` setup within the server file and to create query and mutation testing functions.

Here's what you'll need to do:

1. Integrate the `createTestClient` from `apollo-server-testing`.
2. Implement functions to test querying the list of books and adding a new book using mutations.