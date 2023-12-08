FROM node:lts-bullseye-slim AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# Ensure all files in /app are owned by 'node'
RUN chown -R node:node /app

# Change permissions for vite.config.ts
RUN chmod a+rw /app/vite.config.ts

# Now switch to node user
USER node

RUN npm run build

FROM nginx:latest

RUN addgroup --system nginx && \
    adduser --system --ingroup nginx nginx && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d

COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN sed -i 's#/var/run/nginx.pid#/tmp/nginx.pid#' /etc/nginx/nginx.conf

COPY --from=build --chown=nginx:nginx /app/dist /usr/share/nginx/html

EXPOSE 80

USER nginx

CMD ["nginx", "-g", "daemon off;"]
