FROM nginx:alpine

RUN apk add --update npm

RUN apk add --no-cache bash

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN chmod +x start.sh

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["/bin/bash", "-c", "/app/start.sh && nginx -g 'daemon off;'"]