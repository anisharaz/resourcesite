"use client";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export function SingleCard(props: {
  image: StaticImageData;
  courseName: string;
  note: string;
  path: string;
}) {
  return (
    <div className="flex justify-center">
      <Card className="w-5/6">
        <CardHeader className="p-0">
          <Image
            src={props.image}
            alt="img"
            className="w-auto h-40 object-cover"
          />
        </CardHeader>
        <CardContent>
          <p className="text-center text-textc font-bold pt-3 text-2xl">
            {props.courseName}
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <a href={props.path}>View notes</a>
          </Button>
        </CardFooter>
        <div className="flex justify-center text-[#ff0000]">
          <p
            className={
              props.note === "available"
                ? "text-lacc dark:text-dacc font-bold"
                : ""
            }
          >
            {props.note}
          </p>
        </div>
      </Card>
    </div>
  );
}
