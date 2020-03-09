FROM node:latest as build

WORKDIR /usr/src/sculptor-frontend

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

# CMD [ "npm", "start" ]

FROM nginx:alpine

COPY --from=build /usr/src/sculptor-frontend/build/ usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]