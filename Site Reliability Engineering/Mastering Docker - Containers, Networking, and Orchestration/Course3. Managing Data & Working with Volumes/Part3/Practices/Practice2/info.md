## Inspect File Content with Bind Mount

You've made solid progress with bind mounts so far. Now, let's take a moment to look inside a file within a Docker container.

Here's what you need to do:

- First, note that there's a text file called `sample_file.txt` located on your host system.

- Run an Ubuntu container in interactive mode, ensuring it has a bind mount with the host directory. Use this command:

```Bash
docker run -it --name my_ubuntu_container -v /usercode/FILESYSTEM/host/data:/container/data ubuntu
```

- Once you're inside the container, display the content of `sample_file.txt` by using:

```Bash
cat /container/data/sample_file.txt
```

When you click the `Submit` button, we'll check if the file's content is displayed correctly from inside the container and confirm your understanding of how bind mounts work.