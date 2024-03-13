FROM node:20.11.1-alpine3.19
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY ./ /app/ 
ENTRYPOINT npx prisma migrate dev --name init && npx prisma migrate reset --force && npx prisma generate && npm run build && npm run start
