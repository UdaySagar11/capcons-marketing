"use server";

import { contactFormSchema } from "@/lib/schemas/contact";
import { ContactFormValues } from "@/lib/schemas/contact";
import { apirequest } from "@/config/api";

export async function submitContactForm(data: ContactFormValues) {
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      error: "Invalid form data",
      fields: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const { firstName, lastName, email, phone, description, notes } = data;

    const response = await apirequest.get("/create-leads", {
      params: {
        email,
        firstName,
        lastName,
        phone,
        description,
        notes,
      },
    });

    if (response.status === 200) {
      return {
        success: true,
        message: "Message sent successfully! We'll get back to you soon.",
      };
    }
  } catch {
    return {
      error: "Something went wrong. Please try again.",
    };
  }
}
