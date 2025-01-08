# Enhance GraphQL Role-Based Security

In this task, you will work on fixing a logical bug in the existing GraphQL server implementation. The server is set up to handle multiple user roles, namely `ADMIN` and `USER`. However, the `addBook` mutation does not currently check for the correct role, allowing any logged-in user to add a book.

Your task is to identify and fix the mistake in the code so that only users with the `ADMIN` role can add books. If the user does not have the `ADMIN` role, the server should throw an `AuthenticationError` with the message, "You do not have permission to add a book."

Please note that running this script will change the state of the database.