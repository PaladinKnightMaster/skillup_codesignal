## File Transfer Using Docker CP

Great job so far! Now, get hands-on with the `docker cp` command to transfer files to a Docker container.

You already have a running Docker container named `ubuntu-container` and a file on your host system named `host_test_file.txt`. Here's what you need to do:

1. Transfer the file named `host_test_file.txt` into the Docker container `ubuntu-container` at the path `/container_test_file.txt` using:

```Bash
docker cp host_test_file.txt ubuntu-container:/container_test_file.txt
```

2. If you want, execute the `cat` command within the container to display the content of `/container_test_file.txt` and verify the integrity of the transferred file:

```Bash
docker exec ubuntu-container cat /container_test_file.txt
```

Finally, hit the `Submit` button to be evaluated and celebrate your progress!