import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/auth";

import { ChatIcon } from "@phosphor-icons/react/ssr";
import { WhatsappLogoIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import RecentChats from "@/components/RecentChats";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);
  
    return (
        <>
            <div className="min-h-screen grid grid-cols-4">
                <div className="border-r-2 px-5 pt-10 border-white/10 overflow-auto max-h-screen no-scrollbar">
                    <RecentChats userPlatform=""/>
                </div>
                <div className="flex justify-center items-center p-5 col-span-3">
                    <div className="text-center">
                        <h1 className="text-5xl">Welcome, {session?.user?.name?.split(" ")[0]}!</h1><br />
                        <p className="text-sm">Ready to send? Create a message to begin.</p><br />
                        <div className="flex gap-5 mx-auto w-max">
                            <Link href="/dashboard/whatsapp" className="bg-green-400 text-black p-3 cursor-pointer inset-shadow-white/10 inset-shadow-2xs shadow-white/10 shadow-2xs m-auto gap-2 rounded-md flex"><WhatsappLogoIcon size={24}/> Whatsapp</Link>
                            <Link href="/dashboard/sms" className="bg-white text-black p-3 cursor-pointer inset-shadow-white/10 inset-shadow-2xs shadow-white/10 shadow-2xs m-auto gap-2 rounded-md flex"><ChatIcon size={24}/> SMS</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}