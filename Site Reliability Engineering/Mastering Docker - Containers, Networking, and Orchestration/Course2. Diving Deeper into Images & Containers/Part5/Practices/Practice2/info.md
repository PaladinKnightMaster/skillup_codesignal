## Copy File From Container to Host

Well done on mastering file transfers into a container! Now, let's switch gears and move a file from the container to the host.

Inside the already running `ubuntu-container`, there's a file named `container_test_file.txt` at the path `/container_test_file.txt`. Your task is to copy this file back to the host system as `host_test_file.txt`.

You can achieve it with the following command:

```Bash
docker cp ubuntu-container:/container_test_file.txt host_test_file.txt
```

After copying the file, you can display its content on the host using the following command:

```Bash
cat host_test_file.txt
```

Once you've verified that the file was successfully copied to your host, click `Submit` to be evaluated and complete your task.