import TemplateSelector from "@/components/TemplateSelector";
import { campaignTemplates } from "@/utils/templates";
import { ArrowRight } from "@deemlol/next-icons";

interface Props {
    type: "Whatsapp" | "SMS",
    // apiEndpoint: string;
    prompt: string;
    setPrompt: React.Dispatch<React.SetStateAction<any>>;
    applyTemplate: React.Dispatch<React.SetStateAction<any>>;
    setMessageStatus: React.Dispatch<React.SetStateAction<any>>;
    onResult: (message: string) => void;
}

export default function QuickStart({
    type,
    //   apiEndpoint,
    prompt,
    setPrompt,
    onResult,
    setMessageStatus,
    applyTemplate
}: Props) {

    const color = (type==="Whatsapp") ? "green" : "blue";
    
    const submitPrompt = async() => {
        setMessageStatus(1)
        const res = await fetch("/api/gemini/prompt", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ platform: type, prompt }),
        });
        if(!res.ok) {
            setMessageStatus(3)
        } else {
            const data = await res.json();
            onResult(data.text)
        }
    }

    return <div>
        <h1 className="md:text-4xl text-3xl mt-10">Jump In </h1><br />
        <p className="md:text-md text-sm">Select a template below, use the sidebar, or type your own prompt to start generating.</p><br />
        <TemplateSelector color={color} campaignTemplates={campaignTemplates} onSelect={applyTemplate}/>
        <br />
        <div className="mt-2">
            <div className="flex items-center overflow-clip rounded-full text-center p-0 bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                <input
                id="prompt"
                name="prompt"
                value={prompt}
                onChange={(e)=>setPrompt(e.target.value)}
                className="block w-full no-scrollbar rounded-md bg-transparent md:px-5 md:py-5 p-2.5 text-base text-white outline-0 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-0 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                placeholder="Enter a prompt to get started. Include brand name and other relevant information."
                />
                <button onClick={submitPrompt} className={`h-full cursor-pointer md:p-5 p-2.5 m-0 bg-${color}-400 text-black`}>
                    <ArrowRight size={24}/>
                </button>
            </div>
        </div>
    </div>
}
