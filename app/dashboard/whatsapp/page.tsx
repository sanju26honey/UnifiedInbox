"use client"

import { useState } from "react";
import { CampaignTemplate } from "@/types/templates";
import TemplateForm from "@/components/TemplateForm";
import RecentChats from "@/components/RecentChats";
import MessageComposer from "@/components/MessageComposer";
import QuickStart from "@/components/QuickStart";
import { PropagateLoader } from "react-spinners";
import Link from "next/link";
import { SignOutIcon } from "@phosphor-icons/react";
import { HouseSimpleIcon } from "@phosphor-icons/react/dist/ssr";

import { signOut } from "next-auth/react"

export default function() {
    const [messageStatus, setMessageStatus] = useState(0)
    const [message, setMessage] = useState("")
    const [prompt, setPrompt] = useState("")
    const [formValues, setFormValues] = useState({
        brand: '',
        campaign: 'Promotion',
        hook: '',
        tone: 'Professional',
        cta: '',
        cta_link: '',
        extra_information:''
    });

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value }); //
    };

    const applyTemplate = (template: CampaignTemplate) => {
        setShowStatus(false)
        setFormValues({
            ...formValues,
            campaign: template.campaignType,
            hook: template.campaignHook,
            tone: template.tone,
            cta: template.callToAction,
            extra_information: template.extraInformation,
        });
    };

    const onResult = (response: string) => {
        setMessage(response)
        setMessageStatus(2)
    }

    const [showStatus, setShowStatus] = useState(true)

    return <>
        <div className="fixed top-5 w-full md:flex mx-auto gap-5  hidden justify-center">
            <div className="flex gap-5">
                <div className="top-5 w-full flex mt-5 justify-start">
                    <Link href="/dashboard/" className="p-3 flex items-center cursor-pointer rounded-full px-5 bg-green-500 text-white"><HouseSimpleIcon/></Link>
                </div>
                <div className=" top-5 w-full flex mt-5 justify-center">
                    <Link href="/dashboard/whatsapp" className="p-3 cursor-pointer rounded-tl-full rounded-bl-full px-5 bg-green-500 text-white">Whatsapp</Link>
                    <Link href="/dashboard/sms" className="p-3 cursor-pointer rounded-tr-full rounded-br-full px-5 bg-blue-500/10 text-white/30">SMS</Link>
                </div>
                <div className="top-5 w-full flex mt-5 justify-end">
                    <button onClick={() => signOut({ callbackUrl: "/login" })} className="p-3 flex items-center cursor-pointer rounded-full px-5 bg-green-500 text-white"><SignOutIcon/></button>
                </div>   
            </div>     
        </div>
        <div className="grid min-h-screen gap-5 grid-cols-5">
            <div className="md:col-span-1 md:order-1 order-2 col-span-5 border-r-2 border-white/10">
                <TemplateForm showStatus={showStatus} setShowStatus={setShowStatus} setMessageStatus={setMessageStatus} type="Whatsapp" onResult={onResult} formValues={formValues} handleInputChange={handleInputChange}/>
            </div>
            <div className="col-span-5 md:order-2 order-1 md:col-span-3">
                <div className="relative mt-5 h-auto flex justify-between">
                    <div className="top-5 w-full flex md:hidden mt-5 justify-start">
                        <Link href="/dashboard/" className="p-3 flex items-center cursor-pointer rounded-tr-full rounded-br-full px-5 bg-green-500 text-white"><HouseSimpleIcon/></Link>
                    </div>
                    <div className=" top-5 w-full flex md:hidden mt-5 justify-center">
                        <Link href="/dashboard/whatsapp" className="p-3 cursor-pointer rounded-tl-full rounded-bl-full px-5 bg-green-500 text-white">Whatsapp</Link>
                        <Link href="/dashboard/sms" className="p-3 cursor-pointer rounded-tr-full rounded-br-full px-5 bg-blue-500/10 text-white/30">SMS</Link>
                    </div>
                    <div className="top-5 w-full flex md:hidden mt-5 justify-end">
                        <button onClick={() => signOut({ callbackUrl: "/login" })} className="p-3 flex items-center cursor-pointer rounded-tl-full rounded-bl-full px-5 bg-green-500 text-white"><SignOutIcon/></button>
                    </div>
                </div>
                <div className="flex md:mt-0 mt-8 md:p-0 p-5 justify-center items-center text-center h-full">
                <div id="quick-start text-center">
                    <QuickStart setMessageStatus={setMessageStatus} applyTemplate={applyTemplate} type="Whatsapp" onResult={onResult} prompt={prompt} setPrompt={setPrompt}/>
                    <br /><br />
                    {
                        (messageStatus==3) &&
                        <span className="text-red-400 text-xs">Unexpected Error Occurred. Please Try Again...</span>
                    }
                    {
                        (messageStatus==1) &&
                        <PropagateLoader speedMultiplier={0.5} color="oklch(70.7% 0.165 254.624)"/>
                    }
                    {
                        (messageStatus==2) &&
                        <MessageComposer type="Whatsapp" message={message} onMessageChange={setMessage}/>
                    }
                </div>
                </div>
            </div>
            <div className="order-3 md:col-span-1 col-span-5 border-l-2 px-5 pt-10 border-white/10 overflow-auto max-h-screen no-scrollbar">
                <RecentChats userPlatform="Whatsapp"/>
            </div>
        </div>
    </>
}