# Enhance Authentication with Role Checks

In this task, you'll enhance the existing GraphQL server by implementing two new mutations: `addProduct` and `changePassword`.

1. The `addProduct` mutation should only allow users with the role `ADMIN` to add new products to the database.
2. The `changePassword` mutation should allow `ADMIN` users to change the password of any user.
To do this, you'll need to update the GraphQL schema to include the new mutations, modify the resolvers to handle the role verification and implement the necessary logic.

Remember to handle permissions correctly:

* If a non-`ADMIN` user tries to add a product or change a password, an `AuthenticationError` should be thrown with the message "You do not have permissions to perform this action."