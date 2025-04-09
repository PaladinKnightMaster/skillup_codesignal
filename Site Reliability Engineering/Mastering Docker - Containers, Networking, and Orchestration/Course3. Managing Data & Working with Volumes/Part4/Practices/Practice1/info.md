## Identify and Remove a Docker Volume

Now it’s time to strengthen your Docker volume management skills with a practical exercise focusing on volume cleanup.

In this task, there's an unused volume amidst the existing ones. Your job is to identify and remove it. Here's what you’ll do:

1. List All Volumes:
- Use `docker volume ls` to display all existing Docker volumes.

2. Identify Unused Volumes:
- Use `docker volume ls -f dangling=true` to list only the unused volumes.

3. Remove the Unused Volume:
- Use `docker volume rm` to delete the identified unused volume.

When you click `Submit`, we'll test if you have successfully removed the unused volume. Stay focused — these skills are essential for efficient Docker management!