# Adding a Moderator Role

In this task, you'll expand the current role-based access control system by introducing a new role called "MODERATOR" to your existing GraphQL server. This new role should have more permissions than the basic "USER" but fewer than "ADMIN". Specifically, a "MODERATOR" should be able to add books, just like an "ADMIN", but cannot remove books (unlike "ADMIN").

You need to update the user data, schema, and resolvers accordingly.

Make sure to test the updated functionality by running the queries in `run.ts`.