FROM node:alpine AS build

RUN apk add npm

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Production environment
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY --from=build /app/.nginx/nginx.conf /etc/nginx/sites-enabled/default

EXPOSE 80