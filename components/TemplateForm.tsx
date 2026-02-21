"use client"
import { ChatIcon, WhatsappLogoIcon,  } from "@phosphor-icons/react";
import { ChevronDown } from "@deemlol/next-icons";

import { useState } from "react";

interface Props {
    type: "Whatsapp" | "SMS",
    // apiEndpoint: string;
    formValues: any;
    handleInputChange: React.Dispatch<React.SetStateAction<any>>;
    // onResult: (message: string) => void;
}

export default function TemplateForm({
    type,
    //   apiEndpoint,
    formValues,
    handleInputChange,
    //   onResult,
}: Props) {


    return <>
        <div className="form h-screen overflow-auto no-scrollbar">
            <div className="mt-10 px-5 grid grid-cols-1 gap-x-6 gap-y-8">
                <div className="">
                    <label htmlFor="brand" className="block text-sm/6 font-medium text-white">
                        Brand Name
                    </label>
                    <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                            <input
                                id="brand"
                                name="brand"
                                type="text"
                                value={formValues.brand}
                                onChange={handleInputChange}
                                placeholder="Unified Inbox"
                                className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 px-5 grid grid-cols-1 gap-x-6 gap-y-8">
                <div className="">
                    <label htmlFor="campaign" className="block text-sm/6 font-medium text-white">
                        Campaign Type
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                        <select
                        id="campaign"
                        name="campaign"
                        autoComplete="campaign"
                        value={formValues.campaign}
                        onChange={handleInputChange}
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        >
                            <option value="Promotion">Promotion</option>
                            <option value="Event Invite">Event Invite</option>
                            <option value="CTA for Abandoned Cart">CTA for Abandoned Cart</option>
                            <option value="Product Launch">Product Launch</option>
                            <option value="Newsletter Lunch">Newsletter Launch</option>
                        </select>
                        <ChevronDown
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-8 px-5 grid grid-cols-1 gap-x-6 gap-y-8">
                <div className="">
                    <label htmlFor="hook" className="block text-sm/6 font-medium text-white">
                        Campaign Hook
                    </label>
                    <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                            <input
                                id="hook"
                                name="hook"
                                value={formValues.hook}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Buy one get one free"
                                className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 px-5 grid grid-cols-1 gap-x-6 gap-y-8">
                <div className="">
                    <label htmlFor="tone" className="block text-sm/6 font-medium text-white">
                        Tone
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                        <select
                        id="tone"
                        name="tone"
                        value={formValues.tone}
                        onChange={handleInputChange}
                        autoComplete="tone"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        >
                            <option value="Professional">Professional</option>
                            <option value="Friendly">Friendly</option>
                            <option value="Excited">Excited</option>
                            <option value="Urgent">Urgent</option>
                            <option value="Humorous">Humorous</option>
                        </select>
                        <ChevronDown
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-8 px-5 grid grid-cols-1 gap-x-6 gap-y-8">
                <div className="">
                    <label htmlFor="cta" className="block text-sm/6 font-medium text-white">
                        Call To Action
                    </label>
                    <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                            <input
                                id="cta"
                                name="cta"
                                value={formValues.cta}
                                onChange={handleInputChange}
                                type="cta"
                                placeholder="Click the link to register now!"
                                className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 px-5 grid grid-cols-1 gap-x-6 gap-y-8">
                <div className="">
                    <label htmlFor="cta_link" className="block text-sm/6 font-medium text-white">
                        Call To Action Link (If Any)
                    </label>
                    <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                            <input
                                id="cta_link"
                                name="cta_link"
                                value={formValues.cta_link}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="example.com/register"
                                className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 px-5 grid grid-cols-1 gap-x-6 gap-y-8">
                <div className="">
                    <label htmlFor="extra_information" className="block text-sm/6 font-medium text-white">
                        Extra Information
                    </label>
                    <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                            <textarea
                            id="extra_information"
                            name="extra_information"
                            rows={3}
                            value={formValues.extra_information}
                            onChange={handleInputChange}
                            className="block w-full rounded-md bg-transparent px-1 py-1.5 text-base text-white outline-0 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-0 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            placeholder="Limited-time discounts on best-selling products. Offer valid for 24 hours only. No code required. Stocks are limited."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 px-5 grid grid-cols-1 gap-x-6 gap-y-8">
                <div className="">
                    {
                        type==="Whatsapp" ? <button className="inline-flex w-full justify-center gap-3 items-center rounded-md bg-green-400/10 px-4 py-3 text-xs font-medium text-green-400 inset-ring inset-ring-green-400/30"><WhatsappLogoIcon size={24}/> Generate Whatsapp Message</button> : <button className="inline-flex w-full justify-center gap-3 items-center rounded-md bg-white/75 px-4 py-3 text-xs font-medium text-black inset-ring inset-ring-white/30"><ChatIcon size={24}/> Generate SMS</button>
                    }
                </div>
            </div>
        </div>
    </>
}