import prisma from "./db";

export async function getUserAllDetail({ userEmail }: { userEmail: string }) {
  return await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
    include: {
      program: true,
      department: true,
      branch: true,
      semesters: true,
      section: true,
    },
  });
}
