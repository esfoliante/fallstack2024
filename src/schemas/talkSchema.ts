import { object, string } from "zod";

export const talkSchema = object({
  timestamp: string().optional(),
});
