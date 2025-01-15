# Executing Containers with Custom Port Mapping

## Executing Containers with Custom Port Mapping
Welcome back! In our previous lesson, you learned how to create a custom Docker image using a **Dockerfile**. Today, we'll expand upon that by exploring how to execute a container from this custom image, with a particular focus on port exposure. Exposing ports is crucial as it allows communication between your containerized application and external clients, such as web browsers or other services. By the end of this lesson, you'll understand how to configure your Dockerfile to expose the necessary ports and run your container with the appropriate settings to make it accessible.

## Understanding Ports in Docker Containers
Before diving back into our Dockerfile, it's important to understand how ports operate within Docker containers. Ports act as communication endpoints that allow your containerized application to interact with external clients, like web browsers or other services.

When an application runs inside a container, it usually listens on specific network ports for incoming requests. By default, these ports are not accessible from outside the container. To allow external access, the ports must be mapped to ports on your host machine.

## Introducing the EXPOSE Command
The EXPOSE command in a Dockerfile is a directive that specifies which ports an application inside the container listens on. For instance, if your application is a web server, you might use `EXPOSE` to indicate that it listens on port 80, the default port for HTTP traffic.

```Dockerfile
# Expose port 80
EXPOSE 80
```

While the `EXPOSE` command itself doesn't make the ports accessible from outside the container, it serves as essential documentation. It signals to users which ports they might want to map when running the container to ensure the service is available externally.

## Updating the Dockerfile
To ensure our Nginx server is set up correctly and ready for external communication, we'll update our Dockerfile. This updated version will include the command to expose the required port.

```Dockerfile
# Use the official nginx image as the base image
FROM nginx:1.27.2

# Run an update using the package manager
RUN apt-get update

# Copy custom HTML file to the default nginx directory
COPY index.html /usr/share/nginx/html/

# Expose port 80 for the Nginx server
EXPOSE 80

# Set the default command to run when starting the container
CMD ["nginx", "-g", "daemon off;"]
```

With this update, our Dockerfile clearly documents the intended port exposure for anyone using the image. Remember, whenever you change the Dockerfile, it's important to rebuild the image to incorporate those changes.

## Running a Container with Port Mapping
With our newly built Docker image ready to go, let's run a container. To make port **80** accessible from our host system, we'll map it using the `-p` flag. This flag binds a local port to one exposed in your container.

To run the container, use the following command:

```Bash
# Run the container and map port 80 in the container to port 8080 on the host
docker run -p 8080:80 custom-nginx
```

Here's what this command does:

- The `-p` flag is for port mapping and shows us which ports are connected.
- `8080`: This is the port on your computer (host) that we will use to access the service.
- `80`: This is the port inside the container where the service is running.

By using `8080` on your computer and linking it to `80` inside the container, you allow requests to `http://localhost:8080` to reach port 80 inside the container. This makes it easy to access the container's service from your web browser.

## Starting a Container with Port Mapping
To execute a container with port mapping using `docker start`, you must first create the container with the appropriate settings. It's important to note that port mappings can only be set during the container creation process, not when starting an already created container.

Here's how you can achieve this:

1. **Create the Container**: Use `docker create` to set up the container and configure the port mappings.

```Bash
# Create a container with port mapping and a custom name
docker create --name my-nginx -p 8080:80 custom-nginx
```

- `--name my-nginx` assigns a custom name to the container for easier management.
- `-p 8080:80` maps port 80 inside the container to port 8080 on the host.

2. **Start the Container**: Once you've created the container with the desired port mappings, you can then start it using `docker start`:

```Bash
# Start the previously created container
docker start my-nginx
```

Remember, if you need to adjust the port mappings, you'll need to create a new container with the desired settings.

## Accessing the Running Container
To confirm your container is operational and serving content as intended, access the Nginx server via a web browser. Enter `http://localhost:8080` in your browser's address bar. You should see the content of your index.html file displayed, confirming Nginx is properly serving your custom HTML file.

When an application runs inside a container, it listens on specific network ports for incoming requests. By default, applications are configured to listen on certain ports internally. For instance, the default Nginx image listens on port 80. This means that, regardless of how you configure the `EXPOSE` command in your Dockerfile or map the ports in your run command, the application will respond to its designated internal port unless you modify its configuration files, which requires code changes beyond this lesson's scope.

However, you can control which port on your host machine is used to access the container. Even though the application listens on a fixed port inside the container, you can map a different port on your host machine to this internal port using the -p flag in the run command, allowing flexibility in how external clients access your application.

## Addressing Port Mapping Conflicts
When setting up port mapping for multiple containers, it's essential to understand that you cannot map different containers to the same host port unless they run on different network interfaces (IP addresses). Attempting to map multiple containers to the same host port will result in a conflict because the host port can only bind to one container at a time.

For example, if you're running several containers and all need to expose their service on the same container port, you must assign different host ports to each:

```Bash
# Run the first container, mapping its port 80 to host port 8080
docker run -p 8080:80 custom-nginx

# Run the second container, mapping its port 80 to host port 8081
docker run -p 8081:80 custom-nginx
```

These commands ensure that each container's service is accessible and avoids conflicts by using separate host ports, allowing multiple instances of your service to coexist peacefully.

## Summary and Preparation for Practice
Today, we expanded your Docker knowledge by exploring port exposure with the `EXPOSE` command and demonstrated how to execute a container with custom port mappings. These skills are essential for making your containerized applications accessible and manageable. As you prepare for the practice exercises, reflect on the significance of port exposure and mapping in container management. You're doing great—keep practicing to reinforce your understanding and apply these concepts effectively. Enjoy building and running your containers!
