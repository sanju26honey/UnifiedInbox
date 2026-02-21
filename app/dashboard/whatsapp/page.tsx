"use client"

import { ChevronDown } from "@deemlol/next-icons";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

import { campaignTemplates } from "@/utils/templates";
import { CampaignTemplate } from "@/types/templates";
import TemplateSelector from "@/components/TemplateSelector";
import TemplateForm from "@/components/TemplateForm";

export default function() {
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

    return <>
        <div className="grid min-h-screen gap-5 grid-cols-4">
            <div className="border-r-2">
                <TemplateForm type="Whatsapp" formValues={formValues} handleInputChange={handleInputChange}/>
            </div>
            <div className="col-span-3 flex justify-center items-center text-center">
                <div id="quick-start text-center">
                    <h1 className="text-4xl">Jump In</h1><br />
                    <p>Select a template below, use the sidebar, or type your own prompt to start generating.</p><br />
                    <TemplateSelector campaignTemplates={campaignTemplates} onSelect={applyTemplate}/>
                </div>
            </div>
        </div>
    </>
}