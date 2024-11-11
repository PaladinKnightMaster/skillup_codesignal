# Running a Redis Transaction with Pipelines

Great job understanding the basics of Redis transactions! Let's run the code you saw in the lesson to see it in action.

Redis transactions allow you to execute a batch of commands as a single unit. In the code, we set some initial values, add a new user, and increment the number of completed courses within a single transaction.

The commands in the pipeline are executed together without waiting for the response to each command.

The transaction result is an array of responses from each command in the pipeline. In this case you will see `[ 2, 'OK' ]` as the result, where `2` is the new value of `courses_completed` and `'OK'` is the response from setting the `user` key to indicate success.