"use server";
import prisma from "../lib/db";

export async function get_branch(branch_code: string) {
  const fetch = await prisma.branches.findUnique({
    where: {
      branch_code: branch_code,
    },
  });
  return fetch;
}

export async function get_sem(branch_code: string, sem: number) {
  const fetch = await prisma.subjects.findMany({
    where: {
      branch_code: branch_code,
      semesters_num: sem,
    },
  });
  return fetch;
}

export async function get_SubWithModules(subject_code: string) {
  const fetch = await prisma.subjects.findUnique({
    where: {
      subject_code: subject_code,
    },
    include: {
      module: true,
    },
  });
  return fetch;
}

export async function get_module(module_id: number) {
  const fetch = await prisma.modules.findUnique({
    where: {
      id: module_id,
    },
  });
  return fetch;
}
