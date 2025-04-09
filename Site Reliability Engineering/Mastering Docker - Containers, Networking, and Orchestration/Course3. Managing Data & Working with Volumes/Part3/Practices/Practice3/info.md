## Explore Docker Bind Mount Synchronization

You've been doing a fantastic job, and now it's time to apply your skills in a practical setting.

1. Run an Ubuntu container named `test_container` in interactive mode with a bind mount using the command below:

```Bash
docker run -it --name test_container -v /usercode/FILESYSTEM/host/data:/container/data ubuntu
```

2. Inside the container, execute this command to create a file:

```Bash
echo "Sample text inside bind mount" > /container/data/your_file.txt
```

3. Keep the container running by not exiting the terminal session, so we can test your work and confirm everything is synced up perfectly.

Hit the `Submit` button to validate whether the file exists both in the container and on the host with the correct content. You're making excellent progress; keep it up!