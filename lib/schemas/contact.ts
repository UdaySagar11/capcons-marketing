import * as z from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Please enter a valid email address"),
  description: z.string().min(2, "Please describe your purpose"),
  notes: z.string().min(10, "Message must be at least 10 characters"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
