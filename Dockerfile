FROM node:16.15.0
# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./package*.json ./

COPY . .
COPY dev.env .env

RUN npm install

ENV NODE_ENV production

EXPOSE 3000

CMD ["node", "socket.js"]
