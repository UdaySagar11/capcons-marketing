import { Badge } from "@/components/ui/badge";

interface BlogChipProps {
  label: string;
  className?: string;
}

export const BlogChip = ({ label, className = "" }: BlogChipProps) => {
  return (
    <Badge
      className={`bg-[#F2EDED99] px-4 py-1 font-medium text-[#2E134D] text-sm rounded-full ${className}`}
    >
      {label}
    </Badge>
  );
}; 