# # Use the official Python image as the base image
# FROM python:3.8-slim

# # Install Flask
# RUN pip install Flask

# # Copy application code to the image
# COPY app.py /app/app.py

# # TODO: Expose port 3000 for the Python app


# # Set the default command to run the app
# CMD ["python", "/app/app.py"]

# Use the official Python image as the base image
FROM python:3.8-slim

# Install Flask
RUN pip install Flask

# Copy application code to the image
COPY app.py /app/app.py

# TODO: Expose port 3000 for the Python app
EXPOSE 3000

# Set the default command to run the app
CMD ["python", "/app/app.py"]