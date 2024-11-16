import { NextRequest, NextResponse } from "next/server";

import getServerSession from "@/services/getServerSession";

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
}
