#!/bin/bash

echo "Starting..."

npm install 

npx sequelize-cli db:migrate

npx sequelize-cli db:seed:all

npm start