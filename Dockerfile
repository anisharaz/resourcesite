FROM node:latest
WORKDIR /app
COPY . /app
RUN npm install
ENTRYPOINT npx prisma db pull && npx prisma generate && npm run build && npm run start
