import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { BlogChip } from "./blog-chip";

export interface BlogCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  author: string;
  shares: string;
  slug: string;
  isNew?: boolean;
  author_image: string;
  publication_date: string;
  description?: string;
}

export const BlogCard = ({
  image,
  title,
  category,
  author_image,
  author,
  publication_date,
  shares,
  slug,
  id,
  description,
}: BlogCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link
        href={`/blogs/${slug || id}`}
        className="bg-[#F9F9F9] shadow-sm rounded-2xl overflow-hidden block"
      >
        <div className="group">
          <div className="relative aspect-[400/250] mb-4 rounded-xl overflow-hidden">
            <Image
              src={image || "/placeholder-image.png"}
              alt={title}
              fill
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              {category && (
                <BlogChip label={category} />
              )}
            </div>
          </div>

          <div className="px-4 pb-4">
            <h3 className="mb-2 font-semibold text-lg md:text-xl text-black">
              {title}
            </h3>

            <div className="flex justify-between items-center gap-2 mb-4 ">
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage src={author_image} alt={author} />
                  <AvatarFallback>{author?.[0] ?? "A"}</AvatarFallback>
                </Avatar>
                <span className="text-neutral-600 text-sm">{author}</span>
                <span className="text-neutral-400 text-sm">•</span>
                <span className="text-neutral-400 text-sm">{format(new Date(publication_date), "MMMM d, yyyy")}</span>
              </div>

              <span className="flex items-center gap-1 text-gray-400 text-sm">
                <Icons.share className="w-4 h-4" />
                {shares}
              </span>
            </div>

            {description && (
              <p className="text-neutral-400 text-sm line-clamp-2">
                {description}
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
