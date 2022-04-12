FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g pm2


COPY . .
EXPOSE 80
CMD ["pm2-runtime","start","index.js" ,"--name" ,"WSS","--max-memory-restart","360M"]