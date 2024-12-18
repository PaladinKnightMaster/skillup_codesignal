# Nested GraphQL Relationships Creation

In this task, you will create a new GraphQL schema with nested types: `Film`, `Actor`, and `StreamingService`.

Your task is to design the schema so that a `Film` type includes fields for `id`, `title`, `streamingService`, and a list of `actors`. The `Actor` type should include fields for `id`, `name`, and a list of `films`. The `StreamingService` type will include fields for `id`, `name`, and a list of `films`. Make sure to populate sample data for each type and implement the appropriate nested resolvers to handle the relationships. Finally, start the Apollo Server and run a query to fetch the nested data correctly.