## Specify Dockerfile Location

In this task, instead of moving into the `project-directory` to build your Docker image, you'll learn how to do it while staying in the current directory containing your project. This way, you just specify where the Dockerfile is by providing the path.

Here's how to do it:

```Bash
docker build -t custom-nginx project-directory
```

This command does two things:

1. It starts the process of building a Docker image and names it `custom-nginx`.
2. It tells Docker to look inside `project-directory` for everything it needs, like the Dockerfile and other files.

By running this command from the parent folder, you can easily create a Docker image without needing to change where you are in your computer's file system.