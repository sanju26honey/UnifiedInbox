import { CheckLogin } from "@/utils/checkLogin";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {

    await CheckLogin();

    return <>{children}</>
}