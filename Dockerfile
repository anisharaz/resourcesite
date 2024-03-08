FROM node:slim
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENTRYPOINT npx prisma db pull && npx prisma generate && npm run build && npm run start
