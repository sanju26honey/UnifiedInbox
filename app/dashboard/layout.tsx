import Footer from "@/components/Footer";
import { CheckLogin } from "@/utils/checkLogin";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {

    await CheckLogin();

    return <>
    <div className="min-h-screen w-full overflow-auto no-scrollbar relative bg-linear-to-tl from-green-500/30 to-blue-500/30">
    {/* Arctic Lights Background with Top Glow */}
        <div
        className="fixed overflow-auto no-scrollbar  inset-0 z-0"
        style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0, 0, 0, 0.5), transparent 70%), transparent",
        }}
        >
            <div className="fixed overflow-auto no-scrollbar  inset-0 z-0"
            style={{
                backgroundColor: "transparent",
                backgroundImage: "radial-gradient(at 4% 69%, #070f2b 0%, transparent 60%), radial-gradient(at 17% 10%, #1b1a55 0%, transparent 50%), radial-gradient(at 74% 76%, rgba(5, 223, 114, 0.1) 0%, transparent 40%), radial-gradient(at 71% 94%, rgba(5, 223, 114, 0.2) 0%, transparent 30%)"
            }}>
                {children}
                <Footer/>
            </div>
        </div>
    </div>
    </>
}