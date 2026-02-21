
import { ChatIcon } from "@phosphor-icons/react/ssr";
import { WhatsappLogoIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";

export default async function Dashboard() {
    return (
        <>
            <div className="min-w-screen min-h-screen flex justify-center items-center">
                <div className="text-center">
                    <h1 className="text-3xl">Dashboard</h1><br />
                    <div className="flex gap-5">
                        <Link href="/dashboard/whatsapp" className="bg-green-900 p-3 cursor-pointer inset-shadow-white/10 inset-shadow-2xs shadow-white/10 shadow-2xs m-auto gap-2 rounded-md flex"><WhatsappLogoIcon size={24}/> Whatsapp</Link>
                        <Link href="/dashboard/sms" className="bg-white text-black p-3 cursor-pointer inset-shadow-white/10 inset-shadow-2xs shadow-white/10 shadow-2xs m-auto gap-2 rounded-md flex"><ChatIcon size={24}/> SMS</Link>
                    </div>
                </div>
            </div>
        </>
    )
}