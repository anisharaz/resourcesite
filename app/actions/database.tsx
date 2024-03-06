"use server";
import prisma from "../lib/db";
export async function get_branch(branch_name: string) {
  const data = await prisma.branchsemsubject.findMany({
    where: {
      branch: branch_name,
    },
  });
  // console.log(data);

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
  // console.log(res);
  return res;
}

export async function put_subjects_module(data: {
  subCode: string;
  module: {};
}) {
  const res = await prisma.subjectsmodule.create({
    data: {
      subCode: data.subCode,
      module: data.module,
    },
  });
  // console.log(res);
  return res;
}

export async function get_subjects_module(subCode?: string) {
  const data = await prisma.subjectsmodule.findMany({
    where: {
      subCode: subCode,
    },
  });
  // console.log(data);
  return data;
}
