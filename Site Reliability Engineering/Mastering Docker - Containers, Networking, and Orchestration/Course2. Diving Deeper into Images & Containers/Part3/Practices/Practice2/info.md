## Manage Containers with Automatic Removal

You're doing amazing! Let's build on your Docker knowledge by practicing automatic container removal with the `create` command.

Here's what you need to do:

1. **Create a new temporary container with**:

```Bash
docker create --rm --name temp-container nginx
```

2. **Start the container with**:

```Bash
docker start temp-container
```

3. **Stop the container to trigger its removal using**:

```Bash
docker stop temp-container
```

When you click the `Submit` button, we'll verify that you created, started, stopped, and successfully removed the container.