#!/bin/sh

npm install redis

apt-get update
apt-get --yes install redis-server
redis-server &

pid=$!

node /usercode/FILESYSTEM/loadData.js

kill -9 $pid

redis-server --dir /usercode/FILESYSTEM --dbfilename dump.rdb &

touch /tmp/.setup_finished