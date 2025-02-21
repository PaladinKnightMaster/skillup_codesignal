## Attach a Named Volume to a Docker Container

You're progressing well! Let's continue with a hands-on exercise to enhance your skills in managing data with Docker.

Here's what you'll do in this task:

1. A volume has already been created for you. Use the following command to identify the existing volume.

```Bash
docker volume ls
```

2. Run an `ubuntu` container named `my-container` and connect the identified named volume to the `/data` directory within the container. You can use the following command as a template:

```Bash
docker run --name my-container -v <volume-name>:/data ubuntu
```

When you click the `Submit` button, we will test if the named volume is attached to the container.

Keep up the good work; you're doing fantastic! 🚀