"use server";

import { apirequest } from "@/config/api";
import { Career } from "@/@types";
import {
  jobApplicationSchema,
  JobApplicationFormData,
} from "@/lib/schemas/careers";

export async function getCareers(category?: string) {
  try {
    const response = await apirequest.get("utils/jobs", {
      params: category ? { category } : undefined,
    });

    if (response.status === 200 && response.data?.details?.data) {
      return response.data.details.data as Career[];
    }

    return [];
  } catch (error) {
    return [];
  }
}

export async function getCareerById(id: string) {
  try {
    const response = await apirequest.get("utils/job", {
      params: { id },
    });

    if (response.status === 200 && response.data?.details?.data) {
      return response.data.details.data as Career;
    }


    return null;
  } catch (error) {

    return null;
  }
}

export async function submitJobApplication(
  data: JobApplicationFormData,
  jobId: string
) {
  const validatedFields = jobApplicationSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Invalid form data",
      fields: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const response = await apirequest.post("/application", {
      jobId,
      ...validatedFields.data,
    });

    if (response.status === 201 && response.data?.details?.data) {
      return {
        success: true,
        data: response.data.details.data,
        message: response.data.message,
      };
    }

    if (response.status === 400) {
      return {
        success: false,
        error: response.data?.message || "Invalid request",
      };
    }

    return {
      success: false,
      error: response.data?.message || "Error creating application",
    };
  } catch (error) {

    return {
      success: false,
      error: "Error creating application",
    };
  }
}
