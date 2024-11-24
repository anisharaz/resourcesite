## Project Setup

> Prerequisite

- Docker & Docker Compose Installed (not required if you use your own postgres db,but don't forget to change the .env file accordingly)
- npm & NodeJs
- Download the Modules zip from here - [Modules.zip](https://mega.nz/file/vs9CRYJa#GkJBz0S3eYRolVQxLynxVnMroqVpMA0aLhuXkZ-gh5U) - for development purpose these pdf are enough

- Extract Modules.zip content to public folder after cloning the project

## Module.zip Structure

> /SubjectCode/SubjectCode_ModuleNo.pdf eg. 22CSE249/22CSE249_2.pdf

<br>

### Run the commands one by one:

1. Clone the repository

```
> git clone https://github.com/anisharaz/resourcesite.git && cd resourcesite

```

2. Run the PostgreSQL db container. (This step can be skipped if local database is setup)

```
> docker compose up -d (skip this if you are using your own DB)
```

3. Install the dependencies and setup environment variables.

```
> npm i
```

4. Setup environment variables

```
> cp .env-example .env
```

5. Update the database with the changes defined in `schema.prisma`

```
> npx prisma migrate
```

5. Seed database with initial data

```
> npx prisma db seed
```

7. Start the development server

```
> npm run init

> npm run dev

```
