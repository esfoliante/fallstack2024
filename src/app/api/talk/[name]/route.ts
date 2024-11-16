import { NextRequest, NextResponse } from "next/server";

import config from "@/config";
import { signJwt } from "@/services/authService";
import getServerSession from "@/services/getServerSession";
import { talkSchema } from "@/schemas/talkSchema";

interface TalkParams {
  params: {
    name: string;
  };
}

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const requestBody = await req.json();
  const body = talkSchema.parse(requestBody);
}

export async function GET(req: NextRequest, { params }: TalkParams) {
  const session = await getServerSession();
  if (!session || !session.isAdmin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name } = params;

  // round timestamp to the nearest talkQrCodeRefreshRate seconds
  const timestamp =
    Math.round(Date.now() / config.constants.talkQrCodeRefreshRateMs) *
    config.constants.talkQrCodeRefreshRateMs;

  const data = signJwt({ name, timestamp }, { expiresIn: 10 * 60 }); //expires in 10 minutes

  return NextResponse.json({ data });
}
