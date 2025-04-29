"use client";
import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBlogsPublicList } from "../_components/service/blog-service";
import { BlogList } from "./_components/blog-list";
import { GetStarted } from "../_components/get-started";
import { LatestSectionBlogs } from "./_components/latest-section-blog";
import { LatestSectionSkeleton } from "./_components/skeletons/latest-section-skeleton";
import { BlogHighlight } from "./_components/blog-highlight";
import { BlogHighlightSkeleton } from "./_components/skeletons/blog-highlight-skeleton";
import { LatestArticles } from "./_components/latest-articles";
import { BlogFilters } from "./_components/blog-filters";
import { parseAsString, useQueryState } from "nuqs";

export default function BlogsListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useQueryState("category", parseAsString.withDefault(""));

  const { data: blogsData, isPending: isBlogsPending } = useQuery({
    queryKey: ["blogs-list"],
    queryFn: () => getBlogsPublicList({ page: 1, length: 20 }),
  });

  const { data: latestBlogsData, isPending: isLatestPending } = useQuery({
    queryKey: ["latest-blogs"],
    queryFn: () => getBlogsPublicList({ page: 1, length: 4 }),
  });

  const allCategories = useMemo(() => {
    if (!blogsData?.data) return [];
    const cats = blogsData.data.flatMap(blog => blog.categories_data?.map(c => c.name) || []);
    return Array.from(new Set(cats));
  }, [blogsData]);

  const filteredBlogs = useMemo(() => {
    if (!blogsData?.data) return [];
    const term = searchTerm.toLowerCase();
    return blogsData.data.filter(
      (blog) =>
        (!category || blog.categories_data?.some(c => c.name === category)) &&
        (blog.title?.toLowerCase().includes(term) ||
          blog.author_name?.toLowerCase().includes(term))
    );
  }, [blogsData, searchTerm, category]);

  return (
    <div className="bg-[#39089D] ">
      <div className="bg-white py-4 md:py-8 lg:py-16 rounded-b-[30px] md:rounded-b-[50px]">
        <div className="container mx-auto space-y-8 md:space-y-20 px-2 sm:px-4 md:px-8 lg:px-0">
          {isLatestPending ? (
            <BlogHighlightSkeleton />
          ) : (
            <BlogHighlight blogs={latestBlogsData?.data || []} />
          )}
          <div className="my-4 sm:my-8">
            <BlogFilters
              categories={allCategories}
              value={category}
              onCategoryChange={setCategory}
              search={searchTerm}
              onSearchChange={setSearchTerm}
            />
          </div>
          {isLatestPending ? (
            <div className="bg-white px-4 md:px-8 py-8">
              <LatestSectionSkeleton />
            </div>
          ) : (
            <LatestSectionBlogs
              title="Latest Blogs"
              blogs={latestBlogsData?.data || []}
            />
          )}

          <LatestArticles blogs={latestBlogsData?.data?.slice(0, 3) || []} />

          <BlogList
            isPending={isBlogsPending}
            filteredBlogs={filteredBlogs}
          />
          <GetStarted />
        </div>
      </div>
    </div>
  );
}
