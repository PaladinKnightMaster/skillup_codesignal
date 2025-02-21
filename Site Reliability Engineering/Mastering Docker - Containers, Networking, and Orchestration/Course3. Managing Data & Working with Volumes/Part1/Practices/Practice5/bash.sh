docker volume create shared-data
docker run --name container1 -v shared-data:/data1 ubuntu
docker run --name container2 -v shared-data:/data2 ubuntu