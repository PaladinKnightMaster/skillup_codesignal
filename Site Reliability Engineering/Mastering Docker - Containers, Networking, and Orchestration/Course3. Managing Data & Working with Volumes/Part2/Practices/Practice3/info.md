## Automatic Removal of Anonymous Volumes

You're doing fantastic! In this task, you'll understand how Docker manages anonymous volumes when a container is created with automatic removal.

1. First, run a container with automatic removal and using an anonymous volume:

- Use the nginx image.
- Remember to use the --rm flag for automatic removal.
- Use the -v option to create an anonymous volume and mount it at /usr/share/nginx/html.

2. After that, stop the container to ensure it is automatically removed, along with its volume.

3. If you want, you can check that the anonymous volume no longer exists by running docker volume ls to see the list of volumes.

When you press Submit, we'll test if the volume was automatically removed with the container.