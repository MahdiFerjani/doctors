FROM node:14.5-alpine as build-stage

RUN apk add --no-cache git

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN ionic build

FROM nginx:1.19-alpine

COPY --from=build-stage /app/www /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]