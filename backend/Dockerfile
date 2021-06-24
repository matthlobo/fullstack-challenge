# Imagem de Origem
FROM node:alpine
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /usr/app
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN apk update && apk add bash

COPY package*.json ./

COPY ./* .

RUN ls -la

EXPOSE 3000

COPY ./docker-entrypoint.sh /docker-entrypoint.sh

RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/bin/bash", "/docker-entrypoint.sh"]

#CMD ["tail", "-f", "/dev/null"]

