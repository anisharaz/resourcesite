import { SingleCard } from "./card";
import prisma from "@/app/lib/db";
import web from "../../assets/web.jpeg";
export default async function BranchCards() {
  const branch = await prisma.branches.findMany({
    orderBy: {
      id: "asc",
    },
  });
  const branch_card = branch.map((item, index) => {
    return (
      <SingleCard
        image={web}
        courseName={item.branch_name}
        note={item.status}
        path={`/view/${item.branch_code}`}
        key={index}
      />
    );
  });
  return <>{branch_card}</>;
}
