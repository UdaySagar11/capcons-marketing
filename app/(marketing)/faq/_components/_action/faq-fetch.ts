"use server";

import { apirequest } from "@/config/api";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { isAxiosError } from "axios";

// Types for FAQ responses
interface FAQResponse {
    details: {
        data: FAQItem[];
    };
    message: string;
}

interface FAQItem {
    id: string;
    category: string;
    question: string;
    answer: string;
    order: number;
    is_enabled: boolean;
}

export async function getFAQs() {
    try {
        const response = await apirequest.get<FAQResponse>("utils/faqs");

        const result = transformData(response.data.details.data) ?? [];
        return {
            message: response.data.message,
            status: 200,
            data: result,
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
            message: "An unknown error occurred while fetching FAQs",
        };
    }
}

const transformData = (data: unknown): Record<string, { question: string; answer: string }[]> => {
    if (!Array.isArray(data)) {
        return {};
    }

    return data.reduce((acc, item) => {
        if (
            typeof item !== "object" ||
            item === null ||
            !("category" in item) ||
            !("question" in item) ||
            !("answer" in item)
        ) {
            return acc;
        }

        const category = typeof item.category === "string" ? item.category.trim() : "uncategorized";
        const question = typeof item.question === "string" ? item.question.trim() : "Unknown Question";
        const answer = typeof item.answer === "string" ? item.answer.trim() : "No answer available";

        if (!acc[category]) {
            acc[category] = [];
        }

        acc[category].push({ question, answer });

        return acc;
    }, {} as Record<string, { question: string; answer: string }[]>);
};

