ARG NODE_VERSION=22
ARG NGINX_VERSION=1.30

FROM node:${NODE_VERSION}-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM deps AS build
COPY . .
RUN npm run build

FROM nginx:${NGINX_VERSION}-alpine AS web
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
RUN chown -R nginx:nginx /var/cache/nginx
USER nginx
EXPOSE 80
