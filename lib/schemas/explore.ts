import * as z from "zod";

export const exploreSubscriptionSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type ExploreSubscriptionFormValues = z.infer<
  typeof exploreSubscriptionSchema
>;
