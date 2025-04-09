docker volume ls
docker volume rm existent_volume
Error response from daemon: remove existent_volume: volume is in use - [77e87c646009f9eb2675690fc6521e87397e7bb7e73864e66c86f369bcd8aefe]
docker ps -a --filter "id=77e87c646009f9eb2675690fc6521e87397e7bb7e73864e66c86f369bcd8aefe"
docker stop existent_container
docker rm 77e87c646009
docker volume rm existent_volume
docker volume ls