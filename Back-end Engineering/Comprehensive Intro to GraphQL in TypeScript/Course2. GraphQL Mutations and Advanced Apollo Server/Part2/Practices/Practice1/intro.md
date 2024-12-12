# Changing Authors to Publishers in GraphQL

Nice progress so far! Let's take the existing GraphQL server you worked on and make a small yet meaningful change.

Right now, the `Query` and `Book` resolvers return `authors` and `books`. Modify the code so that each book references a `publisher` instead of an `author`.