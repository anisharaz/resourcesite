-- CreateTable
CREATE TABLE "subjectsmodule" (
    "subCode" TEXT NOT NULL,
    "module" JSONB NOT NULL
);

-- CreateTable
CREATE TABLE "branchsemsubject" (
    "id" SERIAL NOT NULL,
    "branch" TEXT NOT NULL,
    "sem" INTEGER NOT NULL,
    "subjectcodes" JSONB NOT NULL,

    CONSTRAINT "branchsemsubject_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "subjectsmodule_subCode_key" ON "subjectsmodule"("subCode");
