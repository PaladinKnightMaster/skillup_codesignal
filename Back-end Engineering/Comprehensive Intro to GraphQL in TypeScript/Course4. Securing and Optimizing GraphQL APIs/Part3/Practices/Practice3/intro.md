# Rate Limiting in GraphQL

In this task, you'll enhance an existing GraphQL server setup by adding rate limiting to protect against too many requests in a short period. The current script initializes an `Apollo Server` with a simple schema and resolvers. Your task is to introduce rate limiting using `express-rate-limit` to allow a maximum of `10 requests per 10 minutes`.