import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl">Unified Inbox</h1><br /><br />
        <Link href="/dashboard" className="p-3 px-8 bg-red-500 rounded-xl">Get Started</Link>
      </div>
    </div>
  );
}
