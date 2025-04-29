import * as z from "zod";

export const blogSubscriptionSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

export type BlogSubscriptionFormValues = z.infer<typeof blogSubscriptionSchema>;
