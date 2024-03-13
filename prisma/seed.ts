import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const branch = await prisma.branchsemsubject.create({
    data: {
      branch: "CSE",
      sem: 1,
      subjectcodes: {
        ES: "22AECCE11",
        DAA: "22CSE249",
        DCN: "22CSE107",
        TOC: "22CSE330",
      },
    },
  });
  const subjectmodule = await prisma.subjectsmodule.createMany({
    data: [
      {
        subCode: "22CSE107",
        module: {
          module1: "/22CSE107/22CSE107_1.pdf",
          module2: "/22CSE107/22CSE107_2.pdf",
        },
      },
      {
        subCode: "22CSE330",
        module: {
          module1: "/22CSE330/22CSE330_1.pdf",
          module2: "/22CSE330/22CSE330_2.pdf",
        },
      },
      {
        subCode: "22CSE249",
        module: {
          module1: "/22CSE249/22CSE249_1.pdf",
          module2: "/22CSE249/22CSE249_2.pdf",
        },
      },
      {
        subCode: "22AECCE11",
        module: {
          module1: "/22AECCE11/22AECCE11_1.pdf",
          module2: "/22AECCE11/22AECCE11_2.pdf",
        },
      },
    ],
  });
  const user = await prisma.users.create({
    data: {
      name: "Anish",
      email: "aaraz@gmail.com",
      password: "kali",
      role: "student",
      privilage: "superuser",
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
