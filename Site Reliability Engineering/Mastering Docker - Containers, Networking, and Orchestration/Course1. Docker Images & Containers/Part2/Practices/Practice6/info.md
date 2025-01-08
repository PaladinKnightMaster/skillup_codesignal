## Revisiting the Docker Run Command

Previously, you learned to manage containers using separate commands to pull, create, start, and stop a container. Now, we're revisiting the `docker run` command to handle it all in one step.

Here's how to quickly start and stop a Docker container:

1. Use `docker run` to download, create, and start a named container with the Nginx image:

```Bash
docker run --name my-nginx nginx
```

2. The run command for this image keeps the container running in your terminal, so make sure to press `CTRL+C` to stop it.

After completing these steps, click `Submit` to evaluate your work!