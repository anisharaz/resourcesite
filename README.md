## Project Setup

> Prerequisite

- Docker & Docker Compose Installed (not required if you use your own postgres db,but don't forget to change the .env file accordingly)
- npm & NodeJs
- Download the Modules zip from here - [Modules.zip](https://mega.nz/file/vs9CRYJa#GkJBz0S3eYRolVQxLynxVnMroqVpMA0aLhuXkZ-gh5U) - for development purpose these pdf are enough
- Extract Modules.zip content to public folder after cloning the project

Module.zip Structure

> /SubjectCode/SubjectCode_ModuleNo.pdf eg. 22CSE249/22CSE249_2.pdf

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
