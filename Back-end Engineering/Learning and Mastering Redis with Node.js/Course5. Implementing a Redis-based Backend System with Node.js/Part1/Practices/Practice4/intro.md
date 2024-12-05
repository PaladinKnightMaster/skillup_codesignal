# Extend Expiration Time of User Data Using Redis

Great job so far! Now let's make a useful change to our existing code.

This time, we want to implement a function to extend the expiration time of user data after it has already been set.

Implement the `extendUserTTL` function that takes a `userId` and `incr` as an increment amount in seconds. The function should take the current TTL of the user. If the current TTL is greater than 0, extend the expiration time of the user data by `incr` seconds.