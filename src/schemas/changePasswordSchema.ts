import { z } from "zod";

export const changePasswordSchema = z.object({
  email: z.string().min(6),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});
