## Create and Start a Mapped Container

Well done on your journey so far! Now, let's try a different approach and map the ports with the `docker create` command.

Here's what you'll do:

1. **Create a container** from the `custom-nginx` image, mapping container port 80 to host port 8080:

```Bash
docker create --name my-nginx -p 8080:80 custom-nginx
```

2. **Start the container** you've just created:

```Bash
docker start my-nginx
```

Just like you learned to set ports with the `docker run` command earlier, you'll now learn to achieve the same with the `docker create` command.