'use server'
import {NextResponse} from "next/server";
import {db} from "@/db";
import {messages} from "@/db/schema";

export  async  function GET() {
    return NextResponse.json({
        hello: "world",
    });
}

export  async  function POST(request:Request) {
    const data = await request.json();
    await db.insert(messages).values({
        message:data['value'],
    })
    return NextResponse.json({
        data
    });
}