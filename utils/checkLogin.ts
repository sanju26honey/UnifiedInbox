import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { redirect } from "next/navigation";

export async function CheckLogin() {
    const session = await getServerSession(authOptions)
    if(!session) {
        redirect("/login")
    }
}