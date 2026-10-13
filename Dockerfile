ARG NODE_VERSION=22
ARG NGINX_VERSION=1.30

FROM node:${NODE_VERSION}-alpine AS deps
WORKDIR /app
RUN chown node:node /app
USER node
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci

FROM deps AS build
ARG VITE_EMAILJS_SERVICE_ID
ARG VITE_EMAILJS_TEMPLATE_ID_FOR_ME
ARG VITE_EMAILJS_TEMPLATE_ID_FOR_SENDER
ARG VITE_EMAILJS_PUBLIC_KEY
COPY --chown=node:node . .
RUN npm run build

FROM nginx:${NGINX_VERSION}-alpine AS web
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
RUN chown -R nginx:nginx /var/cache/nginx
USER nginx
EXPOSE 80

FROM node:${NODE_VERSION}-alpine AS api
ENV NODE_ENV=production
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY api ./api
COPY server ./server
USER node
EXPOSE 3001
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --start-interval=2s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3001/healthz || exit 1
CMD ["node", "server/index.js"]
