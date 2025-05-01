import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SubscriptionForm } from "./subscription-form";
import { exploreData } from "@/config/mock/explore";
import { BlogChip } from "./blog-chip";
import { Blog } from "@/@types";
import { formatDistanceToNow } from "date-fns";
import { SectionHeader } from "./section-header";

interface LatestSectionBlogsProps {
    title: string;
    blogs: Blog[];
}

const LatestBlogCard: React.FC<{ blog: Blog; index: number }> = ({
    blog,
    index
}) => {
    return (
        <motion.a
            href={`/blogs/${blog.slug}`}
            className="flex flex-col gap-4 cursor-pointer"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1 * (index % 3) }}
            whileHover={{ y: -5 }}
        >
            <div className="rounded-2xl overflow-hidden relative aspect-[384/180]">
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
                    />
                    <div className="absolute top-4 left-4">
                        <BlogChip label={(blog.categories_data && blog.categories_data[0]?.name) || "Uncategorized"} />
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-lg text-[#2E134D] line-clamp-2">
                        {blog.title || "Untitled post"}
                    </h3>
                    <p className="text-sm text-neutral-500 line-clamp-3 md:text-base">
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
    );
};

export const LatestSectionBlogs: React.FC<LatestSectionBlogsProps> = ({
    title,
    blogs
}) => {
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
        <div>
            <div className="max-w-screen-2xl mx-auto w-full flex flex-col">
                <SectionHeader title={title} />
                <div className="flex flex-col md:flex-row gap-8">
                    <motion.div
                        className="grid grid-cols-1 w-full lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {blogs.slice(0, 5).map((blog, index) => (
                            <LatestBlogCard key={index} blog={blog} index={index} />
                        ))}
                        <div className="lg:col-span-1">
                            <SubscriptionForm
                                title={exploreData.subscription.title}
                                socialLinks={exploreData.subscription.socialLinks}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

