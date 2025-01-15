## Run Your Container with Port Mapping

Now, let's practice ensuring your containerized application is accessible by running it with the correct port settings.

The Dockerfile is complete, and the `custom-nginx` image is already built. Simply execute the following command to start the container, mapping container port 80 to the host machine's port 8080:

```Bash
docker run -p 8080:80 custom-nginx
```

After you've executed the command, hit the `Submit` button, and we'll check if your application is accessible at `http://localhost:8080`. 🖥️