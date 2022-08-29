docker stop asc_websocket
docker rm asc_websocket
docker rmi web_socket

docker build -t web_socket .
docker run -d -p 3000:3000 --name asc_websocket web_socket
docker image prune -f