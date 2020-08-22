#!/usr/bin/env bash

docker container stop test-dataapi-container
docker container rm test-dataapi-container
sudo docker run -d --name test-dataapi-container -p 4500:4500 test-dataapi:latest
docker ps

