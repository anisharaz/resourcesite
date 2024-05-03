import prisma from "@/app/lib/db";
import { unstable_noStore } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  unstable_noStore();
  const branch = await prisma.branches.findMany({
    orderBy: {
      id: "asc",
    },
  });
  const branch_card = branch.map((item) => {
    return {
      branch_name: item.branch_name,
      status: item.status,
      branch_code: item.branch_code,
    };
  });
  return new NextResponse(JSON.stringify(branch_card), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
