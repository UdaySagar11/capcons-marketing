import { getStartedSchema } from "@/lib/schemas/get-started";
import { GetStartedFormValues } from "@/lib/schemas/get-started";

export async function submitGetStarted(data: GetStartedFormValues) {
  const validatedFields = getStartedSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      error: "Invalid form data",
      fields: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // TODO: Implement this
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message: "Successfully registered! We'll be in touch soon.",
    };
  } catch {
    return {
      error: "Something went wrong. Please try again.",
    };
  }
}
