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

  // Branches
  await prisma.branches.createMany({
    data: [
      {
        branch_name: "Computer Science and Engineering",
        branch_code: "CSE",
        status: "available",
        available_sems: [4],
      },
      {
        branch_name: "CSE IOT",
        branch_code: "IOT",
        status: "Comming soon",
        available_sems: [],
      },
      {
        branch_name: "CSE AIML",
        branch_code: "AIML",
        status: "Comming soon",
        available_sems: [],
      },
    ],
  });

  // cse_sem_4
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

  // modules_daa
  await prisma.modules.createMany({
    data: [
      {
        subject_code: "22CSE249",
        module_name: "Intro To Algorithms",
        module_description: "Algorithm, Pseudo code,complexity etc.",
        module_number: 1,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/22CSE249/22CSE249_1.pdf",
      },
      {
        subject_code: "22CSE249",
        module_name: "Some Algorithms",
        module_description: "Merge Sort, Quick Sort,etc.",
        module_number: 2,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/22CSE249/22CSE249_2.pdf",
      },
      {
        subject_code: "22CSE249",
        module_name: "Greedy Method & Dynamic Programming",
        module_description: "Kruskels, Prims,Dijkstra,Backtracking etc..",
        module_number: 3,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/22CSE249/22CSE249_3.pdf",
      },
      {
        subject_code: "22CSE249",
        module_name: "Branch and Bound",
        module_description: "0/1 knapsack & Traveling salesperson problem etc.",
        module_number: 4,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/22CSE249/22CSE249_4.pdf",
      },
      {
        subject_code: "22CSE249",
        module_name: "",
        module_description: "",
        module_number: 5,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/22CSE249/22CSE249_5.pdf",
      },
    ],
  });

  // modules_dcn
  await prisma.modules.createMany({
    data: [
      {
        subject_code: "22CSE107",
        module_name: "Introduction to Data Communications",
        module_description:
          "Topologies,Types of network,protocols,OSI,TCP etc.",
        module_number: 1,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/22CSE107/22CSE107_1.pdf",
      },
      {
        subject_code: "22CSE107",
        module_name: "Error Detection and Correction",
        module_description: "CRC,Types of error,detection and correction etc.",
        module_number: 2,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/22CSE107/22CSE107_2.pdf",
      },
      {
        subject_code: "22CSE107",
        module_name: "The network layer",
        module_description: "Routing,Routers,IP,ICMP etc.",
        module_number: 3,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/22CSE107/22CSE107_3.pdf",
      },
      {
        subject_code: "22CSE107",
        module_name: "Transport Layer",
        module_description: "TCP/UDP,Socket,Port,Datagram etc.",
        module_number: 4,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/22CSE107/22CSE107_4.pdf",
      },
      {
        subject_code: "22CSE107",
        module_name: "",
        module_description: "",
        module_number: 5,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/22CSE107/22CSE107_5.pdf",
      },
    ],
  });

  // module_es
  await prisma.modules.createMany({
    data: [
      {
        subject_code: "22AECCE11",
        module_name: "Environment & Ecology",
        module_description: "Importance,atmosphere,ecosystem,food chains etc.",
        module_number: 1,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/22AECCE11/22AECCE11_1.pdf",
      },
      {
        subject_code: "22AECCE11",
        module_name: "Biodiversity",
        module_description: "Types of diversity,Importance,Values, etc.",
        module_number: 2,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/22AECCE11/22AECCE11_2.pdf",
      },
      {
        subject_code: "22AECCE11",
        module_name: "Natural Resources",
        module_description:
          "Types of resources,Importance,Values,Alternative sources etc.",
        module_number: 3,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/22AECCE11/22AECCE11_3.pdf",
      },
      {
        subject_code: "22AECCE11",
        module_name: "Environment Pollution",
        module_description: "Cuse,Effects,Prevention,Control of pollution etc.",
        module_number: 4,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/22AECCE11/22AECCE11_4.pdf",
      },
      {
        subject_code: "22AECCE11",
        module_name: "",
        module_description: "",
        module_number: 5,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/22AECCE11/22AECCE11_5.pdf",
      },
    ],
  });

  // module_toc
  await prisma.modules.createMany({
    data: [
      {
        subject_code: "22CSE330",
        module_name: "Introduction to Theory of Computation",
        module_description: "Automata,Language,Alphabets etc.",
        module_number: 1,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/22CSE330/22CSE330_1.pdf",
      },
      {
        subject_code: "22CSE330",
        module_name: "Regular expression, regular & non-regular languages",
        module_description: "Regex, pumping lema",
        module_number: 2,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/22CSE330/22CSE330_2.pdf",
      },
      {
        subject_code: "22CSE330",
        module_name: "Context free grammar",
        module_description:
          "types of grammar,Deviations, parse tress, CFG etc.",
        module_number: 3,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/22CSE330/22CSE330_3.pdf",
      },
      {
        subject_code: "22CSE330",
        module_name: "Push Down Automata",
        module_description: "pda and graphical notation,cfg to pda etc.",
        module_number: 4,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/22CSE330/22CSE330_3.pdf",
      },
      {
        subject_code: "22CSE330",
        module_name: "",
        module_description: "",
        module_number: 5,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/22CSE330/22CSE330_4.pdf",
      },
    ],
  });

  // module_etp
  await prisma.modules.createMany({
    data: [
      {
        subject_code: "ETP",
        module_name: "Introduction to Entrepreneurship",
        module_description: "Definition,Importance,Characteristics etc.",
        module_number: 1,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/ETP/ETP_1.pdf",
      },
      {
        subject_code: "ETP",
        module_name: "Innovation and creativity in entrepreneurship",
        module_description:
          "Roles of innovation,creativity in entrepreneurship, business Opportunity, Idea generation etc.",
        module_number: 2,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/ETP/ETP_2.pdf",
      },
      {
        subject_code: "ETP",
        module_name: "Finance and funding of ENTREPRENEURS",
        module_description:
          "Cost of raise money, bootstrapping, venture capital,IPOs etc.",
        module_number: 3,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/ETP/ETP_3.pdf",
      },
      {
        subject_code: "ETP",
        module_name: "managing growth and expansion",
        module_description:
          "focusing on right things, managing growth, scalability plan, prototypes etc.",
        module_number: 4,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/ETP/ETP_4.pdf",
      },
      {
        subject_code: "ETP",
        module_name: "",
        module_description: "",
        module_number: 5,
        module_link:
          "https://dalrhzyq3imlu.cloudfront.net/resourcesite/ETP/ETP_5.pdf",
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
