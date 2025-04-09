## Clean Up Unused Anonymous Volumes

Let's put your Docker skills to the test with a new task about prune. The environment is already set up with several Docker volumes, which include:

- Three Anonymous Volumes: Two are currently unused, and one is in use.
- One Named Volume: Currently unused.

Your objective is to clean up all unused anonymous volumes at once. Follow these steps to complete the task:

1. List volumes: Use `docker volume ls` to see all current volumes and understand the environment.
2. Prune unused volumes: Execute `docker volume prune` to remove unused anonymous volumes only, leaving the in-use anonymous and named volumes intact.

When you click Submit, we will test whether you've successfully cleaned up the unused anonymous volumes.