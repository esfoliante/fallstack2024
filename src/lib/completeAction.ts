import prisma from "./prisma";

export async function completeAction(studentCode: string, actionName: string) {
  const action = await prisma.action.findUnique({
    where: {
      name: actionName,
    },
  });

  if (!action) return null;

  const studentAction = await prisma.actionCompletion.create({
    data: {
      studentCode,
      actionId: action.id,
    },
  });

  return studentAction;
}
