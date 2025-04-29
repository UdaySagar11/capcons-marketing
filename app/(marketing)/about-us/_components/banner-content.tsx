import Image from "next/image"

export const BannerContent = () => (
  <div className="flex items-center gap-10 md:gap-16 px-10 md:px-20">
    <span className="font-extrabold text-2xl md:text-4xl">CONNECTIONS</span>
    <Image
      alt="Star"
      height={40}
      src="/star.svg"
      width={40}
    />
    <span className="font-extrabold text-2xl md:text-4xl">CREATORS</span>
    <Image
      alt="Star"
      height={40}
      src="/star.svg"
      width={40}
    />
    <span className="font-extrabold text-2xl md:text-4xl">COLLABORATION</span>
    <Image
      alt="Star"
      height={40}
      src="/star.svg"
      width={40}
    />
  </div>
) 