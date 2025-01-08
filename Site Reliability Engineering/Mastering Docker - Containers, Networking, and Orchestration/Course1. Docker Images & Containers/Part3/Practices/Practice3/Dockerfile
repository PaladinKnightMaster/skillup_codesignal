# # Run an update using the package manager
# RUN apt-get update

# # Set the default command to run when starting the container
# CMD ["nginx", "-g", "daemon off;"]

# # Use the official nginx image as the base image
# FROM nginx:1.27.2

# # Copy custom HTML file to the default nginx directory
# COPY index.html /usr/share/nginx/html/


# Use the official nginx image as the base image
FROM nginx:1.27.2

# Run an update using the package manager
RUN apt-get update

# Copy custom HTML file to the default nginx directory
COPY index.html /usr/share/nginx/html/

# Set the default command to run when starting the container
CMD ["nginx", "-g", "daemon off;"]