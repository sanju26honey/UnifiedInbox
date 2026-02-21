import { CheckCircle, XCircle } from "@deemlol/next-icons";
import { ChatIcon, HourglassHighIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function MessageComposer( {type, message, onMessageChange}:{type: "Whatsapp" | "SMS", message:string, onMessageChange: (val: string) => void;} ) {
    const [to_ph, setTo_ph] = useState('');
    const isValidLength = to_ph.length >= 13;
    const isValidFormat = /^\+\s*\d{1,4}(\s*\d){10}$/.test(to_ph);
    const showError = to_ph.length > 0 && (!isValidLength || !isValidFormat);
    const [status, setStatus] = useState(0)
    const sendMessage = async() => {
        setStatus(1)
        const res = await fetch("/api/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ platform: type, to: to_ph, message: message}),
        });
        if(!res.ok) {
            setStatus(3)
        } else {
            setStatus(2)
        }
        const data = await res.json();
    }
    return <div>
        <div className="border-t-2 border-white/10 p-3 pt-8">
            <div className="grid items-center grid-cols-1 gap-x-6 gap-y-8">
                <div className="flex gap-4 m-auto items-center">
                    <label htmlFor="cta_link" className="block text-sm/6 font-medium text-white">
                        Send To:
                    </label>
                    <div className="">
                        <div className={`${showError 
                                ? 'border-red-500 outline-red-500 ring-1 ring-red-500' 
                                : ' focus:outline-blue-500' } flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500`}>
                            <input
                                id="to_ph"
                                name="to_ph"
                                onChange={(e) => setTo_ph(e.target.value)}
                                type="tel" 
                            placeholder="+91 9999999999"
                            className={`
                            p-2 rounded-md outline-none
                            block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6`}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {showError && (
                <p className="text-red-500 overflow-auto text-xs mt-1">
                    Must include country code and 10 digit phone number
                </p>
            )}
            <br />
            <div className="flex resize w-full m-auto items-center rounded-md bg-white/5 px-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                <textarea
                    id="extra_information"
                    name="extra_information"
                    value={message}
                    rows={4}
                    onChange={(e) => onMessageChange(e.target.value)}
                    className="block h-max no-scrollbar w-full rounded-md bg-transparent px-1 py-1.5 text-base text-white outline-0 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-0 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    placeholder="Limited-time discounts on best-selling products. Offer valid for 24 hours only. No code required. Stocks are limited."
                />
            </div>
            <div className="mt-4 grid-cols-1 gap-x-6 gap-y-8">
                <div className="">
                    <button onClick={sendMessage} className={`inline-flex w-full justify-center gap-3 items-center rounded-md ${type==="Whatsapp"?"bg-green-400":"bg-white"} px-4 py-3 text-xs font-medium text-black inset-ring inset-ring-green-400/30`}>
                        {
                                status===0 ?<> {type==="Whatsapp"?<WhatsappLogoIcon size={24}/>:<ChatIcon size={24}/>} Send {type} Message</>
                            :   status===1 ? <><HourglassHighIcon size={24}/> Sending... </>
                            :   status===2 ? <><CheckCircle size={24}/> Sent</>
                            :   <><XCircle size={24}/> Unexpected error occurred. Please Try Again.</>
                        }
                    </button>
                </div>
            </div>
        </div>
    </div>

}