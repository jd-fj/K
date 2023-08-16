# Build the app using Node.js
FROM node:16 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Use Nginx to serve the built app
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port Nginx will run on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
