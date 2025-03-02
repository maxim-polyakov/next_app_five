'use server'
import {NextResponse} from "next/server";
import {db} from "@/db";
import {messages} from "@/db/schema";

export  async  function GET() {
    const data = await db
        .select()
        .from(messages)
    return NextResponse.json({
        data
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