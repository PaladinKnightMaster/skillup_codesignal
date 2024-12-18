# Making Pipeline Argument Optional for Redis Functions

Now that you have learned how to handle transactions with pipelines, it's time to practice.

Modify the provided code to make the `pipeline` argument optional for the `addUser` and `addScore` functions.

When the `pipeline` argument is `null`, use the default client setting; otherwise, use the pipeline setting.