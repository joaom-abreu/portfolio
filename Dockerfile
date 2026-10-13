ARG NODE_VERSION=22
ARG NGINX_VERSION=1.30

FROM node:${NODE_VERSION}-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM deps AS build
ARG VITE_EMAILJS_SERVICE_ID
ARG VITE_EMAILJS_TEMPLATE_ID_FOR_ME
ARG VITE_EMAILJS_TEMPLATE_ID_FOR_SENDER
ARG VITE_EMAILJS_PUBLIC_KEY
COPY . .
RUN npm run build

FROM nginx:${NGINX_VERSION}-alpine AS web
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
RUN chown -R nginx:nginx /var/cache/nginx
USER nginx
EXPOSE 80
