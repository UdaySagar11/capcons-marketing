import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlogChip } from "./blog-chip";
import { Blog } from "@/@types";
import { formatDistanceToNow } from "date-fns";
import { SectionHeader } from "./section-header";

interface LatestArticlesProps {
  blogs: Blog[];
  title?: string;
}

export const LatestArticles = ({ blogs, title = "Latest Articles" }: LatestArticlesProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="mx-auto w-full flex flex-col px-2 sm:px-0">
      <SectionHeader title={title} />
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {blogs.slice(0, 4).map((blog, index) => (
          <motion.a
            key={index}
            href={`/blogs/${blog.slug}`}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 cursor-pointer"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1 * (index % 3) }}
            whileHover={{ y: -5 }}
          >
            <div className="rounded-2xl overflow-hidden relative aspect-[16/9] sm:aspect-[384/180] min-h-[160px] sm:min-h-0">
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={blog.banner_image || "/placeholder-image.jpg"}
                  alt={blog.title || `Blog post ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority={index === 0}
                />
              </motion.div>
            </div>
            <div className="flex flex-col gap-2">
              <BlogChip label={(blog.categories_data && blog.categories_data[0]?.name) || "Uncategorized"} />
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-base sm:text-lg text-[#2E134D] line-clamp-2">
                  {blog.title || "Untitled post"}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 line-clamp-3 md:text-base">
                  {blog.summary || "No description available"}
                </p>
              </div>
              <span className="text-xs text-neutral-400 md:text-sm font-medium">
                {blog.publication_date
                  ? formatDistanceToNow(new Date(blog.publication_date), { addSuffix: true })
                  : "Recently"}
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};