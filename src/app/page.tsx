'use client'
import Image from "next/image";
import { useState } from "react";
import { getResponse } from "@/app/actions/getResponse"

export default function Home() {
    const [value, setValue] = useState('');
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
                <input type="text" placeholder="Message" name="item_number" required onChange={(e)=>setValue(e.target.value)}/>
                <button onClick={()=>getResponse({value})}>Send POST</button>
            </main>
        </div>
    );
}
