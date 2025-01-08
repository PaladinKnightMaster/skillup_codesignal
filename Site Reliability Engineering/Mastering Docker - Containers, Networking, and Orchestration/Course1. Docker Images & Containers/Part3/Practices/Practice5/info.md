## Master Dockerfile Writing with a Python Image

You're making fantastic progress, and we're now diving deeper into Dockerfiles with a new task: creating one for a Python project. No need to worry if Python isn’t your strong suit — we're here to guide you through it, focusing on Docker.

Your task is to set up a simple Flask web application using Docker. Here's a step-by-step guide:

1. **Create a `Dockerfile`**:

- Use the official Python image `python:3.8-slim` as the base.
- Run the command `pip install Flask` to install Flask.
- Copy your application code `app.py` into the Docker image at the path `/app/`.
- Set the default command to start the Flask app using the Python interpreter. You can achieve this by instructing it to execute `python /app/app.py`.

2. **Build the Docker Image**:

- Use the command line to build the image from your `Dockerfile`.

This exercise is designed to boost your confidence in writing Dockerfiles for different projects. Keep going — you're on the right track!