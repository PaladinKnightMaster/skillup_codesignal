## Modifying Dockerfile Port Settings

In this task, we'll revisit a Python project from a previous task to highlight the importance of aligning Dockerfile configurations with your application settings.

Here's what you need to do:

1. Update the Dockerfile:
- Add the `EXPOSE` directive to expose port **3000**, matching the port used in the Python application code.

2. Build the Docker Image:
- Navigate to the correct directory and build the image from your `Dockerfile`.

3. Run the Container:
- Execute a command to run a container from your newly built image, mapping host port **8080** to container port **3000**.

By revisiting this project, you'll see how crucial it is to configure the Dockerfile to align with the application's port settings, ensuring smooth deployment and access.