/* eslint-disable */
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  // Semesters
  await prisma.semesters.createMany({
    data: [
      {
        sem_number: 1,
      },
      {
        sem_number: 2,
      },
      {
        sem_number: 3,
      },
      {
        sem_number: 4,
      },
      {
        sem_number: 5,
      },
      {
        sem_number: 6,
      },
      {
        sem_number: 7,
      },
      {
        sem_number: 8,
      },
    ],
  });

  await prisma.program.create({
    data: {
      program_name: "B.Tech",
    },
  });

  await prisma.department.create({
    data: {
      department_name: "Computer Science and Engineering",
      department_code: "CSE",
      program_name: "B.Tech",
    },
  });

  await prisma.branch.create({
    data: {
      branch_name: "Computer Science and Engineering",
      branch_code: "CSE",
      department_code: "CSE",
      available_sems: [4], // [0] this means no semester doc are available
    },
  });

  await prisma.subjects.createMany({
    data: [
      {
        branch_code: "CSE",
        semesters_num: 4,
        subject_name: "Design and Analysis of Algorithms",
        subject_short_name: "DAA",
        subject_code: "22CSE249",
      },
      {
        branch_code: "CSE",
        semesters_num: 4,
        subject_name: "Data Communication and Networking",
        subject_short_name: "DCN",
        subject_code: "22CSE107",
      },
      {
        branch_code: "CSE",
        semesters_num: 4,
        subject_name: "Theory of Computation",
        subject_short_name: "TOC",
        subject_code: "22CSE330",
      },
      {
        branch_code: "CSE",
        semesters_num: 4,
        subject_name: "Environmental studies",
        subject_short_name: "ES",
        subject_code: "22AECCE11",
      },
      {
        branch_code: "CSE",
        semesters_num: 4,
        subject_name: "Entrepreneurship",
        subject_short_name: "ETP",
        subject_code: "ETP",
      },
    ],
  });

  await prisma.modules.createMany({
    data: {
      subject_code: "22CSE249",
      module_no: 1,
      module_name: "Introduction to Algorithms",
      module_description: "Introduction to Algorithms",
      module_url: [
        {
          doc_type: "MAIN_MODULE",
          doc_no: 1,
          url: "https://www.youtube.com/watch?v=HtSuA80QTyo",
        },
      ],
    },
  });
  await prisma.modules.createMany({
    data: {
      subject_code: "22CSE107",
      module_no: 1,
      module_name: "Introduction to Data Communication",
      module_description: "Basics of Data Communication and Networking",
      module_url: [
        {
          doc_type: "SUB_MODULE",
          doc_no: 1.1,
          url: "https://www.example.com/intro-to-dcn",
        },
        {
          doc_type: "SUB_MODULE",
          doc_no: 1.2,
          url: "https://www.example.com/intro-to-dcn",
        },
      ],
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
