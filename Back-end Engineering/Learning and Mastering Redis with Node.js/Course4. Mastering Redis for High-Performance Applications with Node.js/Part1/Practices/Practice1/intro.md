# Running Redis Streams Code in Node.js

Great progress so far! Let's now run the code from the lesson to see Redis Streams in action.

You'll use the `xAdd` command to add events to a stream and the `xRange` command to read those events.

Run the code below and observe the output. This will help you understand how `Redis Streams` store and retrieve events.

Note, that if you run the code multiple times, you'll see the same events multiple times. This is because the stream is not cleared between runs, and the events are not unique.