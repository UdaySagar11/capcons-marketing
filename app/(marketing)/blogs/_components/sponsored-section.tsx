import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getBlogsPublicList } from "../../_components/service/blog-service";
import { formatDistanceToNow } from "date-fns";

interface BlogImageProps {
    src: string;
    alt: string;
}

interface SponsoredBlogCardProps {
    image: BlogImageProps;
    title: string;
    description: string;
    timeAgo: string;
    index?: number;
    slug: string;
}

interface SponsoredSectionProps {
    title: string;
}

interface BlogData {
    banner_image?: string;
    title?: string;
    summary?: string;
    publication_date?: string;
    slug?: string;
}

const SponsoredBlogCard: React.FC<SponsoredBlogCardProps> = ({
    image,
    title,
    description,
    timeAgo,
    index = 0,
    slug
}) => {
    return (
        <motion.a
            href={`/blogs/${slug}`}
            className="flex flex-col gap-4 cursor-pointer"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1 * (index % 3) }}
            whileHover={{ y: -5 }}
        >
            <div className="rounded-2xl overflow-hidden relative aspect-[384/256]">
                <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-lg text-[#2E134D] line-clamp-2">
                        {title}
                    </h3>
                    <p className="text-sm text-neutral-500 line-clamp-3 md:text-base">
                        {description}
                    </p>
                </div>
                <span className="text-xs text-neutral-500 md:text-sm font-medium">
                    {timeAgo}
                </span>
            </div>
        </motion.a>
    );
};

export const SponsoredSection: React.FC<SponsoredSectionProps> = ({
    title,
}) => {
    const { data, isPending } = useQuery({
        queryKey: ["sponsored-blogs-section"],
        queryFn: () => getBlogsPublicList({ page: 1, length: 3 }),
    });

    const formatDate = (dateString?: string): string => {
        if (!dateString) return "Recently";
        try {
            return formatDistanceToNow(new Date(dateString), { addSuffix: true });
        } catch {
            return "Recently";
        }
    };

    const getSponsoredBlogCardData = (blog: BlogData, index: number) => ({
        image: {
            src: blog?.banner_image || "/placeholder-image.jpg",
            alt: blog?.title || `Blog post ${index + 1}`,
        },
        title: blog?.title || "Untitled post",
        description: blog?.summary || "No description available",
        timeAgo: blog?.publication_date ? formatDate(blog.publication_date) : "Recently",
        slug: blog?.slug || "",
    });

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
        <div className="py-8 md:py-16 lg:py-24 px-4 md:px-8">
            <div className="max-w-screen-2xl gap-16 mx-auto w-full flex flex-col">
                <motion.h2
                    className="font-medium text-center text-[#2E134D] text-xl md:text-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    {title}
                </motion.h2>
                <div className="flex flex-col md:flex-row gap-8">
                    {isPending ? (
                        <div className="flex w-full justify-center items-center min-h-[600px]">
                            <p className="text-lg md:text-2xl text-neutral-500">Loading...</p>
                        </div>
                    ) : data?.data?.length ? (
                        <motion.div
                            className="grid grid-cols-1 w-full lg:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {data.data.map((blog, index) => (
                                <SponsoredBlogCard key={index} {...getSponsoredBlogCardData(blog, index)} index={index} />
                            ))}
                        </motion.div>
                    ) : (
                        <div className="flex w-full justify-center items-center min-h-[600px]">
                            <p className="text-lg md:text-2xl text-neutral-500">No sponsored blogs found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

