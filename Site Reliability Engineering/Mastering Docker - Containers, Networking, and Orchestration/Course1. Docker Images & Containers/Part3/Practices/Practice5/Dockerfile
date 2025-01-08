# TODO: Use the official Python image (python:3.8-slim) as the base image
FROM python:3.8-slim

# TODO: Install Flask using the pip package manager: pip install Flask
RUN pip install Flask

# TODO: Copy the application file app.py into the image at path /app/
COPY app.py /app/

# TODO: Set the command: python /app/app.py, to start the server when the container launches.
CMD ["python", "/app/app.py"]
