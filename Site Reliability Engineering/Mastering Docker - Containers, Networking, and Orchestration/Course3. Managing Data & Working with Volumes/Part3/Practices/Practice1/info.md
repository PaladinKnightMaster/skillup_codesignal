## Create a Container with Bind Mount

You're doing fantastic! Let's build on your skills by working with bind mounts in Docker. To run a container with a bind mount, you'll need to construct the command from the following parts:

1. Begin with the `docker run` command to start a container.
2. Use the `-v` option to specify the bind mount.
- Specify the host directory as:
    - `/usercode/FILESYSTEM/home/user/data`
- Use a colon `:` to separate the host directory from the container directory.
- Specify the directory within the container as:
    - `/container/data`
- Specify `ubuntu` as the image you want to run.

After constructing and running the command in your terminal, click `Submit` and we'll check if the bind mount was done correctly.