import { NextRequest, NextResponse } from "next/server";

import config from "@/config";
import prisma from "@/lib/prisma";
import { signJwt } from "@/services/authService";
import getServerSession from "@/services/getServerSession";
import { talkSchema } from "@/schemas/talkSchema";

interface TalkParams {
  params: Promise<{
    name: string;
  }>;
}

export async function GET(req: NextRequest, props: TalkParams) {
  const params = await props.params;
  const session = await getServerSession();
  if (!session || !session.isAdmin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name } = params;

  // round timestamp to the nearest talkQrCodeRefreshRate seconds
  const timestamp =
    Math.round(Date.now() / config.constants.talkQrCodeRefreshRateMs) *
    config.constants.talkQrCodeRefreshRateMs;

  const talk = await prisma.talk.findUnique({
    where: { companyName: name },
  });

  const qrCode = signJwt({ name, timestamp }, { expiresIn: 10 * 60 }); //expires in 10 minutes

  return NextResponse.json({ talk, qrCode });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const requestBody = await req.json();
  const body = talkSchema.parse(requestBody);
}

export async function PATCH(req: NextRequest, props: TalkParams) {
  const params = await props.params;
  const session = await getServerSession();
  if (!session || !session.isAdmin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name } = params;

  const talk = await prisma.talk.findUnique({
    where: { companyName: name },
  });

  if (!talk)
    return NextResponse.json({ error: "Talk not found" }, { status: 404 });

  await prisma.talk.update({
    where: { companyName: name },
    data: { isLive: !talk.isLive },
  });
}
