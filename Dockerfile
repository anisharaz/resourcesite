FROM node:slim
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENTRYPOINT npm run build && npm run start