# Running Redis Pub/Sub in JavaScript

Let's run the code from our lesson to see it in action. Pay close attention to the output, as this will help solidify your understanding.

Here’s a quick summary:

1. We set up the subscriber to listen to the `notifications` channel, using a message handler to print incoming messages.
2. We run the subscriber in the same script using Redis's Pub/Sub capabilities.
3. We publish a `"Hello, Redis!"` message to the same channel to see the whole setup in action.
4. Finally, we unsubscribe and clean up the client connections.

Run the code below and observe the output.