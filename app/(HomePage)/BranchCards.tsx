import prisma from "@/lib/db";
import web from "@/app/assets/web.jpeg";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default async function BranchCards() {
  const branch = await prisma.branch.findMany({
    orderBy: {
      id: "asc",
    },
  });
  const branch_card = branch.map((item, index) => {
    return (
      <div className="" key={index}>
        <Card className="shadow-2xl">
          <CardHeader className="p-0">
            <Image src={web} alt="img" className="w-auto h-40 object-cover" />
          </CardHeader>
          <CardContent>
            <p className="text-center text-textc font-bold pt-3 text-2xl">
              {item.branch_name}
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <a href={`/view/${item.branch_code}`}>View notes</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  });
  return <>{branch_card}</>;
}
