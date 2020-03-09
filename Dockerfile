FROM node:latest

WORKDIR /usr/src/sculptor-backend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80:3000

CMD ["npm", "start"]