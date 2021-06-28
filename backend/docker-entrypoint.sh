#!/bin/bash

echo "Starting..."

npm install 

sleep 10

npx sequelize-cli db:migrate

npx sequelize-cli db:seed:all

npm start