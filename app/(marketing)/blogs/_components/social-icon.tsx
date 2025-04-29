import Image from "next/image"
import Link from "next/link"

interface SocialIconProps {
  icon: string
  href: string
  label?: string
}

export const SocialIcon = ({ icon, href, label }: SocialIconProps) => {
  return (
    <Link
      href={href}
      aria-label={label || `Social link to ${href}`}
      className="group flex justify-center items-center bg-white hover:scale-105 rounded-full w-9 md:w-10 h-9 md:h-10 shadow-md transition-all duration-300"
    >
      <Image
        src={icon}
        alt={`${label || icon} icon`}
        width={20}
        height={20}
        className="w-4 md:w-5 h-4 md:h-5 object-contain transition-all duration-300"
      />
    </Link>
  )
} 