# Managing Redis Key Expiration in JavaScript

Great job on completing the lesson! Now, let's run a practical exercise to see key expiration in action.

We will create a Redis key with an expiration time, retrieve and print its value before it expires, and attempt to retrieve the value again after the expiration time has passed.

Here's the plan:

1. Set a key (`session:12345`) with a `data` value that expires in 2 seconds.
2. Retrieve and print the value before expiration.
3. Print the time-to-live (TTL) for the key.
4. Wait 3 seconds to allow the key to expire.
5. Try to retrieve the value again, which should now be `null`.

Simply run the code below and observe the outputs to understand how Redis handles key expiration.