
FROM node:22-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY server.js .
COPY index.html .
COPY images ./images

EXPOSE 3000

CMD ["node", "server.js"]
