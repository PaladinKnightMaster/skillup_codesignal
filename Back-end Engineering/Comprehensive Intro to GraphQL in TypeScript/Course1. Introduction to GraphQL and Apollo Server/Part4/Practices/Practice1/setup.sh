#!/bin/sh
set -e

ln -sf /bootstrap-apps/apollo-gql/node_modules .
cp /bootstrap-apps/apollo-gql/yarn.lock .

yarn dev &
sleep 1

touch /tmp/.setup_finished

disown
