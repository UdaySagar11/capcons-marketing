"use server";

import { isAxiosError } from "axios";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { allBlogs } from "@/config/mock/blogs";
import { Blog } from "@/@types";

export const getBlogsPublicList = async ({
  page = 1,
  length = 10,
  startDate,
  endDate,
  categories,
}: {
  page?: number;
  length?: number;
  startDate?: string;
  endDate?: string;
  categories?: string[];
}): Promise<{ data: Blog[] | null; message: string; status: number }> => {
  try {
    // Implement pagination
    const startIndex = (page - 1) * length;
    const endIndex = startIndex + length;
    const paginatedBlogs = allBlogs.slice(startIndex, endIndex);

    return {
      data: paginatedBlogs,
      message: "Blogs fetched successfully",
      status: 200,
    };

    // const queryParams = new URLSearchParams();
    // queryParams.append("page", page.toString());
    // queryParams.append("length", length.toString());
    // if (startDate) queryParams.append("startDate", startDate);
    // if (endDate) queryParams.append("endDate", endDate);
    // if (categories && categories.length > 0) {
    //     categories.forEach((cat) => queryParams.append("categories", cat));
    // }

    // const res = await apirequest.get<{ data: Blog[], message: string }>(
    //     `/blogs/circle/674e9cf6477a49f180248d72?${queryParams.toString()}`
    // );

    // return {
    //     data: res.data.data,
    //     message: "Blogs fetched successfully",
    //     status: 200,
    // };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    if (error && isAxiosError(error)) {
      return {
        data: null,
        status: error.response?.status ?? 500,
        message: error.response?.data?.message ?? "Something went wrong",
      };
    }
    return {
      data: null,
      status: 500,
      message: "An unknown error occurred",
    };
  }
};
