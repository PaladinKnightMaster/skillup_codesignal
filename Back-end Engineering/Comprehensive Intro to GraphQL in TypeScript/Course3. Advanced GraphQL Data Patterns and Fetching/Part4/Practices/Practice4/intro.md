# Optimize GraphQL with DataLoader

Welcome to the next task! You’ve previously worked on setting up a GraphQL server with complex data relationships and nested resolvers. Now, we're going to optimize query performance using `DataLoader` to prevent the N+1 problem.

In the initial server code, we set up a `DataLoader` to batch and cache actor queries. The script is partly complete, but some parts of the `DataLoader` configuration and the resolvers are missing. Your task is to add the missing parts to complete the `DataLoader` setup and implement the resolvers, which will help batch and cache requests effectively.