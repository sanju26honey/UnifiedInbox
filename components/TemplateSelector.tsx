"use client"

import { useState } from "react";
import { CampaignTemplate } from "@/types/templates";
import { ArrowLeft, ArrowRight } from "@deemlol/next-icons";

interface TemplateSelectorProps {
    color:string;
    campaignTemplates: CampaignTemplate[];
    onSelect: (template: CampaignTemplate) => void;
}

export default function TemplateSelector({
    color,
    campaignTemplates,
    onSelect
}:TemplateSelectorProps) {

    const [showAll, setShowAll] = useState(false);
    const visibleTemplates = showAll
    ? campaignTemplates
    : campaignTemplates.slice(0, 5);

    return <>
    
        <div className="flex-wrap max-w-full gap-3 grid-cols-5 flex justify-center">
            {visibleTemplates.map((template) => (
            <button
                key={template.id}
                onClick={() => onSelect(template)}
                className={`inline-flex cursor-pointer justify-center items-center rounded-md bg-blue-400/10 bg-${color}-400/10 md:px-4 md:py-3 px-2 py-1.5 text-xs font-medium text-blue-400 text-${color}-400 inset-ring inset-ring-blue-400/30 inset-ring-${color}-400/30`}
            >
                {template.name}
            </button>
            ))}
            {campaignTemplates.length > 5 && (
            <button
                onClick={() => setShowAll(!showAll)}
                className={`cursor-pointer inline-flex gap-2 justify-center items-center rounded-md bg-blue-400 bg-${color}-400 md:px-4 md:py-3 px-2 py-1.5 text-xs font-medium text-black inset-ring inset-ring-blue-400/30 inset-ring-${color}-400/30`}
            >
                {showAll ? <><ArrowLeft size={12} /> Show Less</> : <><ArrowRight size={12} /> Show More</>}
                
            </button>
            )}
        </div> 
    </>
}