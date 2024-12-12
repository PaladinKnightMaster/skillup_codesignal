import WebSocket from 'ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import gql from 'graphql-tag';
import fetch from 'node-fetch';
import { ExecutionResult } from 'graphql';

// Define the GraphQL endpoint
const GRAPHQL_ENDPOINT = 'http://localhost:4000/graphql';
const WEBSOCKET_ENDPOINT = 'ws://localhost:4000/graphql';

// Type definitions for GraphQL responses
interface Magazine {
  id: string;
  title: string;
  publisher: string;
}

interface MagazinesQueryResponse {
  magazines: Magazine[];
}

interface AddMagazineMutationResponse {
  addMagazine: Magazine;
}

interface MagazineAddedSubscriptionPayload {
  magazineAdded: Magazine;
}

// GraphQL queries and mutations
const getMagazinesQuery = gql`
  query {
    magazines {
      id
      title
      publisher
    }
  }
`;

const addMagazineMutation = gql`
  mutation($title: String!, $publisher: String!) {
    addMagazine(title: $title, publisher: $publisher) {
      id
      title
      publisher
    }
  }
`;

const magazineAddedSubscription = gql`
  subscription {
    magazineAdded {
      id
      title
      publisher
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

// Helper function to delay execution
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Set up WebSocket for subscriptions
const client = new SubscriptionClient(WEBSOCKET_ENDPOINT, { reconnect: true }, WebSocket);

let tasksCompleted = 0;
const totalTasks = 3;
const SUBSCRIPTION_TIMEOUT = 5000; // Timeout for subscription in ms

// Function to handle task completion
function checkCompletion() {
  tasksCompleted += 1;
  if (tasksCompleted >= totalTasks) {
    console.log('All tasks completed.');
    process.exit(0); // Ensure the process exits when all tasks are done
  }
}

// Subscribe to magazine additions
const subscription = client
  .request({ query: magazineAddedSubscription.loc?.source.body! })
  .subscribe({
    next(response) {
      const data = response.data as { magazineAdded: Magazine };
      if (data && data.magazineAdded) {
        console.log('Magazine added:', data.magazineAdded);
        subscription.unsubscribe();
        client.close();
        checkCompletion(); // Check completion after unsubscribing
      } else {
        console.error('Subscription response was null or undefined:', response);
      }
    },
    error(error) {
      console.error('Subscription error:', error);
      client.close();
    },
  });

fetchGraphQL<{ magazines: Magazine[] }>(getMagazinesQuery.loc?.source.body!)
  .then((data) => console.log('Magazines:', data.magazines))
  .catch((error) => console.error('Error fetching magazines:', error))
  .finally(() => checkCompletion());

fetchGraphQL<{ addMagazine: Magazine }>(addMagazineMutation.loc?.source.body!, {
  title: 'Nature',
  publisher: 'Nature Publishing Group',
})
  .then((data) => console.log('Added magazine:', data.addMagazine))
  .catch((error) => console.error('Error adding magazine:', error))
  .finally(() => checkCompletion());

// Set a timeout to ensure the subscription task completes even if not triggered
delay(SUBSCRIPTION_TIMEOUT).then(() => {
  subscription.unsubscribe();
  client.close();
  checkCompletion();
});