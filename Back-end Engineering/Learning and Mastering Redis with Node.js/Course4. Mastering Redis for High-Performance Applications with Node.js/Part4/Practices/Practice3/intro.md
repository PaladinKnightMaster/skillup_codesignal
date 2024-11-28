# Retrieve and Print Key-Value Pairs from Redis Using Node.js

For this practice, we will demonstrate how to start a Redis server and load data into it from the dump file using Node.js.

In the `loadData.js` file, you will find a function that sets multiple key-value pairs in Redis.

Then, we save a snapshot of the data using the `createSnapshot` function. After that, the server is stopped and restarted with the snapshot, to do that, we use the following command:

```Bash
redis-server --dir /snapshot/folder --dbfilename dump.rdb
```

Now, to make sure the data is loaded correctly, you need to complete the `solution.js` file to retrieve the key-value pairs from the Redis server and print them.