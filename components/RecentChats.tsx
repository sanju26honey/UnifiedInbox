"use client"

import { ChatIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function RecentChats( {userPlatform}:{userPlatform:string} ) {
    interface Message {
        id: string;
        body: string;
        to: string;
        platform: string;
        status: string;
        createdAt: Date;
        userEmail: string;
    }

    const [recents, setRecents] = useState<Message[]>([]);
    
    const home=userPlatform===""?true:false

    useEffect(() => {
        const loadData = async() =>{
            const data = await fetch(`/api/history?platform=${userPlatform}`);
            const res = await data.json()
            console.log(res)
            setRecents(res)
        }
        loadData();
    }, []);

    return <div className="">
        <h1 className="text-2xl">Recents</h1>
        <br />
        { recents.length===0 && 
            <span className="xl">No Messages</span>
        }
        { recents.map((message) => (
            <div key={message.id} className="py-3 bg-white/3 px-5 mb-3 p-3 rounded-md">
                {
                    home &&
                    <span className="flex py-1.5">
                        {message.platform==="Whatsapp"?
                        <span className="flex gap-2 text-green-500"><WhatsappLogoIcon size={24}/> Whatsapp</span>
                        :
                        <span className="flex gap-2 text-blue-500"><ChatIcon size={24}/> SMS</span>
                        }
                        <br />
                    </span>
                }
                {message.body.length > 50 
                    ? `${message.body.substring(0, 50)}...` 
                    : message.body}
                <br />
                <span className="text-sm">
                    {new Date(message.createdAt).toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                })}
                </span>
            </div>
        ))}
    </div>
}