import * as z from "zod";

export const getStartedSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type GetStartedFormValues = z.infer<typeof getStartedSchema>;
