"use server";
import prisma from "../../../lib/db";

export async function get_branch(branch_code: string) {
  return await prisma.branch.findUnique({
    where: {
      branch_code: branch_code,
    },
  });
}

export async function get_sem(branch_code: string, sem: number) {
  return await prisma.subjects.findMany({
    where: {
      branch_code: branch_code,
      semesters_num: sem,
    },
  });
}

export async function get_SubWithModules(subject_code: string) {
  return await prisma.subjects.findUnique({
    where: {
      subject_code: subject_code,
    },
    include: {
      module: true,
    },
  });
}

export async function get_module(module_id: number) {
  return await prisma.modules.findUnique({
    where: {
      id: module_id,
    },
  });
}

export async function get_modulesWithName(module_name: string) {
  return await prisma.modules.findUnique({
    where: {
      module_name: module_name,
    },
  });
}
