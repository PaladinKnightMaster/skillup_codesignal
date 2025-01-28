## Automate Container Cleanup Effortlessly

It's time to put what you've learned into action by using Docker's `--rm` option.

Your objective is to run an `nginx` container with automatic removal enabled and stop it using `Ctrl+C` to test the removal functionality.

1. Run the following command to start the container:

```Bash
docker run --rm --name my-nginx nginx
```

2. Stop the container by pressing `Ctrl+C`.
    - This action will trigger the automatic removal of the container.

After stopping the container, hit `Submit` so we can verify its automatic removal and complete the task!