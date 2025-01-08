# Building Custom Images with Dockerfile

## Building Custom Images with Dockerfile
Welcome back to your Docker learning journey! In our previous lesson, we covered the basics of creating and managing containers, emphasizing that containers run from specific images. These images define all necessary components and configurations your container needs to function properly. In this lesson, we'll focus on Dockerfiles and guide you through the process of building a custom Docker image that runs an Nginx web server that serves a HTML file.

## What is a Dockerfile?
A Dockerfile is essentially a set of instructions used to build a Docker image. It's a straightforward text document that outlines a series of commands to systematically assemble an image. This file should be named `Dockerfile` with an uppercase 'D' and no file extension. This naming convention allows Docker to automatically recognize and use it during the build process.

The images that we've externally pulled before, like the `hello-world` and `nginx` images, were also initially built using their own Dockerfiles. These Dockerfiles defined the exact configuration and setup needed for those images. Once an image is created using a Dockerfile, it can be shared with others, allowing them to run a container precisely as configured in the original Dockerfile. This sharing capability enables consistent environments and simplifies collaboration among developers and teams.

## Basic Syntax of a Dockerfile
Let's explore the basic syntax of a Dockerfile, which outlines how your Docker image will be assembled. While there are numerous commands you can use, let's start with some key ones.

Each of these instructions plays a significant role in configuring your Docker image:

- `FROM`: This instruction specifies the base image for your Dockerfile. Consider it the foundation upon which your image is built. For instance, you might start with an image like `nginx` or `node` based on your project requirements. Every Dockerfile begins with a `FROM` instruction, indicating the starting point of your image.

- `RUN`: This command executes instructions in the shell during the image-building process. For example, you might use `RUN` to install software or apply system updates. These commands are executed once when you build the image, setting up the environment needed for your application.

- `COPY`: This command is used to move files from your host machine into the image's filesystem. For instance, you might use `COPY` to add your website's HTML files into the web server's directory in the image, ensuring your application has the files it needs to run properly.

- `CMD`: This instruction specifies the default command to run when your container starts. Unlike `RUN`, which executes during the image-building process, `CMD` runs when you launch the container. For instance, you might use `CMD` to start a web server or an application. It's the command that the container performs every time it starts up.

Docker builds images in layers, creating a new layer for each instruction in the Dockerfile. Due to Docker's caching system, it's efficient to place frequently changing instructions towards the end, optimizing build times and minimizing unnecessary rebuilds. If you're curious and want to learn more about Dockerfiles and their various instructions, feel free to explore the details in the Dockerfile reference documentation.

## Where to Place Your Dockerfile?
Before we dive into writing a Dockerfile, let's understand the structure of our example project. For this lesson, we'll use a simple project consisting of a custom HTML file named `index.html` that we wish to serve using Nginx.

The project directory will look like this:

```
/project-directory
  ├── Dockerfile
  └── index.html
```

While you can technically place your Dockerfile in different directories, best practice dictates that you should place it at the root of your project. This ensures ease of management and that Docker can accurately locate the Dockerfile when executing the build command. By keeping all related files in one directory, you streamline the build process and ensure Docker has immediate access to your specified context.

Now that you know where to place your Dockerfile, let's roll up our sleeves and gradually build our custom Docker image for an Nginx web server together!

## Step 1: Specify the Base Image with FROM
To begin writing our Dockerfile, we first use the `FROM` command to define the base image.

```Dockerfile
# Use the official nginx image as the base image
FROM nginx:1.27.2
```

This instruction sets the base image. Here, we're using `nginx:1.27.2`, indicating a specific version. Choosing a specific version helps to ensure stability and compatibility by preventing unexpected changes when the base image gets updated.

## Step 2: Update the System with RUN
With the base image set, the next step is to utilize the `RUN` command to execute commands like installing software or applying updates.

```Dockerfile
# Use the official nginx image as the base image
FROM nginx:1.27.2

# Run an update using the package manager
RUN apt-get update
```

This command runs shell commands inside the image during the build process. In this context, `apt-get update` refreshes the package lists, ensuring you have the latest version information when you install any additional packages. These operations are captured in a new image layer.

## Step 3: Add Files to the Image with COPY
With the system updated, we now leverage the `COPY` command to incorporate necessary files from your host system into the image.

```Dockerfile
# Use the official nginx image as the base image
FROM nginx:1.27.2

# Run an update using the package manager
RUN apt-get update

# Copy custom HTML file to the default nginx directory
COPY index.html /usr/share/nginx/html/
```

The `COPY` instruction transfers files or directories from your host file system into the Docker image. The syntax `COPY` `<source> <destination>` places `index.html` from the current directory to `/usr/share/nginx/html/` in the image.

## Step 4: Define the Container's Default Behavior with CMD
Finally, we employ the `CMD` command to define the container's behavior upon starting.

```Dockerfile
# Use the official nginx image as the base image
FROM nginx:1.27.2

# Run an update using the package manager
RUN apt-get update

# Copy custom HTML file to the default nginx directory
COPY index.html /usr/share/nginx/html/

# Set the default command to run when starting the container
CMD ["nginx", "-g", "daemon off;"]
```

This instruction sets the default executable to run when the container starts. We use an array syntax, `["executable", "param1", "param2"]`, as it avoids involving shell processing issues common in shell form. The command `["nginx", "-g", "daemon off;"]` is used to instruct Nginx not to run as a background process (daemon) and instead to stay active in the foreground. By running in the foreground, Nginx continuously serves web content, which is necessary to keep the container running and responsive.

By understanding these command syntax details, you can confidently build efficient and reliable Docker images tailored to your application's requirements.

## Building Your Custom Image
With our Dockerfile in place, it's time to build the custom image. We'll use the docker build command to turn our instructions into a working image.

Open your terminal, navigate to the directory with your Dockerfile, and together, let's run this command:

```Bash
# Build custom image from Dockerfile
docker build -t custom-nginx .
```

When building a Docker image, each part of the `docker build` command plays a crucial role:

* `docker build` **Command**: Used to create a Docker image from a Dockerfile by converting its instructions into a working image.

* `-t` **Option**: Tags the image with a specified name, like `custom-nginx`, for easy identification and management.

* `.` **(Dot) at the End**: Tells Docker to look in the current folder for the Dockerfile and any necessary files to build the image.

As we execute this command, you will notice the build process unfold:

```
[+] Building 14.0s (8/8) FINISHED
 => [internal] load build definition from Dockerfile
 => => transferring dockerfile: 359B
 => [internal] load metadata for docker.io/library/nginx:latest
 => [internal] load .dockerignore
 => => transferring context: 2B
 => [1/3] FROM docker.io/library/nginx:latest@sha256:d2eb56950b84efe34f966a2b92efb1a1a2ea53e7e93b94cdf45a27cf3cd47fc0
...
 => [internal] load build context
 => => transferring context: 333B
 => [2/3] RUN apt-get update
 => [3/3] COPY index.html /usr/share/nginx/html/
 => exporting to image
 => => exporting layers
 => => writing image sha256:948e58d8d9e30e66acddf7d283afea0e612351c834af8cae5d5305bcebedb682
 => => naming to docker.io/library/custom-nginx
```
As we watch, Docker processes each step from the Dockerfile, carefully executing our instructions. Now, our custom image, `custom-nginx`, is ready, and can be used to run our tailored containers. If you'd like to share your image with others, you can push the image to Dockerhub or other container registries like GitHub Container Registry. While we won't cover these steps in this lesson, knowing it's possible opens up opportunities for collaboration and sharing.

To learn more about the `docker build` command and its options, visit the Docker build documentation.

## Best Practices & Optimization Tips
When writing Dockerfiles, consider the following best practices to ensure efficiency and clarity:

* **Optimize Layer Usage**: Place instructions that change less frequently at the top of the Dockerfile. This helps Docker use its caching system more effectively, allowing it to skip rebuilding unchanged parts and speeding up the build process.

* **Combine Steps**: Merge similar steps into a single `RUN` command when possible. This reduces the number of layers in your Docker image, potentially decreasing the overall image size.

* **Keep It Readable**: Ensure your Dockerfile is clear and well-commented. This aids in future updates and maintenance, making it easier for others to understand your configuration.

* **Adopt Naming Conventions**: Use standardized naming conventions for image tags. This facilitates easy identification and version control, helping manage multiple image versions effectively.

## Summary and Preparation for Practice
In this lesson, you gained insight into the structure and usage of Dockerfiles for creating custom Docker images. We explored how to write a Dockerfile, build it into an image, and then run it as a container to display a custom web page served by Nginx. Understanding these processes equips you with the skills to deploy custom containerized applications efficiently.

Prepare to dive into the following practice exercises, where you'll solidify your understanding by creating your own Dockerfiles and customizing images. Enjoy experimenting, and apply the concepts learned today to develop optimized container solutions!
