'use client'

import { Google } from "@deemlol/next-icons"
import { Github } from "@deemlol/next-icons"
import { signIn } from "next-auth/react"
export default function LoginPage() {
    return (
        <div className="min-w-screen min-h-screen p-0 m-0 flex justify-center items-center text-center">
            <div className="justify-center bg-linear-to-bl from-black/10 to-black/40 rounded-2xl p-3 pt-8 w-100 text-center">
                <h1 className="text-4xl">Welcome</h1>
                <br />
                <span className="text-xl">Login to get started.</span>
                <br /><br />
                <button onClick={()=>signIn("google", {callbackUrl:"/dashboard"})} className="bg-black/30 p-3 cursor-pointer inset-shadow-white/10 inset-shadow-2xs shadow-white/10 shadow-2xs m-auto gap-2 rounded-md flex"><Google size={24}/> Login with Google</button>
                <br />
                <button onClick={()=>signIn("github", {callbackUrl:"/dashboard"})} className="bg-black/30 p-3 cursor-pointer inset-shadow-white/10 inset-shadow-2xs shadow-white/10 shadow-2xs m-auto gap-2 rounded-md flex"><Github size={24}/> Login with Github</button>
            </div>
        </div>
    )
}