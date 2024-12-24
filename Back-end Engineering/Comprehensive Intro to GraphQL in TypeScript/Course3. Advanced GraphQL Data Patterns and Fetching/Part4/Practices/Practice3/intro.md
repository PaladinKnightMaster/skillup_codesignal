# Optimizing Queries with DataLoader

Welcome to the next task! You’ve previously worked on setting up a GraphQL server with complex data relationships and nested resolvers. Now, we're going to optimize query performance using `DataLoader` to prevent the N+1 problem.

In the initial server code, we set up a `DataLoader` to batch and cache author queries. The script is almost complete, but some parts of the `DataLoader` configuration are missing. Your task is to add the missing parts to complete the `DataLoader` setup, which will help batch and cache requests effectively.

**Important Note**: Running this script will start an `Apollo Server`. Ensure that your changes are correct and then observe how queries are optimized with `DataLoader`.