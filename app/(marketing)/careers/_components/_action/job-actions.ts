"use server";

import { apirequest } from "@/config/api";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { isAxiosError } from "axios";

// Types based on the API spec
type JobTimings = {
    start?: string;
    end?: string;
    timezone?: string;
};

type JobStatus = "Open" | "Closed" | "Draft";
type JobType = "Full-time" | "Part-time" | "Internship";
type WorkMode = "WFH" | "Hybrid" | "In-Office";

export type JobCreateType = {
    title: string;
    location: string;
    jobType: JobType;
    workMode: WorkMode;
    jobTimings?: JobTimings;
    description: string;
    category: string;
    status: JobStatus;
};

export type JobResponseType = JobCreateType & {
    id: string;
    postedAt: string;
    status: Array<{
        status: JobStatus;
        updatedAt: string;
    }>;
};

export type ApplicationCreateType = {
    jobId: string;
    firstName: string;
    lastName: string;
    phone: string;
    emailId: string;
    resumeLink: string;
    coverLetterLink: string;
    linkedinURL?: string;
    whyJoin: string;
    candidateLocation: string;
    visaRequirement?: boolean;
};

export type ApplicationResponseType = ApplicationCreateType & {
    id: string;
    appliedAt: string;
    status: Array<{
        status: string;
        updatedAt: string;
    }>;
};

// 1. Create Job Server Action
export async function createJob(values: JobCreateType) {
    try {
        const response = await apirequest.post<{ message: string }>(
            "utils/job",
            JSON.stringify(values)
        );

        return {
            message: response.data.message,
            status: 201,
        };
    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }
        if (error && isAxiosError(error)) {
            return {
                status: error.response?.status,
                message: error.response?.data.message,
            };
        }
        return {
            status: 500,
            message: "An unknown error occurred while creating the job",
        };
    }
}

// 2. Get All Jobs Server Action
export async function getAllJobs(category?: string) {
    try {
        const endpoint = category
            ? `utils/jobs?category=${encodeURIComponent(category)}`
            : "utils/jobs";

        const response = await apirequest.get<{
            message: string;
            data: JobResponseType[];
        }>(endpoint);

        return {
            message: response.data.message,
            status: 200,
            data: response.data.data
        };
    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }
        if (error && isAxiosError(error)) {
            return {
                status: error.response?.status,
                message: error.response?.data.message,
            };
        }
        return {
            status: 500,
            message: "An unknown error occurred while fetching jobs",
        };
    }
}

// 3. Get Job by ID Server Action
export async function getJobById(id: string) {
    try {
        if (!id) {
            return {
                status: 400,
                message: "id is required",
            };
        }

        const response = await apirequest.get<{
            message: string;
            data: JobResponseType;
        }>(`utils/job?id=${encodeURIComponent(id)}`);

        return {
            message: response.data.message,
            status: 200,
            data: response.data.data
        };
    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }
        if (error && isAxiosError(error)) {
            return {
                status: error.response?.status,
                message: error.response?.data.message,
            };
        }
        return {
            status: 500,
            message: "An unknown error occurred while fetching the job",
        };
    }
}

// 4. Create Application Server Action
export async function createApplication(values: ApplicationCreateType) {
    try {
        const response = await apirequest.post<{
            message: string;
            data: ApplicationResponseType;
        }>("utils/application", JSON.stringify(values));

        return {
            message: response.data.message,
            status: 201,
            data: response.data.data
        };
    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }
        if (error && isAxiosError(error)) {
            return {
                status: error.response?.status,
                message: error.response?.data.message,
            };
        }
        return {
            status: 500,
            message: "An unknown error occurred while creating the application",
        };
    }
}

// 5. Get Application by ID Server Action
export async function getApplicationById(id: string) {
    try {
        if (!id) {
            return {
                status: 400,
                message: "id is required",
            };
        }

        const response = await apirequest.get<{
            message: string;
            data: ApplicationResponseType;
        }>(`utils/application?id=${encodeURIComponent(id)}`);

        return {
            message: response.data.message,
            status: 200,
            data: response.data.data
        };
    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }
        if (error && isAxiosError(error)) {
            return {
                status: error.response?.status,
                message: error.response?.data.message,
            };
        }
        return {
            status: 500,
            message: "An unknown error occurred while fetching the application",
        };
    }
}

// 6. Get Applications by Job ID Server Action
export async function getApplicationsByJobId(jobId: string) {
    try {
        if (!jobId) {
            return {
                status: 400,
                message: "jobId is required",
            };
        }

        const response = await apirequest.get<{
            message: string;
            data: ApplicationResponseType[];
        }>(`utils/applications?jobId=${encodeURIComponent(jobId)}`);

        return {
            message: response.data.message,
            status: 200,
            data: response.data.data
        };
    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }
        if (error && isAxiosError(error)) {
            return {
                status: error.response?.status,
                message: error.response?.data.message,
            };
        }
        return {
            status: 500,
            message: "An unknown error occurred while fetching applications",
        };
    }
}