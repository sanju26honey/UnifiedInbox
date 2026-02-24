'use client'

import { Google } from "@deemlol/next-icons"
import { Github } from "@deemlol/next-icons"
import { signIn } from "next-auth/react"
export default function LoginPage() {
    return (
    <div className="min-h-screen w-full overflow-auto no-scrollbar relative bg-linear-to-tl from-green-500/30 to-blue-500/30">
    {/* Arctic Lights Background with Top Glow */}
        <div
        className="fixed overflow-auto no-scrollbar  inset-0 z-0"
        style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 0, 0, 0.5), transparent 70%), transparent",
        }}
        >
            <div className="fixed overflow-auto no-scrollbar  inset-0 z-0"
            style={{
                backgroundColor: "transparent",
                backgroundImage: "radial-gradient(at 4% 69%, #070f2b 0%, transparent 60%), radial-gradient(at 17% 10%, #1b1a55 0%, transparent 50%), radial-gradient(at 74% 76%, rgba(5, 223, 114, 0.1) 0%, transparent 40%), radial-gradient(at 71% 94%, rgba(5, 223, 114, 0.2) 0%, transparent 30%)"
            }}>
        <div className="min-w-screen min-h-screen p-0 m-0 flex justify-center items-center text-center">
            <div className="justify-center bg-linear-to-bl from-gray-100/10 to-gray-300/10 rounded-2xl p-3 py-16 w-100 text-center">
                <h1 className="text-xl">UniBox</h1>
                <br />
                <span className="text-2xl">Sign in to get started.</span>
                <br /><br />
                <button onClick={()=>signIn("google", {callbackUrl:"/dashboard"})} className="bg-linear-to-l to-blue-500/30 from-green-500/30 text-white/60 rounded-3xl  p-3 cursor-pointer inset-shadow-white/10 inset-shadow-2xs shadow-white/10 shadow-2xs m-auto gap-2 rounded-md flex"><Google size={24}/> Login with Google</button>
                <br />
                <button onClick={()=>signIn("github", {callbackUrl:"/dashboard"})} className="bg-linear-to-l to-blue-500/30 from-green-500/30 text-white/60 rounded-3xl  p-3 cursor-pointer inset-shadow-white/10 inset-shadow-2xs shadow-white/10 shadow-2xs m-auto gap-2 rounded-md flex"><Github size={24}/> Login with Github</button>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}