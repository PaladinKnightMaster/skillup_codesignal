# Step-by-Step Container Management

## Step-by-Step Container Management
Welcome back to your Docker learning journey. In the previous lesson, you explored the `docker run` command, enabling you to create and start a container in a single step. However, this command encapsulates multiple underlying processes that control various aspects of container lifecycle management. Now, it's time to delve deeper into the intricacies of these processes by breaking them down into separate commands.

## Introduction to Docker Hub
Before we begin pulling external images, it's helpful to know about Docker Hub. As the main source for Docker images, Docker Hub simplifies accessing a wide variety of software without needing to build images yourself.

Docker Hub is an online platform where you can find, download, and share Docker images. It acts as a centralized repository, making it easy to use various software without building images from scratch. You can search for and pull images for web servers, databases, and thousands of other applications, ranging from simple utilities to complex computing frameworks, covering a vast array of needs and uses.

Popular images on Docker Hub include:

* **Nginx**: A widely-used web server.
* **MySQL**: A popular database management system.
* **Redis**: An in-memory data store often used for caching.
* **Node.js**: A JavaScript runtime for building applications.
* **Ubuntu**: A base image for Linux operating systems.

In addition to using pre-built images, Docker Hub allows you to push your own images and share them with others, facilitating collaboration and distribution of your applications.

## Understanding the Run Command
As mentioned before, the `docker run` command allows you to create and start a container in one seamless step. While efficient, this command encompasses several underlying processes:

1. First, it checks if the specified image is available locally. If not, it pulls the image from Docker Hub or another registry.
2. Then, it creates a container based on the downloaded image.
3. Finally, it starts the created container immediately.

By breaking these steps into separate commands, namely `pull`, `create`, and `start`, you can gain a more thorough understanding and finer control over these processes. This approach lays the groundwork for more advanced container management techniques.

## Pulling an External Docker Image
A key feature of Docker is its ability to access a vast library of pre-built images from Docker Hub. You can download these images to your local machine using the `docker pull` command, which by default retrieves images from Docker Hub, unless specified otherwise.

For instance, to use the popular Nginx web server, you would execute the following command:

```Bash
# Pulling an external Docker image from Docker Hub
docker pull nginx
```

While executing this command, you'll see an output like this:

```Plain text
Using default tag: latest
latest: Pulling from library/nginx
302e3ee49805: Pull complete
d07412f52e9d: Pull complete
9ab66c386e9c: Pull complete
4b563e5e980a: Pull complete
55af3c8febf2: Pull complete
5b8e768fb22d: Pull complete
85177e2c6f39: Pull complete
Digest: sha256:d2eb56950b84efe34f966a2b92efb1a1a2ea53e7e93b94cdf45a27cf3cd47fc0
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest
```

This output confirms the pulling process where Docker first verifies if the image is already available locally. If not, it downloads the image layers, displaying each layer's download status as "Pull complete". The process concludes with a confirmation message showing the image has been downloaded successfully, along with its digest and image tag. Note that downloading an image might take some time, depending on your internet connection and the image size. If you're curious and want to learn more about the `docker pull` command, feel free to explore its details in the Docker pull documentation.

## Creating a Container
After pulling an image, the next step is to create a container. The docker create command sets up a container from a downloaded image without starting it immediately, offering flexibility for configuring containers.

Here are two examples of creating a container without and with a name:

```Bash
# 1. Creating a container without specifying a name
docker create nginx

# 2. Creating a container with a custom name
docker create --name my-nginx nginx
```

In both cases, when you execute the command, you will receive an output like this:

```Plain text
c49adf897b2a74bcbed915a76eea458b19eae8afa4a71e9b007eb9dbb3723c89
```

This output is the unique container ID assigned by Docker for the newly created container, which you can use to reference the container in future commands. Omitting `--name` results in Docker assigning a random name, while specifying a name with `--name my-nginx` allows you to assign an easily recognizable alias. In both scenarios, the container is configured but not yet running, enabling further setup if needed before it is started. For more details and insights about using the `docker create` command, you can visit the Docker create documentation.

## Checking the Container Status: Created
After creating a container, you can check its status using the `docker ps -a` command.

For instance, you might see an output like this:

```Plain text
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS    PORTS     NAMES
c49adf897b2a   nginx     "/docker-entrypoint.…"   3 minutes ago   Created             my-nginx
```

This indicates that the container's status is "**Created**", meaning it hasn't run any processes yet. Additionally, you can see the name `my-nginx`, which highlights the user-friendly identifier you've assigned, making it easier to manage the container.

## Starting a Container
The `docker start` command is used to initiate an existing Docker container. Unlike `docker run`, which creates and starts a container in one step, `docker start` only handles the starting process, assuming the container is already created.

Using the earlier example, you have two options to start the `my-nginx` container:

```Bash
# Option 1: Start the container using the name
docker start my_nginx
# Output: my_nginx

# Option 2: Start the container using the container ID
docker start c49adf897b2a
# Output: c49adf897b2a
```

Both commands activate the Nginx container, and you'll see an output showing either the container ID or the name, depending on your starting method. This output confirms that the container is successfully running. When you use `docker start`, the container runs in detached mode, which means it operates in the background. This way, you just get a quick confirmation, allowing you to continue using the terminal for other tasks while the container runs. For a deeper dive into the `docker start` command and its features, check out the Docker start documentation.

## Checking the Container Status: Up
Once the container is running, you can check its status again:

```Plain text
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS         PORTS     NAMES
c49adf897b2a   nginx     "/docker-entrypoint.…"   11 minutes ago   Up 9 seconds   80/tcp    my-nginx
```

This time, the status column shows "**Up 9 seconds**, indicating that the container is actively running. Unlike the `hello-world` image from a previous lesson, which exited immediately after displaying a message, the Nginx container continues running in the background. This behavior is due to the nature of the Nginx image, which is designed to operate as a long-running web server until you decide to stop it. Another detail to note is the presence of a value in the ports column, `80/tcp`, which indicates that the container is actively running and utilizing port 80 for HTTP traffic.

## Stopping a Running Container
After running the Nginx container, you might need to stop it at some point. The `docker stop` command works similarly to `docker start`, allowing you to use either the container's name or ID.

To stop the `my-nginx` container you can use one of the following options:

```Bash
# Option 1: Stop the container using the name
docker stop my-nginx
# Output: my-nginx

# Option 1: Stop the container using the container ID
docker stop c49adf897b2a
# Output: c49adf897b2a
```

Both approaches result in stopping the container and provide confirmation of the action. For more information and specifics on the `docker stop` command, visit the Docker stop documentation.

## Checking the Container Status: Exited
After stopping the container, you can verify its status once more:

```Plain text
CONTAINER ID   IMAGE     COMMAND                  CREATED       STATUS                     PORTS     NAMES
c49adf897b2a   nginx     "/docker-entrypoint.…"   2 hours ago   Exited (0) 5 seconds ago             my-nginx
```

The status now shows **"Exited"**, indicating that the container has successfully stopped, and any associated ports, like port 80, are no longer in use. This provides a clear signal that the container is not actively running processes. Should you wish to restart the container, you can seamlessly do so using the `docker start` commands, allowing you to resume operations effortlessly whenever needed.

## Summary and Practice Preparation
In this lesson, we explored the essential Docker commands: `pull`, `create`, `start` and `stop`. These commands empower you to pull images, create containers, and start or stop them separately, offering more granular control over your Docker workflow. As you transition to the upcoming practical exercises, these foundational commands will serve as building blocks for more complex Docker operations.

Keep practicing and enjoy the journey towards mastering Docker!
