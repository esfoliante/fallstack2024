import { Action } from "@/types/Action";

import prisma from "./prisma";

export async function fetchActions(studentCode: string): Promise<Action[]> {
  const student = await prisma.student.findUnique({
    where: { code: studentCode },
    include: { actions: true },
  });

  if (!student) {
    return [];
  }

  const actions = await prisma.action.findMany();

  return actions.map((action) => {
    if (student.actions.some((a) => a.id === action.id)) {
      return { ...action, done: true };
    }

    return { ...action, done: false };
  });
}
