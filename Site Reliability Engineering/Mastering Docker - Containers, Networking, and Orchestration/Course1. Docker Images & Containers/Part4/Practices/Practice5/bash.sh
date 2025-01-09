docker build -t custom-flask python-project
docker run -p 8080:3000 custom-flask