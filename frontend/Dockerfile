FROM node:alpine

WORKDIR /usr/app/front

RUN apk update && apk add bash

ENV PATH /usr/app/front/node_modules/.bin:$PATH

COPY package*.json ./

COPY . .

RUN ls -la

EXPOSE 3001

RUN npm install
RUN npm install react-scripts@4.0.3 -g --silent
# Inicializa a aplicação
CMD ["npm", "start"]