# Modifying Key Expiration Time in Redis

Great, now let's modify our existing code. Modify the key `user:session:99999` to have an expiration time of 4 seconds.

We will then wait 5 seconds before attempting to retrieve it again.