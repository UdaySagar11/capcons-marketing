import * as z from "zod";

export const jobApplicationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  emailId: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^\+?[\d\s-]{10,}$/, "Please enter a valid phone number"),
  resumeLink: z.string().min(1, "Resume is required"),
  coverLetterLink: z.string().optional(),
  linkedinURL: z
    .string()
    .regex(
      /^https:\/\/www\.linkedin\.com\/in\/[\w\-]+\/?$/,
      "Please enter a valid LinkedIn profile URL"
    ),
  whyJoin: z.string().min(1, "Please explain why you want to join CapCons"),
  candidateLocation: z.string().min(1, "Location is required"),
  visaRequirement: z.boolean().optional(),
});

export type JobApplicationFormData = z.infer<typeof jobApplicationSchema>;
