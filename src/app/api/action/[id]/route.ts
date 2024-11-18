import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import getServerSession from "@/services/getServerSession";

interface StudentParams {
  params: Promise<{
    id: string;
  }>;
}
export async function POST(req: NextRequest, props: StudentParams) {
  const session = await getServerSession();
  if (!session)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const { id } = await props.params;

  await prisma.student.update({
    where: {
      userId: session.id,
    },
    data: {
      actions: {
        connect: {
          id: parseInt(id),
        },
      },
    },
  });

  return NextResponse.json({ message: "Success" }, { status: 200 });
}
