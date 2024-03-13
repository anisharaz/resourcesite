-- CreateTable
CREATE TABLE "subjectsmodule" (
    "subCode" TEXT NOT NULL,
    "module" JSONB NOT NULL,

    CONSTRAINT "subjectsmodule_pkey" PRIMARY KEY ("subCode")
);

-- CreateTable
CREATE TABLE "branchsemsubject" (
    "id" SERIAL NOT NULL,
    "branch" TEXT NOT NULL,
    "sem" INTEGER NOT NULL,
    "subjectcodes" JSONB NOT NULL,

    CONSTRAINT "branchsemsubject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "privimage" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "subjectsmodule_subCode_key" ON "subjectsmodule"("subCode");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
