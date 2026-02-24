"use client"

import { SignOutIcon } from "@phosphor-icons/react";
import { signOut } from "next-auth/react";

export default function SignOut() {
    return <>
        <div className="fixed top-0 md:right-5 right-0 m-3">
            <button onClick={() => signOut({ callbackUrl: "/login" })} className="bg-linear-to-l flex from-blue-500/30 to-green-500/30 text-white rounded-xl p-3 px-8 flex items-center cursor-pointer"><SignOutIcon/></button>
        </div>
    </>
}