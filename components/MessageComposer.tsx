import { CheckCircle, XCircle } from "@deemlol/next-icons";
import { ChatIcon, CheckIcon, HourglassHighIcon, WhatsappLogoIcon, XCircleIcon, XIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function MessageComposer( {type, message, onMessageChange}:{type: "Whatsapp" | "SMS", message:string, onMessageChange: (val: string) => void;} ) {
    const [to_ph, setTo_ph] = useState('');
    const isValidLength = to_ph.length >= 13;
    const isValidFormat = /^\+\s*\d{1,4}(\s*\d){10}$/.test(to_ph);
    let showError = to_ph.length > 0 && (!isValidLength || !isValidFormat);
    const [error, setError] = useState(false)
    const [status, setStatus] = useState(0)
    const [toast, setToast] = useState(false)
    const sendMessage = async() => {
        if(to_ph.length==0) {
            setError(true)
            return;
        } else {
            setError(false)
        }
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
        setToast(true)
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
            {(showError || error) && (
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
            {
                (toast && (status==2)) &&
                <div id="toast-simple" className={`fixed text-black/80 rounded border-0 ${(status===2)?"bg-green-300 ":"bg-blue-400/30"} bottom-0 right-0 m-3 flex items-center w-full max-w-sm p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default`} role="alert">
                    {/* <svg className="w-5 h-5 text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"/></svg> */}
                    <CheckIcon/>
                    <div className="ms-2.5 text-sm border-s border-default ps-3.5">Message sent successfully.</div>
                    <button type="button" onClick={() => setToast(false)} className="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none" data-dismiss-target="#toast-simple" aria-label="Close">
                        <XIcon/>
                    </button>
                </div>
            }
            {
                (toast && (status==3)) &&
                <div id="toast-simple" className={`fixed text-black/80 rounded border-0 ${(status===3)?"bg-red-300 ":"bg-green-300"} bottom-0 right-0 m-3 flex items-center w-full max-w-sm p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default`} role="alert">
                    {/* <svg className="w-5 h-5 text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"/></svg> */}
                    <XCircleIcon size={24}/>
                    <div className="ms-2.5 text-sm border-s border-default ps-3.5">Message not sent.</div>
                    <button type="button" onClick={() => setToast(false)} className="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none" data-dismiss-target="#toast-simple" aria-label="Close">
                        <XIcon/>
                    </button>
                </div>
            }
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