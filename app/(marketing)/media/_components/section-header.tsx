import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-8",
        className
      )}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[#2E134D] text-center">
        {title}
      </h2>
    </div>
  );
}; 