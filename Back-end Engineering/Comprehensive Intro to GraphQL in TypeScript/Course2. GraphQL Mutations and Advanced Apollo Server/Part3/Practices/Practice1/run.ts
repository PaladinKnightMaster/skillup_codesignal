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

interface UpdateBookMutationResponse {
  updateBook: Book;
}

interface BookAddedSubscriptionPayload {
  bookAdded: Book;
}

interface BookUpdatedSubscriptionPayload {
  bookUpdated: Book;
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

const updateBookMutation = gql`
  mutation($id: ID!, $title: String!) {
    updateBook(id: $id, title: $title) {
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

const bookUpdatedSubscription = gql`
  subscription {
    bookUpdated {
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

async function run() {
  try {
    let bookAddedPromise = new Promise<void>((resolve, reject) => {
      const bookAddedSubscriptionObservable = client.request({ query: bookAddedSubscription.loc?.source.body! }).subscribe({
        next(response) {
          const data = response.data as { bookAdded: Book };
          if (data && data.bookAdded) {
            console.log('Book added:', data.bookAdded);
          } else {
            console.error('Subscription response was null or undefined:', response);
          }
          bookAddedSubscriptionObservable.unsubscribe(); // Unsubscribe after receiving the event
          resolve();
        },
        error(error) {
          console.error('Subscription error:', error);
          bookAddedSubscriptionObservable.unsubscribe(); // Unsubscribe in case of an error
          reject(error);
        },
      });
    });

    let bookUpdatedPromise = new Promise<void>((resolve, reject) => {
      const bookUpdatedSubscriptionObservable = client.request({ query: bookUpdatedSubscription.loc?.source.body! }).subscribe({
        next(response) {
          const data = response.data as { bookUpdated: Book };
          if (data && data.bookUpdated) {
            console.log('Book updated:', data.bookUpdated);
          } else {
            console.error('Subscription response was null or undefined:', response);
          }
          bookUpdatedSubscriptionObservable.unsubscribe(); // Unsubscribe after receiving the event
          resolve();
        },
        error(error) {
          console.error('Subscription error:', error);
          bookUpdatedSubscriptionObservable.unsubscribe(); // Unsubscribe in case of an error
          reject(error);
        },
      });
    });

    // Fetch books
    const books = await fetchGraphQL<{ books: Book[] }>(getBooksQuery.loc?.source.body!);
    console.log('Books:', books.books);

    // Add a new book
    await fetchGraphQL<{ addBook: Book }>(addBookMutation.loc?.source.body!, { title: '1984', author: 'George Orwell' })
      .then((data) => console.log('Added book:', data.addBook))
      .catch((error) => console.error('Error adding book:', error));

    // Update the book
    await fetchGraphQL<{ updateBook: Book }>(updateBookMutation.loc?.source.body!, { id: '1', title: 'The Silmarillion' })
      .then((data) => console.log('Updated book:', data.updateBook))
      .catch((error) => console.error('Error updating book:', error));

    // Wait for subscriptions to complete
    await Promise.all([bookAddedPromise, bookUpdatedPromise]);

    console.log('All tasks completed.');
    client.close(); // Close the SubscriptionClient
    process.exit(0); // Ensure the process exits when all tasks are done
  } catch (error) {
    console.error('An error occurred:', error);
    process.exit(1);
  }
}

run();