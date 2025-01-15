## Run a Container in Detached Mode

Let's continue to build your Docker skills by using the `docker run` command to explore detached mode and log monitoring.

Here's what you'll do:

1. Start a new named container my-nginx using the nginx image in detached mode:

```Bash
docker run -d --name my-nginx nginx
```

2. Optionally, view the container logs with:

```Bash
docker logs my-nginx
```

Becoming familiar with these commands will enhance your confidence in managing Docker containers! 🚀