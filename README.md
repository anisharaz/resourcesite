## Project Setup

> Prerequisite

- Docker & Docker Compose Installed (not required if you use your own postgres db,but don't forget to change the .env file accordingly)
- npm & NodeJs

Note: The project fetches pdf from AWS.So just go through the steps below and you are good to go.

Run the commands one by one-

```shell
> git clone https://github.com/anisharaz/resourcesite.git

> cd resourcesite [Note: Copy the Modules.zip content to public folder]

> docker compose up -d (skip this if you are using your own DB)

> npm i

> cp .env-example .env

> npm run init

> npm run dev
```
