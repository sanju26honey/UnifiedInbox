"use client"

import Footer from "@/components/Footer";
import { ChatIcon, HeadCircuitIcon, HouseIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import { ClockCounterClockwiseIcon, CodesandboxLogoIcon, HouseLineIcon, LayoutIcon, TextboxIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-auto no-scrollbar relative bg-linear-to-tl from-green-500/30 to-blue-500/30">
    <div
      className="fixed overflow-auto no-scrollbar  inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 0, 0, 0.5), transparent 70%), #000",
      }}
    >
      <div className="fixed overflow-auto no-scrollbar  inset-0 z-0"
      style={{
        backgroundColor: "transparent",
        backgroundImage: "radial-gradient(at 4% 69%, #070f2b 0%, transparent 60%), radial-gradient(at 17% 10%, #1b1a55 0%, transparent 50%), radial-gradient(at 74% 76%, rgba(5, 223, 114, 0.1) 0%, transparent 40%), radial-gradient(at 71% 94%, rgba(5, 223, 114, 0.2) 0%, transparent 30%)"
      }}>
          <div className="fixed z-100 top-0 p-5 text-left w-full">
            <h1 className="text-2xl text-white">UniBox</h1>
          </div>
          <div className="fixed md:top-0 z-100 w-full p-3 p-md-5 flex justify-end md:justify-center items-center">
            <div className="p-3 divide-x divide-white/30 shadow-sm shadow-white/30 inset-shadow-sm inset-shadow-white/30 gap-5 px-5 justify-evenly md:bg-white/10 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 rounded-4xl">
              <Link href={"/login"} className="text-white/75 px-4">Sign In</Link>
              <Link href={"/dashboard"} className="text-white/75 px-4">Dashboard</Link>
            </div>
          </div>
        <div className="min-h-screen max-h-screen overflow-auto flex justify-center items-center" id="about">
          <div className="md:text-center w-[75%]">
            <h1 className="md:text-5xl text-4xl text-white/80">One Dashboard. <br className="md:hidden" /> Zero Friction</h1><br />
            <span className="md:text-lg text-md text-white/50">Compose and track smart messaging campaigns from a single dashboard. Reach your customers where they are.</span><br /><br /><br />
            <Link href="/dashboard" className="py-4 px-9 max-w-max md:mx-auto bg-linear-to-l flex from-blue-500/30 to-green-500/30 text-white/60 rounded-3xl gap-5">Get Started </Link>
          </div>
        </div>
        <div className="min-h-screen max-h-screen overflow-auto flex flex-col md:flex-row items-center" id="description">
          <div className="w-full text-left grow md:w-[50%] p-5 px-10 md:order-1 order-2">
            <h1 className="md:text-3xl text-2xl text-white/80">Messaging, Reimagined with AI</h1><br />
            <span className="md:text-md text-sm text-white/50">
              Traditional outreach is slow and fragmented. UniBox eliminates the friction of multi-channel communication. By combining a powerful AI-driven editor with direct API integrations, we allow you to focus on the message, while we handle the delivery. Whether it's a 24-hour flash sale or a simple welcome drip, your workflow stays in one place.
            </span>
          </div>
          <div className="p-5 px-10 w-full md:w-[50%] md:order-2 order-1">
            <div className="group perspective-1000">
              <div className="relative transition-all duration-500 ease-out transform 
                          preserve-3d group-hover:rotate-x-4 group-hover:rotate-y-4 
                          group-hover:scale-105 group-hover:-translate-y-2">
                
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/30 to-green-500/30 blur-3xl rounded-xl opacity-0 
                            group-hover:opacity-100 transition-opacity duration-500"></div>

                <img
                  src="/dashboard2.png" 
                  alt="Dashboard Preview" 
                  className="relative rounded-xl border border-zinc-800 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-screen md:max-h-screen md:overflow-hidden grid grid-cols-4 items-center" id="features">
          <div className="p-5 px-10 col-span-4 md:col-span-1 overflow-auto">
            <h1 className="text-3xl text-white/80">Outreach, Optimized</h1><br/>
            <span className="text-md text-white/50">
              Gemini-powered messaging and premium channel tools, ready right out of the box.
            </span>
          </div>
          <div className="p-5 px-10 md:col-span-3 col-span-4 flex justify-center items-center">
            <div className="grid gap-5 grid-cols-5 grid-rows-3">
              <div className="col-span-3 row-span-1 md:col-span-2 hover:shadow-xl shadow-blue-400/10 md:row-span-2 flex items-center justify-center text-center p-5 px-7 bg-gray-500/10 hover:bg-gray-500/20  rounded-xl bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100">
                <div>
                  <HeadCircuitIcon className="mx-auto text-white/70 text-5xl"/><br />
                  <span className="text-xl text-white/70">Smart Generation</span>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 hover:shadow-xl shadow-emerald-400/10 md:row-span-1 flex items-center justify-center text-center p-5 px-7 bg-gray-500/10 hover:bg-gray-500/20  rounded-xl bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100">
                <div>
                  <WhatsappLogoIcon className="mx-auto text-white/70 text-5xl"/><br />
                  <span className="text-xl text-white/70">Whatsapp Integration</span>
                </div>
              </div>
              <div className="md:col-span-1 col-span-2 hover:shadow-xl shadow-blue-400/10 row-span-1 flex items-center justify-center text-center p-5 px-7 bg-gray-500/10 hover:bg-gray-500/20 rounded-xl bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100">
                <div>
                  <ChatIcon className="mx-auto text-white/70 text-5xl"/><br />
                  <span className="text-xl text-white/70">SMS Integration</span>
                </div>
              </div>
              <div className="col-span-3 md:col-span-1 hover:shadow-xl shadow-emerald-400/10 row-span-2 flex items-center justify-center text-center p-5 px-7 bg-gray-500/10 hover:bg-gray-500/20  rounded-xl bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100">
                <div>
                  <TextboxIcon className="mx-auto text-white/70 text-5xl"/><br />
                  <span className="text-xl text-white/70">Prompt Inputs</span>
                </div>
              </div>
              <div className="md:hidden col-span-2 hover:shadow-xl shadow-emerald-400/10 row-span-1 flex items-center justify-center text-center p-5 px-7  bg-gray-500/10 hover:bg-gray-500/20  rounded-xl bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100">
                <div>
                  <CodesandboxLogoIcon className="mx-auto text-white/70 text-5xl"/><br />
                  <span className="text-xl text-white/70">Pre Made Templates</span>
                </div>
              </div>
              <div className="col-span-3 md:col-span-2 hover:shadow-xl shadow-blue-400/10 row-span-2 flex items-center justify-center text-center p-5 px-7  bg-gray-500/10 hover:bg-gray-500/20  rounded-xl bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100">
                <div>
                  <HouseLineIcon className="mx-auto text-white/70 text-5xl"/><br />
                  <span className="text-xl text-white/70">Unified Dashboard</span>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 hover:shadow-xl shadow-emerald-400/10 row-span-1 flex items-center justify-center text-center p-5 px-7 bg-gray-500/10 hover:bg-gray-500/20  rounded-xl bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100">
                <div>
                  <ClockCounterClockwiseIcon className="mx-auto text-white/70 text-5xl"/><br />
                  <span className="text-xl text-white/70">Recent Chats</span>
                </div>
              </div>
              <div className="md:col-span-1 col-span-2 hover:shadow-xl shadow-emerald-400/10 row-span-1 flex items-center justify-center text-center p-5 px-7 bg-gray-500/10 hover:bg-gray-500/20  rounded-xl bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100">
                <div>
                  <LayoutIcon className="mx-auto text-white/70 text-5xl"/><br />
                  <span className="text-xl text-white/70">Simple UI</span>
                </div>
              </div>
              <div className="hidden md:col-span-1 col-span-2 hover:shadow-xl shadow-emerald-400/10 row-span-1 md:flex items-center justify-center text-center p-5 px-7  bg-gray-500/10 hover:bg-gray-500/20  rounded-xl bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100">
                <div>
                  <CodesandboxLogoIcon className="mx-auto text-white/70 text-5xl"/><br />
                  <span className="text-xl text-white/70">Pre Made Templates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-screen max-h-screen overflow-auto flex items-center" id="cta">
          <div className="md:w-[50%] p-5 px-10">
            <h1 className="text-3xl text-white/80">What will you send today?</h1><br />
            <span className="text-md text-white/50">
              Join hundreds of brands scaling their communication with AI.
            </span>
            <br />
            <br />
            <input type="text" placeholder="Start Prompting Now..." className="block min-w-0 grow bg-transparent  py-3 pl-0 border-b-2 w-full md:w-[50%] border-white/10 px-3 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
            <br /><br />
            <Link href="/dashboard" className="py-4 px-9 bg-linear-to-l from-blue-500/30 to-green-500/30 md:w-[50%] w-full flex justify-center text-white/60 rounded-md gap-5">Create your first message</Link>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  </div>
  );
}
