"use client"

import { useState } from "react";
import { CampaignTemplate } from "@/types/templates";
import TemplateForm from "@/components/TemplateForm";
import RecentChats from "@/components/RecentChats";
import MessageComposer from "@/components/MessageComposer";
import QuickStart from "@/components/QuickStart";
import { PropagateLoader } from "react-spinners";
import Link from "next/link";

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

    return <>
        <div className="fixed top-5 w-full flex justify-center">
            <Link href="/dashboard/whatsapp" className="p-3 cursor-pointer rounded-tl-full rounded-bl-full px-5 bg-green-500/10 text-white/30">Whatsapp</Link>
            <Link href="/dashboard/sms" className="p-3 cursor-pointer rounded-tr-full rounded-br-full px-5 bg-blue-500 text-black">SMS</Link>
        </div>
        <div className="grid min-h-screen gap-5 grid-cols-5">
            <div className="border-r-2 border-white/10">
                <TemplateForm setMessageStatus={setMessageStatus} type="SMS" onResult={onResult} formValues={formValues} handleInputChange={handleInputChange}/>
            </div>
            <div className="col-span-3 flex justify-center items-center text-center">
                <div id="quick-start text-center">
                    <QuickStart setMessageStatus={setMessageStatus} applyTemplate={applyTemplate} type="SMS" onResult={onResult} prompt={prompt} setPrompt={setPrompt}/>
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
                        <MessageComposer type="SMS" message={message} onMessageChange={setMessage}/>
                    }
                </div>
            </div>
            <div className="border-l-2 px-5 pt-10 border-white/10 overflow-auto max-h-screen no-scrollbar">
                <RecentChats userPlatform="SMS"/>
            </div>
        </div>
    </>
}