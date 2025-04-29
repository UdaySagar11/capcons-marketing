"use server";

import { blogSubscriptionSchema } from "@/lib/schemas/blog";
import { BlogSubscriptionFormValues } from "@/lib/schemas/blog";
import { allBlogs } from "@/config/mock/blogs";

export async function subscribeToBlog(data: BlogSubscriptionFormValues) {
  const validatedFields = blogSubscriptionSchema.safeParse(data);

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
      message: "Successfully subscribed to blog updates!",
    };
  } catch {
    return {
      error: "Something went wrong. Please try again.",
    };
  }
}

export async function getBlogs() {
  return allBlogs;
}

export async function getBlogBySlug(slug: string) {
  const blog = allBlogs.find((blog) => blog.slug === slug);
  if (!blog) {
    return allBlogs[0];
  }
  return blog;
}
