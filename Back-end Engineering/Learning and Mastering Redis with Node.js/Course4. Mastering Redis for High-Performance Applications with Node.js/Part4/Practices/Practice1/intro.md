# Snapshotting in Redis with JavaScript

Let's run the code you saw in the lesson to better understand snapshotting in Redis.

Snapshotting allows you to save your data to disk. There are two ways to trigger a snapshot:

1. `save` **Command**: Creates a synchronous snapshot. It blocks Redis until the snapshot is completed.

2. `bgSave` **Command**: Creates an asynchronous snapshot. It runs in the background without blocking Redis.

In this practice, we'll connect to a Redis server, trigger both `save` and `bgSave` snapshots, and print a message indicating that the manual snapshot was triggered.

Here's the code: