"use server";
import prisma from "../lib/db";
export async function get_branch(branch_name: string) {
  const data = await prisma.branchsemsubject.findMany({
    where: {
      branch: branch_name,
    },
  });
  console.log(data);

  return data;
}

export async function put_branch(data: {
  branch: string;
  sem: number;
  subjectcodes: {};
}) {
  const res = await prisma.branchsemsubject.create({
    data: {
      branch: data.branch,
      sem: data.sem,
      subjectcodes: data.subjectcodes,
    },
  });
  console.log(res);
  return res;
}
