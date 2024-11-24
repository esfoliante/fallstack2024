import { NextRequest, NextResponse } from "next/server";

import config from "@/config";
import prisma from "@/lib/prisma";
import { signJwt, verifyJwt } from "@/services/authService";
import getServerSession from "@/services/getServerSession";

interface TalkParams {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(req: NextRequest, props: TalkParams) {
  const { id } = await props.params;

  // round timestamp to the nearest talkQrCodeRefreshRate seconds
  const timestamp =
    Math.round(Date.now() / config.constants.talkQrCodeRefreshRateMs) *
    config.constants.talkQrCodeRefreshRateMs;

  const talk = await prisma.action.findUnique({
    where: { id },
  });

  const qrCode = "talk-" + signJwt({ name, timestamp }, { expiresIn: 10 * 60 }); //expires in 10 minutes
  console.log({ qrCode });

  return NextResponse.json({ talk, qrCode });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  if (!session)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  if (!session.student)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const { data } = await req.json();
  const { id, timestamp } = verifyJwt(data) as {
    id: string;
    timestamp: number;
  };

  const action = await prisma.action.findUnique({
    where: { id },
  });

  if (!action)
    return NextResponse.json({ error: "Action not found" }, { status: 404 });

  if (!action.isLive)
    return NextResponse.json({ error: "Talk not live" }, { status: 400 });

  // check if timestamp is valid
  const now = Date.now();
  if (now - timestamp > config.constants.talkQrCodeRefreshRateMs)
    return NextResponse.json({ error: "Invalid timestamp" }, { status: 400 });

  const student = await prisma.student.findUnique({
    where: { id: session.student?.id },
  });

  if (!student)
    return NextResponse.json({ error: "Student not found" }, { status: 404 });

  await prisma.actionCompletion.create({
    data: {
      studentCode: session.student?.code,
      actionId: id,
    },
  });
}
