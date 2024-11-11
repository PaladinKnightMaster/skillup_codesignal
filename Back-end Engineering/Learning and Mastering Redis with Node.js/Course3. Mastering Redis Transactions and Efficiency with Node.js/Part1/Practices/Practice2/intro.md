# Add a Decrement Operation to the Redis Pipeline

Nice progress! You’ve got the hang of executing Redis transactions within a pipeline. Now, let’s add a twist.

Rather than just setting a value and incrementing it, let's include a decrement operation in our pipeline. Modify the given code to decrement the `missions_ongoing` key by `2` in the pipeline.