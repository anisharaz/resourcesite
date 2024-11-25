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

  await prisma.branch.createMany({
    data: [
      {
        branch_name: "Computer Science and Engineering",
        branch_code: "CSE",
        department_code: "CSE",
        available_sems: [4], // [0] this means no semester doc are available
      },
      {
        branch_name: "Information And Technology",
        branch_code: "IOT",
        department_code: "CSE",
        available_sems: [4],
      },
      {
        branch_name: "Artificial Intelligence and Machine Learning",
        branch_code: "AIML",
        department_code: "CSE",
        available_sems: [3],
      },
      {
        branch_name: "Information and Software Engineering",
        branch_code: "ISE",
        department_code: "CSE",
        available_sems: [4],
      },
    ],
  });

  await prisma.section.createMany({
    data: [
      {
        section_name: "CSE Gen A",
        branch_code: "CSE",
      },
      {
        section_name: "CSE Gen B",
        branch_code: "CSE",
      },
      {
        section_name: "CSE Gen C",
        branch_code: "CSE",
      },
      {
        section_name: "CSE Gen D",
        branch_code: "CSE",
      },
      {
        section_name: "CSE Gen E",
        branch_code: "CSE",
      },
      {
        section_name: "IOT A",
        branch_code: "IOT",
      },
      {
        section_name: "IOT B",
        branch_code: "IOT",
      },
    ],
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
        subject_code: "22HSS123",
      },
      {
        branch_code: "IOT",
        semesters_num: 4,
        subject_name: "Digital Logic",
        subject_short_name: "DLD",
        subject_code: "22IOT223",
      },
      {
        branch_code: "IOT",
        semesters_num: 4,
        subject_name: "Business Communication and Presentation",
        subject_short_name: "BCP",
        subject_code: "22IOT124",
      },
      {
        branch_code: "AIML",
        semesters_num: 4,
        subject_name: "Essentials of Machine Learning",
        subject_short_name: "EML",
        subject_code: "22AIML124",
      },
      {
        branch_code: "ISE",
        semesters_num: 4,
        subject_name: "Information Science",
        subject_short_name: "ISC",
        subject_code: "22ISC324",
      },
    ],
  });

  await prisma.modules.createMany({
    data: [
      {
        subject_code: "22CSE249",
        section_name: "CSE Gen A",
        module_no: 1,
        module_name: "Introduction to Algorithms",
        module_description: "Introduction to Algorithms",
        module_url: [
          {
            doc_type: "MAIN_MODULE",
            doc_no: 1,
            url: "https://static.aaraz.me/resourcesite/modules/22CSE107/CSE_GEN_E/22CSE107_1.pdf",
          },
        ],
      },
      {
        subject_code: "22CSE249",
        section_name: "CSE Gen A",
        module_no: 2,
        module_name: "Introduction to Algorithms",
        module_description: "Introduction to Algorithms",
        module_url: [
          {
            doc_type: "MAIN_MODULE",
            doc_no: 1,
            url: "https://static.aaraz.me/resourcesite/modules/22CSE107/CSE_GEN_E/22CSE107_2.pdf",
          },
        ],
      },
    ],
  });

  await prisma.modules.createMany({
    data: [
      {
        subject_code: "22CSE107",
        section_name: "CSE Gen A",
        module_no: 1,
        module_name: "Introduction to Data Communication",
        module_description: "Basics of Data Communication and Networking",
        module_url: [
          {
            doc_type: "SUB_MODULE",
            doc_no: 1.1,
            url: "https://static.aaraz.me/resourcesite/modules/22CSE107/CSE_GEN_E/22CSE107_1.pdf",
          },
          {
            doc_type: "SUB_MODULE",
            doc_no: 1.2,
            url: "https://static.aaraz.me/resourcesite/modules/22CSE107/CSE_GEN_E/22CSE107_1.pdf",
          },
        ],
      },
      {
        subject_code: "22CSE107",
        section_name: "CSE Gen A",
        module_no: 2,
        module_name: "Basics of Data Communication",
        module_description: "Basics of Data Communication and Networking",
        module_url: [
          {
            doc_type: "SUB_MODULE",
            doc_no: 2.1,
            url: "https://static.aaraz.me/resourcesite/modules/22CSE107/CSE_GEN_E/22CSE107_2.pdf",
          },
          {
            doc_type: "SUB_MODULE",
            doc_no: 2.2,
            url: "https://static.aaraz.me/resourcesite/modules/22CSE107/CSE_GEN_E/22CSE107_2.pdf",
          },
        ],
      },
    ],
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
