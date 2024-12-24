# Optimize GraphQL Queries with DataLoader

Welcome to the first practice task! You’ve previously worked on setting up a GraphQL server with complex data relationships and nested resolvers. Now, we're going to optimize query performance using `DataLoader` to prevent the N+1 problem.

In this task, the initial server code initializes a `DataLoader` to batch and cache author queries. However, the current implementation can improve the batching logic further. Your task is to modify the `DataLoader` configuration to adjust the batching function to handle scenarios where author IDs might be queried multiple times (i.e., when the requested array of IDs might contain some duplicates).