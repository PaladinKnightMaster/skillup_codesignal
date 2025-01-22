## Access and Modify a Running Container

Imagine you're working with a running container named `existing-ubuntu`, and you need to install the `curl` utility inside it to enhance its capabilities.

Here's what you need to do:

1. Access the container's shell using the command:
```Bash
docker exec -it existing-ubuntu /bin/bash
```

2. Once inside, update the package index and install `curl` by running:
```Bash
apt-get update && apt-get install -y curl
```

After completing these steps, click `Submit` so we can verify your work and proceed with the evaluation.