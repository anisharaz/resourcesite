import Image from "next/image";
import { Button } from "@/components/ui/button"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Link } from "lucide-react";


export default function(props:{image: any, courseName: string, note: string, path: string}){
    return(
        <div className="flex justify-center mt-5">
            <Card style={{background: "#B6EADA"}} className=" w-5/6">
                <CardHeader className="p-0">
                    <Image src={props.image} alt="img" className="w-auto h-40"/>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-[#301E67] text-xl font-bold mt-3">{props.courseName}</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                <Button asChild>
                   <a href={props.path}>View notes</a>
                </Button>
                </CardFooter>
                <div className="flex justify-center text-[#301E67]">
                  <p>{props.note}</p>
                </div>
            </Card>
        </div>
    )
}
