"use server";
import { exploreSubscriptionSchema } from "@/lib/schemas/explore";
import { ExploreSubscriptionFormValues } from "@/lib/schemas/explore";

export async function subscribeToExplore(data: ExploreSubscriptionFormValues) {
  const validatedFields = exploreSubscriptionSchema.safeParse(data);

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
      message: "Successfully subscribed! You'll receive our latest blogs.",
    };
  } catch {
    return {
      error: "Something went wrong. Please try again.",
    };
  }
}
