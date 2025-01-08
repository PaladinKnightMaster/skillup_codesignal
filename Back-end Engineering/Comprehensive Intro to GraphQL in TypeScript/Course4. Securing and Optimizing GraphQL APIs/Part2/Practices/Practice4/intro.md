# Secure Role-Based Access in GraphQL

In this task, you will implement the GraphQL server functionality, introducing a new mutation called `addProduct`. The `addProduct` mutation should be restricted to users with the role `ADMIN`. If a user without the `ADMIN` role attempts to add a product, they should receive an `AuthenticationError` stating, "You do not have permission to add a product."