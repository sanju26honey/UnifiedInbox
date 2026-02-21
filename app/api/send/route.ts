import { NextResponse } from "next/server";
import twilio from "twilio";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/auth";

import { prisma } from '@/lib/prisma';

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const whatsappFrom = process.env.TWILIO_WHATSAPP!;
const phoneFrom = process.env.TWILIO_PHONE!;

export async function POST(req: Request) {

    const session = await getServerSession(authOptions);
  
    if (!session?.user?.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
        const { platform, to, message } = await req.json();
        const client = twilio(
            accountSid,
            authToken
        );
        let from_ph, to_ph, body;
        if(platform==="Whatsapp") {
            from_ph=whatsappFrom
            to_ph=`whatsapp:${to.replace(/\s/g, '')}`
            body=message.slice(0, 1600)
        } else {
            from_ph=phoneFrom
            to_ph=to.replace(/\s/g, '')
            body=message.slice(0, 160)
        }
        try {
            const response = await client.messages.create({
                from: from_ph,
                to: to_ph,
                body
            });
            const savedMsg = await prisma.message.create({
                data: {
                    to,
                    body: body,
                    platform,
                    status: 'SENT',
                    userEmail: session.user.email
                },
            });

            return NextResponse.json({ success: true, response: savedMsg});
        } catch (error: any) {
            return NextResponse.json({ success: false, error: error.message }, { status: 500 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 }
        );
    }
}