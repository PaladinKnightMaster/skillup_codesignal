# Extend Expiration Time of a Redis Key

Now that you have the basics, let's move to a more advanced task. We are going to extend the expiration time of an existing key using the `client.expire` method.

You have a key named `login:abc123` which is set to expire in 3 seconds. Modify the code so that after setting the initial expiration, the expiration time is extended to 5 seconds.