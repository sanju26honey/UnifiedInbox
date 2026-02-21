import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/auth";

import { prisma } from '@/lib/prisma';


export async function GET(req: NextRequest) {
const { searchParams } = new URL(req.url);
  const platform = searchParams.get("platform");
    const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }


  const messages = await prisma.message.findMany({
    where: { userEmail: session.user.email, platform: platform || undefined },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(messages);

}