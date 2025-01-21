## Forceful Docker Resource Management

Congratulations on making it this far! You've mastered managing Docker containers and images, and now it's time to master using the `-f` flag for efficient cleanup.

Here's your task:

1. **Check Running Containers**: Use `docker ps` to confirm that `ubuntu-container-1` is active and `ubuntu-container-2` is stopped.
2. **Forcefully Remove Active Container**: Use `docker rm -f ubuntu-container-1` to stop and remove the active container in one go.
3. **Verify the Image Exists**: List all images with `docker images` to ensure the `ubuntu` image is present.
4. **Forcefully Remove Image**: Execute `docker rmi -f ubuntu` to delete the image, even if it's being referenced by the other existing container.

Hit the `Submit` button to test if both the active container and image have been removed successfully. You're enhancing your skills with every step — keep it up! 🚀