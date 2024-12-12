import WebSocket from 'ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import gql from 'graphql-tag';
import fetch from 'node-fetch';
import { ExecutionResult } from 'graphql';

// Define the GraphQL endpoint
const GRAPHQL_ENDPOINT = 'http://localhost:4000/graphql';
const WEBSOCKET_ENDPOINT = 'ws://localhost:4000/graphql';

// Type definitions for GraphQL responses
interface Book {
  id: string;
  title: string;
  author: string;
}

interface BooksQueryResponse {
  books: Book[];
}

interface AddBookMutationResponse {
  addBook: Book;
}

interface BookAddedSubscriptionPayload {
  bookAdded: Book;
}

// GraphQL queries and mutations
const getBooksQuery = gql`
  query {
    books {
      id
      title
      author
    }
  }
`;

const addBookMutation = gql`
  mutation($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      id
      title
      author
    }
  }
`;

const bookAddedSubscription = gql`
  subscription {
    bookAdded {
      id
      title
      author
    }
  }
`;

// Helper function to send a GraphQL request
const fetchGraphQL = async <T>(query: string, variables?: Record<string, any>): Promise<T> => {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });
  const result = (await response.json()) as ExecutionResult<T>;
  if (!result.errors) {
    return result.data as T;
  } else {
    throw new Error(`GraphQL error: ${result.errors.map((e: any) => e.message).join(', ')}`);
  }
};

// Set up WebSocket for subscriptions
const client = new SubscriptionClient(WEBSOCKET_ENDPOINT, { reconnect: true }, WebSocket);

let tasksCompleted = 0;
const totalTasks = 3;

function checkCompletion() {
  tasksCompleted += 1;
  if (tasksCompleted === totalTasks) {
    console.log('All tasks completed.');
    client.close(); // Close the SubscriptionClient
    process.exit(0); // Ensure the process exits when all tasks are done
  }
}

// Subscribe to book additions
const bookAddedSubscriptionObservable = client.request({ query: bookAddedSubscription.loc?.source.body! }).subscribe({
  next(response) {
    const data = response.data as { bookAdded: Book };
    if (data && data.bookAdded) {
      console.log('Book added:', data.bookAdded);
    } else {
      console.error('Subscription response was null or undefined:', response);
    }
    bookAddedSubscriptionObservable.unsubscribe(); // Unsubscribe after receiving the event
    checkCompletion(); // Check completion after receiving the bookAdded event
  },
  error(error) {
    console.error('Subscription error:', error);
    bookAddedSubscriptionObservable.unsubscribe(); // Unsubscribe in case of an error
    checkCompletion(); // Check completion in case of an error
  },
});

// Fetch books
fetchGraphQL<{ books: Book[] }>(getBooksQuery.loc?.source.body!)
  .then((data) => console.log('Books:', data.books))
  .catch((error) => console.error('Error fetching books:', error))
  .finally(() => checkCompletion());

// Add a new book
fetchGraphQL<{ addBook: Book }>(addBookMutation.loc?.source.body!, { title: '1984', author: 'George Orwell' })
  .then((data) => console.log('Added book:', data.addBook))
  .catch((error) => console.error('Error adding book:', error))
  .finally(() => checkCompletion());

// Set a timeout to allow subscriptions to receive their events
setTimeout(() => {
  bookAddedSubscriptionObservable.unsubscribe(); // Ensure the subscription is unsubscribed after the timeout
  client.close();
  process.exit(0);
}, 5000); // Set timeout to 5 seconds