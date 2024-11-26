# Adding a New Type

So far, you've learned how to set up a basic GraphQL server and run queries. To extend this, let's add a `Publisher` type to the existing schema for books - this new type will include `name` and `location`, both of type `String`.

Each `Book` will now also have a `publisher` field.

Fill in the missing parts of the code to complete the schema definition and resolvers.