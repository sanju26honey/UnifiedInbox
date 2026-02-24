import Link from "next/link";

export default function Footer() {
    return <>
        <div className="flex items-center flex-col md:flex-row">
          <div className="w-full p-5 px-10">
            <h1 className="text-3xl text-white/80">UniBox</h1><br />
            <span className="text-md text-white/50">
              Marketing, Reimagined.
            </span>
            <br /><br />

            <span className="text-sm text-white/30">&copy; 2026 UniBox. All Rights Reserved.</span>
          </div>
          <div className=" pt-5 px-10 w-full">
            <span className="text-md text-white">Links</span><br />
            <Link href={"/login"} className="text-white/60">Login</Link><br />
            <Link href={"/dashboard"} className="text-white/60">Dashboard</Link><br /><br />
          </div>
          <div className="pb-5 px-10 w-full">
            <span className="text-md text-white">Navigation</span><br />
            <a href={"/#about"} className="text-white/60">About</a><br />
            <a href={"/#description"} className="text-white/60">Product Description</a><br />
            <a href={"/#features"} className="text-white/60">Features</a><br />
            <a href={"/#cta"} className="text-white/60">Get Started</a><br />
          </div>
        </div>
    </>
}