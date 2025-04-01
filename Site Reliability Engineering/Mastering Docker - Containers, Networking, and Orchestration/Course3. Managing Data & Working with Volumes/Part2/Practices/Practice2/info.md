## Explore Anonymous Volume Persistence

You're making great progress! In this task, you'll further investigate how anonymous volumes behave when their containers are removed.

Here's a simple breakdown of what to do:

1. Run a Docker container using the Ubuntu image with an anonymous volume mounted at the `/data` path. Be sure not to use the automatic removal option (`--rm`) when running the container.

2. Next, remove the newly created container. You'll observe that even after the container is removed, the anonymous volume will still exist.

Keep going and enhance your understanding of how Docker handles volumes!