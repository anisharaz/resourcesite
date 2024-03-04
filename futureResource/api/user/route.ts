import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"
const client = new PrismaClient();

var json = {
    module: [{ module1: 'binary search' }, { module2: 'tree' }],
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    try {
        const user = await client.subjectsmodule.create({
            data: {
                subCode: body.subCode,
                module: json,
            }
        });
        return NextResponse.json({ message: "Subject module created" });

    } catch(e) {
        return NextResponse.json({message: "Invalid input"});
    }
}

export async function GET(req: NextRequest) {
    const body = await req.json();
    const person = await client.subjectsmodule.findMany({
        where: {
            subCode: body.subCode
        }
    });
    return NextResponse.json(person);
}